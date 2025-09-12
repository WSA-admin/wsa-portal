# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application (requires environment variables)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Currently no tests configured (exits with code 0)

## Project Architecture

This is a Next.js 15 application (App Router) built as a secure portal for WorkSource Alliance, featuring Microsoft Azure AD authentication and SharePoint integration.

### Core Components

**Authentication Flow:**
- `/` - Redirects to `/login` (configured in vercel.json)  
- `/login` - PKCE OAuth flow initiation with Microsoft Azure AD
- `/api/auth/callback` - OAuth callback handler for token exchange
- `/api/auth/logout` - Session cleanup and Azure AD logout
- `/dashboard` - Protected main application interface

**Authentication Architecture:**
- Server-side session management using `iron-session`
- MSAL (Microsoft Authentication Library) for Azure AD integration
- PKCE flow for secure authentication in SPA context
- Token management with refresh capability in `src/lib/msalServer.ts`

**Microsoft Graph Integration:**
- User profile data retrieval (`/api/graph/me`)
- SharePoint news integration (`/api/graph/news`)
- Centralized Graph client in `src/lib/graphClient.ts`
- SharePoint utilities in `src/lib/sharepoint.ts`

### Key Configuration

**Environment Variables (see .env.example):**
- Azure AD tenant and client configuration
- SharePoint site URLs and list IDs
- Session secrets and base URLs
- Supports both client secret and certificate authentication

**Build Configuration:**
- TypeScript strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- Vercel deployment ready with security headers
- Environment variable validation prevents build failures

**Security Features:**
- Comprehensive security headers in `vercel.json`
- Session-based authentication with secure cookies
- PKCE implementation for OAuth security
- Runtime environment variable validation

### Development Notes

The application uses a hybrid authentication approach:
- Client-side PKCE generation for security
- Server-side token exchange and session management
- Environment-aware configuration for build compatibility
- Graceful fallbacks when environment variables are missing during build

When working with authentication flows, note that the codebase handles both development and production scenarios with appropriate placeholder values during build time.

## WorkSource Alliance Brand Guidelines

### Brand Colors
Use the official WorkSource Alliance color palette consistently across all components:

- **Blue (Primary):** `#2592D0` (RGB: 37, 146, 208)
- **Purple:** `#702083` (RGB: 112, 32, 131) 
- **Navy:** `#012E55` (RGB: 1, 46, 85)
- **Gold:** `#FBBB02` (RGB: 251, 187, 2)
- **Orange:** `#EF7B02` (RGB: 239, 123, 2)

Available shades: 30%, 50%, 70% variants of each color are acceptable.

### Typography
- **Primary Typeface:** Lexend (Google Fonts)
- **Headline Font:** Lexend Bold
- **Available Weights:** Thin, Extra Light, Light, Regular, Medium, Semi Bold, Bold, Extra Bold, Black

### Logo Usage
- **Minimum Height:** 35px for digital applications
- **Clear Space:** Half of logo height as exclusion zone on all sides
- Use full-color logo when possible; fall back to single-color (black/white) when necessary
- Never obstruct or modify the logo proportions

**Available Logo Files (in `/public/logos/`):**
- **Full Logo with Gradient:** `WorkSource Alliance Logo-gradient.png` (primary choice)
- **Full Logo Variations:** Available in black, blue, white, and gradient versions
- **Icon Only:** `WorkSource Alliance ICON-gradient.png` (for headers/small spaces)
- **Icon Variations:** Available in black, blue, white, and gradient versions
- **Special Use:** `WorkSource Alliance Logo-Colour Icon WHITE TEXT.png` for dark backgrounds

### Brand Application Guidelines
- Focus on clean white space balanced with bold primary brand colors
- Avoid gradients and excessive visual treatments
- Apply primary brand color overlays to images when possible
- Ensure sufficient contrast between text and backgrounds
- Mix WorkSource Alliance colors appropriately in text and backgrounds