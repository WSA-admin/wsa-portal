import { Section, Card, SubHeading, Text, Heading } from "@/app/components/ui";
import Link from "next/link";

export default function DeveloperDesktop() {
  return (
    <>
      {/* Platform Overview - Desktop */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Platform Overview</SubHeading>
        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Text color="gray">
              WorkSource Alliance operates a comprehensive digital ecosystem consisting of 4 main projects, each serving
              specific purposes in connecting international students and graduates with Atlantic Canada&apos;s opportunities.
            </Text>
            <Section layout="grid" gridCols="1-sm-2" gap="md" className="mt-4">
              <Section border borderColor="#2592D0" padding="md" className="bg-white rounded-lg border-l-4 border-r-0 border-t-0 border-b-0">
                <Heading level={4} customColor="#2592D0" weight="semibold" size="base" className="mb-3">Frontend Platforms</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Main Platform (Next.js/Supabase)</Text>
                  <Text variant="small" color="gray">• Internal Portal (Next.js/Azure AD)</Text>
                  <Text variant="small" color="gray">• Executive Hub (Next.js)</Text>
                </Section>
              </Section>
              <Section border borderColor="#702083" padding="md" className="bg-white rounded-lg border-l-4 border-r-0 border-t-0 border-b-0">
                <Heading level={4} customColor="#702083" weight="semibold" size="base" className="mb-3">Backend Systems</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Central API (FastAPI/PostgreSQL)</Text>
                  <Text variant="small" color="gray">• Resume Processing System</Text>
                  <Text variant="small" color="gray">• Job Matching Algorithm</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Development Team - Desktop */}
      <Section delay={700} animationType="fadeUp">
        <SubHeading>Development Team</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section border borderColor="#2592D0" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-blue-50">
                <Heading level={4} color="gray">Tanguy Merrien</Heading>
                <Text variant="small" color="gray" className="mb-2">Lead Developer & System Administrator</Text>
                <Text variant="small" color="blue" weight="medium" className="break-all">📧 info@worksourcealliance.ca</Text>
                <Text variant="caption" color="gray" customColor="#6B7280" className="mt-1">Platform Architecture & Maintenance</Text>
              </Section>
              <Section border borderColor="#702083" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-purple-50">
                <Heading level={4} color="gray">Alier Garang</Heading>
                <Text variant="small" color="gray" className="mb-2">IT Support & Software Developer Assistant</Text>
                <Text variant="small" color="blue" weight="medium" className="break-all">📧 alier@worksourcealliance.ca</Text>
                <Text variant="caption" color="gray" customColor="#6B7280" className="mt-1">Development Support & Testing</Text>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* WSA Project Portfolio - Desktop */}
      <Section delay={900} animationType="slideLeft">
        <SubHeading>WSA Project Portfolio</SubHeading>
        <Section layout="grid" gridCols="1-lg-2" gap="lg">

          {/* WSA Main Platform */}
          <Card variant="white" className="flex flex-col transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <Section className="flex-1">
              <Section orientation="horizontal" spacing="sm" className="items-center mb-3">
                <div className="w-3 h-3 bg-[#2592D0] rounded-full"></div>
                <Heading level={3} customColor="#2592D0" size="xl">WorkSource Alliance Platform</Heading>
              </Section>
              <Text color="gray" className="mb-3">
                Main public-facing platform connecting job seekers with employers across Atlantic Canada.
              </Text>
              <Section spacing="sm" className="mb-4">
                <Text variant="small"><strong>Tech Stack:</strong> Next.js 15, Supabase, TypeScript, Tailwind CSS</Text>
                <Text variant="small"><strong>Features:</strong> Job Board, User Profiles, Employer Tools, Analytics</Text>
                <Text variant="small"><strong>Status:</strong> Production (v0.0.3)</Text>
              </Section>
            </Section>
            <Link
              href="/documentation/developer/worksourcealliance"
              className="text-[#2592D0] hover:text-[#012E55] font-medium transition-colors py-2 px-3 -mx-3 rounded-md hover:bg-blue-50 active:bg-blue-100"
            >
              View Project Documentation →
            </Link>
          </Card>

          {/* WSA Central API */}
          <Card variant="white" className="flex flex-col transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <Section className="flex-1">
              <Section orientation="horizontal" spacing="sm" className="items-center mb-3">
                <div className="w-3 h-3 bg-[#702083] rounded-full"></div>
                <Heading level={3} customColor="#702083" size="xl">WSA-Central API</Heading>
              </Section>
              <Text color="gray" className="mb-3">
                Centralized data management system with resume processing and job matching algorithms.
              </Text>
              <Section spacing="sm" className="mb-4">
                <Text variant="small"><strong>Tech Stack:</strong> FastAPI, PostgreSQL, Python, Docker</Text>
                <Text variant="small"><strong>Features:</strong> Resume Parsing, Job Matching, Data Hub</Text>
                <Text variant="small"><strong>Status:</strong> Development</Text>
              </Section>
            </Section>
            <Link
              href="/documentation/developer/wsa-central"
              className="text-[#702083] hover:text-[#012E55] font-medium transition-colors py-2 px-3 -mx-3 rounded-md hover:bg-purple-50 active:bg-purple-100"
            >
              View Project Documentation →
            </Link>
          </Card>

          {/* WSA Portal */}
          <Card variant="white" className="flex flex-col transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <Section className="flex-1">
              <Section orientation="horizontal" spacing="sm" className="items-center mb-3">
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full"></div>
                <Heading level={3} customColor="#FBBB02" size="xl">WSA Portal (Current)</Heading>
              </Section>
              <Text color="gray" className="mb-3">
                Internal secure portal with Microsoft Azure AD authentication and SharePoint integration.
              </Text>
              <Section spacing="sm" className="mb-4">
                <Text variant="small"><strong>Tech Stack:</strong> Next.js 15, Azure AD, SharePoint, TypeScript</Text>
                <Text variant="small"><strong>Features:</strong> Authentication, Documentation, Team Management</Text>
                <Text variant="small"><strong>Status:</strong> Active Development</Text>
              </Section>
            </Section>
            <Link
              href="/documentation/developer/wsa-portal"
              className="text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors py-2 px-3 -mx-3 rounded-md hover:bg-yellow-50 active:bg-yellow-100"
            >
              View Project Documentation →
            </Link>
          </Card>

          {/* WSA Hub */}
          <Card variant="white" className="flex flex-col transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <Section className="flex-1">
              <Section orientation="horizontal" spacing="sm" className="items-center mb-3">
                <div className="w-3 h-3 bg-[#EF7B02] rounded-full"></div>
                <Heading level={3} customColor="#EF7B02" size="xl">WSA Executive Hub</Heading>
              </Section>
              <Text color="gray" className="mb-3">
                Private landing page showcasing platform capabilities and development progress for executives and board members.
              </Text>
              <Section spacing="sm" className="mb-4">
                <Text variant="small"><strong>Tech Stack:</strong> Next.js, TypeScript, Vercel</Text>
                <Text variant="small"><strong>Features:</strong> Executive Dashboard, Progress Tracking</Text>
                <Text variant="small"><strong>Status:</strong> Production</Text>
              </Section>
            </Section>
            <Link
              href="/documentation/developer/wsa-hub"
              className="text-[#EF7B02] hover:text-[#012E55] font-medium transition-colors py-2 px-3 -mx-3 rounded-md hover:bg-orange-50 active:bg-orange-100"
            >
              View Project Documentation →
            </Link>
          </Card>
        </Section>
      </Section>

      {/* Development Resources - Desktop */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Development Resources</SubHeading>
        <Section layout="grid" gridCols="1-sm-2-lg-3" gap="md">
          <Card variant="gray" className="text-center transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">🔧 Development Environment</Heading>
              <Section spacing="sm" className="text-left">
                <Text variant="small" color="gray">• Node.js 18.18.0+</Text>
                <Text variant="small" color="gray">• pnpm package manager</Text>
                <Text variant="small" color="gray">• Docker Desktop</Text>
                <Text variant="small" color="gray">• VS Code recommended</Text>
              </Section>
            </Section>
          </Card>

          <Card variant="gray" className="text-center transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">📚 Documentation</Heading>
              <Section spacing="sm" className="text-left">
                <Text variant="small" color="gray">• API Documentation</Text>
                <Text variant="small" color="gray">• Database Schemas</Text>
                <Text variant="small" color="gray">• Security Guidelines</Text>
                <Text variant="small" color="gray">• Deployment Guides</Text>
              </Section>
            </Section>
          </Card>

          <Card variant="gray" className="text-center transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray">🔐 Security & Access</Heading>
              <Section spacing="sm" className="text-left">
                <Text variant="small" color="gray">• GitHub Repository Access</Text>
                <Text variant="small" color="gray">• Azure AD Integration</Text>
                <Text variant="small" color="gray">• Environment Variables</Text>
                <Text variant="small" color="gray">• Production Deployment</Text>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Quick Actions - Desktop */}
      <Section delay={1300} animationType="slideLeft">
        <SubHeading>Quick Actions</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
            <Section border borderColor="#2592D0" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-blue-50">
              <Heading level={4} color="gray" className="mb-2">🚀 Getting Started</Heading>
              <Text variant="small" className="mb-2">New to WSA development?</Text>
              <Link href="/documentation/developer/getting-started" className="text-[#2592D0] hover:text-[#012E55] font-medium text-sm transition-colors">
                Setup Guide →
              </Link>
            </Section>
            <Section border borderColor="#702083" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-purple-50">
              <Heading level={4} color="gray" className="mb-2">📖 API Reference</Heading>
              <Text variant="small" className="mb-2">Explore our APIs and endpoints</Text>
              <Link href="/documentation/developer/api" className="text-[#702083] hover:text-[#012E55] font-medium text-sm transition-colors">
                View APIs →
              </Link>
            </Section>
            <Section border borderColor="#FBBB02" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-yellow-50">
              <Heading level={4} color="gray" className="mb-2">🔒 Security Guide</Heading>
              <Text variant="small" className="mb-2">Security best practices</Text>
              <Link href="/documentation/developer/security" className="text-[#FBBB02] hover:text-[#012E55] font-medium text-sm transition-colors">
                Security Docs →
              </Link>
            </Section>
          </Section>
        </Card>
      </Section>
    </>
  );
}