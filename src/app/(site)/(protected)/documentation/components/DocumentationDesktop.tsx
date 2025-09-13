import { Section, Card, SubHeading, Text, Heading } from "@/app/components/ui";
import Link from "next/link";

export default function DocumentationDesktop() {
  return (
    <>
      {/* Company Basics - Desktop */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Company Basics</SubHeading>
        <Section orientation="horizontal" spacing="md" className="gap-6">
          <Card variant="white" className="flex-1 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={3} color="blue" size="lg">About WSA</Heading>
              <Text>
                WorkSource Alliance connects international students and graduates to Atlantic Canada&apos;s opportunities through strategic partnerships with employers, organizations, and policymakers.
              </Text>
            </Section>
          </Card>
          <Card variant="white" className="flex-1 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={3} color="blue" size="lg">Our Mission</Heading>
              <Text>
                By building partnerships with public and private sector employers, organizations, and policymakers, we facilitate job opportunities for international students and graduates while providing training and support services.
              </Text>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Team Directory - Desktop */}
      <Section delay={700} animationType="fadeUp">
        <SubHeading>Team Directory</SubHeading>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={3} color="gray" size="lg">Executive Team</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section border borderColor="#2592D0" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-blue-50">
                <Heading level={4} color="gray">Daniel Ohaegbu</Heading>
                <Text variant="small" color="gray" className="mb-2">Co-founder & Executive Director</Text>
                <Text variant="small" color="blue" weight="medium" className="break-all">📧 daniel@worksourcealliance.ca</Text>
                <Text variant="small" color="blue" weight="medium">📱 (902) 628-1807</Text>
              </Section>
              <Section border borderColor="#702083" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-purple-50">
                <Heading level={4} color="gray">Chuchi Soriano</Heading>
                <Text variant="small" color="gray" className="mb-2">Operations & Administration Manager</Text>
                <Text variant="small" color="blue" weight="medium" className="break-all">📧 chuchi@worksourcealliance.ca</Text>
              </Section>
            </Section>
          </Section>
        </Card>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={3} color="gray" size="lg">Core Team</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section spacing="md">
                <Section border borderColor="#FBBB02" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-yellow-50">
                  <Heading level={4} color="gray">Rita Olfi</Heading>
                  <Text variant="small" color="gray" className="mb-1">Job Placement & Outreach Coordinator</Text>
                  <Text variant="small" color="blue" weight="medium" className="break-all">📧 rita@worksourcealliance.ca</Text>
                </Section>
                <Section border borderColor="#012E55" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-blue-50">
                  <Heading level={4} color="gray">Tanguy Merrien</Heading>
                  <Text variant="small" color="gray" className="mb-1">Developer & Website Administrator</Text>
                  <Text variant="small" color="blue" weight="medium" className="break-all">📧 info@worksourcealliance.ca</Text>
                </Section>
              </Section>
              <Section spacing="md">
                <Section border borderColor="#EF7B02" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-orange-50">
                  <Heading level={4} color="gray">Melvis O. Onoriode</Heading>
                  <Text variant="small" color="gray" className="mb-1">Digital & Strategic Support Coordinator</Text>
                  <Text variant="small" color="blue" weight="medium" className="break-all">📧 melvis@worksourcealliance.ca</Text>
                </Section>
                <Section border borderColor="#702083" padding="md" className="border-l-4 border-r-0 border-t-0 border-b-0 transition-all duration-300 hover:bg-purple-50">
                  <Heading level={4} color="gray">Alier Garang</Heading>
                  <Text variant="small" color="gray" className="mb-1">IT Support & Software Developer Assistant</Text>
                  <Text variant="small" color="blue" weight="medium" className="break-all">📧 alier@worksourcealliance.ca</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Documentation Manuals - Desktop */}
      <Section delay={900} animationType="slideLeft">
        <SubHeading>Documentation Manuals</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card variant="white" className="flex flex-col touch-manipulation transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <div className="flex-1">
              <Heading level={3} color="blue" size="lg" className="leading-tight">👨‍💻 Developer Manual</Heading>
              <Text className="mt-3">Technical documentation for platform development, architecture, and deployment processes</Text>
              <div className="mt-4 space-y-2">
                <Text variant="small">• Development Environment Setup</Text>
                <Text variant="small">• API Documentation</Text>
                <Text variant="small">• Security Guidelines</Text>
                <Text variant="small">• Deployment Process</Text>
              </div>
            </div>
            <Link href="/documentation/developer" className="mt-6 inline-flex items-center text-[#2592D0] hover:text-[#012E55] font-medium transition-colors py-2 px-3 -mx-3 rounded-md hover:bg-blue-50 active:bg-blue-100">
              View Developer Manual →
            </Link>
          </Card>

          <Card variant="white" className="flex flex-col touch-manipulation transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <div className="flex-1">
              <Heading level={3} color="purple" size="lg" className="leading-tight">👥 Operations Manual</Heading>
              <Text className="mt-3">Operational procedures, team management, and daily workflow processes</Text>
              <div className="mt-4 space-y-2">
                <Text variant="small">• Daily Operations</Text>
                <Text variant="small">• Client Management</Text>
                <Text variant="small">• Platform Administration</Text>
                <Text variant="small">• Quality Assurance</Text>
              </div>
            </div>
            <Link href="/documentation/operations" className="mt-6 inline-flex items-center text-[#702083] hover:text-[#012E55] font-medium transition-colors py-2 px-3 -mx-3 rounded-md hover:bg-purple-50 active:bg-purple-100">
              View Operations Manual →
            </Link>
          </Card>

          <Card variant="white" className="flex flex-col touch-manipulation transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <div className="flex-1">
              <Heading level={3} customColor="#FBBB02" size="lg" className="leading-tight">🎓 Programs Manual</Heading>
              <Text className="mt-3">Comprehensive program descriptions, procedures, and implementation guides</Text>
              <div className="mt-4 space-y-2">
                <Text variant="small">• Student Programs (PeerPals, Transitions)</Text>
                <Text variant="small">• Employer Programs</Text>
                <Text variant="small">• Graduate Mentorship</Text>
                <Text variant="small">• Easy Learn Platform</Text>
              </div>
            </div>
            <Link href="/documentation/programs" className="mt-6 inline-flex items-center text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors py-2 px-3 -mx-3 rounded-md hover:bg-yellow-50 active:bg-yellow-100">
              View Programs Manual →
            </Link>
          </Card>
        </div>
      </Section>

      {/* Quick Contact - Desktop */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Quick Contact</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-[#2592D0] pl-4 transition-all duration-300 hover:bg-blue-50">
              <Heading level={4} color="gray" className="mb-2">📞 General Information</Heading>
              <Text variant="small" className="mb-2">Main contact for WorkSource Alliance & ASDA</Text>
              <Text variant="small" color="blue" weight="medium" className="break-all mb-1">📧 info@worksourcealliance.ca</Text>
              <Text variant="small" color="blue" weight="medium">📱 (647) 995-1416</Text>
            </div>
            <div className="border-l-4 border-[#702083] pl-4 transition-all duration-300 hover:bg-purple-50">
              <Heading level={4} color="gray" className="mb-2">🛠️ Technical Support</Heading>
              <Text variant="small" className="mb-2">Platform issues and technical assistance</Text>
              <Text variant="small" color="blue" weight="medium" className="break-all mb-1">📧 info@worksourcealliance.ca</Text>
              <Text variant="small">Contact: Tanguy Merrien</Text>
            </div>
            <div className="border-l-4 border-[#FBBB02] pl-4 transition-all duration-300 hover:bg-yellow-50">
              <Heading level={4} color="gray" className="mb-2">📋 Operations</Heading>
              <Text variant="small" className="mb-2">Daily operations and administration</Text>
              <Text variant="small" color="blue" weight="medium" className="break-all mb-1">📧 chuchi@worksourcealliance.ca</Text>
              <Text variant="small">Contact: Chuchi Soriano</Text>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}