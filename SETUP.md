# WSA Portal - Setup & Testing Guide

## 🚀 Quick Start Testing

This guide will help you set up the authentication pipeline and test the WSA Portal.

## 📋 Prerequisites

### 1. Azure AD Setup
1. **Create Azure AD App Registration**
   - Go to [Azure Portal](https://portal.azure.com) → Azure Active Directory → App registrations
   - Click "New registration"
   - Name: `WorkSource Alliance Portal`
   - Supported account types: `Single tenant`
   - Redirect URI: `Web` → `https://your-domain.com/api/auth/callback`

2. **Configure Authentication**
   ```
   Platform configurations:
   - Type: Web
   - Redirect URIs: 
     * https://portal.worksourcealliance.ca/api/auth/callback (production)
     * https://your-preview-url.vercel.app/api/auth/callback (preview)
     * http://localhost:3000/api/auth/callback (development)
   ```

3. **API Permissions**
   ```
   Microsoft Graph (Delegated):
   - openid
   - offline_access  
   - User.Read
   - Sites.Read.All
   - Files.ReadWrite.All
   
   Microsoft Graph (Application):
   - Sites.Selected (for specific SharePoint sites)
   ```

4. **Certificates & Secrets**
   - Create a client secret (recommended: use certificate in production)
   - Copy the secret value immediately

### 2. Environment Variables

Create `.env.local` in your project root:

```bash
# Copy from .env.example and fill in your values

# Base URLs
BASE_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Azure AD Configuration  
NEXT_PUBLIC_AAD_TENANT_ID=your-tenant-id-here
NEXT_PUBLIC_AAD_CLIENT_ID=your-client-id-here
AAD_TENANT_ID=your-tenant-id-here
AAD_CLIENT_ID=your-client-id-here
AAD_CLIENT_SECRET=your-client-secret-here

# SharePoint (for later testing)
SP_SITE_URL=https://worksourcealliance.sharepoint.com/sites/WSAPortal
SP_SITE_ID=to-be-resolved
SP_NEWS_LIST_ID=to-be-created
SP_EVENTS_LIST_ID=to-be-created  
SP_ASSETS_DRIVE_ID=to-be-resolved

# Session Security
SESSION_SECRET=generate-a-secure-32-character-random-string-here
```

## 🧪 Local Testing

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Test Authentication Flow
1. Open http://localhost:3000
2. Should redirect to `/login`
3. Click "Sign in with Microsoft"
4. Complete Microsoft OAuth flow
5. Should redirect to `/dashboard` with your profile info

### 4. Run Tests
```bash
# Install Playwright browsers
npx playwright install

# Run E2E tests
npx playwright test

# Run specific test
npx playwright test tests/auth.spec.ts
```

## 🚢 Deployment Setup

### 1. Vercel Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Link project
vercel link

# Set up environment variables
vercel env add BASE_URL production
vercel env add NEXT_PUBLIC_BASE_URL production
# ... add all environment variables
```

### 2. GitHub Repository Setup
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: WSA Portal with authentication"

# Add GitHub remote
git remote add origin https://github.com/WSA-admin/wsa-portal.git
git push -u origin main
```

### 3. GitHub Secrets Configuration

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

#### Vercel Deployment Secrets
```bash
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-vercel-org-id  
VERCEL_PROJECT_ID=your-vercel-project-id
```

#### Application Environment Secrets
```bash
# Base URLs
BASE_URL=https://portal.worksourcealliance.ca
NEXT_PUBLIC_BASE_URL=https://portal.worksourcealliance.ca
PREVIEW_BASE_URL=https://your-preview-url.vercel.app

# Azure AD
AAD_TENANT_ID=your-tenant-id
AAD_CLIENT_ID=your-client-id
AAD_CLIENT_SECRET=your-client-secret
NEXT_PUBLIC_AAD_TENANT_ID=your-tenant-id
NEXT_PUBLIC_AAD_CLIENT_ID=your-client-id

# SharePoint (add these later)
SP_SITE_URL=https://worksourcealliance.sharepoint.com/sites/WSAPortal
SP_SITE_ID=your-site-id
SP_NEWS_LIST_ID=your-news-list-id
SP_EVENTS_LIST_ID=your-events-list-id
SP_ASSETS_DRIVE_ID=your-drive-id

# Security
SESSION_SECRET=your-secure-32-char-session-secret
```

## 🔍 Testing Checklist

### Authentication Tests
- [ ] Root page redirects to login
- [ ] Login page displays correctly
- [ ] Microsoft OAuth flow initiates
- [ ] Dashboard shows after successful auth
- [ ] User profile information displays
- [ ] Logout redirects to login with success message
- [ ] Protected routes redirect unauthenticated users

### CI/CD Pipeline Tests  
- [ ] Build completes without errors
- [ ] TypeScript type checking passes
- [ ] Linting passes
- [ ] Security audit passes
- [ ] Deployment to Vercel succeeds
- [ ] E2E tests run on deployed version
- [ ] Preview deployments work for PRs

### Security Tests
- [ ] HTTPS enforced in production
- [ ] Security headers present
- [ ] Session cookies are HttpOnly
- [ ] PKCE flow implemented correctly
- [ ] Tokens stored securely server-side
- [ ] No secrets exposed client-side

## 🐛 Troubleshooting

### Common Issues

**"Missing environment variables" error:**
```bash
# Check your .env.local file exists and has all required variables
cat .env.local
```

**"Invalid client" error during OAuth:**
- Verify your `AAD_CLIENT_ID` matches the Azure AD app registration
- Check the redirect URI in Azure AD matches your deployed URL

**"Token exchange failed" error:**
- Verify `AAD_CLIENT_SECRET` is correct and hasn't expired
- Check the Azure AD app has proper API permissions

**Build fails in CI/CD:**
```bash
# Check GitHub secrets are properly set
# Verify no syntax errors in TypeScript
npm run type-check
```

**Tests fail:**
```bash
# Run tests locally first
npx playwright test --headed --debug

# Check if application is running
curl http://localhost:3000/login
```

## 📊 Monitoring & Verification

### Health Check Endpoints
- `GET /login` - Should load login page
- `GET /api/auth/callback` - Should handle OAuth callbacks
- `GET /dashboard` - Should redirect to login if unauthenticated

### Production Verification
1. Visit https://portal.worksourcealliance.ca
2. Complete full authentication flow
3. Verify dashboard displays user information
4. Test logout functionality
5. Check browser dev tools for errors

## 🔄 Next Steps After Authentication Works

1. **SharePoint Setup**
   - Create SharePoint site
   - Set up News and Events lists
   - Configure Sites.Selected permissions

2. **Feature Development**
   - Add news management
   - Add file upload/management
   - Add user administration

3. **Security Enhancements**
   - Implement Conditional Access policies
   - Add Purview data classification
   - Set up DLP policies

## 📞 Support

If you encounter issues:

1. **Check the logs**
   - Browser developer console
   - Vercel function logs
   - GitHub Actions logs

2. **Common fixes**
   - Clear browser cache
   - Regenerate client secret
   - Update redirect URIs
   - Verify environment variables

3. **Contact**
   - Developer: info@worksourcealliance.ca
   - Create GitHub issue for bugs

---

## 🎯 Success Criteria

Authentication pipeline is working when:
- ✅ Login page loads without errors
- ✅ Microsoft OAuth flow completes successfully  
- ✅ Dashboard displays user profile information
- ✅ Logout redirects properly
- ✅ CI/CD pipeline deploys without errors
- ✅ E2E tests pass in production
- ✅ Security headers are present
- ✅ No console errors in browser

**Ready to proceed with SharePoint integration and feature development!** 🚀
