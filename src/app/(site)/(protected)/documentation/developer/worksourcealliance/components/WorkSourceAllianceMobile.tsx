'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WorkSourceAllianceMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'architecture' | 'structure' | 'team' | 'routes' | 'security' | 'setup' | 'releases' | 'resources'>('overview');

  const sections = [
    { id: 'overview', label: '📋 Overview', color: '#2592D0' },
    { id: 'architecture', label: '🏗️ Architecture', color: '#702083' },
    { id: 'structure', label: '📦 Structure', color: '#FBBB02' },
    { id: 'team', label: '👥 Team', color: '#EF7B02' },
    { id: 'routes', label: '🛣️ Routes', color: '#012E55' },
    { id: 'security', label: '🔒 Security', color: '#059669' },
    { id: 'setup', label: '⚡ Setup', color: '#DC2626' },
    { id: 'releases', label: '📝 Releases', color: '#7C3AED' },
    { id: 'resources', label: '🔗 Resources', color: '#EA580C' }
  ];

  return (
    <>
      {/* Section Navigation - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Platform Sections</SubHeading>
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
                <Heading level={4} color="blue" size="sm" className="mb-2">🎯 Mission</Heading>
                <Text variant="small" color="gray" className="text-center">
                  The WorkSource Alliance platform serves as a bridge between talent and opportunity, providing tools and
                  resources that help individuals advance their careers while supporting businesses in finding the right people.
                </Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Section center>
                <Heading level={4} color="purple" size="sm" className="mb-2">📊 Current Status</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray"><strong>Version:</strong> v0.0.3 (August 2025)</Text>
                  <Text variant="small" color="gray"><strong>Environment:</strong> Production</Text>
                  <Text variant="small" color="gray"><strong>URL:</strong> worksourcealliance.com</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <Heading level={4} customColor="#FBBB02" size="sm" className="mb-2">⭐ Key Features</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• 🔍 Advanced job search and matching</Text>
                  <Text variant="small" color="gray">• 👥 Community hub and networking</Text>
                  <Text variant="small" color="gray">• 📚 Skills development resources</Text>
                  <Text variant="small" color="gray">• 🎙️ Podcast hosting platform</Text>
                  <Text variant="small" color="gray">• 🤝 Employer tools and job posting</Text>
                  <Text variant="small" color="gray">• 📊 Analytics dashboard</Text>
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
                <Text variant="small" color="gray"><strong>Framework:</strong> Next.js 15 with App Router</Text>
                <Text variant="small" color="gray"><strong>Language:</strong> TypeScript</Text>
                <Text variant="small" color="gray"><strong>Styling:</strong> Tailwind CSS 4</Text>
                <Text variant="small" color="gray"><strong>UI Library:</strong> React 19, Lucide React</Text>
                <Text variant="small" color="gray"><strong>Forms:</strong> React Hook Form + Zod</Text>
                <Text variant="small" color="gray"><strong>Build System:</strong> Turborepo</Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Backend Infrastructure</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray"><strong>Database:</strong> PostgreSQL (Supabase)</Text>
                <Text variant="small" color="gray"><strong>Authentication:</strong> Supabase Auth + RLS</Text>
                <Text variant="small" color="gray"><strong>Storage:</strong> Supabase Storage</Text>
                <Text variant="small" color="gray"><strong>Functions:</strong> Supabase Edge Functions</Text>
                <Text variant="small" color="gray"><strong>Integrations:</strong> Airtable, TanStack Query</Text>
                <Text variant="small" color="gray"><strong>i18n:</strong> React i18next</Text>
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
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Turborepo Monorepo Structure</Heading>
              <CodeBlock language="structure">
{`worksourcealliance/
├── 📱 apps/
│   ├── web/          # Main Next.js app
│   ├── e2e/          # E2E testing
│   └── dev-tool/     # Dev utilities
├── 📦 packages/
│   ├── ui/           # UI components
│   ├── auth/         # Authentication
│   ├── supabase/     # Database client
│   ├── analytics/    # Analytics
│   └── shared/       # Common utilities
├── 📚 documentation/ # Docs
└── 🔧 tooling/      # Build tools`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Development Team */}
      {activeSection === 'team' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Development Team</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Section center>
                <Heading level={4} color="blue" size="sm" className="mb-2">👨‍💻 Core Maintainer</Heading>
                <div className="border-l-4 border-[#2592D0] pl-4 text-left">
                  <Text weight="semibold">@WSA-admin</Text>
                  <Text variant="small" color="gray">Platform Administrator & Lead Developer</Text>
                  <Text variant="small" color="gray">Personal: @tmerrien (GitHub)</Text>
                </div>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <Heading level={4} customColor="#702083" size="sm" className="mb-2">🎓 Winter 2025 UPEI Capstone Team</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• @haydenpham - Full-Stack Developer</Text>
                  <Text variant="small" color="gray">• @aazhuang - Frontend Developer</Text>
                  <Text variant="small" color="gray">• @vsood04 - Backend Developer</Text>
                  <Text variant="small" color="gray">• @bsharma14499 - UI/UX Developer</Text>
                  <Text variant="small" color="gray">• @kasheefah - Frontend Developer</Text>
                  <Text variant="small" color="gray">• @abedi11287 - Full-Stack Developer</Text>
                  <Text variant="small" color="gray">• @bhavya-uniyal - Backend Developer</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Application Routes */}
      {activeSection === 'routes' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Application Routes</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Public Routes</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/</CodeBlock> - Homepage with platform overview</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/about</CodeBlock> - Organization mission and team</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/events</CodeBlock> - Community events and workshops</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/skills-for-hire</CodeBlock> - Talent showcase platform</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/job-listing-page</CodeBlock> - Job opportunities browser</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/podcast</CodeBlock> - Audio content and interviews</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/blog</CodeBlock> - Industry insights and news</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/contact</CodeBlock> - Contact information</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Legal & Documentation</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/terms-of-service</CodeBlock> - Platform terms</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/privacy-policy</CodeBlock> - Data privacy policy</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/cookie-policy</CodeBlock> - Cookie usage policy</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/faq</CodeBlock> - Frequently asked questions</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/press</CodeBlock> - Media resources and news</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Security & Performance */}
      {activeSection === 'security' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Security & Performance</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">🔒 Security Features</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Row Level Security (RLS)</Text>
                <Text variant="small" color="gray">• JWT Authentication</Text>
                <Text variant="small" color="gray">• Multi-provider Auth</Text>
                <Text variant="small" color="gray">• SQL Injection Protection</Text>
                <Text variant="small" color="gray">• Zero Critical Vulnerabilities</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">⚡ Performance</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Server Components</Text>
                <Text variant="small" color="gray">• Edge Functions</Text>
                <Text variant="small" color="gray">• Real-time Subscriptions</Text>
                <Text variant="small" color="gray">• CDN Storage</Text>
                <Text variant="small" color="gray">• Optimized Builds</Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} customColor="#FBBB02" weight="semibold" className="mb-3">🛠️ DevOps</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Turborepo Monorepo</Text>
                <Text variant="small" color="gray">• Playwright E2E Testing</Text>
                <Text variant="small" color="gray">• ESLint + Prettier</Text>
                <Text variant="small" color="gray">• TypeScript Strict Mode</Text>
                <Text variant="small" color="gray">• Automated Deployments</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Getting Started */}
      {activeSection === 'setup' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Getting Started</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Development Setup</Heading>
              <CodeBlock language="bash">
{`# Prerequisites: Node.js 18.18.0+, pnpm 8.0.0+

# Clone repository
git clone https://github.com/worksourcealliance/worksourcealliance.git
cd worksourcealliance

# Install dependencies
pnpm install

# Set up environment
cp apps/web/.env.example apps/web/.env.local

# Start development server
pnpm dev

# Open browser: http://localhost:3000`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Release History */}
      {activeSection === 'releases' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Release History</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <div className="border-l-4 border-[#2592D0] pl-4">
                <Heading level={5} weight="semibold" className="mb-1">v0.0.3 - August 21, 2025</Heading>
                <Text variant="small" color="gray" className="mb-2">Major Feature Release</Text>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Complete Applicant Dashboard Overhaul</Text>
                  <Text variant="small" color="gray">• Enhanced Profile Management</Text>
                  <Text variant="small" color="gray">• Career Support Services Integration</Text>
                  <Text variant="small" color="gray">• Admin System Enhancements</Text>
                  <Text variant="small" color="gray">• 108 files changed, 120,225+ additions</Text>
                </Section>
              </div>
            </Card>

            <Card variant="gray" className="p-4">
              <div className="border-l-4 border-[#702083] pl-4">
                <Heading level={5} weight="semibold" className="mb-1">v0.0.2 - July 3, 2025</Heading>
                <Text variant="small" color="gray" className="mb-2">UI/UX and Infrastructure Release</Text>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Complete layout and navigation refactoring</Text>
                  <Text variant="small" color="gray">• Enhanced theming system</Text>
                  <Text variant="small" color="gray">• Supabase configuration enhancements</Text>
                </Section>
              </div>
            </Card>

            <Card variant="white" className="p-4">
              <div className="border-l-4 border-[#FBBB02] pl-4">
                <Heading level={5} weight="semibold" className="mb-1">v0.0.1 - June 26, 2025</Heading>
                <Text variant="small" color="gray" className="mb-2">Initial Production Release</Text>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Initial production deployment</Text>
                  <Text variant="small" color="gray">• Core job board functionality</Text>
                  <Text variant="small" color="gray">• Basic user authentication</Text>
                  <Text variant="small" color="gray">• Foundation marketing pages</Text>
                </Section>
              </div>
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
              <Heading level={4} weight="semibold" className="mb-3">🔗 External Links</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://worksourcealliance.com" target="_blank" className="text-[#2592D0] hover:underline">
                    Production Site
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://github.com/worksourcealliance/worksourcealliance" target="_blank" className="text-[#2592D0] hover:underline">
                    GitHub Repository
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://supabase.com" target="_blank" className="text-[#2592D0] hover:underline">
                    Supabase Backend
                  </a>
                </Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📚 Documentation</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <Link href="/documentation/developer" className="text-[#2592D0] hover:underline">
                    Developer Manual
                  </Link>
                </Text>
                <Text variant="small">
                  <a href="https://nextjs.org/docs" target="_blank" className="text-[#2592D0] hover:underline">
                    Next.js Documentation
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://supabase.com/docs" target="_blank" className="text-[#2592D0] hover:underline">
                    Supabase Docs
                  </a>
                </Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🛠️ Tools</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://turbo.build" target="_blank" className="text-[#2592D0] hover:underline">
                    Turborepo
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://tailwindcss.com" target="_blank" className="text-[#2592D0] hover:underline">
                    Tailwind CSS
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://playwright.dev" target="_blank" className="text-[#2592D0] hover:underline">
                    Playwright Testing
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