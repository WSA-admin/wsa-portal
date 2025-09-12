import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  const logout = async () => {
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

  const redirectToLogin = (error?: string) => {
    const params = error ? `?error=${encodeURIComponent(error)}` : '';
    router.push(`/auth/login${params}`);
  };

  return {
    logout,
    redirectToLogin,
  };
}