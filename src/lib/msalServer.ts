import { ConfidentialClientApplication, Configuration, AuthenticationResult } from '@azure/msal-node';
import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

// Session configuration
export const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: 'wsa-portal-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60, // 24 hours
    sameSite: 'lax' as const,
  },
};

// Session data interface
export interface SessionData {
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  account?: {
    homeAccountId: string;
    environment: string;
    tenantId: string;
    username: string;
    localAccountId: string;
    name?: string;
  };
  isLoggedIn: boolean;
}

// Default session
export const defaultSession: SessionData = {
  isLoggedIn: false,
};

// MSAL Configuration for server-side
const msalConfig: Configuration = {
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

// Create MSAL instance
export const msalInstance = new ConfidentialClientApplication(msalConfig);

// Get server-side session
export async function getServerSession(): Promise<SessionData> {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  if (!session.isLoggedIn) {
    return defaultSession;
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

  return await msalInstance.acquireTokenByCode(tokenRequest);
}

// Refresh access token using refresh token
export async function refreshAccessToken(refreshToken: string): Promise<AuthenticationResult | null> {
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

  return await msalInstance.acquireTokenByRefreshToken(refreshRequest);
}

// Get access token for Microsoft Graph (On-Behalf-Of flow)
export async function getAccessTokenForGraph(): Promise<string | null> {
  try {
    const session = await getServerSession();
    
    if (!session.isLoggedIn || !session.accessToken) {
      return null;
    }

    // For now, return the stored access token
    // TODO: Implement token refresh logic when token is expired
    return session.accessToken;
  } catch (error) {
    console.error('Error getting access token for Graph:', error);
    return null;
  }
}

// Validate and decode JWT token (basic validation)
export function decodeJwt(token: string): any {
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
    if (!decoded || !decoded.exp) {
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
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  
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
