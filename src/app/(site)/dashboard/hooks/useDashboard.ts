import { useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';

export function useDashboard() {
  const { logout, redirectToLogin } = useAuth();
  
  const handleUnauthorized = useCallback(() => {
    redirectToLogin();
  }, [redirectToLogin]);
  
  const handleError = useCallback((errorMessage: string) => {
    console.error('Dashboard user fetch error:', errorMessage);
  }, []);
  
  const { user, loading, error } = useUser({
    onUnauthorized: handleUnauthorized,
    onError: handleError,
  });

  return {
    user,
    loading,
    error,
    handleLogout: logout,
  };
}