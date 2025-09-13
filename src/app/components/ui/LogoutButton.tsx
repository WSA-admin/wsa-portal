"use client";

import { useState } from "react";
import Button from "./Button";

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        // Redirect to Microsoft logout URL which will then redirect back to our login page
        if (data.logoutUrl) {
          window.location.href = data.logoutUrl;
        } else {
          // Fallback: redirect directly to login page
          window.location.href = '/auth/login?logged_out=true';
        }
      } else {
        console.error('Logout failed');
        // Still redirect to login page even if logout API fails
        window.location.href = '/auth/login?error=logout_failed';
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Fallback: redirect to login page
      window.location.href = '/auth/login?error=logout_failed';
    }
    
    // Note: setIsLoggingOut(false) is not needed since we redirect away
  };

  return (
    <Button 
      onClick={handleLogout} 
      disabled={isLoggingOut}
      variant="outline"
      size="sm"
    >
      {isLoggingOut ? 'Logging out...' : 'Logout'}
    </Button>
  );
}
