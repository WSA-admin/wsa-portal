import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForTokens, saveSession } from '@/lib/msalServer';

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
      new URL(`/login?error=${encodeURIComponent(error)}`, request.url)
    );
  }

  // Validate required parameters
  if (!code || !state) {
    console.error('Missing required parameters:', { code: !!code, state: !!state });
    return NextResponse.redirect(
      new URL('/login?error=invalid_request', request.url)
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
    
    if (!tokenResponse.accessToken) {
      throw new Error('No access token received');
    }

    // Extract account information
    const account = tokenResponse.account;
    if (!account) {
      throw new Error('No account information received');
    }

    // Save session data
    await saveSession({
      accessToken: tokenResponse.accessToken,
      idToken: tokenResponse.idToken,
      account: {
        homeAccountId: account.homeAccountId,
        environment: account.environment,
        tenantId: account.tenantId,
        username: account.username,
        localAccountId: account.localAccountId,
        name: account.name,
      },
      isLoggedIn: true,
    });

    // Redirect to dashboard after successful authentication
    return NextResponse.redirect(new URL('/dashboard', request.url));
    
  } catch (error) {
    console.error('Token exchange error:', error);
    return NextResponse.redirect(
      new URL('/login?error=token_exchange_failed', request.url)
    );
  }
}

export async function POST(request: NextRequest) {
  // POST method not supported for this endpoint
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
