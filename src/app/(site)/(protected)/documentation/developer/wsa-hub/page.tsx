import { Section, Heading, SubHeading, Card, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WSAHubPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Developer Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">WSA Executive Hub</span>
        </div>
        <Heading>🏢 WSA Executive Hub</Heading>
        <p className="text-gray-600 text-lg">
          Private landing page showcasing platform capabilities and development progress for executives and board members
        </p>
      </Section>

      {/* Project Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#EF7B02] mb-2">Purpose</h4>
                <p className="text-gray-600 text-sm mb-4">
                  The WSA Executive Hub serves as a private showcase platform designed specifically for executives, 
                  board members, and key stakeholders to view platform capabilities, development progress, and strategic insights.
                </p>
                
                <h4 className="font-semibold text-[#2592D0] mb-2">Current Status</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Status:</span> Production</p>
                  <p><span className="font-medium">Environment:</span> Private Access</p>
                  <p><span className="font-medium">Repository:</span> WSA-admin/wsa-hub</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-2">Target Audience</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 👨‍💼 Executive Leadership</li>
                  <li>• 🏛️ Board Members</li>
                  <li>• 🤝 Key Stakeholders</li>
                  <li>• 💼 Potential Investors</li>
                  <li>• 🏢 Strategic Partners</li>
                  <li>• 📊 Senior Management</li>
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
              <h4 className="font-semibold text-gray-900">Technology Stack</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Framework:</strong> Next.js (Latest)</p>
                <p><strong>Language:</strong> TypeScript</p>
                <p><strong>Styling:</strong> Modern CSS/Tailwind</p>
                <p><strong>Fonts:</strong> Geist (Vercel Font Family)</p>
                <p><strong>Deployment:</strong> Vercel Platform</p>
                <p><strong>Domain:</strong> Private Access URL</p>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Project Structure</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Type:</strong> Standard Next.js App</p>
                <p><strong>Bootstrap:</strong> create-next-app</p>
                <p><strong>Entry Point:</strong> app/page.tsx</p>
                <p><strong>Auto-Updates:</strong> Live editing support</p>
                <p><strong>Optimization:</strong> Automatic font loading</p>
                <p><strong>Build:</strong> Production-ready</p>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Key Features */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Key Features & Capabilities</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0] mb-3">📊 Executive Dashboard</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <span><strong>Platform Metrics:</strong> Key performance indicators and usage statistics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <span><strong>Growth Tracking:</strong> User acquisition and engagement metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <span><strong>Impact Visualization:</strong> Success stories and outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2592D0] mr-2">•</span>
                  <span><strong>Strategic Overview:</strong> High-level platform insights</span>
                </li>
              </ul>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083] mb-3">🚀 Development Progress</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <span><strong>Project Timeline:</strong> Development milestones and roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <span><strong>Feature Updates:</strong> Latest capabilities and enhancements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <span><strong>Technical Achievements:</strong> Architecture and performance improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#702083] mr-2">•</span>
                  <span><strong>Future Planning:</strong> Upcoming initiatives and innovations</span>
                </li>
              </ul>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#FBBB02] mb-3">🏢 Platform Showcase</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <span><strong>Live Demonstrations:</strong> Interactive platform walkthroughs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <span><strong>Feature Highlights:</strong> Core functionality presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <span><strong>User Experience:</strong> Interface and usability showcases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FBBB02] mr-2">•</span>
                  <span><strong>Integration Examples:</strong> System connectivity demonstrations</span>
                </li>
              </ul>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#EF7B02] mb-3">📈 Strategic Insights</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <span><strong>Market Analysis:</strong> Industry positioning and competitive landscape</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <span><strong>ROI Tracking:</strong> Investment returns and value creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <span><strong>Partnership Impact:</strong> Collaboration outcomes and benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF7B02] mr-2">•</span>
                  <span><strong>Future Opportunities:</strong> Growth potential and expansion plans</span>
                </li>
              </ul>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Development Structure */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Structure</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Next.js Application Structure</h4>
            <CodeBlock 
              title="Next.js Application Structure"
              language="structure"
            >{`wsa-hub/
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
    └── README.md                 # Project documentation`}</CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Access & Security */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Access & Security</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">🔐 Private Access</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Access Type:</strong> Private URL with restricted access</p>
                  <p><strong>Target Users:</strong> Executives and board members only</p>
                  <p><strong>Content:</strong> Confidential business information</p>
                  <p><strong>Security:</strong> Protected deployment environment</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-2">🛡️ Security Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Private repository access</li>
                  <li>• Restricted URL distribution</li>
                  <li>• Confidential content protection</li>
                  <li>• Executive-only viewing rights</li>
                  <li>• Secure deployment pipeline</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Development Workflow */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Workflow</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Standard Next.js Development</h4>
            <CodeBlock 
              title="Standard Next.js Development"
              language="bash"
            >{`# Development server
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
# Automatic deployment via Vercel platform`}</CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Integration with Other Projects */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Integration with WSA Ecosystem</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">🔗 Data Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Main Platform:</strong> User and job metrics from worksourcealliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>WSA-Central:</strong> Analytics and processing data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Portal:</strong> Team performance and documentation usage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-3">📊 Reporting Integration</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Real-time Updates:</strong> Live platform statistics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Consolidated Views:</strong> Cross-platform insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Executive Summaries:</strong> High-level progress reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Key Stakeholders */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Key Stakeholders</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">👨‍💼 Executive Leadership</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daniel Ohaegbu (Executive Director)</li>
                  <li>• Chuchi Soriano (Operations Manager)</li>
                  <li>• Strategic decision makers</li>
                  <li>• Department heads</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-3">🏛️ Board Members</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Teresa Tu (President)</li>
                  <li>• Patrick Farrar (Vice President)</li>
                  <li>• Emma Drake (Secretary)</li>
                  <li>• Other board directors</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-3">🤝 External Stakeholders</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Potential investors</li>
                  <li>• Strategic partners</li>
                  <li>• Government liaisons</li>
                  <li>• Advisory committee</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Future Enhancements */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Future Enhancements</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Planned Improvements</h4>
            <div className="space-y-4">
              
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Enhanced Analytics Dashboard</h5>
                  <p className="text-sm text-gray-600">Interactive charts, real-time data visualization, and comprehensive KPI tracking</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Automated Reporting</h5>
                  <p className="text-sm text-gray-600">Scheduled reports, email notifications, and customizable executive summaries</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Mobile Optimization</h5>
                  <p className="text-sm text-gray-600">Responsive design improvements and mobile-first executive access</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">API Integration</h5>
                  <p className="text-sm text-gray-600">Direct integration with WSA-Central and main platform for real-time data</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Resources & Links */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Resources & Links</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔗 Project Access</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://github.com/WSA-admin/wsa-hub" target="_blank" className="text-[#EF7B02] hover:underline">GitHub Repository</a></p>
                <p><span className="text-gray-500">Private repository access required</span></p>
                <p><span className="text-gray-500">Contact: info@worksourcealliance.ca</span></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Documentation</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/developer" className="text-[#EF7B02] hover:underline">Developer Manual</Link></p>
                <p><a href="https://nextjs.org/docs" target="_blank" className="text-[#EF7B02] hover:underline">Next.js Documentation</a></p>
                <p><a href="https://nextjs.org/learn" target="_blank" className="text-[#EF7B02] hover:underline">Next.js Tutorial</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🚀 Deployment</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://vercel.com" target="_blank" className="text-[#EF7B02] hover:underline">Vercel Platform</a></p>
                <p><a href="https://vercel.com/font" target="_blank" className="text-[#EF7B02] hover:underline">Geist Font Family</a></p>
                <p><span className="text-gray-500">Production deployment</span></p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}