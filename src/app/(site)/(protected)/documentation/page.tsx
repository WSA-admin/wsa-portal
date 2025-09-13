'use client';

import { useState, useEffect } from 'react';
import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function DocumentationPage() {
  const [showAllTeam, setShowAllTeam] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Section orientation="vertical" positioning="start" spacing="md">
        {/* Hero Section with entrance animation */}
        <Section orientation="vertical" positioning="start" spacing="md" className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Heading>WorkSource Alliance Documentation Hub</Heading>
          <p className={`text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Quick access to company information, team contacts, and organizational resources
          </p>
        </Section>

      {/* Company Basics - Mobile Compact, Desktop Detailed */}
      <Section orientation="vertical" positioning="start" spacing="sm" className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <SubHeading>Company Basics</SubHeading>
        
        {/* Mobile: Compact single card */}
        <div className="lg:hidden">
          <Card variant="gray" className="p-4 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
            <div className="text-center">
              <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto">
                <strong className="text-[#2592D0] transition-colors duration-300">WorkSource Alliance</strong> connects international students and graduates to Atlantic Canada&apos;s opportunities through strategic partnerships with employers, organizations, and policymakers, facilitating job opportunities while providing training and support services.
              </p>
            </div>
          </Card>
        </div>

        {/* Desktop: Original two-card layout */}
        <div className="hidden lg:block">
          <Section orientation="vertical" spacing="md" className="sm:flex-row sm:gap-6">
            <Card variant="white" className="flex-1 flex transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
              <Section orientation="vertical" positioning="start" spacing="sm" className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#2592D0] transition-colors duration-300">About WSA</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  WorkSource Alliance connects international students and graduates to Atlantic Canada&apos;s opportunities through strategic partnerships with employers, organizations, and policymakers.
                </p>
              </Section>
            </Card>
            <Card variant="white" className="flex-1 flex transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
              <Section orientation="vertical" positioning="start" spacing="sm" className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#2592D0] transition-colors duration-300">Our Mission</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  By building partnerships with public and private sector employers, organizations, and policymakers, we facilitate job opportunities for international students and graduates while providing training and support services.
                </p>
              </Section>
            </Card>
          </Section>
        </div>
      </Section>

      {/* Team Directory - Mobile Compact, Desktop Detailed */}
      <Section orientation="vertical" positioning="start" spacing="sm" className="animate-in fade-in slide-in-from-right-4 duration-700 delay-700">
        
        {/* Mobile: Compact collapsible version */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <SubHeading>Key Contacts</SubHeading>
            <button 
              onClick={() => setShowAllTeam(!showAllTeam)}
              className="text-sm text-[#2592D0] hover:text-[#012E55] font-medium transition-all duration-300 px-3 py-1 rounded-md hover:bg-blue-50 touch-manipulation transform hover:scale-105 active:scale-95"
            >
              <span className="inline-block transition-transform duration-300">
                {showAllTeam ? 'Show Less ↑' : 'View All Team ↓'}
              </span>
            </button>
          </div>
          
          <Card variant="white" className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Key contacts always visible with staggered animation */}
              <div className="text-center p-3 border border-gray-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#2592D0] animate-in fade-in slide-in-from-bottom-4 delay-800">
                <h4 className="font-semibold text-[#2592D0] text-sm transition-colors duration-300">Daniel Ohaegbu</h4>
                <p className="text-xs text-gray-600">Executive Director</p>
                <p className="text-xs text-gray-500 mt-1">📱 (647) 995-1416</p>
              </div>
              <div className="text-center p-3 border border-gray-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#702083] animate-in fade-in slide-in-from-bottom-4 delay-900">
                <h4 className="font-semibold text-[#702083] text-sm transition-colors duration-300">Chuchi Soriano</h4>
                <p className="text-xs text-gray-600">Operations Manager</p>
                <p className="text-xs text-gray-500 mt-1">📧 chuchi@worksourcealliance.ca</p>
              </div>
              <div className="text-center p-3 border border-gray-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#012E55] animate-in fade-in slide-in-from-bottom-4 delay-1000">
                <h4 className="font-semibold text-[#012E55] text-sm transition-colors duration-300">Tanguy Merrien</h4>
                <p className="text-xs text-gray-600">Developer</p>
                <p className="text-xs text-gray-500 mt-1">📧 info@worksourcealliance.ca</p>
              </div>
              
              {/* Additional team members - collapsible with smooth animation */}
              <div className={`col-span-full transition-all duration-500 ease-in-out ${showAllTeam ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-3 border border-gray-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#FBBB02]">
                    <h4 className="font-semibold text-[#FBBB02] text-sm transition-colors duration-300">Rita Olfi</h4>
                    <p className="text-xs text-gray-600">Job Placement Coordinator</p>
                    <p className="text-xs text-gray-500 mt-1">📧 rita@worksourcealliance.ca</p>
                  </div>
                  <div className="text-center p-3 border border-gray-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#EF7B02]">
                    <h4 className="font-semibold text-[#EF7B02] text-sm transition-colors duration-300">Melvis O. Onoriode</h4>
                    <p className="text-xs text-gray-600">Strategic Support</p>
                    <p className="text-xs text-gray-500 mt-1">📧 melvis@worksourcealliance.ca</p>
                  </div>
                  <div className="text-center p-3 border border-gray-100 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#702083]">
                    <h4 className="font-semibold text-[#702083] text-sm transition-colors duration-300">Alier Garang</h4>
                    <p className="text-xs text-gray-600">IT Support</p>
                    <p className="text-xs text-gray-500 mt-1">📧 alier@worksourcealliance.ca</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop: Original detailed version */}
        <div className="hidden lg:block w-full">
          <SubHeading>Team Directory</SubHeading>
          <Section orientation="vertical" positioning="start" spacing="sm" className="w-full">
            <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg w-full">
              <Section orientation="vertical" positioning="start" spacing="md" className="w-full">
                <h3 className="text-lg font-semibold text-gray-900">Executive Team</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                  <div className="border-l-4 border-[#2592D0] pl-4 py-2 transition-all duration-300 hover:bg-blue-50">
                    <h4 className="font-semibold text-gray-900 text-base transition-colors duration-300">Daniel Ohaegbu</h4>
                    <p className="text-sm text-gray-600 mb-2">Co-founder & Executive Director</p>
                    <p className="text-sm text-[#2592D0] font-medium break-all">📧 daniel@worksourcealliance.ca</p>
                    <p className="text-sm text-[#2592D0] font-medium">📱 (647) 995-1416</p>
                  </div>
                  <div className="border-l-4 border-[#702083] pl-4 py-2 transition-all duration-300 hover:bg-purple-50">
                    <h4 className="font-semibold text-gray-900 text-base transition-colors duration-300">Chuchi Soriano</h4>
                    <p className="text-sm text-gray-600 mb-2">Operations & Administration Manager</p>
                    <p className="text-sm text-[#2592D0] font-medium break-all">📧 chuchi@worksourcealliance.ca</p>
                  </div>
                </div>
              </Section>
            </Card>

            <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg w-full">
              <Section orientation="vertical" positioning="start" spacing="md" className="w-full">
                <h3 className="text-lg font-semibold text-gray-900">Core Team</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FBBB02] pl-4 py-2 transition-all duration-300 hover:bg-yellow-50">
                      <h4 className="font-semibold text-gray-900 text-base">Rita Olfi</h4>
                      <p className="text-sm text-gray-600 mb-1">Job Placement & Outreach Coordinator</p>
                      <p className="text-sm text-[#2592D0] font-medium break-all">📧 rita@worksourcealliance.ca</p>
                    </div>
                    <div className="border-l-4 border-[#012E55] pl-4 py-2 transition-all duration-300 hover:bg-blue-50">
                      <h4 className="font-semibold text-gray-900 text-base">Tanguy Merrien</h4>
                      <p className="text-sm text-gray-600 mb-1">Developer & Website Administrator</p>
                      <p className="text-sm text-[#2592D0] font-medium break-all">📧 info@worksourcealliance.ca</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#EF7B02] pl-4 py-2 transition-all duration-300 hover:bg-orange-50">
                      <h4 className="font-semibold text-gray-900 text-base">Melvis O. Onoriode</h4>
                      <p className="text-sm text-gray-600 mb-1">Digital & Strategic Support Coordinator</p>
                      <p className="text-sm text-[#2592D0] font-medium break-all">📧 melvis@worksourcealliance.ca</p>
                    </div>
                    <div className="border-l-4 border-[#702083] pl-4 py-2 transition-all duration-300 hover:bg-purple-50">
                      <h4 className="font-semibold text-gray-900 text-base">Alier Garang</h4>
                      <p className="text-sm text-gray-600 mb-1">IT Support & Software Developer Assistant</p>
                      <p className="text-sm text-[#2592D0] font-medium break-all">📧 alier@worksourcealliance.ca</p>
                    </div>
                  </div>
                </div>
              </Section>
            </Card>
          </Section>
        </div>
      </Section>

      {/* Documentation Manuals - Mobile Compact, Desktop Rich */}
      <Section orientation="vertical" positioning="start" spacing="sm" className="animate-in fade-in slide-in-from-left-4 duration-700 delay-1100">
        <SubHeading>Documentation Manuals</SubHeading>
        
        {/* Mobile: Compact icon-based cards */}
        <div className="lg:hidden w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <Link href="/documentation/developer" className="group w-full animate-in fade-in slide-in-from-bottom-4 delay-1200">
              <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 w-full transform hover:scale-110 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white">
                <div className="text-center relative overflow-hidden">
                  <div className="text-2xl mb-2 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">👨‍💻</div>
                  <h3 className="font-semibold text-[#2592D0] text-sm mb-1 transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">Developer Manual</h3>
                  <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Development & APIs</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2592D0] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                </div>
              </Card>
            </Link>
            <Link href="/documentation/operations" className="group w-full animate-in fade-in slide-in-from-bottom-4 delay-1300">
              <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 w-full transform hover:scale-110 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white">
                <div className="text-center relative overflow-hidden">
                  <div className="text-2xl mb-2 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">👥</div>
                  <h3 className="font-semibold text-[#702083] text-sm mb-1 transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">Operations Manual</h3>
                  <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Procedures & Management</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#702083] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                </div>
              </Card>
            </Link>
            <Link href="/documentation/programs" className="group w-full animate-in fade-in slide-in-from-bottom-4 delay-1400">
              <Card variant="white" className="h-full hover:shadow-xl transition-all duration-500 touch-manipulation p-4 w-full transform hover:scale-110 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-white">
                <div className="text-center relative overflow-hidden">
                  <div className="text-2xl mb-2 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">🎓</div>
                  <h3 className="font-semibold text-[#FBBB02] text-sm mb-1 transition-all duration-300 group-hover:text-[#012E55] group-hover:scale-105">Programs Manual</h3>
                  <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Student & Employer Programs</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FBBB02] to-[#012E55] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Desktop: Original detailed cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card variant="white" className="flex flex-col touch-manipulation transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#2592D0] leading-tight transition-colors duration-300">👨‍💻 Developer Manual</h3>
                <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">Technical documentation for platform development, architecture, and deployment processes</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>• Development Environment Setup</p>
                  <p>• API Documentation</p>
                  <p>• Security Guidelines</p>
                  <p>• Deployment Process</p>
                </div>
              </div>
              <Link href="/documentation/developer" className="mt-6 inline-flex items-center text-[#2592D0] hover:text-[#012E55] font-medium transition-colors text-sm sm:text-base py-2 px-3 -mx-3 rounded-md hover:bg-blue-50 active:bg-blue-100">
                View Developer Manual →
              </Link>
            </Card>
            <Card variant="white" className="flex flex-col touch-manipulation transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#702083] leading-tight transition-colors duration-300">👥 Operations Manual</h3>
                <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">Operational procedures, team management, and daily workflow processes</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>• Daily Operations</p>
                  <p>• Client Management</p>
                  <p>• Platform Administration</p>
                  <p>• Quality Assurance</p>
                </div>
              </div>
              <Link href="/documentation/operations" className="mt-6 inline-flex items-center text-[#702083] hover:text-[#012E55] font-medium transition-colors text-sm sm:text-base py-2 px-3 -mx-3 rounded-md hover:bg-purple-50 active:bg-purple-100">
                View Operations Manual →
              </Link>
            </Card>
            <Card variant="white" className="flex flex-col touch-manipulation transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#FBBB02] leading-tight transition-colors duration-300">🎓 Programs Manual</h3>
                <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">Comprehensive program descriptions, procedures, and implementation guides</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>• Student Programs (PeerPals, Transitions)</p>
                  <p>• Employer Programs</p>
                  <p>• Graduate Mentorship</p>
                  <p>• Easy Learn Platform</p>
                </div>
              </div>
              <Link href="/documentation/programs" className="mt-6 inline-flex items-center text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors text-sm sm:text-base py-2 px-3 -mx-3 rounded-md hover:bg-yellow-50 active:bg-yellow-100">
                View Programs Manual →
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      {/* Quick Contact - Mobile Compact, Desktop Detailed */}
      <Section orientation="vertical" positioning="start" spacing="sm" className="animate-in fade-in slide-in-from-right-4 duration-700 delay-1500">
        <SubHeading>Quick Contact</SubHeading>
        
        {/* Mobile: Ultra compact version */}
        <div className="lg:hidden">
          <Card variant="gray" className="p-4 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50">
            <div className="text-center space-y-2">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] cursor-pointer transform">
                  📧 info@worksourcealliance.ca
                </span>
                <span className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] cursor-pointer transform">
                  📱 (647) 995-1416
                </span>
              </div>
              <div className="text-xs text-gray-600 transition-colors duration-300 hover:text-gray-700">
                General inquiries • Technical support • Operations
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop: Original detailed version */}
        <div className="hidden lg:block w-full">
          <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              <div className="border-l-4 border-[#2592D0] pl-4 transition-all duration-300 hover:bg-blue-50">
                <h4 className="font-semibold text-gray-900 text-base mb-2">📞 General Information</h4>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">Main contact for WorkSource Alliance & ASDA</p>
                <p className="text-[#2592D0] font-medium text-sm break-all mb-1 transition-colors duration-300">📧 info@worksourcealliance.ca</p>
                <p className="text-[#2592D0] font-medium text-sm transition-colors duration-300">📱 (647) 995-1416</p>
              </div>
              <div className="border-l-4 border-[#702083] pl-4 transition-all duration-300 hover:bg-purple-50">
                <h4 className="font-semibold text-gray-900 text-base mb-2">🛠️ Technical Support</h4>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">Platform issues and technical assistance</p>
                <p className="text-[#2592D0] font-medium text-sm break-all mb-1 transition-colors duration-300">📧 info@worksourcealliance.ca</p>
                <p className="text-gray-600 text-sm">Contact: Tanguy Merrien</p>
              </div>
              <div className="border-l-4 border-[#FBBB02] pl-4 transition-all duration-300 hover:bg-yellow-50">
                <h4 className="font-semibold text-gray-900 text-base mb-2">📋 Operations</h4>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">Daily operations and administration</p>
                <p className="text-[#2592D0] font-medium text-sm break-all mb-1 transition-colors duration-300">📧 chuchi@worksourcealliance.ca</p>
                <p className="text-gray-600 text-sm">Contact: Chuchi Soriano</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      </Section>
    </div>
  );
}