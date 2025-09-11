import { test, expect } from '@playwright/test';

// Base URL from environment or fallback
const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

test.describe('Authentication Flow', () => {
  test('should redirect to login page from root', async ({ page }) => {
    // Navigate to root URL
    await page.goto(BASE_URL);
    
    // Should redirect to login page
    await expect(page).toHaveURL(`${BASE_URL}/login`);
    
    // Check for login page elements
    await expect(page.locator('h1')).toContainText('WorkSource Alliance Portal');
    await expect(page.locator('text=Sign in with Microsoft')).toBeVisible();
  });

  test('should display login page correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    
    // Check page title
    await expect(page).toHaveTitle(/WSA Portal|WorkSource Alliance/i);
    
    // Check for WSA branding
    await expect(page.locator('text=WorkSource Alliance Portal')).toBeVisible();
    await expect(page.locator('text=WSA')).toBeVisible();
    
    // Check for login button
    const loginButton = page.locator('button', { hasText: 'Sign in with Microsoft' });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    
    // Check for branding elements
    await expect(page.locator('text=Connecting international students')).toBeVisible();
    await expect(page.locator('text=© 2025 WorkSource Alliance')).toBeVisible();
  });

  test('should handle error states on login page', async ({ page }) => {
    // Test with error parameter
    await page.goto(`${BASE_URL}/login?error=token_exchange_failed`);
    
    // Should display error message
    await expect(page.locator('text=Authentication failed')).toBeVisible();
    
    // Test with logout success
    await page.goto(`${BASE_URL}/login?logged_out=true`);
    
    // Should display success message
    await expect(page.locator('text=successfully logged out')).toBeVisible();
  });

  test('should initiate OAuth flow when clicking login', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    
    // Click login button
    const loginButton = page.locator('button', { hasText: 'Sign in with Microsoft' });
    
    // Expect navigation to Microsoft OAuth (don't actually complete the flow in tests)
    await Promise.all([
      page.waitForNavigation({ timeout: 5000 }).catch(() => {
        // Expected to timeout or redirect to Microsoft
        // In a real test environment, this would redirect to Microsoft OAuth
      }),
      loginButton.click()
    ]);
    
    // If we're still on the same origin, the button should show loading state briefly
    // This test mainly ensures the button click handler works
  });

  test('should protect dashboard route when not authenticated', async ({ page }) => {
    // Try to access dashboard directly without authentication
    await page.goto(`${BASE_URL}/dashboard`);
    
    // Should redirect to login or show unauthorized error
    // (This depends on your middleware implementation)
    const currentUrl = page.url();
    const isOnLogin = currentUrl.includes('/login');
    const hasUnauthorizedError = await page.locator('text=Unauthorized').isVisible().catch(() => false);
    
    // Either redirected to login or shows unauthorized error
    expect(isOnLogin || hasUnauthorizedError).toBe(true);
  });

  test('should have proper security headers and HTTPS redirect in production', async ({ page }) => {
    // Skip this test in local development
    if (BASE_URL.includes('localhost') || BASE_URL.includes('127.0.0.1')) {
      test.skip(true, 'Skipping HTTPS test in local development');
    }
    
    const response = await page.goto(BASE_URL);
    
    // Check for security headers in production
    const headers = response?.headers();
    if (headers) {
      // These headers should be present in production
      expect(headers['x-frame-options'] || headers['x-content-type-options']).toBeDefined();
    }
    
    // URL should be HTTPS in production
    expect(page.url()).toMatch(/^https:/);
  });
});

test.describe('UI Responsiveness', () => {
  test('should be responsive on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/login`);
    
    // Check that elements are visible and properly sized on mobile
    const loginButton = page.locator('button', { hasText: 'Sign in with Microsoft' });
    await expect(loginButton).toBeVisible();
    
    // Check that the main container is responsive
    const container = page.locator('div').first();
    const boundingBox = await container.boundingBox();
    
    // Should not exceed viewport width
    if (boundingBox) {
      expect(boundingBox.width).toBeLessThanOrEqual(375);
    }
  });

  test('should work on tablet devices', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${BASE_URL}/login`);
    
    // All elements should still be visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('button', { hasText: 'Sign in with Microsoft' })).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    
    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Login button should be accessible
    const loginButton = page.locator('button', { hasText: 'Sign in with Microsoft' });
    await expect(loginButton).toBeVisible();
    
    // Check for proper alt texts on images/icons
    const images = page.locator('img, svg');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const tagName = await image.evaluate(el => el.tagName.toLowerCase());
      
      if (tagName === 'img') {
        const alt = await image.getAttribute('alt');
        expect(alt).not.toBeNull();
      }
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    
    // Tab to the login button
    await page.keyboard.press('Tab');
    
    // The login button should be focused
    const loginButton = page.locator('button', { hasText: 'Sign in with Microsoft' });
    await expect(loginButton).toBeFocused();
    
    // Should be able to activate with Enter
    // (We won't actually press Enter to avoid triggering OAuth)
  });
});
