'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading } from "@/app/components/ui";
import Link from "next/link";

export default function DocumentationMobile() {
  const [showAllTeam, setShowAllTeam] = useState(false);

  return (
    <>
      {/* Company Basics - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Company Basics</SubHeading>
        <Card variant="gray" className="p-4 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
          <Text center>
            <strong className="text-[#2592D0] transition-colors duration-300">WorkSource Alliance</strong> connects international students and graduates to Atlantic Canada&apos;s opportunities through strategic partnerships with employers, organizations, and policymakers, facilitating job opportunities while providing training and support services.
          </Text>
        </Card>
      </Section>

      {/* Team Directory - Mobile */}
      <Section delay={700} animationType="fadeUp">
        <Section relative className="-mx-4 px-4 sm:-mx-6 sm:px-6">
          <SubHeading>Key Contacts</SubHeading>
          <button
            onClick={() => setShowAllTeam(!showAllTeam)}
            className="text-sm text-[#2592D0] hover:text-[#012E55] font-medium transition-all duration-300 px-3 py-1 rounded-md hover:bg-blue-50 touch-manipulation transform hover:scale-105 active:scale-95 absolute right-4 sm:right-6 bottom-2"
          >
            <span className="inline-block transition-transform duration-300">
              {showAllTeam ? 'Show Less ↑' : 'View All Team ↓'}
            </span>
          </button>
        </Section>

        <Card variant="white" className="overflow-hidden">
          <Section spacing="md" gap="md">
            {/* Key contacts always visible */}
            <Section center padding="md" border borderColor="#2592D0" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <Heading level={4} color="blue" size="sm">Daniel Ohaegbu</Heading>
              <Text variant="caption">Executive Director</Text>
              <Text variant="caption" color="gray" customColor="#6b7280">📧 daniel@worksourcealliance.ca</Text>
            </Section>
            <Section center padding="md" border borderColor="#702083" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <Heading level={4} color="purple" size="sm">Chuchi Soriano</Heading>
              <Text variant="caption">Operations Manager</Text>
              <Text variant="caption" color="gray" customColor="#6b7280">📧 chuchi@worksourcealliance.ca</Text>
            </Section>

            {/* Additional team members - collapsible */}
            <div className={`transition-all duration-500 ease-in-out ${showAllTeam ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <Section layout="grid" gridCols="1-sm-2-lg-3" gap="md">
                <Section center padding="md" border borderColor="#012E55" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <Heading level={4} color="navy" size="sm">Tanguy Merrien</Heading>
                  <Text variant="caption">Developer</Text>
                  <Text variant="caption" color="gray" customColor="#6b7280">📧 info@worksourcealliance.ca</Text>
                </Section>
                <Section center padding="md" border borderColor="#FBBB02" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <Heading level={4} customColor="#FBBB02" size="sm">Rita Olfi</Heading>
                  <Text variant="caption">Job Placement Coordinator</Text>
                  <Text variant="caption" color="gray" customColor="#6b7280">📧 rita@worksourcealliance.ca</Text>
                </Section>
                <Section center padding="md" border borderColor="#EF7B02" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <Heading level={4} customColor="#EF7B02" size="sm">Melvis O. Onoriode</Heading>
                  <Text variant="caption">Strategic Support</Text>
                  <Text variant="caption" color="gray" customColor="#6b7280">📧 melvis@worksourcealliance.ca</Text>
                </Section>
                <Section center padding="md" border borderColor="#702083" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <Heading level={4} color="purple" size="sm">Alier Garang</Heading>
                  <Text variant="caption">IT Support</Text>
                  <Text variant="caption" color="gray" customColor="#6b7280">📧 alier@worksourcealliance.ca</Text>
                </Section>
              </Section>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Documentation Manuals - Mobile */}
      <Section delay={900} animationType="slideLeft">
        <SubHeading>Documentation Manuals</SubHeading>
        <Section layout="grid" gridCols="1" gap="md">
          <Link href="/documentation/developer" className="group w-full animate-in fade-in slide-in-from-bottom-4 delay-1200">
            <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 transform hover:scale-110 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white">
              <Section center relative overflow="hidden">
                <div className="text-2xl mb-2 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">👨‍💻</div>
                <Heading level={3} color="blue" size="sm" className="mb-1 transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">Developer Manual</Heading>
                <Text variant="caption" className="transition-colors duration-300 group-hover:text-gray-700">Development & APIs</Text>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2592D0] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              </Section>
            </Card>
          </Link>
          <Link href="/documentation/operations" className="group w-full animate-in fade-in slide-in-from-bottom-4 delay-1300">
            <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 transform hover:scale-110 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white">
              <Section center relative overflow="hidden">
                <div className="text-2xl mb-2 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">👥</div>
                <Heading level={3} color="purple" size="sm" className="mb-1 transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">Operations Manual</Heading>
                <Text variant="caption" className="transition-colors duration-300 group-hover:text-gray-700">Procedures & Management</Text>
                <div className="absolute inset-0 bg-gradient-to-r from-[#702083] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              </Section>
            </Card>
          </Link>
          <Link href="/documentation/programs" className="group w-full animate-in fade-in slide-in-from-bottom-4 delay-1400">
            <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 transform hover:scale-110 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-white">
              <Section center relative overflow="hidden">
                <div className="text-2xl mb-2 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">🎓</div>
                <Heading level={3} customColor="#FBBB02" size="sm" className="mb-1 transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">Programs Manual</Heading>
                <Text variant="caption" className="transition-colors duration-300 group-hover:text-gray-700">Student & Employer Programs</Text>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBBB02] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              </Section>
            </Card>
          </Link>
        </Section>
      </Section>

      {/* Quick Contact - Mobile */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Quick Contact</SubHeading>
        <Card variant="gray" className="p-4 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50">
          <Section center spacing="sm">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <span className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] cursor-pointer transform">
                📧 info@worksourcealliance.ca
              </span>
              <span className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] cursor-pointer transform">
                📱 (902) 628-1807
              </span>
            </div>
            <Text variant="caption" className="transition-colors duration-300 hover:text-gray-700">
              General inquiries • Technical support • Operations
            </Text>
          </Section>
        </Card>
      </Section>
    </>
  );
}