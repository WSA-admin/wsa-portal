import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function WSAPortalPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Developer Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">WSA Portal</span>
        </div>
        <Heading>🏛️ WSA Portal</Heading>
        <p className="text-gray-600 text-lg">
          Internal secure portal with Microsoft Azure AD authentication and SharePoint integration for team collaboration
        </p>
        <div className="bg-blue-50 border-l-4 border-[#2592D0] p-4 rounded-r">
          <p className="text-sm text-blue-800">
            <strong>Current Project:</strong> You are currently viewing the WSA Portal documentation from within the portal itself.
          </p>
        </div>
      </Section>

      {/* Project Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">Purpose</h4>
                <p className="text-gray-600 text-sm mb-4">
                  The WSA Portal serves as a secure internal platform for WorkSource Alliance team members, providing 
                  centralized access to documentation, team information, and organizational resources with enterprise-grade security.
                </p>
                
                <h4 className="font-semibold text-[#2592D0] mb-2">Current Status</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Status:</span> Active Development</p>
                  <p><span className="font-medium">Environment:</span> Development</p>
                  <p><span className="font-medium">Repository:</span> WSA-admin/wsa-portal</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-2">Key Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 🔐 Azure AD Authentication</li>
                  <li>• 📊 SharePoint Integration</li>
                  <li>• 📚 Documentation Hub</li>
                  <li>• 👥 Team Directory</li>
                  <li>• 🎨 Brand Guidelines</li>
                  <li>• 📈 Dashboard Analytics</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Technical Architecture */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Technical Architecture</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Frontend Stack</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Framework:</strong> Next.js 15 with App Router</p>
                <p><strong>Language:</strong> TypeScript (Strict Mode)</p>
                <p><strong>Styling:</strong> Tailwind CSS</p>
                <p><strong>Components:</strong> Custom UI Component Library</p>
                <p><strong>Typography:</strong> Lexend (WSA Brand Font)</p>
                <p><strong>Deployment:</strong> Vercel Platform</p>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Authentication & Integration</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Authentication:</strong> Microsoft Azure AD</p>
                <p><strong>Authorization:</strong> PKCE OAuth Flow</p>
                <p><strong>Session Management:</strong> iron-session</p>
                <p><strong>Graph API:</strong> Microsoft Graph Client</p>
                <p><strong>SharePoint:</strong> News Integration</p>
                <p><strong>Security:</strong> Comprehensive Headers</p>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Authentication Flow */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Authentication Architecture</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">PKCE OAuth Flow with Azure AD</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🔐 Authentication Routes</h5>
                <div className="space-y-2 text-sm font-mono bg-gray-50 p-3 rounded">
                  <p><code>/</code> → Redirects to <code>/login</code></p>
                  <p><code>/login</code> → PKCE OAuth initiation</p>
                  <p><code>/api/auth/callback</code> → Token exchange</p>
                  <p><code>/api/auth/logout</code> → Session cleanup</p>
                  <p><code>/dashboard</code> → Protected interface</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#702083] mb-2">🛡️ Security Features</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Server-side session management</li>
                  <li>• MSAL integration for Azure AD</li>
                  <li>• PKCE flow for SPA security</li>
                  <li>• Token refresh capability</li>
                  <li>• Secure cookie handling</li>
                  <li>• Environment-aware config</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Microsoft Graph Integration */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Microsoft Graph Integration</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">👤 User Profile</h5>
                <div className="space-y-1 text-sm">
                  <p><code>/api/graph/me</code></p>
                  <p className="text-gray-600">Retrieves user profile data from Azure AD</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#702083] mb-2">📰 SharePoint News</h5>
                <div className="space-y-1 text-sm">
                  <p><code>/api/graph/news</code></p>
                  <p className="text-gray-600">Integrates SharePoint news feed</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#FBBB02] mb-2">🔧 Graph Client</h5>
                <div className="space-y-1 text-sm">
                  <p><code>src/lib/graphClient.ts</code></p>
                  <p className="text-gray-600">Centralized Graph API client</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Project Structure */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Structure</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Next.js App Router Structure</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`wsa-portal/
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
    └── CLAUDE.md                 # Project instructions`}</pre>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Core Components */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Core Components</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0] mb-3">🧩 UI Component Library</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Location:</strong> <code>src/app/components/ui/</code></p>
                <p><strong>Components:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• <code>Section</code> - Layout container</li>
                  <li>• <code>Card</code> - Content cards</li>
                  <li>• <code>Heading</code> - Typography</li>
                  <li>• <code>Button</code> - Interactive elements</li>
                </ul>
                <p className="text-gray-600">Consistent design system following WSA branding</p>
              </div>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083] mb-3">🔐 Authentication System</h4>
              <div className="space-y-2 text-sm">
                <p><strong>MSAL Server:</strong> <code>src/lib/msalServer.ts</code></p>
                <p><strong>Features:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Token management & refresh</li>
                  <li>• Environment-aware config</li>
                  <li>• Graceful fallbacks</li>
                  <li>• Build-time compatibility</li>
                </ul>
                <p className="text-gray-600">Hybrid client/server authentication</p>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Environment Configuration */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Environment Configuration</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Environment Variables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🏗️ Azure AD Configuration</h5>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  <p>AZURE_AD_TENANT_ID</p>
                  <p>AZURE_AD_CLIENT_ID</p>
                  <p>AZURE_AD_CLIENT_SECRET</p>
                  <p>AZURE_AD_REDIRECT_URI</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#702083] mb-2">🔗 SharePoint Integration</h5>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  <p>SHAREPOINT_SITE_URL</p>
                  <p>SHAREPOINT_LIST_ID</p>
                  <p>SESSION_SECRET</p>
                  <p>NEXTAUTH_URL</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
              <p className="text-sm text-yellow-800">
                <strong>Build Compatibility:</strong> Environment variable validation prevents build failures with graceful fallbacks for missing values during build time.
              </p>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Brand Implementation */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Brand Implementation</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">WSA Brand Guidelines Integration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🎨 Brand Colors</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#2592D0] rounded"></div>
                    <span className="text-sm">Primary Blue: #2592D0</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#702083] rounded"></div>
                    <span className="text-sm">Purple: #702083</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#012E55] rounded"></div>
                    <span className="text-sm">Navy: #012E55</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FBBB02] rounded"></div>
                    <span className="text-sm">Gold: #FBBB02</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#EF7B02] rounded"></div>
                    <span className="text-sm">Orange: #EF7B02</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#702083] mb-2">📝 Typography</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>Primary Typeface:</strong> Lexend</p>
                  <p><strong>Implementation:</strong> <code>src/lib/branding.ts</code></p>
                  <p><strong>Usage:</strong> All headings and body text</p>
                  <p><strong>Weights:</strong> Regular, Medium, Semi Bold, Bold</p>
                  <p className="text-gray-600">Optimized for readability and accessibility</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Development Commands */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Commands</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Available Scripts</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`# Development server
npm run dev              # Start on http://localhost:3000

# Production build
npm run build            # Build application (requires env vars)
npm run start            # Start production server

# Code quality
npm run lint             # Run ESLint for code quality
npm run type-check       # Run TypeScript type checking

# Testing
npm test                 # Currently no tests configured`}</pre>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Security Features */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Security Features</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🔒 Authentication</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Azure AD integration</li>
                  <li>• PKCE OAuth flow</li>
                  <li>• Secure session management</li>
                  <li>• Token refresh handling</li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-[#702083] mb-2">🛡️ Security Headers</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Content Security Policy</li>
                  <li>• X-Frame-Options</li>
                  <li>• X-Content-Type-Options</li>
                  <li>• Referrer Policy</li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-[#FBBB02] mb-2">🔐 Data Protection</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Environment variable validation</li>
                  <li>• Secure cookie settings</li>
                  <li>• Build-time security</li>
                  <li>• Runtime validation</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Current Features */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Current Features</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0] mb-3">📚 Documentation Hub</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Developer Manual with 4 project pages</li>
                <li>• Operations Manual structure</li>
                <li>• Programs Manual content</li>
                <li>• Team directory with contacts</li>
                <li>• Brand guidelines reference</li>
                <li>• Quick access navigation</li>
              </ul>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083] mb-3">🎛️ Dashboard Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User profile integration</li>
                <li>• Azure AD user data display</li>
                <li>• Session management</li>
                <li>• Protected route access</li>
                <li>• Responsive design</li>
                <li>• Loading and error states</li>
              </ul>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Resources & Links */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Resources & Links</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔗 Project Links</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://github.com/WSA-admin/wsa-portal" target="_blank" className="text-[#FBBB02] hover:underline">GitHub Repository</a></p>
                <p><span className="text-gray-500">Current development environment</span></p>
                <p><span className="text-gray-500">Contact: info@worksourcealliance.ca</span></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Documentation</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation" className="text-[#FBBB02] hover:underline">Documentation Hub</Link></p>
                <p><a href="https://docs.microsoft.com/en-us/graph/" target="_blank" className="text-[#FBBB02] hover:underline">Microsoft Graph Docs</a></p>
                <p><a href="https://nextjs.org/docs" target="_blank" className="text-[#FBBB02] hover:underline">Next.js Documentation</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🛠️ Development</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://azure.microsoft.com/en-us/services/active-directory/" target="_blank" className="text-[#FBBB02] hover:underline">Azure Active Directory</a></p>
                <p><a href="https://tailwindcss.com" target="_blank" className="text-[#FBBB02] hover:underline">Tailwind CSS</a></p>
                <p><a href="https://vercel.com" target="_blank" className="text-[#FBBB02] hover:underline">Vercel Platform</a></p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}