'use client';

import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WSAPortalDesktop() {
  return (
    <>
      {/* Project Overview */}
      <Section delay={500} animationType="slideLeft" spacing="md">
        <SubHeading>Project Overview</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section spacing="md">
                <Heading level={4} customColor="#FBBB02" className="mb-2">Purpose</Heading>
                <Text variant="small" color="gray" className="mb-4">
                  The WSA Portal serves as a secure internal platform for WorkSource Alliance team members, providing
                  centralized access to documentation, team information, and organizational resources with enterprise-grade security.
                </Text>

                <Heading level={4} customColor="#2592D0" className="mb-2">Current Status</Heading>
                <Section spacing="sm">
                  <Text variant="small"><span className="font-semibold">Status:</span> Active Development</Text>
                  <Text variant="small"><span className="font-semibold">Environment:</span> Development</Text>
                  <Text variant="small"><span className="font-semibold">Repository:</span> WSA-admin/wsa-portal</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" className="mb-2">Key Features</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• 🔐 Azure AD Authentication</Text>
                  <Text variant="small" color="gray">• 📊 SharePoint Integration</Text>
                  <Text variant="small" color="gray">• 📚 Documentation Hub</Text>
                  <Text variant="small" color="gray">• 👥 Team Directory</Text>
                  <Text variant="small" color="gray">• 🎨 Brand Guidelines</Text>
                  <Text variant="small" color="gray">• 📈 Dashboard Analytics</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Technical Architecture */}
      <Section delay={600} animationType="slideRight" spacing="md">
        <SubHeading>Technical Architecture</SubHeading>
        <Section layout="grid" gridCols="1-sm-2" gap="lg">
          <Card variant="gray">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">Frontend Stack</Heading>
              <Section spacing="sm">
                <Text variant="small"><span className="font-semibold">Framework:</span> Next.js 15 with App Router</Text>
                <Text variant="small"><span className="font-semibold">Language:</span> TypeScript (Strict Mode)</Text>
                <Text variant="small"><span className="font-semibold">Styling:</span> Tailwind CSS</Text>
                <Text variant="small"><span className="font-semibold">Components:</span> Custom UI Component Library</Text>
                <Text variant="small"><span className="font-semibold">Typography:</span> Lexend (WSA Brand Font)</Text>
                <Text variant="small"><span className="font-semibold">Deployment:</span> Vercel Platform</Text>
              </Section>
            </Section>
          </Card>

          <Card variant="gray">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">Authentication & Integration</Heading>
              <Section spacing="sm">
                <Text variant="small"><span className="font-semibold">Authentication:</span> Microsoft Azure AD</Text>
                <Text variant="small"><span className="font-semibold">Authorization:</span> PKCE OAuth Flow</Text>
                <Text variant="small"><span className="font-semibold">Session Management:</span> iron-session</Text>
                <Text variant="small"><span className="font-semibold">Graph API:</span> Microsoft Graph Client</Text>
                <Text variant="small"><span className="font-semibold">SharePoint:</span> News Integration</Text>
                <Text variant="small"><span className="font-semibold">Security:</span> Comprehensive Headers</Text>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Authentication Flow */}
      <Section delay={700} animationType="slideLeft" spacing="md">
        <SubHeading>Authentication Architecture</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">PKCE OAuth Flow with Azure AD</Heading>
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" className="mb-2">🔐 Authentication Routes</Heading>
                <CodeBlock variant="compact" language="text">
{`/ → Redirects to /login
/login → PKCE OAuth initiation
/api/auth/callback → Token exchange
/api/auth/logout → Session cleanup
/dashboard → Protected interface`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" className="mb-2">🛡️ Security Features</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Server-side session management</Text>
                  <Text variant="small" color="gray">• MSAL integration for Azure AD</Text>
                  <Text variant="small" color="gray">• PKCE flow for SPA security</Text>
                  <Text variant="small" color="gray">• Token refresh capability</Text>
                  <Text variant="small" color="gray">• Secure cookie handling</Text>
                  <Text variant="small" color="gray">• Environment-aware config</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Microsoft Graph Integration */}
      <Section delay={800} animationType="slideRight" spacing="md">
        <SubHeading>Microsoft Graph Integration</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" className="mb-2">👤 User Profile</Heading>
                <Section spacing="sm">
                  <Text variant="small"><CodeBlock variant="inline">/api/graph/me</CodeBlock></Text>
                  <Text variant="small" color="gray">Retrieves user profile data from Azure AD</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" className="mb-2">📰 SharePoint News</Heading>
                <Section spacing="sm">
                  <Text variant="small"><CodeBlock variant="inline">/api/graph/news</CodeBlock></Text>
                  <Text variant="small" color="gray">Integrates SharePoint news feed</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={5} customColor="#FBBB02" className="mb-2">🔧 Graph Client</Heading>
                <Section spacing="sm">
                  <Text variant="small"><CodeBlock variant="inline">src/lib/graphClient.ts</CodeBlock></Text>
                  <Text variant="small" color="gray">Centralized Graph API client</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Project Structure */}
      <Section delay={900} animationType="slideLeft" spacing="md">
        <SubHeading>Project Structure</SubHeading>
        <Card variant="gray">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Next.js App Router Structure</Heading>
            <CodeBlock language="structure">
{`wsa-portal/
├── 📱 src/app/
│   ├── (site)/                    # Main site group
│   │   ├── login/               # Login page (standalone)
│   │   ├── dashboard/            # Protected dashboard
│   │   ├── documentation/        # Documentation hub
│   │   │   ├── developer/        # Developer manual
│   │   │   ├── operations/       # Operations manual
│   │   │   └── programs/         # Programs manual
│   │   └── layout.tsx            # Site layout
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   └── graph/                # Microsoft Graph APIs
│   ├── components/               # Reusable components
│   │   ├── ui/                   # UI component library
│   │   └── layout/               # Layout components
│   └── lib/                      # Utilities and configurations
│       ├── msalServer.ts         # MSAL server configuration
│       ├── graphClient.ts        # Microsoft Graph client
│       └── sharepoint.ts         # SharePoint utilities
├── 📄 public/                    # Static assets
│   └── logos/                    # WSA brand assets
├── 🔧 Configuration files
│   ├── vercel.json               # Deployment & security headers
│   ├── tsconfig.json             # TypeScript configuration
│   └── next.config.ts            # Next.js configuration
└── 📋 Documentation
    └── CLAUDE.md                 # Project instructions`}
            </CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Core Components */}
      <Section delay={1000} animationType="slideRight" spacing="md">
        <SubHeading>Core Components</SubHeading>
        <Section layout="grid" gridCols="1-sm-2" gap="lg">
          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#2592D0" className="mb-3">🧩 UI Component Library</Heading>
              <Section spacing="sm">
                <Text variant="small"><span className="font-semibold">Location:</span> <CodeBlock variant="inline">src/app/components/ui/</CodeBlock></Text>
                <Text variant="small" className="mb-2"><span className="font-semibold">Components:</span></Text>
                <Section spacing="sm" className="ml-4">
                  <Text variant="small" color="gray">• <CodeBlock variant="inline">Section</CodeBlock> - Layout container</Text>
                  <Text variant="small" color="gray">• <CodeBlock variant="inline">Card</CodeBlock> - Content cards</Text>
                  <Text variant="small" color="gray">• <CodeBlock variant="inline">Heading</CodeBlock> - Typography</Text>
                  <Text variant="small" color="gray">• <CodeBlock variant="inline">Button</CodeBlock> - Interactive elements</Text>
                </Section>
                <Text variant="small" color="gray">Consistent design system following WSA branding</Text>
              </Section>
            </Section>
          </Card>

          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#702083" className="mb-3">🔐 Authentication System</Heading>
              <Section spacing="sm">
                <Text variant="small"><span className="font-semibold">MSAL Server:</span> <CodeBlock variant="inline">src/lib/msalServer.ts</CodeBlock></Text>
                <Text variant="small" className="mb-2"><span className="font-semibold">Features:</span></Text>
                <Section spacing="sm" className="ml-4">
                  <Text variant="small" color="gray">• Token management & refresh</Text>
                  <Text variant="small" color="gray">• Environment-aware config</Text>
                  <Text variant="small" color="gray">• Graceful fallbacks</Text>
                  <Text variant="small" color="gray">• Build-time compatibility</Text>
                </Section>
                <Text variant="small" color="gray">Hybrid client/server authentication</Text>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Environment Configuration */}
      <Section delay={1100} animationType="slideLeft" spacing="md">
        <SubHeading>Environment Configuration</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Environment Variables</Heading>
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" className="mb-2">🏗️ Azure AD Configuration</Heading>
                <CodeBlock variant="compact" language="text">
{`AZURE_AD_TENANT_ID
AZURE_AD_CLIENT_ID
AZURE_AD_CLIENT_SECRET
AZURE_AD_REDIRECT_URI`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" className="mb-2">🔗 SharePoint Integration</Heading>
                <CodeBlock variant="compact" language="text">
{`SHAREPOINT_SITE_URL
SHAREPOINT_LIST_ID
SESSION_SECRET
NEXTAUTH_URL`}
                </CodeBlock>
              </Section>
            </Section>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
              <Text variant="small" customColor="#D97706">
                <span className="font-semibold">Build Compatibility:</span> Environment variable validation prevents build failures with graceful fallbacks for missing values during build time.
              </Text>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Brand Implementation */}
      <Section delay={1200} animationType="slideRight" spacing="md">
        <SubHeading>Brand Implementation</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">WSA Brand Guidelines Integration</Heading>
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" className="mb-2">🎨 Brand Colors</Heading>
                <Section spacing="sm">
                  <Section orientation="horizontal" spacing="sm" className="items-center">
                    <div className="w-4 h-4 bg-[#2592D0] rounded"></div>
                    <Text variant="small">Primary Blue: #2592D0</Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-center">
                    <div className="w-4 h-4 bg-[#702083] rounded"></div>
                    <Text variant="small">Purple: #702083</Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-center">
                    <div className="w-4 h-4 bg-[#012E55] rounded"></div>
                    <Text variant="small">Navy: #012E55</Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-center">
                    <div className="w-4 h-4 bg-[#FBBB02] rounded"></div>
                    <Text variant="small">Gold: #FBBB02</Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-center">
                    <div className="w-4 h-4 bg-[#EF7B02] rounded"></div>
                    <Text variant="small">Orange: #EF7B02</Text>
                  </Section>
                </Section>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" className="mb-2">📝 Typography</Heading>
                <Section spacing="sm">
                  <Text variant="small"><span className="font-semibold">Primary Typeface:</span> Lexend</Text>
                  <Text variant="small"><span className="font-semibold">Implementation:</span> <CodeBlock variant="inline">src/lib/branding.ts</CodeBlock></Text>
                  <Text variant="small"><span className="font-semibold">Usage:</span> All headings and body text</Text>
                  <Text variant="small"><span className="font-semibold">Weights:</span> Regular, Medium, Semi Bold, Bold</Text>
                  <Text variant="small" color="gray">Optimized for readability and accessibility</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Development Commands */}
      <Section delay={1300} animationType="slideLeft" spacing="md">
        <SubHeading>Development Commands</SubHeading>
        <Card variant="gray">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Available Scripts</Heading>
            <CodeBlock language="bash">
{`# Development server
npm run dev              # Start on http://localhost:3000

# Production build
npm run build            # Build application (requires env vars)
npm run start            # Start production server

# Code quality
npm run lint             # Run ESLint for code quality
npm run type-check       # Run TypeScript type checking

# Testing
npm test                 # Currently no tests configured`}
            </CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Security Features */}
      <Section delay={1400} animationType="slideRight" spacing="md">
        <SubHeading>Security Features</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" className="mb-2">🔒 Authentication</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Azure AD integration</Text>
                  <Text variant="small" color="gray">• PKCE OAuth flow</Text>
                  <Text variant="small" color="gray">• Secure session management</Text>
                  <Text variant="small" color="gray">• Token refresh handling</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" className="mb-2">🛡️ Security Headers</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Content Security Policy</Text>
                  <Text variant="small" color="gray">• X-Frame-Options</Text>
                  <Text variant="small" color="gray">• X-Content-Type-Options</Text>
                  <Text variant="small" color="gray">• Referrer Policy</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={5} customColor="#FBBB02" className="mb-2">🔐 Data Protection</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Environment variable validation</Text>
                  <Text variant="small" color="gray">• Secure cookie settings</Text>
                  <Text variant="small" color="gray">• Build-time security</Text>
                  <Text variant="small" color="gray">• Runtime validation</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Current Features */}
      <Section delay={1500} animationType="slideLeft" spacing="md">
        <SubHeading>Current Features</SubHeading>
        <Section layout="grid" gridCols="1-sm-2" gap="lg">
          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#2592D0" className="mb-3">📚 Documentation Hub</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Developer Manual with 4 project pages</Text>
                <Text variant="small" color="gray">• Operations Manual structure</Text>
                <Text variant="small" color="gray">• Programs Manual content</Text>
                <Text variant="small" color="gray">• Team directory with contacts</Text>
                <Text variant="small" color="gray">• Brand guidelines reference</Text>
                <Text variant="small" color="gray">• Quick access navigation</Text>
              </Section>
            </Section>
          </Card>

          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#702083" className="mb-3">🎛️ Dashboard Features</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• User profile integration</Text>
                <Text variant="small" color="gray">• Azure AD user data display</Text>
                <Text variant="small" color="gray">• Session management</Text>
                <Text variant="small" color="gray">• Protected route access</Text>
                <Text variant="small" color="gray">• Responsive design</Text>
                <Text variant="small" color="gray">• Loading and error states</Text>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Resources & Links */}
      <Section delay={1600} animationType="slideRight" spacing="md">
        <SubHeading>Resources & Links</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" spacing="lg">
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">🔗 Project Links</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://github.com/WSA-admin/wsa-portal" target="_blank" className="text-[#FBBB02] hover:underline">
                    GitHub Repository
                  </a>
                </Text>
                <Text variant="small" color="gray">Current development environment</Text>
                <Text variant="small" color="gray">Contact: info@worksourcealliance.ca</Text>
              </Section>
            </Section>
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">📚 Documentation</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <Link href="/documentation" className="text-[#FBBB02] hover:underline">
                    Documentation Hub
                  </Link>
                </Text>
                <Text variant="small">
                  <a href="https://docs.microsoft.com/en-us/graph/" target="_blank" className="text-[#FBBB02] hover:underline">
                    Microsoft Graph Docs
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://nextjs.org/docs" target="_blank" className="text-[#FBBB02] hover:underline">
                    Next.js Documentation
                  </a>
                </Text>
              </Section>
            </Section>
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">🛠️ Development</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://azure.microsoft.com/en-us/services/active-directory/" target="_blank" className="text-[#FBBB02] hover:underline">
                    Azure Active Directory
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://tailwindcss.com" target="_blank" className="text-[#FBBB02] hover:underline">
                    Tailwind CSS
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://vercel.com" target="_blank" className="text-[#FBBB02] hover:underline">
                    Vercel Platform
                  </a>
                </Text>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>
    </>
  );
}