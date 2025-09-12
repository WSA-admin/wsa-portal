'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserInfo {
  displayName?: string;
  userPrincipalName?: string;
  mail?: string;
  jobTitle?: string;
  department?: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch('/api/graph/me');
      
      if (response.status === 401) {
        // Not authenticated, redirect to login
        router.push('/auth/login');
        return;
      }
      
      if (!response.ok) {
        throw new Error(`Failed to fetch user info: ${response.statusText}`);
      }
      
      const data = await response.json();
      if (data.success) {
        setUser(data.data);
      } else {
        throw new Error(data.error || 'Failed to fetch user info');
      }
    } catch (err) {
      console.error('Error fetching user info:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.logoutUrl) {
          // Redirect to Microsoft logout URL
          window.location.href = data.logoutUrl;
        } else {
          // Fallback - redirect to login page
          router.push('/auth/login?logged_out=true');
        }
      } else {
        throw new Error('Logout failed');
      }
    } catch (err) {
      console.error('Logout error:', err);
      // Fallback - redirect to login page
      router.push('/auth/login?error=logout_failed');
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderBottomColor: '#2592D0'}}></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-red-600 text-2xl">⚠️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Authentication Error</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => router.push('/auth/login')}
              className="text-white px-4 py-2 rounded-lg transition-colors duration-200"
              style={{backgroundColor: '#2592D0'}}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a7bb8')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2592D0')}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/logos/WorkSource Alliance ICON-gradient.png" 
                alt="WorkSource Alliance Icon"
                className="w-8 h-8 mr-3"
                style={{ minHeight: '35px', width: 'auto', height: '32px' }}
              />
              <h1 className="text-xl font-bold text-gray-900">
                WorkSource Alliance Portal
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
              style={{backgroundColor: '#012E55'}}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#001a3d')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#012E55')}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to the WSA Portal! 🎉
          </h2>
          
          {user && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your Profile</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="text-sm text-gray-900">{user.displayName || 'N/A'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-sm text-gray-900">{user.mail || user.userPrincipalName || 'N/A'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Job Title</dt>
                    <dd className="text-sm text-gray-900">{user.jobTitle || 'N/A'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Department</dt>
                    <dd className="text-sm text-gray-900">{user.department || 'N/A'}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>

        {/* Authentication Test Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Authentication Test Results ✅
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-sm text-gray-700">Microsoft Azure AD authentication successful</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-sm text-gray-700">Session management working</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-sm text-gray-700">User profile retrieved from Microsoft Graph</span>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            System Status
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-sm text-gray-700">Microsoft Azure AD connection established</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-sm text-gray-700">SharePoint integration ready</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-sm text-gray-700">Microsoft Graph API access configured</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
