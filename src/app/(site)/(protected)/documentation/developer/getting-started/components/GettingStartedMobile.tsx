'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function GettingStartedMobile() {
  const [activeStep, setActiveStep] = useState<'prerequisites' | 'environment' | 'projects' | 'config' | 'workflow' | 'next'>('prerequisites');

  const steps = [
    { id: 'prerequisites', label: '📋 Prerequisites', color: '#2592D0' },
    { id: 'environment', label: '🔧 Environment', color: '#702083' },
    { id: 'projects', label: '🏗️ Projects', color: '#FBBB02' },
    { id: 'config', label: '⚙️ Configuration', color: '#EF7B02' },
    { id: 'workflow', label: '🔄 Workflow', color: '#012E55' },
    { id: 'next', label: '✅ Next Steps', color: '#059669' }
  ];

  return (
    <>
      {/* Step Navigation - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Setup Steps</SubHeading>
        <Section layout="grid" gridCols="1-sm-2" gap="sm">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id as typeof activeStep)}
              className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 w-full ${
                activeStep === step.id
                  ? 'text-white shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: activeStep === step.id ? step.color : 'transparent'
              }}
            >
              {step.label}
            </button>
          ))}
        </Section>
      </Section>

      {/* Prerequisites */}
      {activeStep === 'prerequisites' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Prerequisites</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Section center>
                <Heading level={4} color="blue" size="sm" className="mb-2">💻 Development Tools</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray"><strong>Node.js:</strong> 18.18.0+ (LTS recommended)</Text>
                  <Text variant="small" color="gray"><strong>Package Manager:</strong> pnpm 8.0.0+</Text>
                  <Text variant="small" color="gray"><strong>Git:</strong> Latest version</Text>
                  <Text variant="small" color="gray"><strong>VS Code:</strong> Recommended editor</Text>
                  <Text variant="small" color="gray"><strong>Docker Desktop:</strong> For containers</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Section center>
                <Heading level={4} color="purple" size="sm" className="mb-2">🔐 Access Requirements</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• GitHub account with WSA-admin access</Text>
                  <Text variant="small" color="gray">• Azure AD account (@worksourcealliance.ca)</Text>
                  <Text variant="small" color="gray">• Supabase project access (main platform)</Text>
                  <Text variant="small" color="gray">• Vercel deployment access</Text>
                  <Text variant="small" color="gray">• Development environment variables</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Environment Setup */}
      {activeStep === 'environment' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Environment Setup</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">1. Install Required Tools</Heading>
              <CodeBlock language="bash">
{`# Install Node.js (use nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18.18.0
nvm use 18.18.0

# Install pnpm globally
npm install -g pnpm@latest

# Verify installations
node --version
pnpm --version`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">2. VS Code Extensions</Heading>
              <Text variant="small" color="gray" className="mb-3">Essential extensions for WSA development:</Text>
              <Section spacing="sm" className="mb-3">
                <Text variant="small" color="gray">• TypeScript (built-in support)</Text>
                <Text variant="small" color="gray">• Tailwind CSS IntelliSense</Text>
                <Text variant="small" color="gray">• ES7+ React/Redux snippets</Text>
                <Text variant="small" color="gray">• Prettier code formatting</Text>
                <Text variant="small" color="gray">• ESLint code linting</Text>
              </Section>
              <CodeBlock language="bash">
{`# Install via command line
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension esbenp.prettier-vscode`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Project Setup */}
      {activeStep === 'projects' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Project Setup</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#2592D0] rounded-full mb-2"></div>
                <Heading level={4} color="blue" size="sm" className="mb-2">🌟 Main Platform</Heading>
                <Text variant="caption" className="mb-3">WorkSource Alliance main platform</Text>
                <CodeBlock language="bash" className="text-left">
{`# Clone repository
git clone https://github.com/worksourcealliance/worksourcealliance.git
cd worksourcealliance

# Install dependencies
pnpm install

# Start development
pnpm dev`}
                </CodeBlock>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#702083] rounded-full mb-2"></div>
                <Heading level={4} color="purple" size="sm" className="mb-2">🏛️ WSA Portal</Heading>
                <Text variant="caption" className="mb-3">Internal portal (Current project)</Text>
                <CodeBlock language="bash" className="text-left">
{`# Clone repository
git clone https://github.com/WSA-admin/wsa-portal.git
cd wsa-portal

# Install & start
npm install
npm run dev`}
                </CodeBlock>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full mb-2"></div>
                <Heading level={4} customColor="#FBBB02" size="sm" className="mb-2">🏗️ WSA-Central</Heading>
                <Text variant="caption" className="mb-3">Backend API system</Text>
                <CodeBlock language="bash" className="text-left">
{`# Clone repository
git clone https://github.com/WSA-admin/wsa-central.git
cd wsa-central/clean-architecture

# Start with Docker
docker compose up --build`}
                </CodeBlock>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Configuration */}
      {activeStep === 'config' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Configuration</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Environment Variables</Heading>
              <Text variant="small" color="gray" className="mb-3">
                Contact the development team for required environment variables:
              </Text>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">Main Platform (.env.local)</Heading>
              <CodeBlock variant="compact" language="text">
{`NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">WSA Portal (.env.local)</Heading>
              <CodeBlock variant="compact" language="text">
{`AZURE_AD_TENANT_ID=
AZURE_AD_CLIENT_ID=
AZURE_AD_CLIENT_SECRET=
SESSION_SECRET=
NEXT_PUBLIC_BASE_URL=`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Development Workflow */}
      {activeStep === 'workflow' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Development Workflow</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">🔄 Git Workflow</Heading>
              <CodeBlock language="bash">
{`# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push and create PR
git push origin feature/new-feature`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">🧪 Testing & Quality</Heading>
              <CodeBlock language="bash">
{`# Run linting
npm run lint

# Type checking
npm run type-check

# Run tests
npm test

# Build production
npm run build`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">👥 Team Contacts</Heading>
              <Section spacing="sm">
                <Section>
                  <Text variant="small" weight="medium" customColor="#2592D0">Tanguy Merrien</Text>
                  <Text variant="caption" color="gray">Lead Developer</Text>
                  <Text variant="caption" customColor="#2592D0">📧 info@worksourcealliance.ca</Text>
                </Section>
                <Section>
                  <Text variant="small" weight="medium" customColor="#702083">Alier Garang</Text>
                  <Text variant="caption" color="gray">Development Support</Text>
                  <Text variant="caption" customColor="#702083">📧 alier@worksourcealliance.ca</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Next Steps */}
      {activeStep === 'next' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Next Steps</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📋 Onboarding Checklist</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Complete development environment setup</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Clone and set up all WSA project repositories</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Configure environment variables for each project</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Run each project locally and verify functionality</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">
                    Review{' '}
                    <Link href="/documentation/developer/api" className="text-[#2592D0] hover:underline">
                      API documentation
                    </Link>{' '}
                    and{' '}
                    <Link href="/documentation/developer/security" className="text-[#2592D0] hover:underline">
                      security guidelines
                    </Link>
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Contact team leads and get first assignments</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📚 Additional Resources</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <Link href="/documentation/developer" className="text-[#2592D0] hover:underline">
                    Developer Manual
                  </Link>
                </Text>
                <Text variant="small">
                  <Link href="/documentation/operations" className="text-[#2592D0] hover:underline">
                    Operations Manual
                  </Link>
                </Text>
                <Text variant="small">
                  <a href="https://nextjs.org/docs" target="_blank" className="text-[#2592D0] hover:underline">
                    Next.js Documentation
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://supabase.com/docs" target="_blank" className="text-[#2592D0] hover:underline">
                    Supabase Documentation
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