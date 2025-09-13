import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function WorkSourceAlliancePage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Developer Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">WorkSource Alliance Platform</span>
        </div>
        <Heading>🌟 WorkSource Alliance Platform</Heading>
        <p className="text-gray-600 text-lg">
          Main public-facing platform connecting international students and graduates with employers across Atlantic Canada
        </p>
      </Section>

      {/* Project Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">Mission</h4>
                <p className="text-gray-600 text-sm mb-4">
                  The WorkSource Alliance platform serves as a bridge between talent and opportunity, providing tools and 
                  resources that help individuals advance their careers while supporting businesses in finding the right people.
                </p>
                
                <h4 className="font-semibold text-[#702083] mb-2">Current Status</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Version:</span> v0.0.3 (August 2025)</p>
                  <p><span className="font-medium">Environment:</span> Production</p>
                  <p><span className="font-medium">URL:</span> worksourcealliance.com</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">Key Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 🔍 Advanced job search and matching</li>
                  <li>• 👥 Community hub and networking</li>
                  <li>• 📚 Skills development resources</li>
                  <li>• 🎙️ Podcast hosting platform</li>
                  <li>• 🤝 Employer tools and job posting</li>
                  <li>• 📊 Analytics dashboard</li>
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
                <p><strong>Language:</strong> TypeScript</p>
                <p><strong>Styling:</strong> Tailwind CSS 4</p>
                <p><strong>UI Library:</strong> React 19, Lucide React</p>
                <p><strong>Forms:</strong> React Hook Form + Zod</p>
                <p><strong>Build System:</strong> Turborepo</p>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Backend Infrastructure</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Database:</strong> PostgreSQL (Supabase)</p>
                <p><strong>Authentication:</strong> Supabase Auth + RLS</p>
                <p><strong>Storage:</strong> Supabase Storage</p>
                <p><strong>Functions:</strong> Supabase Edge Functions</p>
                <p><strong>Integrations:</strong> Airtable, TanStack Query</p>
                <p><strong>i18n:</strong> React i18next</p>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Project Structure */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Structure</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Turborepo Monorepo Structure</h4>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`worksourcealliance/
├── 📱 apps/
│   ├── web/                    # Main Next.js application
│   │   ├── app/               # App Router pages and layouts
│   │   ├── components/        # Shared React components
│   │   ├── lib/              # Utility functions and configurations
│   │   └── supabase/         # Database schemas and migrations
│   ├── e2e/                   # End-to-end testing suite
│   └── dev-tool/              # Development utilities
├── 📦 packages/
│   ├── ui/                    # Shared UI component library
│   ├── auth/                  # Authentication utilities
│   ├── supabase/             # Database client and types
│   ├── analytics/            # Analytics integrations
│   ├── billing/              # Payment processing
│   ├── email-templates/      # Transactional email templates
│   └── shared/               # Common utilities and types
├── 📚 documentation/          # Project documentation
└── 🔧 tooling/               # Build tools and configurations`}</pre>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Development Team */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Team</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Core Maintainer</h4>
                <div className="border-l-4 border-[#2592D0] pl-4">
                  <p className="font-medium">@WSA-admin</p>
                  <p className="text-sm text-gray-600">Platform Administrator & Lead Developer</p>
                  <p className="text-sm text-gray-500">Personal: @tmerrien (GitHub)</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Winter 2025 UPEI Capstone Team</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• @haydenpham - Full-Stack Developer</p>
                  <p>• @aazhuang - Frontend Developer</p>
                  <p>• @vsood04 - Backend Developer</p>
                  <p>• @bsharma14499 - UI/UX Developer</p>
                  <p>• @kasheefah - Frontend Developer</p>
                  <p>• @abedi11287 - Full-Stack Developer</p>
                  <p>• @bhavya-uniyal - Backend Developer</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Application Routes */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Application Routes</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Public Routes</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• <code>/</code> - Homepage with platform overview</p>
                <p>• <code>/about</code> - Organization mission and team</p>
                <p>• <code>/events</code> - Community events and workshops</p>
                <p>• <code>/skills-for-hire</code> - Talent showcase platform</p>
                <p>• <code>/job-listing-page</code> - Job opportunities browser</p>
                <p>• <code>/podcast</code> - Audio content and interviews</p>
                <p>• <code>/blog</code> - Industry insights and news</p>
                <p>• <code>/contact</code> - Contact information</p>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Legal & Documentation</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• <code>/terms-of-service</code> - Platform terms</p>
                <p>• <code>/privacy-policy</code> - Data privacy policy</p>
                <p>• <code>/cookie-policy</code> - Cookie usage policy</p>
                <p>• <code>/faq</code> - Frequently asked questions</p>
                <p>• <code>/press</code> - Media resources and news</p>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Security & Performance */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Security & Performance</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">🔒 Security Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Row Level Security (RLS)</li>
                  <li>• JWT Authentication</li>
                  <li>• Multi-provider Auth</li>
                  <li>• SQL Injection Protection</li>
                  <li>• Zero Critical Vulnerabilities</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-2">⚡ Performance</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Server Components</li>
                  <li>• Edge Functions</li>
                  <li>• Real-time Subscriptions</li>
                  <li>• CDN Storage</li>
                  <li>• Optimized Builds</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">🛠️ DevOps</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Turborepo Monorepo</li>
                  <li>• Playwright E2E Testing</li>
                  <li>• ESLint + Prettier</li>
                  <li>• TypeScript Strict Mode</li>
                  <li>• Automated Deployments</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Getting Started */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Getting Started</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Development Setup</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`# Prerequisites: Node.js 18.18.0+, pnpm 8.0.0+

# Clone repository
git clone https://github.com/worksourcealliance/worksourcealliance.git
cd worksourcealliance

# Install dependencies
pnpm install

# Set up environment
cp apps/web/.env.example apps/web/.env.local

# Start development server
pnpm dev

# Open browser: http://localhost:3000`}</pre>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Release History */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Release History</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="space-y-4">
              
              <div className="border-l-4 border-[#2592D0] pl-4">
                <h4 className="font-semibold text-gray-900">v0.0.3 - August 21, 2025</h4>
                <p className="text-sm text-gray-600 mb-2">Major Feature Release</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Complete Applicant Dashboard Overhaul</li>
                  <li>• Enhanced Profile Management</li>
                  <li>• Career Support Services Integration</li>
                  <li>• Admin System Enhancements</li>
                  <li>• 108 files changed, 120,225+ additions</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#702083] pl-4">
                <h4 className="font-semibold text-gray-900">v0.0.2 - July 3, 2025</h4>
                <p className="text-sm text-gray-600 mb-2">UI/UX and Infrastructure Release</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Complete layout and navigation refactoring</li>
                  <li>• Enhanced theming system</li>
                  <li>• Supabase configuration enhancements</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FBBB02] pl-4">
                <h4 className="font-semibold text-gray-900">v0.0.1 - June 26, 2025</h4>
                <p className="text-sm text-gray-600 mb-2">Initial Production Release</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Initial production deployment</li>
                  <li>• Core job board functionality</li>
                  <li>• Basic user authentication</li>
                  <li>• Foundation marketing pages</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Quick Links */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Resources & Links</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔗 External Links</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://worksourcealliance.com" target="_blank" className="text-[#2592D0] hover:underline">Production Site</a></p>
                <p><a href="https://github.com/worksourcealliance/worksourcealliance" target="_blank" className="text-[#2592D0] hover:underline">GitHub Repository</a></p>
                <p><a href="https://supabase.com" target="_blank" className="text-[#2592D0] hover:underline">Supabase Backend</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Documentation</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/developer" className="text-[#2592D0] hover:underline">Developer Manual</Link></p>
                <p><a href="https://nextjs.org/docs" target="_blank" className="text-[#2592D0] hover:underline">Next.js Documentation</a></p>
                <p><a href="https://supabase.com/docs" target="_blank" className="text-[#2592D0] hover:underline">Supabase Docs</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🛠️ Tools</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://turbo.build" target="_blank" className="text-[#2592D0] hover:underline">Turborepo</a></p>
                <p><a href="https://tailwindcss.com" target="_blank" className="text-[#2592D0] hover:underline">Tailwind CSS</a></p>
                <p><a href="https://playwright.dev" target="_blank" className="text-[#2592D0] hover:underline">Playwright Testing</a></p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}