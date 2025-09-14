'use client';

import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WorkSourceAllianceDesktop() {
  return (
    <>
      {/* Project Overview */}
      <Section delay={500} animationType="slideLeft" spacing="md">
        <SubHeading>Project Overview</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section spacing="md">
                <Heading level={4} customColor="#2592D0" className="mb-2">Mission</Heading>
                <Text variant="small" color="gray" className="mb-4">
                  The WorkSource Alliance platform serves as a bridge between talent and opportunity, providing tools and
                  resources that help individuals advance their careers while supporting businesses in finding the right people.
                </Text>

                <Heading level={4} customColor="#702083" className="mb-2">Current Status</Heading>
                <Section spacing="sm">
                  <Text variant="small"><Text weight="semibold">Version:</Text> v0.0.3 (August 2025)</Text>
                  <Text variant="small"><Text weight="semibold">Environment:</Text> Production</Text>
                  <Text variant="small"><Text weight="semibold">URL:</Text> worksourcealliance.com</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#FBBB02" className="mb-2">Key Features</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• 🔍 Advanced job search and matching</Text>
                  <Text variant="small" color="gray">• 👥 Community hub and networking</Text>
                  <Text variant="small" color="gray">• 📚 Skills development resources</Text>
                  <Text variant="small" color="gray">• 🎙️ Podcast hosting platform</Text>
                  <Text variant="small" color="gray">• 🤝 Employer tools and job posting</Text>
                  <Text variant="small" color="gray">• 📊 Analytics dashboard</Text>
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
                <Text variant="small"><Text weight="semibold">Framework:</Text> Next.js 15 with App Router</Text>
                <Text variant="small"><Text weight="semibold">Language:</Text> TypeScript</Text>
                <Text variant="small"><Text weight="semibold">Styling:</Text> Tailwind CSS 4</Text>
                <Text variant="small"><Text weight="semibold">UI Library:</Text> React 19, Lucide React</Text>
                <Text variant="small"><Text weight="semibold">Forms:</Text> React Hook Form + Zod</Text>
                <Text variant="small"><Text weight="semibold">Build System:</Text> Turborepo</Text>
              </Section>
            </Section>
          </Card>

          <Card variant="gray">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">Backend Infrastructure</Heading>
              <Section spacing="sm">
                <Text variant="small"><Text weight="semibold">Database:</Text> PostgreSQL (Supabase)</Text>
                <Text variant="small"><Text weight="semibold">Authentication:</Text> Supabase Auth + RLS</Text>
                <Text variant="small"><Text weight="semibold">Storage:</Text> Supabase Storage</Text>
                <Text variant="small"><Text weight="semibold">Functions:</Text> Supabase Edge Functions</Text>
                <Text variant="small"><Text weight="semibold">Integrations:</Text> Airtable, TanStack Query</Text>
                <Text variant="small"><Text weight="semibold">i18n:</Text> React i18next</Text>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Project Structure */}
      <Section delay={700} animationType="slideLeft" spacing="md">
        <SubHeading>Project Structure</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Turborepo Monorepo Structure</Heading>
            <CodeBlock language="structure">
{`worksourcealliance/
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
└── 🔧 tooling/               # Build tools and configurations`}
            </CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Development Team */}
      <Section delay={800} animationType="slideRight" spacing="md">
        <SubHeading>Development Team</SubHeading>
        <Card variant="white">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-3">Core Maintainer</Heading>
                <div className="border-l-4 border-[#2592D0] pl-4">
                  <Text weight="semibold">@WSA-admin</Text>
                  <Text variant="small" color="gray">Platform Administrator & Lead Developer</Text>
                  <Text variant="small" color="gray">Personal: @tmerrien (GitHub)</Text>
                </div>
              </Section>

              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-3">Winter 2025 UPEI Capstone Team</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• @haydenpham - Full-Stack Developer</Text>
                  <Text variant="small" color="gray">• @aazhuang - Frontend Developer</Text>
                  <Text variant="small" color="gray">• @vsood04 - Backend Developer</Text>
                  <Text variant="small" color="gray">• @bsharma14499 - UI/UX Developer</Text>
                  <Text variant="small" color="gray">• @kasheefah - Frontend Developer</Text>
                  <Text variant="small" color="gray">• @abedi11287 - Full-Stack Developer</Text>
                  <Text variant="small" color="gray">• @bhavya-uniyal - Backend Developer</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Application Routes */}
      <Section delay={900} animationType="slideLeft" spacing="md">
        <SubHeading>Application Routes</SubHeading>
        <Section layout="grid" gridCols="1-sm-2" gap="lg">
          <Card variant="gray">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">Public Routes</Heading>
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
            </Section>
          </Card>

          <Card variant="gray">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">Legal & Documentation</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/terms-of-service</CodeBlock> - Platform terms</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/privacy-policy</CodeBlock> - Data privacy policy</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/cookie-policy</CodeBlock> - Cookie usage policy</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/faq</CodeBlock> - Frequently asked questions</Text>
                <Text variant="small" color="gray">• <CodeBlock variant="inline">/press</CodeBlock> - Media resources and news</Text>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Security & Performance */}
      <Section delay={1000} animationType="slideRight" spacing="md">
        <SubHeading>Security & Performance</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" className="mb-2">🔒 Security Features</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Row Level Security (RLS)</Text>
                  <Text variant="small" color="gray">• JWT Authentication</Text>
                  <Text variant="small" color="gray">• Multi-provider Auth</Text>
                  <Text variant="small" color="gray">• SQL Injection Protection</Text>
                  <Text variant="small" color="gray">• Zero Critical Vulnerabilities</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" className="mb-2">⚡ Performance</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Server Components</Text>
                  <Text variant="small" color="gray">• Edge Functions</Text>
                  <Text variant="small" color="gray">• Real-time Subscriptions</Text>
                  <Text variant="small" color="gray">• CDN Storage</Text>
                  <Text variant="small" color="gray">• Optimized Builds</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#FBBB02" className="mb-2">🛠️ DevOps</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Turborepo Monorepo</Text>
                  <Text variant="small" color="gray">• Playwright E2E Testing</Text>
                  <Text variant="small" color="gray">• ESLint + Prettier</Text>
                  <Text variant="small" color="gray">• TypeScript Strict Mode</Text>
                  <Text variant="small" color="gray">• Automated Deployments</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Getting Started */}
      <Section delay={1100} animationType="slideLeft" spacing="md">
        <SubHeading>Getting Started</SubHeading>
        <Card variant="gray">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Development Setup</Heading>
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
          </Section>
        </Card>
      </Section>

      {/* Release History */}
      <Section delay={1200} animationType="slideRight" spacing="md">
        <SubHeading>Release History</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section spacing="lg">
              <div className="border-l-4 border-[#2592D0] pl-4">
                <Heading level={4} weight="semibold" color="gray">v0.0.3 - August 21, 2025</Heading>
                <Text variant="small" color="gray" className="mb-2">Major Feature Release</Text>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Complete Applicant Dashboard Overhaul</Text>
                  <Text variant="small" color="gray">• Enhanced Profile Management</Text>
                  <Text variant="small" color="gray">• Career Support Services Integration</Text>
                  <Text variant="small" color="gray">• Admin System Enhancements</Text>
                  <Text variant="small" color="gray">• 108 files changed, 120,225+ additions</Text>
                </Section>
              </div>

              <div className="border-l-4 border-[#702083] pl-4">
                <Heading level={4} weight="semibold" color="gray">v0.0.2 - July 3, 2025</Heading>
                <Text variant="small" color="gray" className="mb-2">UI/UX and Infrastructure Release</Text>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Complete layout and navigation refactoring</Text>
                  <Text variant="small" color="gray">• Enhanced theming system</Text>
                  <Text variant="small" color="gray">• Supabase configuration enhancements</Text>
                </Section>
              </div>

              <div className="border-l-4 border-[#FBBB02] pl-4">
                <Heading level={4} weight="semibold" color="gray">v0.0.1 - June 26, 2025</Heading>
                <Text variant="small" color="gray" className="mb-2">Initial Production Release</Text>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Initial production deployment</Text>
                  <Text variant="small" color="gray">• Core job board functionality</Text>
                  <Text variant="small" color="gray">• Basic user authentication</Text>
                  <Text variant="small" color="gray">• Foundation marketing pages</Text>
                </Section>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Resources & Links */}
      <Section delay={1300} animationType="slideLeft" spacing="md">
        <SubHeading>Resources & Links</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" spacing="lg">
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">🔗 External Links</Heading>
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
            </Section>
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">📚 Documentation</Heading>
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
            </Section>
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">🛠️ Tools</Heading>
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
            </Section>
          </Section>
        </Card>
      </Section>
    </>
  );
}