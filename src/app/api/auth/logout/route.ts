import { NextRequest, NextResponse } from 'next/server';
import { clearSession, getServerSession, clearTokens } from '@/lib/msalServer';

export async function POST() {
  try {
    // Get session to retrieve sessionId before clearing
    const session = await getServerSession();
    if (session.sessionId) {
      clearTokens(session.sessionId);
    }
    
    // Clear the server-side session
    await clearSession();
    
    // Construct Microsoft logout URL to clear Azure AD session
    const tenantId = process.env.AAD_TENANT_ID;
    const clientId = process.env.AAD_CLIENT_ID;
    const postLogoutRedirectUri = `${process.env.BASE_URL}/auth/login?logged_out=true`;
    
    const logoutUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout?` +
      `client_id=${clientId}&` +
      `post_logout_redirect_uri=${encodeURIComponent(postLogoutRedirectUri)}`;

    return NextResponse.json({ 
      success: true,
      logoutUrl: logoutUrl
    });
    
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // GET method - redirect to logout
  try {
    // Get session to retrieve sessionId before clearing
    const session = await getServerSession();
    if (session.sessionId) {
      clearTokens(session.sessionId);
    }
    
    await clearSession();
    
    const tenantId = process.env.AAD_TENANT_ID;
    const clientId = process.env.AAD_CLIENT_ID;
    const postLogoutRedirectUri = `${process.env.BASE_URL}/auth/login?logged_out=true`;
    
    const logoutUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout?` +
      `client_id=${clientId}&` +
      `post_logout_redirect_uri=${encodeURIComponent(postLogoutRedirectUri)}`;

    return NextResponse.redirect(logoutUrl);
    
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.redirect(new URL('/auth/login?error=logout_failed', request.url));
  }
}
