'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

function LoginPageContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const error = searchParams.get('error');
    const loggedOut = searchParams.get('logged_out');
    
    if (error) {
      switch (error) {
        case 'token_exchange_failed':
          setError('Authentication failed. Please try again.');
          break;
        case 'invalid_request':
          setError('Invalid authentication request.');
          break;
        default:
          setError(`Authentication error: ${error}`);
      }
    }
    
    if (loggedOut) {
      // Show success message for logout
      setError(null);
    }
  }, [searchParams]);

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/auth/status');
        if (response.ok) {
          // User is already authenticated, redirect to dashboard
          router.push('/dashboard');
          return;
        }
      } catch {
        // User is not authenticated, continue with login page
        console.log('User not authenticated, showing login page');
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuthStatus();
  }, [router]);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Generate PKCE challenge
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);
      
      // Store code verifier for callback
      const state = encodeURIComponent(JSON.stringify({ codeVerifier }));
      
      // Construct Microsoft login URL
      const tenantId = process.env.NEXT_PUBLIC_AAD_TENANT_ID;
      const clientId = process.env.NEXT_PUBLIC_AAD_CLIENT_ID;
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const redirectUri = `${baseUrl}/api/auth/callback`;
      
      
      const scopes = [
        'openid',
        'offline_access', 
        'User.Read',
        'Sites.Read.All',
        'Files.ReadWrite.All'
      ].join(' ');

      const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?` +
        `client_id=${clientId}&` +
        `response_type=code&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `response_mode=query&` +
        `scope=${encodeURIComponent(scopes)}&` +
        `state=${state}&` +
        `code_challenge=${codeChallenge}&` +
        `code_challenge_method=S256&` +
        `prompt=select_account`;

      // Redirect to Microsoft login
      window.location.href = authUrl;
      
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to initiate login. Please try again.');
      setIsLoading(false);
    }
  };

  // Show loading while checking authentication
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #e6f3fc 0%, #f0e6f7 100%)'}}>
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center">
              <Image 
                src="/logos/WorkSource Alliance Logo-gradient.png" 
                alt="WorkSource Alliance Logo"
                width={200}
                height={64}
                className="h-12 w-auto opacity-75 sm:h-16"
                style={{ minHeight: '35px' }}
              />
            </div>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 mx-auto mb-4" style={{borderBottomColor: '#2592D0'}}></div>
            <p className="text-sm sm:text-base text-gray-600">Checking authentication status...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #e6f3fc 0%, #f0e6f7 100%)'}}>
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
        {/* WSA Logo and Branding */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <Image 
              src="/logos/WorkSource Alliance Logo-gradient.png" 
              alt="WorkSource Alliance Logo"
              width={200}
              height={64}
              className="h-12 w-auto sm:h-16 lg:h-20"
              style={{ minHeight: '35px' }}
            />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            WorkSource Alliance Portal
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-2">
            Connecting international students to Atlantic Canada&apos;s opportunities
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm sm:text-base font-medium">{error}</p>
          </div>
        )}

        {/* Success Message for Logout */}
        {searchParams.get('logged_out') && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm sm:text-base font-medium">You have been successfully logged out.</p>
          </div>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full text-white font-medium py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-colors duration-200 flex items-center justify-center touch-manipulation"
          style={{
            backgroundColor: isLoading ? '#A3C4E0' : '#2592D0',
          }}
          onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#1a7bb8')}
          onMouseLeave={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#2592D0')}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm sm:text-base">Signing in...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
              </svg>
              <span className="text-sm sm:text-base">Sign in with Microsoft</span>
            </>
          )}
        </button>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-600">
          <p>Secure authentication powered by Microsoft Azure AD</p>
          <p className="mt-2">© 2025 WorkSource Alliance. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

// PKCE utility functions
function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64URLEncode(array);
}

async function generateCodeChallenge(verifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64URLEncode(new Uint8Array(digest));
}

function base64URLEncode(array: Uint8Array): string {
  const base64 = btoa(String.fromCharCode(...array));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

// Loading component for Suspense
function LoginLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #e6f3fc 0%, #f0e6f7 100%)'}}>
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex items-center justify-center">
            <Image 
              src="/logos/WorkSource Alliance Logo-gradient.png" 
              alt="WorkSource Alliance Logo"
              width={150}
              height={48}
              className="h-12 w-auto opacity-50 sm:h-16"
            />
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 mx-auto mb-4" style={{borderBottomColor: '#2592D0'}}></div>
          <p className="text-sm sm:text-base text-gray-600">Loading...</p>
        </div>
      </div>
    </div>
  );
}

// Main export with Suspense wrapper
export default function LoginPage() {
  return (
    <Suspense fallback={<LoginLoading />}>
      <LoginPageContent />
    </Suspense>
  );
}
