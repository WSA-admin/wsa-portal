'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WSAPortalMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'architecture' | 'auth' | 'graph' | 'structure' | 'components' | 'environment' | 'branding' | 'commands' | 'security' | 'features' | 'resources'>('overview');

  const sections = [
    { id: 'overview', label: '📋 Overview', color: '#FBBB02' },
    { id: 'architecture', label: '🏗️ Architecture', color: '#2592D0' },
    { id: 'auth', label: '🔐 Auth Flow', color: '#702083' },
    { id: 'graph', label: '📊 Graph API', color: '#012E55' },
    { id: 'structure', label: '📦 Structure', color: '#EF7B02' },
    { id: 'components', label: '🧩 Components', color: '#059669' },
    { id: 'environment', label: '⚙️ Environment', color: '#DC2626' },
    { id: 'branding', label: '🎨 Branding', color: '#7C3AED' },
    { id: 'commands', label: '💻 Commands', color: '#EA580C' },
    { id: 'security', label: '🛡️ Security', color: '#059669' },
    { id: 'features', label: '⭐ Features', color: '#2592D0' },
    { id: 'resources', label: '🔗 Resources', color: '#FBBB02' }
  ];

  return (
    <>
      {/* Section Navigation - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Portal Sections</SubHeading>
        <Section layout="grid" gridCols="1-sm-3" gap="sm">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as typeof activeSection)}
              className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 w-full ${
                activeSection === section.id
                  ? 'text-white shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: activeSection === section.id ? section.color : 'transparent'
              }}
            >
              {section.label}
            </button>
          ))}
        </Section>
      </Section>

      {/* Project Overview */}
      {activeSection === 'overview' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Project Overview</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Section center>
                <Heading level={4} customColor="#FBBB02" size="sm" className="mb-2">🎯 Purpose</Heading>
                <Text variant="small" color="gray" className="text-center">
                  The WSA Portal serves as a secure internal platform for WorkSource Alliance team members, providing
                  centralized access to documentation, team information, and organizational resources with enterprise-grade security.
                </Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Section center>
                <Heading level={4} color="blue" size="sm" className="mb-2">📊 Current Status</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray"><span className="font-semibold">Status:</span> Active Development</Text>
                  <Text variant="small" color="gray"><span className="font-semibold">Environment:</span> Development</Text>
                  <Text variant="small" color="gray"><span className="font-semibold">Repository:</span> WSA-admin/wsa-portal</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <Heading level={4} color="purple" size="sm" className="mb-2">⭐ Key Features</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• 🔐 Azure AD Authentication</Text>
                  <Text variant="small" color="gray">• 📊 SharePoint Integration</Text>
                  <Text variant="small" color="gray">• 📚 Documentation Hub</Text>
                  <Text variant="small" color="gray">• 👥 Team Directory</Text>
                  <Text variant="small" color="gray">• 🎨 Brand Guidelines</Text>
                  <Text variant="small" color="gray">• 📈 Dashboard Analytics</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Technical Architecture */}
      {activeSection === 'architecture' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Technical Architecture</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Frontend Stack</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray"><span className="font-semibold">Framework:</span> Next.js 15 with App Router</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Language:</span> TypeScript (Strict Mode)</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Styling:</span> Tailwind CSS</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Components:</span> Custom UI Component Library</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Typography:</span> Lexend (WSA Brand Font)</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Deployment:</span> Vercel Platform</Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Authentication & Integration</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray"><span className="font-semibold">Authentication:</span> Microsoft Azure AD</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Authorization:</span> PKCE OAuth Flow</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Session Management:</span> iron-session</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Graph API:</span> Microsoft Graph Client</Text>
                <Text variant="small" color="gray"><span className="font-semibold">SharePoint:</span> News Integration</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Security:</span> Comprehensive Headers</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Authentication Flow */}
      {activeSection === 'auth' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Authentication Architecture</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔐 Authentication Routes</Heading>
              <CodeBlock variant="compact" language="text">
{`/ → Redirects to /login
/login → PKCE OAuth initiation
/api/auth/callback → Token exchange
/api/auth/logout → Session cleanup
/dashboard → Protected interface`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🛡️ Security Features</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Server-side session management</Text>
                <Text variant="small" color="gray">• MSAL integration for Azure AD</Text>
                <Text variant="small" color="gray">• PKCE flow for SPA security</Text>
                <Text variant="small" color="gray">• Token refresh capability</Text>
                <Text variant="small" color="gray">• Secure cookie handling</Text>
                <Text variant="small" color="gray">• Environment-aware config</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Microsoft Graph Integration */}
      {activeSection === 'graph' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Microsoft Graph Integration</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={5} customColor="#2592D0" className="mb-2">👤 User Profile</Heading>
              <Section spacing="sm">
                <Text variant="small"><CodeBlock variant="inline">/api/graph/me</CodeBlock></Text>
                <Text variant="small" color="gray">Retrieves user profile data from Azure AD</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={5} customColor="#702083" className="mb-2">📰 SharePoint News</Heading>
              <Section spacing="sm">
                <Text variant="small"><CodeBlock variant="inline">/api/graph/news</CodeBlock></Text>
                <Text variant="small" color="gray">Integrates SharePoint news feed</Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={5} customColor="#FBBB02" className="mb-2">🔧 Graph Client</Heading>
              <Section spacing="sm">
                <Text variant="small"><CodeBlock variant="inline">src/lib/graphClient.ts</CodeBlock></Text>
                <Text variant="small" color="gray">Centralized Graph API client</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Project Structure */}
      {activeSection === 'structure' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Project Structure</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Next.js App Router Structure</Heading>
              <CodeBlock language="structure">
{`wsa-portal/
├── 📱 src/app/
│   ├── (site)/              # Main site group
│   │   ├── login/           # Login page
│   │   ├── dashboard/       # Protected dashboard
│   │   ├── documentation/   # Documentation hub
│   │   └── layout.tsx       # Site layout
│   ├── api/                 # API routes
│   │   ├── auth/            # Authentication
│   │   └── graph/           # Microsoft Graph
│   ├── components/          # Reusable components
│   │   ├── ui/              # UI library
│   │   └── layout/          # Layout components
│   └── lib/                 # Utils & config
├── 📄 public/               # Static assets
├── 🔧 Configuration files
└── 📋 Documentation`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Core Components */}
      {activeSection === 'components' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Core Components</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
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
            </Card>

            <Card variant="gray" className="p-4">
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
            </Card>
          </Section>
        </Section>
      )}

      {/* Environment Configuration */}
      {activeSection === 'environment' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Environment Configuration</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={5} customColor="#2592D0" className="mb-2">🏗️ Azure AD Configuration</Heading>
              <CodeBlock variant="compact" language="text">
{`AZURE_AD_TENANT_ID
AZURE_AD_CLIENT_ID
AZURE_AD_CLIENT_SECRET
AZURE_AD_REDIRECT_URI`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={5} customColor="#702083" className="mb-2">🔗 SharePoint Integration</Heading>
              <CodeBlock variant="compact" language="text">
{`SHAREPOINT_SITE_URL
SHAREPOINT_LIST_ID
SESSION_SECRET
NEXTAUTH_URL`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                <Text variant="small" customColor="#D97706">
                  <span className="font-semibold">Build Compatibility:</span> Environment variable validation prevents build failures with graceful fallbacks for missing values during build time.
                </Text>
              </div>
            </Card>
          </Section>
        </Section>
      )}

      {/* Brand Implementation */}
      {activeSection === 'branding' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Brand Implementation</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
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
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={5} customColor="#702083" className="mb-2">📝 Typography</Heading>
              <Section spacing="sm">
                <Text variant="small"><span className="font-semibold">Primary Typeface:</span> Lexend</Text>
                <Text variant="small"><span className="font-semibold">Implementation:</span> <CodeBlock variant="inline">src/lib/branding.ts</CodeBlock></Text>
                <Text variant="small"><span className="font-semibold">Usage:</span> All headings and body text</Text>
                <Text variant="small"><span className="font-semibold">Weights:</span> Regular, Medium, Semi Bold, Bold</Text>
                <Text variant="small" color="gray">Optimized for readability and accessibility</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Development Commands */}
      {activeSection === 'commands' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Development Commands</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Available Scripts</Heading>
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
            </Card>
          </Section>
        </Section>
      )}

      {/* Security Features */}
      {activeSection === 'security' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Security Features</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={5} customColor="#2592D0" className="mb-2">🔒 Authentication</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Azure AD integration</Text>
                <Text variant="small" color="gray">• PKCE OAuth flow</Text>
                <Text variant="small" color="gray">• Secure session management</Text>
                <Text variant="small" color="gray">• Token refresh handling</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={5} customColor="#702083" className="mb-2">🛡️ Security Headers</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Content Security Policy</Text>
                <Text variant="small" color="gray">• X-Frame-Options</Text>
                <Text variant="small" color="gray">• X-Content-Type-Options</Text>
                <Text variant="small" color="gray">• Referrer Policy</Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={5} customColor="#FBBB02" className="mb-2">🔐 Data Protection</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Environment variable validation</Text>
                <Text variant="small" color="gray">• Secure cookie settings</Text>
                <Text variant="small" color="gray">• Build-time security</Text>
                <Text variant="small" color="gray">• Runtime validation</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Current Features */}
      {activeSection === 'features' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Current Features</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} customColor="#2592D0" className="mb-3">📚 Documentation Hub</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Developer Manual with 4 project pages</Text>
                <Text variant="small" color="gray">• Operations Manual structure</Text>
                <Text variant="small" color="gray">• Programs Manual content</Text>
                <Text variant="small" color="gray">• Team directory with contacts</Text>
                <Text variant="small" color="gray">• Brand guidelines reference</Text>
                <Text variant="small" color="gray">• Quick access navigation</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} customColor="#702083" className="mb-3">🎛️ Dashboard Features</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• User profile integration</Text>
                <Text variant="small" color="gray">• Azure AD user data display</Text>
                <Text variant="small" color="gray">• Session management</Text>
                <Text variant="small" color="gray">• Protected route access</Text>
                <Text variant="small" color="gray">• Responsive design</Text>
                <Text variant="small" color="gray">• Loading and error states</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Resources & Links */}
      {activeSection === 'resources' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Resources & Links</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔗 Project Links</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://github.com/WSA-admin/wsa-portal" target="_blank" className="text-[#FBBB02] hover:underline">
                    GitHub Repository
                  </a>
                </Text>
                <Text variant="small" color="gray">Current development environment</Text>
                <Text variant="small" color="gray">Contact: info@worksourcealliance.ca</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📚 Documentation</Heading>
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
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🛠️ Development</Heading>
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
            </Card>
          </Section>
        </Section>
      )}
    </>
  );
}