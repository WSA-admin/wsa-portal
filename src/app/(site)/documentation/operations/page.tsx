import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function OperationsManualPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Documentation Hub
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Operations Manual</span>
        </div>
        <Heading>👥 Operations Manual</Heading>
        <p className="text-gray-600 text-lg">
          Operational procedures, team management, and daily workflow processes for WorkSource Alliance
        </p>
      </Section>

      {/* Operations Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Operations Overview</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <p className="text-gray-700">
              WorkSource Alliance operations encompass daily management activities, client relationship management, 
              platform administration, and team coordination. This manual provides comprehensive guidance for all 
              operational aspects of the organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-[#702083] mb-2">Core Operations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daily workflow management</li>
                  <li>• Client onboarding & support</li>
                  <li>• Team coordination & communication</li>
                  <li>• Quality assurance processes</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-[#2592D0] mb-2">Platform Management</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• System access & user management</li>
                  <li>• Data integrity & security</li>
                  <li>• Performance monitoring</li>
                  <li>• Technical support coordination</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Operations Team */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Operations Team</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border-l-4 border-[#702083] pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Executive Leadership</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-[#2592D0]">Daniel Ohaegbu</h5>
                    <p className="text-sm text-gray-600">Co-founder & Executive Director</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 daniel@worksourcealliance.ca</p>
                    <p className="text-sm text-[#2592D0] font-medium">📱 (647) 995-1416</p>
                    <p className="text-xs text-gray-500">Strategic oversight and organizational leadership</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-[#702083]">Chuchi Soriano</h5>
                    <p className="text-sm text-gray-600">Operations & Administration Manager</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 chuchi@worksourcealliance.ca</p>
                    <p className="text-xs text-gray-500">Daily operations and system administration</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#FBBB02] pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Core Operations Team</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-[#FBBB02]">Rita Olfi</h5>
                    <p className="text-sm text-gray-600">Job Placement & Outreach Coordinator</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 rita@worksourcealliance.ca</p>
                    <p className="text-xs text-gray-500">Client job placement and employer relations</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-[#EF7B02]">Melvis O. Onoriode</h5>
                    <p className="text-sm text-gray-600">Digital & Strategic Support Coordinator</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 melvis@worksourcealliance.ca</p>
                    <p className="text-xs text-gray-500">Digital strategy and social media management</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Operations Areas */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Operations Areas</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Daily Operations */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#702083] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#702083]">Daily Operations</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Standard operating procedures for daily workflow management and team coordination.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Coverage:</strong> Morning checklist, client onboarding, progress tracking</p>
                <p><strong>Responsibilities:</strong> Team coordination, quality assurance</p>
                <p><strong>Tools:</strong> CRM system, Microsoft Teams, project management</p>
              </div>
            </div>
            <Link 
              href="/documentation/operations/daily-operations" 
              className="text-[#702083] hover:text-[#012E55] font-medium transition-colors"
            >
              View Daily Operations →
            </Link>
          </Card>

          {/* Client Management */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#2592D0] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#2592D0]">Client Management</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Comprehensive client relationship management from initial contact through program completion.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Coverage:</strong> Onboarding, assessment, program matching, progress monitoring</p>
                <p><strong>Tools:</strong> CRM system, intake forms, evaluation metrics</p>
                <p><strong>Outcomes:</strong> Client success tracking, program effectiveness</p>
              </div>
            </div>
            <Link 
              href="/documentation/operations/client-management" 
              className="text-[#2592D0] hover:text-[#012E55] font-medium transition-colors"
            >
              View Client Management →
            </Link>
          </Card>

          {/* Platform Administration */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#FBBB02]">Platform Administration</h3>
              </div>
              <p className="text-gray-600 mb-3">
                System access management, user permissions, and platform security protocols.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Systems:</strong> CRM, Easy Learn Platform, Microsoft Teams, Social Media</p>
                <p><strong>Security:</strong> Access control, password management, data protection</p>
                <p><strong>Support:</strong> Technical assistance, troubleshooting, training</p>
              </div>
            </div>
            <Link 
              href="/documentation/operations/platform-administration" 
              className="text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors"
            >
              View Platform Administration →
            </Link>
          </Card>

          {/* Quality Assurance */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#EF7B02] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#EF7B02]">Quality Assurance</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Quality control processes, performance monitoring, and continuous improvement protocols.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Monitoring:</strong> Service quality, client satisfaction, team performance</p>
                <p><strong>Standards:</strong> Operational excellence, compliance, best practices</p>
                <p><strong>Improvement:</strong> Process optimization, feedback integration</p>
              </div>
            </div>
            <Link 
              href="/documentation/operations/quality-assurance" 
              className="text-[#EF7B02] hover:text-[#012E55] font-medium transition-colors"
            >
              View Quality Assurance →
            </Link>
          </Card>
        </div>
      </Section>

      {/* System Access Matrix */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>System Access Matrix</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Platform Access & Administration</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Platform</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Administrator</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Backup Admin</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Access Requests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 font-medium text-[#702083]">CRM System</td>
                    <td className="py-2 px-3">Chuchi Soriano</td>
                    <td className="py-2 px-3">Daniel Ohaegbu</td>
                    <td className="py-2 px-3 text-[#2592D0]">chuchi@worksourcealliance.ca</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 font-medium text-[#2592D0]">Easy Learn Platform</td>
                    <td className="py-2 px-3">Chuchi Soriano</td>
                    <td className="py-2 px-3">Tanguy Merrien</td>
                    <td className="py-2 px-3 text-[#2592D0]">chuchi@worksourcealliance.ca</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 font-medium text-[#FBBB02]">Microsoft Teams</td>
                    <td className="py-2 px-3">Daniel Ohaegbu</td>
                    <td className="py-2 px-3">Chuchi Soriano</td>
                    <td className="py-2 px-3 text-[#2592D0]">daniel@worksourcealliance.ca</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 font-medium text-[#EF7B02]">Social Media Platforms</td>
                    <td className="py-2 px-3">Melvis O. Onoriode</td>
                    <td className="py-2 px-3">Chuchi Soriano</td>
                    <td className="py-2 px-3 text-[#2592D0]">melvis@worksourcealliance.ca</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-blue-50 border-l-4 border-[#2592D0] rounded-r">
              <p className="text-sm text-blue-800">
                <strong>Security Note:</strong> All platform credentials are managed by the Operations & Administration Manager. 
                Contact Chuchi Soriano for access requests or password resets.
              </p>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Emergency Procedures */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Emergency Procedures</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <h4 className="font-semibold text-red-600 mb-2">🚨 System Emergencies</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Contact:</strong> Tanguy Merrien</p>
                  <p><strong>Email:</strong> info@worksourcealliance.ca</p>
                  <p><strong>Scope:</strong> Platform outages, security breaches, data issues</p>
                  <p><strong>Response:</strong> Immediate technical assessment</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 mb-2">⚠️ Operations Emergencies</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Contact:</strong> Chuchi Soriano</p>
                  <p><strong>Email:</strong> chuchi@worksourcealliance.ca</p>
                  <p><strong>Scope:</strong> Client issues, process failures, team coordination</p>
                  <p><strong>Response:</strong> Operational contingency plans</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 mb-2">🏢 Executive Escalation</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Contact:</strong> Daniel Ohaegbu</p>
                  <p><strong>Email:</strong> daniel@worksourcealliance.ca</p>
                  <p><strong>Phone:</strong> (647) 995-1416</p>
                  <p><strong>Scope:</strong> Strategic decisions, critical incidents</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Quick Reference */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Quick Reference</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📋 Daily Workflows</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/operations/daily-operations" className="text-[#702083] hover:underline">Morning Checklist</Link></p>
                <p><Link href="/documentation/operations/client-management" className="text-[#702083] hover:underline">Client Onboarding Process</Link></p>
                <p><Link href="/documentation/operations/daily-operations" className="text-[#702083] hover:underline">End-of-Day Procedures</Link></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔧 System Administration</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/operations/platform-administration" className="text-[#702083] hover:underline">Access Management</Link></p>
                <p><Link href="/documentation/operations/platform-administration" className="text-[#702083] hover:underline">Security Protocols</Link></p>
                <p><Link href="/documentation/operations/platform-administration" className="text-[#702083] hover:underline">Troubleshooting Guide</Link></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Emergency Contacts</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Technical:</strong> info@worksourcealliance.ca</p>
                <p><strong>Operations:</strong> chuchi@worksourcealliance.ca</p>
                <p><strong>Executive:</strong> daniel@worksourcealliance.ca</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Document Management */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Document Management</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">📁 Internal Documents</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Employee Handbook - HR policies and procedures</li>
                  <li>• Program Guidelines - Detailed program delivery instructions</li>
                  <li>• Client Intake Forms - Standardized assessment templates</li>
                  <li>• Partnership Agreements - Templates for employer partnerships</li>
                  <li>• Marketing Materials - Brochures, presentations, promotional content</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-2">🔗 Document Access</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Storage:</strong> Microsoft SharePoint drive</p>
                  <p><strong>Access:</strong> Team member permissions required</p>
                  <p><strong>Contact:</strong> Chuchi Soriano for permissions</p>
                  <p><strong>Security:</strong> Role-based access control</p>
                  <p><strong>Backup:</strong> Automated cloud backup</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}