import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForTokens, saveSession, storeTokens } from '@/lib/msalServer';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  // Handle errors from Azure AD
  if (error) {
    console.error('OAuth error:', error, errorDescription);
    return NextResponse.redirect(
      new URL(`/auth/login?error=${encodeURIComponent(error)}`, request.url)
    );
  }

  // Validate required parameters
  if (!code || !state) {
    console.error('Missing required parameters:', { code: !!code, state: !!state });
    return NextResponse.redirect(
      new URL('/auth/login?error=invalid_request', request.url)
    );
  }

  try {
    // Get code verifier from state (in production, store this securely)
    // For now, we'll expect it to be passed in the state parameter
    const stateData = JSON.parse(decodeURIComponent(state));
    const codeVerifier = stateData.codeVerifier;
    
    if (!codeVerifier) {
      throw new Error('Code verifier not found in state');
    }

    // Exchange authorization code for tokens
    const tokenResponse = await exchangeCodeForTokens(code, codeVerifier);
    
    console.log('Token exchange result:', {
      hasAccessToken: !!tokenResponse.accessToken,
      hasIdToken: !!tokenResponse.idToken,
      hasAccount: !!tokenResponse.account,
      expiresOn: tokenResponse.expiresOn?.toISOString()
    });
    
    if (!tokenResponse.accessToken) {
      throw new Error('No access token received');
    }

    // Extract account information
    const account = tokenResponse.account;
    if (!account) {
      throw new Error('No account information received');
    }

    // Generate session ID for server-side token storage
    const sessionId = crypto.randomUUID();
    console.log('Generated sessionId:', sessionId);

    // Store tokens server-side
    storeTokens(sessionId, {
      accessToken: tokenResponse.accessToken,
      idToken: tokenResponse.idToken,
      expiresAt: tokenResponse.expiresOn ? tokenResponse.expiresOn.getTime() : undefined,
    });

    console.log('Token exchange successful. Access token stored.');

    // Save session data (tokens stored server-side due to size limits)
    const sessionData = {
      sessionId,
      account: {
        homeAccountId: account.homeAccountId,
        environment: account.environment,
        tenantId: account.tenantId,
        username: account.username,
        localAccountId: account.localAccountId,
        name: account.name,
      },
      isLoggedIn: true,
    };
    
    console.log('Saving session data:', {
      sessionId: sessionData.sessionId,
      username: sessionData.account.username,
      isLoggedIn: sessionData.isLoggedIn
    });
    
    await saveSession(sessionData);

    // Redirect to dashboard after successful authentication
    return NextResponse.redirect(new URL('/dashboard', request.url));
    
  } catch (error) {
    console.error('Token exchange error:', error);
    return NextResponse.redirect(
      new URL('/auth/login?error=token_exchange_failed', request.url)
    );
  }
}

export async function POST(_request: NextRequest) {
  // POST method not supported for this endpoint
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
