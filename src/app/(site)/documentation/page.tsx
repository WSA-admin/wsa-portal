import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function DocumentationPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <Heading>WorkSource Alliance Documentation Hub</Heading>
        <p className="text-gray-600 text-lg">
          Quick access to company information, team contacts, and organizational resources
        </p>
      </Section>

      {/* Company Basics */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Company Basics</SubHeading>
        <div className="flex gap-6">
          <Card variant="white" className="flex-1 flex">
            <Section orientation="vertical" positioning="start" spacing="sm" className="flex-1">
              <h3 className="text-xl font-semibold text-[#2592D0]">About WSA</h3>
              <p className="text-gray-600">
                WorkSource Alliance connects international students and graduates to Atlantic Canada's opportunities through strategic partnerships with employers, organizations, and policymakers.
              </p>
            </Section>
          </Card>
          <Card variant="white" className="flex-1 flex">
            <Section orientation="vertical" positioning="start" spacing="sm" className="flex-1">
              <h3 className="text-xl font-semibold text-[#2592D0]">Our Mission</h3>
              <p className="text-gray-600">
                By building partnerships with public and private sector employers, organizations, and policymakers, we facilitate job opportunities for international students and graduates while providing training and support services.
              </p>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Team Directory */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Team Directory</SubHeading>
        <Section orientation="vertical" positioning="start" spacing="sm">
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="md">
              <h3 className="text-lg font-semibold text-gray-900">Executive Team</h3>
              <Section orientation="horizontal" positioning="start" spacing="lg">
                <Section orientation="vertical" positioning="start" spacing="sm" fill>
                  <div className="border-l-4 border-[#2592D0] pl-4">
                    <h4 className="font-semibold text-gray-900">Daniel Ohaegbu</h4>
                    <p className="text-sm text-gray-600">Co-founder & Executive Director</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 daniel@worksourcealliance.ca</p>
                    <p className="text-sm text-[#2592D0] font-medium">📱 (647) 995-1416</p>
                  </div>
                </Section>
                <Section orientation="vertical" positioning="start" spacing="sm" fill>
                  <div className="border-l-4 border-[#702083] pl-4">
                    <h4 className="font-semibold text-gray-900">Chuchi Soriano</h4>
                    <p className="text-sm text-gray-600">Operations & Administration Manager</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 chuchi@worksourcealliance.ca</p>
                  </div>
                </Section>
              </Section>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="md">
              <h3 className="text-lg font-semibold text-gray-900">Core Team</h3>
              <Section orientation="horizontal" positioning="start" spacing="lg">
                <Section orientation="vertical" positioning="start" spacing="sm" fill>
                  <div className="space-y-3">
                    <div className="border-l-4 border-[#FBBB02] pl-4">
                      <h4 className="font-semibold text-gray-900">Rita Olfi</h4>
                      <p className="text-sm text-gray-600">Job Placement & Outreach Coordinator</p>
                      <p className="text-sm text-[#2592D0] font-medium">📧 rita@worksourcealliance.ca</p>
                    </div>
                    <div className="border-l-4 border-[#012E55] pl-4">
                      <h4 className="font-semibold text-gray-900">Tanguy Merrien</h4>
                      <p className="text-sm text-gray-600">Developer & Website Administrator</p>
                      <p className="text-sm text-[#2592D0] font-medium">📧 info@worksourcealliance.ca</p>
                    </div>
                  </div>
                </Section>
                <Section orientation="vertical" positioning="start" spacing="sm" fill>
                  <div className="space-y-3">
                    <div className="border-l-4 border-[#EF7B02] pl-4">
                      <h4 className="font-semibold text-gray-900">Melvis O. Onoriode</h4>
                      <p className="text-sm text-gray-600">Digital & Strategic Support Coordinator</p>
                      <p className="text-sm text-[#2592D0] font-medium">📧 melvis@worksourcealliance.ca</p>
                    </div>
                    <div className="border-l-4 border-[#702083] pl-4">
                      <h4 className="font-semibold text-gray-900">Alier Garang</h4>
                      <p className="text-sm text-gray-600">IT Support & Software Developer Assistant</p>
                      <p className="text-sm text-[#2592D0] font-medium">📧 alier@worksourcealliance.ca</p>
                    </div>
                  </div>
                </Section>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Documentation Manuals Index */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Documentation Manuals</SubHeading>
        <div className="flex gap-6">
          <Card variant="white" className="flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#2592D0]">👨‍💻 Developer Manual</h3>
              <p className="text-gray-600 mt-2">Technical documentation for platform development, architecture, and deployment processes</p>
              <div className="mt-3 space-y-1 text-sm text-gray-600">
                <p>• Development Environment Setup</p>
                <p>• API Documentation</p>
                <p>• Security Guidelines</p>
                <p>• Deployment Process</p>
              </div>
            </div>
            <Link href="/documentation/developer" className="mt-4 text-[#2592D0] hover:text-[#012E55] font-medium transition-colors">
              View Developer Manual →
            </Link>
          </Card>
          <Card variant="white" className="flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#702083]">👥 Operations Manual</h3>
              <p className="text-gray-600 mt-2">Operational procedures, team management, and daily workflow processes</p>
              <div className="mt-3 space-y-1 text-sm text-gray-600">
                <p>• Daily Operations</p>
                <p>• Client Management</p>
                <p>• Platform Administration</p>
                <p>• Quality Assurance</p>
              </div>
            </div>
            <Link href="/documentation/operations" className="mt-4 text-[#702083] hover:text-[#012E55] font-medium transition-colors">
              View Operations Manual →
            </Link>
          </Card>
          <Card variant="white" className="flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#FBBB02]">🎓 Programs Manual</h3>
              <p className="text-gray-600 mt-2">Comprehensive program descriptions, procedures, and implementation guides</p>
              <div className="mt-3 space-y-1 text-sm text-gray-600">
                <p>• Student Programs (PeerPals, Transitions)</p>
                <p>• Employer Programs</p>
                <p>• Graduate Mentorship</p>
                <p>• Easy Learn Platform</p>
              </div>
            </div>
            <Link href="/documentation/programs" className="mt-4 text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors">
              View Programs Manual →
            </Link>
          </Card>
        </div>
      </Section>

      {/* Quick Contact */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Quick Contact</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 General Information</h4>
              <p className="text-gray-600 text-sm">Main contact for WorkSource Alliance & ASDA</p>
              <p className="text-[#2592D0] font-medium">📧 info@worksourcealliance.ca</p>
              <p className="text-[#2592D0] font-medium">📱 (647) 995-1416</p>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🛠️ Technical Support</h4>
              <p className="text-gray-600 text-sm">Platform issues and technical assistance</p>
              <p className="text-[#2592D0] font-medium">📧 info@worksourcealliance.ca</p>
              <p className="text-gray-600 text-sm">Contact: Tanguy Merrien</p>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📋 Operations</h4>
              <p className="text-gray-600 text-sm">Daily operations and administration</p>
              <p className="text-[#2592D0] font-medium">📧 chuchi@worksourcealliance.ca</p>
              <p className="text-gray-600 text-sm">Contact: Chuchi Soriano</p>
            </Section>
          </Section>
        </Card>
      </Section>

    </Section>
  );
}