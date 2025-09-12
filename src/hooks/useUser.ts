import { useEffect, useState, useCallback, useRef } from 'react';

interface UserInfo {
  displayName?: string;
  userPrincipalName?: string;
  mail?: string;
  jobTitle?: string;
  department?: string;
}

interface UseUserOptions {
  onUnauthorized?: () => void;
  onError?: (error: string) => void;
}

export function useUser(options: UseUserOptions = {}) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Use refs to store the latest callback functions to avoid re-renders
  const onUnauthorizedRef = useRef(options.onUnauthorized);
  const onErrorRef = useRef(options.onError);
  
  // Update refs when options change
  useEffect(() => {
    onUnauthorizedRef.current = options.onUnauthorized;
    onErrorRef.current = options.onError;
  }, [options.onUnauthorized, options.onError]);

  const fetchUserInfo = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/graph/me');
      
      if (response.status === 401) {
        // Not authenticated
        onUnauthorizedRef.current?.();
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
      let errorMessage = 'Unknown error';
      
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        errorMessage = 'Network connection error. Please check your internet connection and try again.';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      onErrorRef.current?.(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []); // Remove options dependency to prevent infinite re-renders

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const refetch = useCallback(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return {
    user,
    loading,
    error,
    refetch,
  };
}