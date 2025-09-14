import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function GettingStartedDesktop() {
  return (
    <>
      {/* Prerequisites - Desktop */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Prerequisites</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">💻 Development Tools</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray"><strong>Node.js:</strong> 18.18.0+ (LTS recommended)</Text>
                  <Text variant="small" color="gray"><strong>Package Manager:</strong> pnpm 8.0.0+</Text>
                  <Text variant="small" color="gray"><strong>Git:</strong> Latest version</Text>
                  <Text variant="small" color="gray"><strong>VS Code:</strong> Recommended editor</Text>
                  <Text variant="small" color="gray"><strong>Docker Desktop:</strong> For containerized development</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">🔐 Access Requirements</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• GitHub account with WSA-admin access</Text>
                  <Text variant="small" color="gray">• Azure AD account (@worksourcealliance.ca)</Text>
                  <Text variant="small" color="gray">• Supabase project access (main platform)</Text>
                  <Text variant="small" color="gray">• Vercel deployment access</Text>
                  <Text variant="small" color="gray">• Development environment variables</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Development Environment Setup - Desktop */}
      <Section delay={700} animationType="fadeUp">
        <SubHeading>Development Environment Setup</SubHeading>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">1. Install Required Tools</Heading>
            <CodeBlock language="bash">
{`# Install Node.js (use nvm for version management)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18.18.0
nvm use 18.18.0

# Install pnpm globally
npm install -g pnpm@latest

# Verify installations
node --version  # Should be 18.18.0+
pnpm --version  # Should be 8.0.0+
git --version   # Latest version`}
            </CodeBlock>
          </Section>
        </Card>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">2. VS Code Extensions</Heading>
            <Text variant="small" color="gray" className="mb-3">Install these essential extensions for WSA development:</Text>
            <Section spacing="sm" className="mb-4">
              <Text variant="small" color="gray"><strong>TypeScript:</strong> Built-in TypeScript support</Text>
              <Text variant="small" color="gray"><strong>Tailwind CSS IntelliSense:</strong> Tailwind class completions</Text>
              <Text variant="small" color="gray"><strong>ES7+ React/Redux:</strong> React snippets and completions</Text>
              <Text variant="small" color="gray"><strong>Prettier:</strong> Code formatting</Text>
              <Text variant="small" color="gray"><strong>ESLint:</strong> Code linting</Text>
              <Text variant="small" color="gray"><strong>GitLens:</strong> Enhanced Git capabilities</Text>
            </Section>
            <CodeBlock language="bash">
{`# Install extensions via command line
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-eslint
code --install-extension eamodio.gitlens`}
            </CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Project Setup Guide - Desktop */}
      <Section delay={900} animationType="slideLeft">
        <SubHeading>Project Setup Guide</SubHeading>
        <Section layout="grid" gridCols="1-lg-2" gap="lg">

          <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">🌟 Main Platform Setup</Heading>
              <Text variant="small" color="gray" className="mb-3">WorkSource Alliance main platform (Turborepo)</Text>
              <CodeBlock language="bash">
{`# Clone repository
git clone https://github.com/worksourcealliance/worksourcealliance.git
cd worksourcealliance

# Install dependencies
pnpm install

# Copy environment template
cp apps/web/.env.example apps/web/.env.local

# Start development server
pnpm dev

# Open: http://localhost:3000`}
              </CodeBlock>
            </Section>
          </Card>

          <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">🏛️ WSA Portal Setup</Heading>
              <Text variant="small" color="gray" className="mb-3">Internal portal (Current project)</Text>
              <CodeBlock language="bash">
{`# Clone repository
git clone https://github.com/WSA-admin/wsa-portal.git
cd wsa-portal

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev

# Open: http://localhost:3000`}
              </CodeBlock>
            </Section>
          </Card>

          <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} customColor="#FBBB02" weight="semibold" className="mb-3">🏗️ WSA-Central Setup</Heading>
              <Text variant="small" color="gray" className="mb-3">Backend API system (Python/FastAPI)</Text>
              <CodeBlock language="bash">
{`# Clone repository
git clone https://github.com/WSA-admin/wsa-central.git
cd wsa-central/clean-architecture

# Start with Docker (recommended)
docker compose up --build

# Or manual Python setup
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt

# Open: http://localhost:8000`}
              </CodeBlock>
            </Section>
          </Card>

          <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} customColor="#EF7B02" weight="semibold" className="mb-3">🏢 WSA Hub Setup</Heading>
              <Text variant="small" color="gray" className="mb-3">Executive dashboard (Next.js)</Text>
              <CodeBlock language="bash">
{`# Clone repository
git clone https://github.com/WSA-admin/wsa-hub.git
cd wsa-hub

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev

# Open: http://localhost:3000`}
              </CodeBlock>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Environment Configuration - Desktop */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Environment Configuration</SubHeading>
        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Environment Variables Setup</Heading>
            <Text variant="small" color="gray" className="mb-4">
              Contact the development team to get the required environment variables for each project:
            </Text>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">Main Platform (.env.local)</Heading>
                <CodeBlock variant="compact" language="text">
{`NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=`}
                </CodeBlock>
              </Section>
              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">WSA Portal (.env.local)</Heading>
                <CodeBlock variant="compact" language="text">
{`AZURE_AD_TENANT_ID=
AZURE_AD_CLIENT_ID=
AZURE_AD_CLIENT_SECRET=
SESSION_SECRET=
NEXT_PUBLIC_BASE_URL=`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Development Workflow - Desktop */}
      <Section delay={1300} animationType="slideLeft">
        <SubHeading>Development Workflow</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">🔄 Git Workflow</Heading>
                <CodeBlock language="bash">
{`# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push and create PR
git push origin feature/new-feature

# Create pull request via GitHub`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">🧪 Testing & Quality</Heading>
                <CodeBlock language="bash">
{`# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests (when available)
npm test

# Build production
npm run build`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Team Contacts & Support - Desktop */}
      <Section delay={1500} animationType="fadeUp">
        <SubHeading>Team Contacts & Support</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-2">👨‍💻 Lead Developer</Heading>
                <Section spacing="sm">
                  <Text variant="small" weight="medium">Tanguy Merrien</Text>
                  <Text variant="small" color="gray">Platform Architecture & Maintenance</Text>
                  <Text variant="small" customColor="#2592D0">📧 info@worksourcealliance.ca</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" weight="semibold" className="mb-2">🤝 Development Support</Heading>
                <Section spacing="sm">
                  <Text variant="small" weight="medium">Alier Garang</Text>
                  <Text variant="small" color="gray">IT Support & Developer Assistant</Text>
                  <Text variant="small" customColor="#702083">📧 alier@worksourcealliance.ca</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#FBBB02" weight="semibold" className="mb-2">📋 Operations</Heading>
                <Section spacing="sm">
                  <Text variant="small" weight="medium">Chuchi Soriano</Text>
                  <Text variant="small" color="gray">Operations & Administration</Text>
                  <Text variant="small" customColor="#FBBB02">📧 chuchi@worksourcealliance.ca</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Next Steps & Onboarding - Desktop */}
      <Section delay={1700} animationType="slideLeft">
        <SubHeading>Next Steps</SubHeading>
        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">📋 Onboarding Checklist</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
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
              </Section>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Run each project locally and verify functionality</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">
                    Review{' '}
                    <Link href="/documentation/developer/api" className="text-[#2592D0] hover:underline transition-colors">
                      API documentation
                    </Link>{' '}
                    and{' '}
                    <Link href="/documentation/developer/security" className="text-[#2592D0] hover:underline transition-colors">
                      security guidelines
                    </Link>
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Contact team leads to introduce yourself and get first assignments</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Additional Resources - Desktop */}
      <Section delay={1900} animationType="fadeUp">
        <SubHeading>Additional Resources</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-2">📚 Documentation</Heading>
                <Section spacing="sm">
                  <Text variant="small">
                    <Link href="/documentation/developer" className="text-[#2592D0] hover:underline transition-colors">
                      Developer Manual
                    </Link>
                  </Text>
                  <Text variant="small">
                    <Link href="/documentation/operations" className="text-[#2592D0] hover:underline transition-colors">
                      Operations Manual
                    </Link>
                  </Text>
                  <Text variant="small">
                    <Link href="/documentation/programs" className="text-[#2592D0] hover:underline transition-colors">
                      Programs Manual
                    </Link>
                  </Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-2">🔧 Tools & Frameworks</Heading>
                <Section spacing="sm">
                  <Text variant="small">
                    <a href="https://nextjs.org/docs" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      Next.js Documentation
                    </a>
                  </Text>
                  <Text variant="small">
                    <a href="https://tailwindcss.com/docs" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      Tailwind CSS
                    </a>
                  </Text>
                  <Text variant="small">
                    <a href="https://supabase.com/docs" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      Supabase Documentation
                    </a>
                  </Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-2">🏢 WSA Resources</Heading>
                <Section spacing="sm">
                  <Text variant="small">
                    <a href="https://worksourcealliance.com" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      Main Platform
                    </a>
                  </Text>
                  <Text variant="small">
                    <Link href="/documentation" className="text-[#2592D0] hover:underline transition-colors">
                      Documentation Hub
                    </Link>
                  </Text>
                  <Text variant="small" color="gray">Team Slack (Contact for access)</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>
    </>
  );
}