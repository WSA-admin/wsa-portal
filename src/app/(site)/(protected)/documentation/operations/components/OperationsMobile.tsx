'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function OperationsMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'team' | 'areas' | 'access' | 'emergency' | 'reference' | 'documents'>('overview');

  const sections = [
    { id: 'overview', label: 'Overview', color: '#2592D0' },
    { id: 'team', label: 'Team', color: '#702083' },
    { id: 'areas', label: 'Areas', color: '#012E55' },
    { id: 'access', label: 'Access', color: '#FBBB02' },
    { id: 'emergency', label: 'Emergency', color: '#EF7B02' },
    { id: 'reference', label: 'Reference', color: '#2592D0' },
    { id: 'documents', label: 'Documents', color: '#702083' }
  ];

  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <Section orientation="horizontal" positioning="start" spacing="sm" className="mb-4">
          <Link href="/documentation" className="text-[#2592D0] hover:text-[#012E55]">
            ← Documentation Hub
          </Link>
          <Text variant="small" customColor="#9CA3AF">/</Text>
          <Text variant="small" customColor="#6B7280">Operations Manual</Text>
        </Section>
        <Heading>👥 Operations Manual</Heading>
        <Text customColor="#6B7280" className="text-lg">
          Operational procedures, team management, and daily workflow processes for WorkSource Alliance
        </Text>
      </Section>

      <Section orientation="horizontal" positioning="start" spacing="sm" className="flex-wrap">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id as typeof activeSection)}
            className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
              activeSection === section.id
                ? 'text-white font-medium'
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
            }`}
            style={{
              backgroundColor: activeSection === section.id ? section.color : undefined
            }}
          >
            {section.label}
          </button>
        ))}
      </Section>

      <Section orientation="vertical" positioning="start" spacing="md">
        {activeSection === 'overview' && (
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Operations Overview</SubHeading>
              <Text customColor="#374151">
                WorkSource Alliance operations encompass daily management activities, client relationship management,
                platform administration, and team coordination. This manual provides comprehensive guidance for all
                operational aspects of the organization.
              </Text>
              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-semibold" customColor="#702083">Core Operations</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Daily workflow management{'\n'}
                      • Client onboarding & support{'\n'}
                      • Team coordination & communication{'\n'}
                      • Quality assurance processes
                    </Text>
                  </Section>
                </Card>
                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-semibold" customColor="#2592D0">Platform Management</Text>
                    <Text variant="small" customColor="#6B7280">
                      • System access & user management{'\n'}
                      • Data integrity & security{'\n'}
                      • Performance monitoring{'\n'}
                      • Technical support coordination
                    </Text>
                  </Section>
                </Card>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'team' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="md">
              <SubHeading>Operations Team</SubHeading>

              <Section orientation="vertical" positioning="start" spacing="md">
                <Card variant="gray" className="border-l-4 border-[#702083]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-semibold">Executive Leadership</Text>

                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <div>
                        <Text className="font-medium" customColor="#2592D0">Daniel Ohaegbu</Text>
                        <Text variant="small" customColor="#6B7280">Co-founder & Executive Director</Text>
                        <Text variant="small" className="font-medium" customColor="#2592D0">📧 daniel@worksourcealliance.ca</Text>
                        <Text variant="small" className="font-medium" customColor="#2592D0">📱 (647) 995-1416</Text>
                        <Text variant="small" customColor="#9CA3AF">Strategic oversight and organizational leadership</Text>
                      </div>

                      <div>
                        <Text className="font-medium" customColor="#702083">Chuchi Soriano</Text>
                        <Text variant="small" customColor="#6B7280">Operations & Administration Manager</Text>
                        <Text variant="small" className="font-medium" customColor="#2592D0">📧 chuchi@worksourcealliance.ca</Text>
                        <Text variant="small" customColor="#9CA3AF">Daily operations and system administration</Text>
                      </div>
                    </Section>
                  </Section>
                </Card>

                <Card variant="gray" className="border-l-4 border-[#FBBB02]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-semibold">Core Operations Team</Text>

                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <div>
                        <Text className="font-medium" customColor="#FBBB02">Rita Olfi</Text>
                        <Text variant="small" customColor="#6B7280">Job Placement & Outreach Coordinator</Text>
                        <Text variant="small" className="font-medium" customColor="#2592D0">📧 rita@worksourcealliance.ca</Text>
                        <Text variant="small" customColor="#9CA3AF">Client job placement and employer relations</Text>
                      </div>

                      <div>
                        <Text className="font-medium" customColor="#EF7B02">Melvis O. Onoriode</Text>
                        <Text variant="small" customColor="#6B7280">Digital & Strategic Support Coordinator</Text>
                        <Text variant="small" className="font-medium" customColor="#2592D0">📧 melvis@worksourcealliance.ca</Text>
                        <Text variant="small" customColor="#9CA3AF">Digital strategy and social media management</Text>
                      </div>
                    </Section>
                  </Section>
                </Card>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'areas' && (
          <Section orientation="vertical" positioning="start" spacing="md">
            <SubHeading>Operations Areas</SubHeading>

            <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
              <Card variant="white" className="flex flex-col">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#702083' }}></div>
                    <Text className="text-xl font-semibold" customColor="#702083">Daily Operations</Text>
                  </Section>
                  <Text customColor="#6B7280">
                    Standard operating procedures for daily workflow management and team coordination.
                  </Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Coverage:</span> Morning checklist, client onboarding, progress tracking</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Responsibilities:</span> Team coordination, quality assurance</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Tools:</span> CRM system, Microsoft Teams, project management</Text>
                  </Section>
                  <Link
                    href="/documentation/operations/daily-operations"
                    className="text-[#702083] hover:text-[#012E55] font-medium transition-colors"
                  >
                    View Daily Operations →
                  </Link>
                </Section>
              </Card>

              <Card variant="white" className="flex flex-col">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2592D0' }}></div>
                    <Text className="text-xl font-semibold" customColor="#2592D0">Client Management</Text>
                  </Section>
                  <Text customColor="#6B7280">
                    Comprehensive client relationship management from initial contact through program completion.
                  </Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Coverage:</span> Onboarding, assessment, program matching, progress monitoring</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Tools:</span> CRM system, intake forms, evaluation metrics</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Outcomes:</span> Client success tracking, program effectiveness</Text>
                  </Section>
                  <Link
                    href="/documentation/operations/client-management"
                    className="text-[#2592D0] hover:text-[#012E55] font-medium transition-colors"
                  >
                    View Client Management →
                  </Link>
                </Section>
              </Card>

              <Card variant="white" className="flex flex-col">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FBBB02' }}></div>
                    <Text className="text-xl font-semibold" customColor="#FBBB02">Platform Administration</Text>
                  </Section>
                  <Text customColor="#6B7280">
                    System access management, user permissions, and platform security protocols.
                  </Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Systems:</span> CRM, Easy Learn Platform, Microsoft Teams, Social Media</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Security:</span> Access control, password management, data protection</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Support:</span> Technical assistance, troubleshooting, training</Text>
                  </Section>
                  <Link
                    href="/documentation/operations/platform-administration"
                    className="text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors"
                  >
                    View Platform Administration →
                  </Link>
                </Section>
              </Card>

              <Card variant="white" className="flex flex-col">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF7B02' }}></div>
                    <Text className="text-xl font-semibold" customColor="#EF7B02">Quality Assurance</Text>
                  </Section>
                  <Text customColor="#6B7280">
                    Quality control processes, performance monitoring, and continuous improvement protocols.
                  </Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Monitoring:</span> Service quality, client satisfaction, team performance</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Standards:</span> Operational excellence, compliance, best practices</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Improvement:</span> Process optimization, feedback integration</Text>
                  </Section>
                  <Link
                    href="/documentation/operations/quality-assurance"
                    className="text-[#EF7B02] hover:text-[#012E55] font-medium transition-colors"
                  >
                    View Quality Assurance →
                  </Link>
                </Section>
              </Card>
            </Section>
          </Section>
        )}

        {activeSection === 'access' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>System Access Matrix</SubHeading>
              <Text className="font-semibold mb-3">Platform Access & Administration</Text>
              <div className="overflow-x-auto">
                <div className="space-y-3">
                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#702083">CRM System</Text>
                      <Text variant="small"><span className="font-semibold">Administrator:</span> Chuchi Soriano</Text>
                      <Text variant="small"><span className="font-semibold">Backup Admin:</span> Daniel Ohaegbu</Text>
                      <Text variant="small" customColor="#2592D0"><span className="font-semibold">Access Requests:</span> chuchi@worksourcealliance.ca</Text>
                    </Section>
                  </Card>

                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#2592D0">Easy Learn Platform</Text>
                      <Text variant="small"><span className="font-semibold">Administrator:</span> Chuchi Soriano</Text>
                      <Text variant="small"><span className="font-semibold">Backup Admin:</span> Tanguy Merrien</Text>
                      <Text variant="small" customColor="#2592D0"><span className="font-semibold">Access Requests:</span> chuchi@worksourcealliance.ca</Text>
                    </Section>
                  </Card>

                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#FBBB02">Microsoft Teams</Text>
                      <Text variant="small"><span className="font-semibold">Administrator:</span> Daniel Ohaegbu</Text>
                      <Text variant="small"><span className="font-semibold">Backup Admin:</span> Chuchi Soriano</Text>
                      <Text variant="small" customColor="#2592D0"><span className="font-semibold">Access Requests:</span> daniel@worksourcealliance.ca</Text>
                    </Section>
                  </Card>

                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#EF7B02">Social Media Platforms</Text>
                      <Text variant="small"><span className="font-semibold">Administrator:</span> Melvis O. Onoriode</Text>
                      <Text variant="small"><span className="font-semibold">Backup Admin:</span> Chuchi Soriano</Text>
                      <Text variant="small" customColor="#2592D0"><span className="font-semibold">Access Requests:</span> melvis@worksourcealliance.ca</Text>
                    </Section>
                  </Card>
                </div>
              </div>
              <Card variant="gray" className="mt-4 bg-blue-50 border-l-4 border-[#2592D0]">
                <Text variant="small" customColor="#1E40AF">
                  <span className="font-semibold">Security Note:</span> All platform credentials are managed by the Operations & Administration Manager.
                  Contact Chuchi Soriano for access requests or password resets.
                </Text>
              </Card>
            </Section>
          </Card>
        )}

        {activeSection === 'emergency' && (
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Emergency Procedures</SubHeading>
              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-3">
                <div>
                  <Text className="font-semibold mb-2" customColor="#DC2626">🚨 System Emergencies</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Contact:</span> Tanguy Merrien</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Email:</span> info@worksourcealliance.ca</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Scope:</span> Platform outages, security breaches, data issues</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Response:</span> Immediate technical assessment</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-semibold mb-2" customColor="#EA580C">⚠️ Operations Emergencies</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Contact:</span> Chuchi Soriano</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Email:</span> chuchi@worksourcealliance.ca</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Scope:</span> Client issues, process failures, team coordination</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Response:</span> Operational contingency plans</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-semibold mb-2" customColor="#9333EA">🏢 Executive Escalation</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Contact:</span> Daniel Ohaegbu</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Email:</span> daniel@worksourcealliance.ca</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Phone:</span> (647) 995-1416</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Scope:</span> Strategic decisions, critical incidents</Text>
                  </Section>
                </div>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'reference' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="md">
              <SubHeading>Quick Reference</SubHeading>
              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-3">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">📋 Daily Workflows</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Link href="/documentation/operations/daily-operations" className="text-[#702083] hover:underline text-sm">Morning Checklist</Link>
                    <Link href="/documentation/operations/client-management" className="text-[#702083] hover:underline text-sm">Client Onboarding Process</Link>
                    <Link href="/documentation/operations/daily-operations" className="text-[#702083] hover:underline text-sm">End-of-Day Procedures</Link>
                  </Section>
                </Section>

                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">🔧 System Administration</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Link href="/documentation/operations/platform-administration" className="text-[#702083] hover:underline text-sm">Access Management</Link>
                    <Link href="/documentation/operations/platform-administration" className="text-[#702083] hover:underline text-sm">Security Protocols</Link>
                    <Link href="/documentation/operations/platform-administration" className="text-[#702083] hover:underline text-sm">Troubleshooting Guide</Link>
                  </Section>
                </Section>

                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">📞 Emergency Contacts</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small"><span className="font-semibold">Technical:</span> info@worksourcealliance.ca</Text>
                    <Text variant="small"><span className="font-semibold">Operations:</span> chuchi@worksourcealliance.ca</Text>
                    <Text variant="small"><span className="font-semibold">Executive:</span> daniel@worksourcealliance.ca</Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'documents' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Document Management</SubHeading>
              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
                <div>
                  <Text className="font-semibold mb-2" customColor="#2592D0">📁 Internal Documents</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280">• Employee Handbook - HR policies and procedures</Text>
                    <Text variant="small" customColor="#6B7280">• Program Guidelines - Detailed program delivery instructions</Text>
                    <Text variant="small" customColor="#6B7280">• Client Intake Forms - Standardized assessment templates</Text>
                    <Text variant="small" customColor="#6B7280">• Partnership Agreements - Templates for employer partnerships</Text>
                    <Text variant="small" customColor="#6B7280">• Marketing Materials - Brochures, presentations, promotional content</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-semibold mb-2" customColor="#702083">🔗 Document Access</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Storage:</span> Microsoft SharePoint drive</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Access:</span> Team member permissions required</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Contact:</span> Chuchi Soriano for permissions</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Security:</span> Role-based access control</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Backup:</span> Automated cloud backup</Text>
                  </Section>
                </div>
              </Section>
            </Section>
          </Card>
        )}
      </Section>
    </Section>
  );
}