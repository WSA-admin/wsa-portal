'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading } from "@/app/components/ui";
import Link from "next/link";

export default function DeveloperMobile() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <>
      {/* Platform Overview - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Platform Overview</SubHeading>
        <Card variant="gray" className="p-4 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
          <Text center>
            <strong className="text-[#2592D0] transition-colors duration-300">WorkSource Alliance</strong> operates a comprehensive digital ecosystem consisting of 4 main projects, each serving specific purposes in connecting international students and graduates with Atlantic Canada&apos;s opportunities.
          </Text>
        </Card>
      </Section>

      {/* Development Team - Mobile */}
      <Section delay={700} animationType="fadeUp">
        <Section relative className="-mx-4 px-4 sm:-mx-6 sm:px-6">
          <SubHeading>Development Team</SubHeading>
        </Section>

        <Card variant="white" className="overflow-hidden">
          <Section spacing="md" gap="md">
            <Section center padding="md" border borderColor="#2592D0" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <Heading level={4} color="blue" size="sm">Tanguy Merrien</Heading>
              <Text variant="caption">Lead Developer & System Administrator</Text>
              <Text variant="caption" color="gray" customColor="#6b7280">📧 info@worksourcealliance.ca</Text>
            </Section>
            <Section center padding="md" border borderColor="#702083" rounded shadow className="transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              <Heading level={4} color="purple" size="sm">Alier Garang</Heading>
              <Text variant="caption">IT Support & Developer Assistant</Text>
              <Text variant="caption" color="gray" customColor="#6b7280">📧 alier@worksourcealliance.ca</Text>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* WSA Project Portfolio - Mobile */}
      <Section delay={900} animationType="slideLeft">
        <Section relative className="-mx-4 px-4 sm:-mx-6 sm:px-6">
          <SubHeading>WSA Project Portfolio</SubHeading>
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="text-sm text-[#2592D0] hover:text-[#012E55] font-medium transition-all duration-300 px-3 py-1 rounded-md hover:bg-blue-50 touch-manipulation transform hover:scale-105 active:scale-95 absolute right-4 sm:right-6 bottom-2"
          >
            <span className="inline-block transition-transform duration-300">
              {showAllProjects ? 'Show Less ↑' : 'View All Projects ↓'}
            </span>
          </button>
        </Section>

        <Section layout="grid" gridCols="1" gap="md">
          {/* Main Projects - Always Visible */}
          <Link href="/documentation/developer/worksourcealliance" className="group w-full">
            <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 transform hover:scale-105 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white">
              <Section center relative overflow="hidden">
                <Section orientation="horizontal" spacing="sm" className="items-center mb-2">
                  <div className="w-3 h-3 bg-[#2592D0] rounded-full"></div>
                  <Heading level={3} color="blue" size="sm" className="transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">WSA Platform</Heading>
                </Section>
                <Text variant="caption" className="transition-colors duration-300 group-hover:text-gray-700">Main Job Board & Public Platform</Text>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2592D0] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              </Section>
            </Card>
          </Link>

          <Link href="/documentation/developer/wsa-portal" className="group w-full">
            <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 transform hover:scale-105 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-white">
              <Section center relative overflow="hidden">
                <Section orientation="horizontal" spacing="sm" className="items-center mb-2">
                  <div className="w-3 h-3 bg-[#FBBB02] rounded-full"></div>
                  <Heading level={3} customColor="#FBBB02" size="sm" className="transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">WSA Portal</Heading>
                </Section>
                <Text variant="caption" className="transition-colors duration-300 group-hover:text-gray-700">Current Internal Portal</Text>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBBB02] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              </Section>
            </Card>
          </Link>

          {/* Additional Projects - Collapsible */}
          <div className={`transition-all duration-500 ease-in-out ${showAllProjects ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <Section spacing="md">
              <Link href="/documentation/developer/wsa-central" className="group w-full block">
                <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 transform hover:scale-105 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white">
                  <Section center relative overflow="hidden">
                    <Section orientation="horizontal" spacing="sm" className="items-center mb-2">
                      <div className="w-3 h-3 bg-[#702083] rounded-full"></div>
                      <Heading level={3} color="purple" size="sm" className="transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">WSA-Central API</Heading>
                    </Section>
                    <Text variant="caption" className="transition-colors duration-300 group-hover:text-gray-700">Backend Data Management</Text>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#702083] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                  </Section>
                </Card>
              </Link>

              <Link href="/documentation/developer/wsa-hub" className="group w-full block">
                <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 transform hover:scale-105 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-white">
                  <Section center relative overflow="hidden">
                    <Section orientation="horizontal" spacing="sm" className="items-center mb-2">
                      <div className="w-3 h-3 bg-[#EF7B02] rounded-full"></div>
                      <Heading level={3} customColor="#EF7B02" size="sm" className="transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">WSA Executive Hub</Heading>
                    </Section>
                    <Text variant="caption" className="transition-colors duration-300 group-hover:text-gray-700">Executive Dashboard</Text>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EF7B02] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                  </Section>
                </Card>
              </Link>
            </Section>
          </div>
        </Section>
      </Section>

      {/* Quick Actions - Mobile */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Quick Actions</SubHeading>
        <Card variant="gray" className="p-4 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50">
          <Section center spacing="sm">
            <Section orientation="horizontal" className="flex-wrap justify-center items-center gap-4 text-sm">
              <Link href="/documentation/developer/getting-started" className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] transform">
                🚀 Getting Started
              </Link>
              <Link href="/documentation/developer/api" className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] transform">
                📖 API Reference
              </Link>
              <Link href="/documentation/developer/security" className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] transform">
                🔒 Security Guide
              </Link>
            </Section>
            <Text variant="caption" className="transition-colors duration-300 hover:text-gray-700">
              Development resources • Technical guides • Security best practices
            </Text>
          </Section>
        </Card>
      </Section>
    </>
  );
}