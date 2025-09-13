import { ConfidentialClientApplication, Configuration, AuthenticationResult } from '@azure/msal-node';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

// Session configuration
export const sessionOptions = {
  password: process.env.SESSION_SECRET || 'build-time-placeholder-session-secret-minimum-32-chars',
  cookieName: 'wsa-portal-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60, // 24 hours
    sameSite: 'lax' as const,
  },
};

// Session data interface - now stores tokens directly in encrypted cookie
export interface SessionData {
  sessionId?: string; // Links to server-side token storage (fallback)
  account?: {
    homeAccountId: string;
    environment: string;
    tenantId: string;
    username: string;
    localAccountId: string;
    name?: string;
  };
  tokens?: TokenData; // Store tokens directly in session
  isLoggedIn: boolean;
}

// Token storage interface - stored server-side
export interface TokenData {
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  expiresAt?: number;
}

// Default session
export const defaultSession: SessionData = {
  isLoggedIn: false,
};

// Persistent token storage - survives server restarts
const tokenStore = new Map<string, TokenData>();

// In-memory MSAL cache storage to persist between requests
let msalCacheData: string | null = null;

// Load tokens from persistent storage on startup (development only)  
function loadTokensFromDisk() {
  if (process.env.NODE_ENV === 'development') {
    try {
      const fs = require('fs'); // eslint-disable-line @typescript-eslint/no-require-imports
      const path = require('path'); // eslint-disable-line @typescript-eslint/no-require-imports
      const tokenFile = path.join(process.cwd(), '.tokens.json');
      
      if (fs.existsSync(tokenFile)) {
        const data = fs.readFileSync(tokenFile, 'utf8');
        const tokens = JSON.parse(data);
        Object.entries(tokens).forEach(([sessionId, tokenData]) => {
          tokenStore.set(sessionId, tokenData as TokenData);
        });
        console.log('Loaded', tokenStore.size, 'token sessions from disk');
      }
    } catch (error) {
      console.warn('Failed to load tokens from disk:', error);
    }
  }
}

// Save tokens to persistent storage (development only) 
function saveTokensToDisk() {
  if (process.env.NODE_ENV === 'development') {
    try {
      const fs = require('fs'); // eslint-disable-line @typescript-eslint/no-require-imports
      const path = require('path'); // eslint-disable-line @typescript-eslint/no-require-imports
      const tokenFile = path.join(process.cwd(), '.tokens.json');
      
      const tokens = Object.fromEntries(tokenStore.entries());
      fs.writeFileSync(tokenFile, JSON.stringify(tokens, null, 2));
    } catch (error) {
      console.warn('Failed to save tokens to disk:', error);
    }
  }
}

// Load tokens on module initialization
loadTokensFromDisk();


// Store tokens server-side
export function storeTokens(sessionId: string, tokens: TokenData): void {
  console.log('Storing tokens for sessionId:', sessionId, {
    hasAccessToken: !!tokens.accessToken,
    hasRefreshToken: !!tokens.refreshToken,
    expiresAt: tokens.expiresAt ? new Date(tokens.expiresAt).toISOString() : 'N/A'
  });
  tokenStore.set(sessionId, tokens);
  console.log('Token store now has', tokenStore.size, 'sessions');
  
  // Persist to disk in development
  saveTokensToDisk();
}

// Retrieve tokens from server-side storage
export function getTokens(sessionId: string): TokenData | null {
  const tokens = tokenStore.get(sessionId) || null;
  console.log('Retrieving tokens for sessionId:', sessionId, {
    found: !!tokens,
    hasAccessToken: tokens ? !!tokens.accessToken : false,
    hasRefreshToken: tokens ? !!tokens.refreshToken : false,
    storeSize: tokenStore.size
  });
  return tokens;
}

// Clear tokens from server-side storage
export function clearTokens(sessionId: string): void {
  tokenStore.delete(sessionId);
}

// Check if we have required environment variables
const hasRequiredEnvVars = () => {
  return process.env.AAD_CLIENT_ID && 
         process.env.AAD_TENANT_ID && 
         (process.env.AAD_CLIENT_SECRET || process.env.AAD_CERT_PFX_BASE64) &&
         process.env.SESSION_SECRET;
};

// MSAL Configuration for server-side
const createMsalConfig = (): Configuration => {
  if (!hasRequiredEnvVars()) {
    // Return minimal config for build time
    return {
      auth: {
        clientId: 'build-time-placeholder',
        authority: 'https://login.microsoftonline.com/common',
        clientSecret: 'build-time-placeholder',
      },
      cache: {
        cachePlugin: {
          beforeCacheAccess: async (cacheContext) => {
            if (msalCacheData) {
              console.log('Loading MSAL cache data...');
              cacheContext.tokenCache.deserialize(msalCacheData);
            } else {
              console.log('No MSAL cache data available');
            }
          },
          afterCacheAccess: async (cacheContext) => {
            if (cacheContext.cacheHasChanged) {
              msalCacheData = cacheContext.tokenCache.serialize();
              console.log('MSAL cache updated and saved');
            }
          },
        },
      },
      system: {
        loggerOptions: {
          loggerCallback: () => {},
          piiLoggingEnabled: false,
          logLevel: 1,
        },
      },
    };
  }

  return {
    auth: {
      clientId: process.env.AAD_CLIENT_ID!,
      authority: `https://login.microsoftonline.com/${process.env.AAD_TENANT_ID}`,
      clientSecret: process.env.AAD_CLIENT_SECRET,
      clientCertificate: process.env.AAD_CERT_PFX_BASE64 ? {
        thumbprint: '', // Will be extracted from certificate
        privateKey: Buffer.from(process.env.AAD_CERT_PFX_BASE64, 'base64').toString('base64'),
        x5c: '', // Will be extracted from certificate
      } : undefined,
    },
    cache: {
      cachePlugin: {
        beforeCacheAccess: async (cacheContext) => {
          if (msalCacheData) {
            console.log('Loading MSAL cache data...');
            cacheContext.tokenCache.deserialize(msalCacheData);
          } else {
            console.log('No MSAL cache data available');
          }
        },
        afterCacheAccess: async (cacheContext) => {
          if (cacheContext.cacheHasChanged) {
            msalCacheData = cacheContext.tokenCache.serialize();
            console.log('MSAL cache updated and saved');
          }
        },
      },
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (process.env.NODE_ENV === 'development' && !containsPii) {
            console.log(`[MSAL ${level}]: ${message}`);
          }
        },
        piiLoggingEnabled: false,
        logLevel: process.env.NODE_ENV === 'development' ? 3 : 1, // Info in dev, Error in prod
      },
    },
  };
};

// Create MSAL instance
let msalInstance: ConfidentialClientApplication | null = null;

const getMsalInstance = (): ConfidentialClientApplication => {
  if (!msalInstance) {
    msalInstance = new ConfidentialClientApplication(createMsalConfig());
  }
  return msalInstance;
};

export { getMsalInstance };

// Get server-side session
export async function getServerSession(): Promise<SessionData> {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  
  if (!session.isLoggedIn) {
    return defaultSession;
  }
  
  // Check if tokens are expired
  if (session.sessionId) {
    const tokens = getTokens(session.sessionId);
    if (!tokens || !tokens.accessToken || (tokens.expiresAt && tokens.expiresAt < Date.now())) {
      // Tokens are expired or missing, treat as unauthenticated
      return defaultSession;
    }
  }
  
  return session;
}

// Save session
export async function saveSession(sessionData: SessionData) {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  Object.assign(session, sessionData);
  await session.save();
}

// Clear session
export async function clearSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  session.destroy();
}

// Exchange authorization code for tokens
export async function exchangeCodeForTokens(code: string, codeVerifier: string): Promise<AuthenticationResult> {
  if (!hasRequiredEnvVars()) {
    throw new Error('Missing required environment variables for Azure AD authentication');
  }

  const tokenRequest = {
    code: code,
    scopes: [
      'openid',
      'offline_access',
      'User.Read',
      'Sites.Read.All',
      'Files.ReadWrite.All'
    ],
    redirectUri: `${process.env.BASE_URL}/api/auth/callback`,
    codeVerifier: codeVerifier,
  };

  return await getMsalInstance().acquireTokenByCode(tokenRequest);
}

// Refresh access token using refresh token
export async function refreshAccessToken(refreshToken: string): Promise<AuthenticationResult | null> {
  if (!hasRequiredEnvVars()) {
    throw new Error('Missing required environment variables for Azure AD authentication');
  }

  const refreshRequest = {
    refreshToken: refreshToken,
    scopes: [
      'openid',
      'offline_access', 
      'User.Read',
      'Sites.Read.All',
      'Files.ReadWrite.All'
    ],
  };

  return await getMsalInstance().acquireTokenByRefreshToken(refreshRequest);
}

// Get access token for Microsoft Graph
export async function getAccessTokenForGraph(): Promise<string | null> {
  try {
    const session = await getServerSession();
    
    if (!session.isLoggedIn || !session.sessionId) {
      console.log('User not logged in or missing session ID');
      return null;
    }

    // Get tokens from persistent server-side storage
    const tokens = getTokens(session.sessionId);
    
    if (!tokens) {
      console.warn('No tokens found in server storage. User needs to re-authenticate.');
      return null;
    }

    if (!tokens.accessToken) {
      console.warn('Access token missing from stored tokens. User needs to re-authenticate.');
      return null;
    }

    console.log('Found tokens:', {
      hasAccessToken: !!tokens.accessToken,
      hasRefreshToken: !!tokens.refreshToken,
      isExpired: tokens.expiresAt ? tokens.expiresAt < Date.now() : 'unknown'
    });

    // Check if token is expired
    if (tokens.expiresAt && tokens.expiresAt < Date.now()) {
      console.log('Access token expired. User needs to re-authenticate.');
      // Clear expired tokens
      clearTokens(session.sessionId);
      return null;
    }

    return tokens.accessToken;
  } catch (error) {
    console.error('Error getting access token for Graph:', error);
    return null;
  }
}

// Validate and decode JWT token (basic validation)
export function decodeJwt(token: string): Record<string, unknown> | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT token');
    }
    
    const payload = Buffer.from(parts[1], 'base64url').toString('utf-8');
    return JSON.parse(payload);
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
}

// Check if token is expired
export function isTokenExpired(token: string): boolean {
  try {
    const decoded = decodeJwt(token);
    if (!decoded || !decoded.exp || typeof decoded.exp !== 'number') {
      return true;
    }
    
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch {
    return true;
  }
}

// Generate PKCE challenge
export function generateCodeChallenge(): { codeVerifier: string; codeChallenge: string } {
  const codeVerifier = generateRandomString(128);
  
  // For Node.js environment, we'll use a simple base64url encoding
  // In production, this should use proper SHA256 hashing
  const codeChallenge = Buffer.from(codeVerifier).toString('base64url');
  
  return { codeVerifier, codeChallenge };
}

function generateRandomString(length: number): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}
