import { Section, Heading, SubHeading, Card, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Developer Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Getting Started</span>
        </div>
        <Heading>🚀 Getting Started with WSA Development</Heading>
        <p className="text-gray-600">
          Complete setup guide for new developers joining the WorkSource Alliance development team
        </p>
      </Section>

      {/* Prerequisites */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Prerequisites</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">💻 Development Tools</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>Node.js:</strong> 18.18.0+ (LTS recommended)</li>
                  <li>• <strong>Package Manager:</strong> pnpm 8.0.0+</li>
                  <li>• <strong>Git:</strong> Latest version</li>
                  <li>• <strong>VS Code:</strong> Recommended editor</li>
                  <li>• <strong>Docker Desktop:</strong> For containerized development</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-3">🔐 Access Requirements</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• GitHub account with WSA-admin access</li>
                  <li>• Azure AD account (@worksourcealliance.ca)</li>
                  <li>• Supabase project access (main platform)</li>
                  <li>• Vercel deployment access</li>
                  <li>• Development environment variables</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Development Environment Setup */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Environment Setup</SubHeading>
        
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">1. Install Required Tools</h4>
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
git --version   # Latest version`}</CodeBlock>
          </Section>
        </Card>

        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">2. VS Code Extensions</h4>
            <p className="text-sm text-gray-600 mb-3">Install these essential extensions for WSA development:</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• <strong>TypeScript:</strong> Built-in TypeScript support</li>
              <li>• <strong>Tailwind CSS IntelliSense:</strong> Tailwind class completions</li>
              <li>• <strong>ES7+ React/Redux:</strong> React snippets and completions</li>
              <li>• <strong>Prettier:</strong> Code formatting</li>
              <li>• <strong>ESLint:</strong> Code linting</li>
              <li>• <strong>GitLens:</strong> Enhanced Git capabilities</li>
            </ul>
            <CodeBlock language="bash">
{`# Install extensions via command line
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-eslint
code --install-extension eamodio.gitlens`}</CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Project Setup */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Setup Guide</SubHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0] mb-3">🌟 Main Platform Setup</h4>
              <p className="text-sm text-gray-600 mb-3">WorkSource Alliance main platform (Turborepo)</p>
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

# Open: http://localhost:3000`}</CodeBlock>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083] mb-3">🏛️ WSA Portal Setup</h4>
              <p className="text-sm text-gray-600 mb-3">Internal portal (Current project)</p>
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

# Open: http://localhost:3000`}</CodeBlock>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#FBBB02] mb-3">🏗️ WSA-Central Setup</h4>
              <p className="text-sm text-gray-600 mb-3">Backend API system (Python/FastAPI)</p>
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

# Open: http://localhost:8000`}</CodeBlock>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#EF7B02] mb-3">🏢 WSA Hub Setup</h4>
              <p className="text-sm text-gray-600 mb-3">Executive dashboard (Next.js)</p>
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

# Open: http://localhost:3000`}</CodeBlock>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Environment Configuration */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Environment Configuration</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Environment Variables Setup</h4>
            <p className="text-sm text-gray-600 mb-4">
              Contact the development team to get the required environment variables for each project:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">Main Platform (.env.local)</h5>
                <CodeBlock variant="compact" language="text">
{`NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=`}</CodeBlock>
              </div>
              <div>
                <h5 className="font-medium text-[#702083] mb-2">WSA Portal (.env.local)</h5>
                <CodeBlock variant="compact" language="text">
{`AZURE_AD_TENANT_ID=
AZURE_AD_CLIENT_ID=
AZURE_AD_CLIENT_SECRET=
SESSION_SECRET=
NEXT_PUBLIC_BASE_URL=`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Development Workflow */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Workflow</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">🔄 Git Workflow</h4>
                <CodeBlock language="bash">
{`# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push and create PR
git push origin feature/new-feature

# Create pull request via GitHub`}</CodeBlock>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-3">🧪 Testing & Quality</h4>
                <CodeBlock language="bash">
{`# Run linting
npm run lint

# Run type checking  
npm run type-check

# Run tests (when available)
npm test

# Build production
npm run build`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Team Contacts */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Team Contacts & Support</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">👨‍💻 Lead Developer</h4>
                <div className="text-sm">
                  <p className="font-medium">Tanguy Merrien</p>
                  <p className="text-gray-600">Platform Architecture & Maintenance</p>
                  <p className="text-[#2592D0]">📧 info@worksourcealliance.ca</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-2">🤝 Development Support</h4>
                <div className="text-sm">
                  <p className="font-medium">Alier Garang</p>
                  <p className="text-gray-600">IT Support & Developer Assistant</p>
                  <p className="text-[#702083]">📧 alier@worksourcealliance.ca</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">📋 Operations</h4>
                <div className="text-sm">
                  <p className="font-medium">Chuchi Soriano</p>
                  <p className="text-gray-600">Operations & Administration</p>
                  <p className="text-[#FBBB02]">📧 chuchi@worksourcealliance.ca</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Next Steps */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Next Steps</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">📋 Onboarding Checklist</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Complete development environment setup</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Clone and set up all WSA project repositories</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Configure environment variables for each project</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Run each project locally and verify functionality</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Review <Link href="/documentation/developer/api" className="text-[#2592D0] hover:underline">API documentation</Link> and <Link href="/documentation/developer/security" className="text-[#2592D0] hover:underline">security guidelines</Link></span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Contact team leads to introduce yourself and get first assignments</span>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Resources */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Additional Resources</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Documentation</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/developer" className="text-[#2592D0] hover:underline">Developer Manual</Link></p>
                <p><Link href="/documentation/operations" className="text-[#2592D0] hover:underline">Operations Manual</Link></p>
                <p><Link href="/documentation/programs" className="text-[#2592D0] hover:underline">Programs Manual</Link></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔧 Tools & Frameworks</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://nextjs.org/docs" target="_blank" className="text-[#2592D0] hover:underline">Next.js Documentation</a></p>
                <p><a href="https://tailwindcss.com/docs" target="_blank" className="text-[#2592D0] hover:underline">Tailwind CSS</a></p>
                <p><a href="https://supabase.com/docs" target="_blank" className="text-[#2592D0] hover:underline">Supabase Documentation</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🏢 WSA Resources</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://worksourcealliance.com" target="_blank" className="text-[#2592D0] hover:underline">Main Platform</a></p>
                <p><Link href="/documentation" className="text-[#2592D0] hover:underline">Documentation Hub</Link></p>
                <p><span className="text-gray-500">Team Slack (Contact for access)</span></p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}