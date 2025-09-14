'use client';

import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WSAHubDesktop() {
  return (
    <>
      {/* Project Overview */}
      <Section delay={500} animationType="slideLeft" spacing="md">
        <SubHeading>Project Overview</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section spacing="md">
                <Heading level={4} customColor="#EF7B02" className="mb-2">Purpose</Heading>
                <Text variant="small" color="gray" className="mb-4">
                  The WSA Executive Hub serves as a private showcase platform designed specifically for executives,
                  board members, and key stakeholders to view platform capabilities, development progress, and strategic insights.
                </Text>

                <Heading level={4} customColor="#2592D0" className="mb-2">Current Status</Heading>
                <Section spacing="sm">
                  <Text variant="small"><span className="font-semibold">Status:</span> Production</Text>
                  <Text variant="small"><span className="font-semibold">Environment:</span> Private Access</Text>
                  <Text variant="small"><span className="font-semibold">Repository:</span> WSA-admin/wsa-hub</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" className="mb-2">Target Audience</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• 👨‍💼 Executive Leadership</Text>
                  <Text variant="small" color="gray">• 🏛️ Board Members</Text>
                  <Text variant="small" color="gray">• 🤝 Key Stakeholders</Text>
                  <Text variant="small" color="gray">• 💼 Potential Investors</Text>
                  <Text variant="small" color="gray">• 🏢 Strategic Partners</Text>
                  <Text variant="small" color="gray">• 📊 Senior Management</Text>
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
              <Heading level={4} weight="semibold" color="gray">Technology Stack</Heading>
              <Section spacing="sm">
                <Text variant="small"><span className="font-semibold">Framework:</span> Next.js (Latest)</Text>
                <Text variant="small"><span className="font-semibold">Language:</span> TypeScript</Text>
                <Text variant="small"><span className="font-semibold">Styling:</span> Modern CSS/Tailwind</Text>
                <Text variant="small"><span className="font-semibold">Fonts:</span> Geist (Vercel Font Family)</Text>
                <Text variant="small"><span className="font-semibold">Deployment:</span> Vercel Platform</Text>
                <Text variant="small"><span className="font-semibold">Domain:</span> Private Access URL</Text>
              </Section>
            </Section>
          </Card>

          <Card variant="gray">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">Project Structure</Heading>
              <Section spacing="sm">
                <Text variant="small"><span className="font-semibold">Type:</span> Standard Next.js App</Text>
                <Text variant="small"><span className="font-semibold">Bootstrap:</span> create-next-app</Text>
                <Text variant="small"><span className="font-semibold">Entry Point:</span> app/page.tsx</Text>
                <Text variant="small"><span className="font-semibold">Auto-Updates:</span> Live editing support</Text>
                <Text variant="small"><span className="font-semibold">Optimization:</span> Automatic font loading</Text>
                <Text variant="small"><span className="font-semibold">Build:</span> Production-ready</Text>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Key Features & Capabilities */}
      <Section delay={700} animationType="slideLeft" spacing="md">
        <SubHeading>Key Features & Capabilities</SubHeading>
        <Section layout="grid" gridCols="1-sm-2" gap="lg">
          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#2592D0" className="mb-3">📊 Executive Dashboard</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Platform Metrics:</span> Key performance indicators and usage statistics
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Growth Tracking:</span> User acquisition and engagement metrics
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Impact Visualization:</span> Success stories and outcomes
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Strategic Overview:</span> High-level platform insights
                  </Text>
                </Section>
              </Section>
            </Section>
          </Card>

          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#702083" className="mb-3">🚀 Development Progress</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Project Timeline:</span> Development milestones and roadmap
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Feature Updates:</span> Latest capabilities and enhancements
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Technical Achievements:</span> Architecture and performance improvements
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Future Planning:</span> Upcoming initiatives and innovations
                  </Text>
                </Section>
              </Section>
            </Section>
          </Card>

          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#FBBB02" className="mb-3">🏢 Platform Showcase</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Live Demonstrations:</span> Interactive platform walkthroughs
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Feature Highlights:</span> Core functionality presentations
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">User Experience:</span> Interface and usability showcases
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Integration Examples:</span> System connectivity demonstrations
                  </Text>
                </Section>
              </Section>
            </Section>
          </Card>

          <Card variant="white">
            <Section spacing="sm">
              <Heading level={4} customColor="#EF7B02" className="mb-3">📈 Strategic Insights</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Market Analysis:</span> Industry positioning and competitive landscape
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">ROI Tracking:</span> Investment returns and value creation
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Partnership Impact:</span> Collaboration outcomes and benefits
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Future Opportunities:</span> Growth potential and expansion plans
                  </Text>
                </Section>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Development Structure */}
      <Section delay={800} animationType="slideRight" spacing="md">
        <SubHeading>Development Structure</SubHeading>
        <Card variant="gray">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Next.js Application Structure</Heading>
            <CodeBlock language="structure">
{`wsa-hub/
├── 📱 app/
│   ├── page.tsx                  # Main hub landing page
│   ├── layout.tsx                # Application layout
│   ├── globals.css               # Global styles
│   └── favicon.ico               # Site favicon
├── 📄 public/
│   ├── next.svg                  # Next.js logo
│   └── vercel.svg                # Vercel logo
├── 🔧 Configuration
│   ├── next.config.js            # Next.js configuration
│   ├── tsconfig.json             # TypeScript configuration
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   └── postcss.config.js         # PostCSS configuration
├── 📦 Dependencies
│   ├── package.json              # Project dependencies
│   └── package-lock.json         # Dependency lock file
└── 📋 Documentation
    └── README.md                 # Project documentation`}
            </CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Access & Security */}
      <Section delay={900} animationType="slideLeft" spacing="md">
        <SubHeading>Access & Security</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" className="mb-2">🔐 Private Access</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Access Type:</span> Private URL with restricted access
                  </Text>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Target Users:</span> Executives and board members only
                  </Text>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Content:</span> Confidential business information
                  </Text>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Security:</span> Protected deployment environment
                  </Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" className="mb-2">🛡️ Security Features</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Private repository access</Text>
                  <Text variant="small" color="gray">• Restricted URL distribution</Text>
                  <Text variant="small" color="gray">• Confidential content protection</Text>
                  <Text variant="small" color="gray">• Executive-only viewing rights</Text>
                  <Text variant="small" color="gray">• Secure deployment pipeline</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Development Workflow */}
      <Section delay={1000} animationType="slideRight" spacing="md">
        <SubHeading>Development Workflow</SubHeading>
        <Card variant="gray">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Standard Next.js Development</Heading>
            <CodeBlock language="bash">
{`# Development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

# Access development server
# Open http://localhost:3000

# Production build
npm run build
npm run start

# Deployment
# Automatic deployment via Vercel platform`}
            </CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Integration with WSA Ecosystem */}
      <Section delay={1100} animationType="slideLeft" spacing="md">
        <SubHeading>Integration with WSA Ecosystem</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" className="mb-3">🔗 Data Sources</Heading>
                <Section spacing="sm">
                  <Section orientation="horizontal" spacing="sm" className="items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <Text variant="small" color="gray">
                      <span className="font-semibold">Main Platform:</span> User and job metrics from worksourcealliance
                    </Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <Text variant="small" color="gray">
                      <span className="font-semibold">WSA-Central:</span> Analytics and processing data
                    </Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <Text variant="small" color="gray">
                      <span className="font-semibold">Portal:</span> Team performance and documentation usage
                    </Text>
                  </Section>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" className="mb-3">📊 Reporting Integration</Heading>
                <Section spacing="sm">
                  <Section orientation="horizontal" spacing="sm" className="items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <Text variant="small" color="gray">
                      <span className="font-semibold">Real-time Updates:</span> Live platform statistics
                    </Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <Text variant="small" color="gray">
                      <span className="font-semibold">Consolidated Views:</span> Cross-platform insights
                    </Text>
                  </Section>
                  <Section orientation="horizontal" spacing="sm" className="items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <Text variant="small" color="gray">
                      <span className="font-semibold">Executive Summaries:</span> High-level progress reports
                    </Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Key Stakeholders */}
      <Section delay={1200} animationType="slideRight" spacing="md">
        <SubHeading>Key Stakeholders</SubHeading>
        <Card variant="white">
          <Section spacing="sm">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" className="mb-3">👨‍💼 Executive Leadership</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Daniel Ohaegbu (Executive Director)</Text>
                  <Text variant="small" color="gray">• Chuchi Soriano (Operations Manager)</Text>
                  <Text variant="small" color="gray">• Strategic decision makers</Text>
                  <Text variant="small" color="gray">• Department heads</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" className="mb-3">🏛️ Board Members</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Teresa Tu (President)</Text>
                  <Text variant="small" color="gray">• Patrick Farrar (Vice President)</Text>
                  <Text variant="small" color="gray">• Emma Drake (Secretary)</Text>
                  <Text variant="small" color="gray">• Other board directors</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#FBBB02" className="mb-3">🤝 External Stakeholders</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Potential investors</Text>
                  <Text variant="small" color="gray">• Strategic partners</Text>
                  <Text variant="small" color="gray">• Government liaisons</Text>
                  <Text variant="small" color="gray">• Advisory committee</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Future Enhancements */}
      <Section delay={1300} animationType="slideLeft" spacing="md">
        <SubHeading>Future Enhancements</SubHeading>
        <Card variant="gray">
          <Section spacing="sm">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Planned Improvements</Heading>
            <Section spacing="lg">
              <Section orientation="horizontal" spacing="sm" className="items-start">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                <Section>
                  <Heading level={5} weight="semibold" color="gray">Enhanced Analytics Dashboard</Heading>
                  <Text variant="small" color="gray">Interactive charts, real-time data visualization, and comprehensive KPI tracking</Text>
                </Section>
              </Section>

              <Section orientation="horizontal" spacing="sm" className="items-start">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
                <Section>
                  <Heading level={5} weight="semibold" color="gray">Automated Reporting</Heading>
                  <Text variant="small" color="gray">Scheduled reports, email notifications, and customizable executive summaries</Text>
                </Section>
              </Section>

              <Section orientation="horizontal" spacing="sm" className="items-start">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                <Section>
                  <Heading level={5} weight="semibold" color="gray">Mobile Optimization</Heading>
                  <Text variant="small" color="gray">Responsive design improvements and mobile-first executive access</Text>
                </Section>
              </Section>

              <Section orientation="horizontal" spacing="sm" className="items-start">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 flex-shrink-0"></div>
                <Section>
                  <Heading level={5} weight="semibold" color="gray">API Integration</Heading>
                  <Text variant="small" color="gray">Direct integration with WSA-Central and main platform for real-time data</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Resources & Links */}
      <Section delay={1400} animationType="slideRight" spacing="md">
        <SubHeading>Resources & Links</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" spacing="lg">
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">🔗 Project Access</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://github.com/WSA-admin/wsa-hub" target="_blank" className="text-[#EF7B02] hover:underline">
                    GitHub Repository
                  </a>
                </Text>
                <Text variant="small" color="gray">Private repository access required</Text>
                <Text variant="small" color="gray">Contact: info@worksourcealliance.ca</Text>
              </Section>
            </Section>
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">📚 Documentation</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <Link href="/documentation/developer" className="text-[#EF7B02] hover:underline">
                    Developer Manual
                  </Link>
                </Text>
                <Text variant="small">
                  <a href="https://nextjs.org/docs" target="_blank" className="text-[#EF7B02] hover:underline">
                    Next.js Documentation
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://nextjs.org/learn" target="_blank" className="text-[#EF7B02] hover:underline">
                    Next.js Tutorial
                  </a>
                </Text>
              </Section>
            </Section>
            <Section spacing="sm" fill>
              <Heading level={4} weight="semibold" color="gray">🚀 Deployment</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://vercel.com" target="_blank" className="text-[#EF7B02] hover:underline">
                    Vercel Platform
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://vercel.com/font" target="_blank" className="text-[#EF7B02] hover:underline">
                    Geist Font Family
                  </a>
                </Text>
                <Text variant="small" color="gray">Production deployment</Text>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>
    </>
  );
}