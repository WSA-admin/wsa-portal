import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function DeveloperManualPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Documentation Hub
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Developer Manual</span>
        </div>
        <Heading>👨‍💻 Developer Manual</Heading>
        <p className="text-gray-600 text-lg">
          Technical documentation for WorkSource Alliance platform development, architecture, and deployment processes
        </p>
      </Section>

      {/* Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Platform Overview</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <p className="text-gray-700">
              WorkSource Alliance operates a comprehensive digital ecosystem consisting of 4 main projects, each serving 
              specific purposes in connecting international students and graduates with Atlantic Canada's opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-[#2592D0] mb-2">Frontend Platforms</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Main Platform (Next.js/Supabase)</li>
                  <li>• Internal Portal (Next.js/Azure AD)</li>
                  <li>• Executive Hub (Next.js)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-[#702083] mb-2">Backend Systems</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Central API (FastAPI/PostgreSQL)</li>
                  <li>• Resume Processing System</li>
                  <li>• Job Matching Algorithm</li>
                </ul>
              </div>
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
              <div className="border-l-4 border-[#2592D0] pl-4">
                <h4 className="font-semibold text-gray-900">Tanguy Merrien</h4>
                <p className="text-sm text-gray-600">Lead Developer & System Administrator</p>
                <p className="text-sm text-[#2592D0] font-medium">📧 info@worksourcealliance.ca</p>
                <p className="text-xs text-gray-500 mt-1">Platform Architecture & Maintenance</p>
              </div>
              <div className="border-l-4 border-[#702083] pl-4">
                <h4 className="font-semibold text-gray-900">Alier Garang</h4>
                <p className="text-sm text-gray-600">IT Support & Software Developer Assistant</p>
                <p className="text-sm text-[#2592D0] font-medium">📧 alier@worksourcealliance.ca</p>
                <p className="text-xs text-gray-500 mt-1">Development Support & Testing</p>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Project Portfolio */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>WSA Project Portfolio</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* WSA Main Platform */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#2592D0] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#2592D0]">WorkSource Alliance Platform</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Main public-facing platform connecting job seekers with employers across Atlantic Canada.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Tech Stack:</strong> Next.js 15, Supabase, TypeScript, Tailwind CSS</p>
                <p><strong>Features:</strong> Job Board, User Profiles, Employer Tools, Analytics</p>
                <p><strong>Status:</strong> Production (v0.0.3)</p>
              </div>
            </div>
            <Link 
              href="/documentation/developer/worksourcealliance" 
              className="text-[#2592D0] hover:text-[#012E55] font-medium transition-colors"
            >
              View Project Documentation →
            </Link>
          </Card>

          {/* WSA Central API */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#702083] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#702083]">WSA-Central API</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Centralized data management system with resume processing and job matching algorithms.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Tech Stack:</strong> FastAPI, PostgreSQL, Python, Docker</p>
                <p><strong>Features:</strong> Resume Parsing, Job Matching, Data Hub</p>
                <p><strong>Status:</strong> Development</p>
              </div>
            </div>
            <Link 
              href="/documentation/developer/wsa-central" 
              className="text-[#702083] hover:text-[#012E55] font-medium transition-colors"
            >
              View Project Documentation →
            </Link>
          </Card>

          {/* WSA Portal */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#FBBB02]">WSA Portal (Current)</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Internal secure portal with Microsoft Azure AD authentication and SharePoint integration.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Tech Stack:</strong> Next.js 15, Azure AD, SharePoint, TypeScript</p>
                <p><strong>Features:</strong> Authentication, Documentation, Team Management</p>
                <p><strong>Status:</strong> Active Development</p>
              </div>
            </div>
            <Link 
              href="/documentation/developer/wsa-portal" 
              className="text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors"
            >
              View Project Documentation →
            </Link>
          </Card>

          {/* WSA Hub */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#EF7B02] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#EF7B02]">WSA Executive Hub</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Private landing page showcasing platform capabilities and development progress for executives and board members.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Tech Stack:</strong> Next.js, TypeScript, Vercel</p>
                <p><strong>Features:</strong> Executive Dashboard, Progress Tracking</p>
                <p><strong>Status:</strong> Production</p>
              </div>
            </div>
            <Link 
              href="/documentation/developer/wsa-hub" 
              className="text-[#EF7B02] hover:text-[#012E55] font-medium transition-colors"
            >
              View Project Documentation →
            </Link>
          </Card>
        </div>
      </Section>

      {/* Development Resources */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Resources</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card variant="gray" className="text-center">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🔧 Development Environment</h4>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Node.js 18.18.0+</li>
                <li>• pnpm package manager</li>
                <li>• Docker Desktop</li>
                <li>• VS Code recommended</li>
              </ul>
            </Section>
          </Card>
          
          <Card variant="gray" className="text-center">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">📚 Documentation</h4>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• API Documentation</li>
                <li>• Database Schemas</li>
                <li>• Security Guidelines</li>
                <li>• Deployment Guides</li>
              </ul>
            </Section>
          </Card>
          
          <Card variant="gray" className="text-center">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🔐 Security & Access</h4>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• GitHub Repository Access</li>
                <li>• Azure AD Integration</li>
                <li>• Environment Variables</li>
                <li>• Production Deployment</li>
              </ul>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Quick Actions */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Quick Actions</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🚀 Getting Started</h4>
              <p className="text-sm text-gray-600">New to WSA development?</p>
              <Link href="/documentation/developer/getting-started" className="text-[#2592D0] hover:text-[#012E55] font-medium text-sm">
                Setup Guide →
              </Link>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📖 API Reference</h4>
              <p className="text-sm text-gray-600">Explore our APIs and endpoints</p>
              <Link href="/documentation/developer/api" className="text-[#2592D0] hover:text-[#012E55] font-medium text-sm">
                View APIs →
              </Link>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔒 Security Guide</h4>
              <p className="text-sm text-gray-600">Security best practices</p>
              <Link href="/documentation/developer/security" className="text-[#2592D0] hover:text-[#012E55] font-medium text-sm">
                Security Docs →
              </Link>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}