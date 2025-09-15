'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function DailyOperationsMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'morning' | 'onboarding' | 'tasks' | 'endofday' | 'coordination' | 'resources'>('overview');

  const sections = [
    { id: 'overview', label: 'Overview', color: '#2592D0' },
    { id: 'morning', label: 'Morning', color: '#702083' },
    { id: 'onboarding', label: 'Onboarding', color: '#012E55' },
    { id: 'tasks', label: 'Tasks', color: '#FBBB02' },
    { id: 'endofday', label: 'End of Day', color: '#EF7B02' },
    { id: 'coordination', label: 'Coordination', color: '#2592D0' },
    { id: 'resources', label: 'Resources', color: '#702083' }
  ];

  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <Section orientation="horizontal" positioning="start" spacing="sm" className="mb-4">
          <Link href="/documentation/operations" className="text-[#2592D0] hover:text-[#012E55]">
            ← Operations Manual
          </Link>
          <Text variant="small" customColor="#9CA3AF">/</Text>
          <Text variant="small" customColor="#6B7280">Daily Operations</Text>
        </Section>
        <Heading>📋 Daily Operations</Heading>
        <Text customColor="#6B7280" className="text-lg">
          Standard operating procedures for daily workflow management and team coordination
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
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Daily Operations Overview</SubHeading>
              <Text customColor="#374151">
                WorkSource Alliance daily operations follow structured procedures to ensure consistent service delivery,
                effective team coordination, and optimal client outcomes. Our daily workflow encompasses morning startup
                procedures, client onboarding, task management, and end-of-day closure activities.
              </Text>
              <Text>
                <span className="font-semibold">Key Components:</span> Systematic morning checklist, standardized onboarding process,
                priority-based task management, comprehensive documentation, and effective team coordination protocols.
              </Text>
              <Text>
                <span className="font-semibold">Success Metrics:</span> 24-hour response time for client inquiries, 100% system
                uptime verification, complete CRM documentation, and daily activity reporting to management.
              </Text>
            </Section>
          </Card>
        )}

        {activeSection === 'morning' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Morning Checklist</SubHeading>
              <Text className="font-semibold mb-3">Daily Startup Procedures</Text>

              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
                <div>
                  <Text className="font-medium mb-2" customColor="#702083">🌅 Operations Team Start (8:00 AM)</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Review overnight system alerts and notifications</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Check client inquiries and messages from previous day</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Review daily schedule and priority tasks</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Update team on any urgent matters via Teams</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Verify all platform systems are operational</Text>
                    </Section>
                  </Section>
                </div>

                <div>
                  <Text className="font-medium mb-2" customColor="#2592D0">📊 System Status Verification</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">CRM System - Check login and data accessibility</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Easy Learn Platform - Verify course access</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Microsoft Teams - Test communication channels</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Email Systems - Check for delivery issues</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Website Status - Confirm public site functionality</Text>
                    </Section>
                  </Section>
                </div>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'onboarding' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Client Onboarding Process</SubHeading>
              <Text className="font-semibold mb-3">6-Step Onboarding Workflow</Text>

              <Section orientation="vertical" positioning="start" spacing="md">
                <Card variant="gray" className="border-l-4 border-[#2592D0]">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#2592D0' }}>1</div>
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Text className="font-semibold">Initial Contact</Text>
                      <Text variant="small" customColor="#6B7280">Student/graduate reaches out through website, email, or referral</Text>
                      <Text variant="small" customColor="#9CA3AF">
                        <span className="font-semibold">Actions:</span> Log inquiry in CRM, send acknowledgment email, schedule initial consultation<br/>
                        <span className="font-semibold">Timeline:</span> Response within 24 hours<br/>
                        <span className="font-semibold">Responsible:</span> Rita Olfi (Job Placement Coordinator)
                      </Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="gray" className="border-l-4 border-[#702083]">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#702083' }}>2</div>
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Text className="font-semibold">Intake Assessment</Text>
                      <Text variant="small" customColor="#6B7280">Comprehensive evaluation of skills, experience, and career goals</Text>
                      <Text variant="small" customColor="#9CA3AF">
                        <span className="font-semibold">Tools:</span> Standardized intake forms, skills assessment questionnaire<br/>
                        <span className="font-semibold">Duration:</span> 45-60 minutes virtual or in-person meeting<br/>
                        <span className="font-semibold">Outcome:</span> Client profile created in CRM with detailed assessment data
                      </Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="gray" className="border-l-4 border-[#FBBB02]">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#FBBB02' }}>3</div>
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Text className="font-semibold">Program Matching</Text>
                      <Text variant="small" customColor="#6B7280">Determine most suitable programs and services based on assessment</Text>
                      <Text variant="small" customColor="#9CA3AF">
                        <span className="font-semibold">Options:</span> PeerPals (free), Transitions (paid), Easy Learn (free), Graduate Mentorship<br/>
                        <span className="font-semibold">Criteria:</span> Client goals, experience level, availability, financial situation<br/>
                        <span className="font-semibold">Decision:</span> Collaborative discussion with client preferences
                      </Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="gray" className="border-l-4 border-[#EF7B02]">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#EF7B02' }}>4</div>
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Text className="font-semibold">Registration & Documentation</Text>
                      <Text variant="small" customColor="#6B7280">Complete registration process and gather required documentation</Text>
                      <Text variant="small" customColor="#9CA3AF">
                        <span className="font-semibold">Documents:</span> Program agreement, privacy consent, emergency contact information<br/>
                        <span className="font-semibold">Setup:</span> Platform access credentials, program materials distribution<br/>
                        <span className="font-semibold">Payment:</span> Process fees for paid programs (Transitions)
                      </Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="gray" className="border-l-4 border-[#012E55]">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#012E55' }}>5</div>
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Text className="font-semibold">Program Delivery Initiation</Text>
                      <Text variant="small" customColor="#6B7280">Begin active participation in selected programs and services</Text>
                      <Text variant="small" customColor="#9CA3AF">
                        <span className="font-semibold">Orientation:</span> Program introduction session, expectations setting<br/>
                        <span className="font-semibold">Scheduling:</span> Regular check-ins, workshop sessions, mentorship meetings<br/>
                        <span className="font-semibold">Resources:</span> Access to Easy Learn platform, networking events
                      </Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="gray" className="border-l-4 border-[#2592D0]">
                  <Section orientation="horizontal" positioning="start" spacing="sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#2592D0' }}>6</div>
                    <Section orientation="vertical" positioning="start" spacing="sm" fill>
                      <Text className="font-semibold">Progress Monitoring</Text>
                      <Text variant="small" customColor="#6B7280">Regular evaluation and success outcome tracking</Text>
                      <Text variant="small" customColor="#9CA3AF">
                        <span className="font-semibold">Frequency:</span> Bi-weekly check-ins, monthly progress reviews<br/>
                        <span className="font-semibold">Metrics:</span> Skill development, job applications, interview success, employment outcomes<br/>
                        <span className="font-semibold">Support:</span> Ongoing coaching, problem-solving, program adjustments
                      </Text>
                    </Section>
                  </Section>
                </Card>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'tasks' && (
          <Section orientation="vertical" positioning="start" spacing="md">
            <SubHeading>Daily Task Management</SubHeading>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text className="font-semibold">📅 Priority Task Categories</Text>

                <Card variant="white" className="border-l-4 border-red-400">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#DC2626">🚨 Urgent (Same Day)</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Client emergency situations{'\n'}
                      • System outages or technical issues{'\n'}
                      • Media inquiries or PR matters{'\n'}
                      • Executive requests
                    </Text>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-orange-400">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#EA580C">⚡ High Priority (1-2 Days)</Text>
                    <Text variant="small" customColor="#6B7280">
                      • New client onboarding{'\n'}
                      • Employer partnership opportunities{'\n'}
                      • Program delivery issues{'\n'}
                      • Team coordination needs
                    </Text>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-yellow-400">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#D97706">📋 Regular (3-5 Days)</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Client progress reviews{'\n'}
                      • Documentation updates{'\n'}
                      • Marketing material development{'\n'}
                      • Process improvements
                    </Text>
                  </Section>
                </Card>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text className="font-semibold">⏰ Time Management Framework</Text>

                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium mb-2" customColor="#2592D0">Morning Block (9:00 AM - 12:00 PM)</Text>
                    <Text variant="small" customColor="#6B7280">
                      • High-focus tasks and client consultations{'\n'}
                      • New client onboarding sessions{'\n'}
                      • Team coordination meetings
                    </Text>
                  </Section>
                </Card>

                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium mb-2" customColor="#702083">Afternoon Block (1:00 PM - 4:00 PM)</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Administrative tasks and documentation{'\n'}
                      • Client follow-ups and check-ins{'\n'}
                      • Program delivery activities
                    </Text>
                  </Section>
                </Card>

                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium mb-2" customColor="#FBBB02">End-of-Day (4:00 PM - 5:00 PM)</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Daily wrap-up and planning{'\n'}
                      • Progress reporting and updates{'\n'}
                      • Next-day preparation
                    </Text>
                  </Section>
                </Card>
              </Section>
            </Card>
          </Section>
        )}

        {activeSection === 'endofday' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>End-of-Day Procedures</SubHeading>
              <Text className="font-semibold mb-3">Daily Closure Checklist</Text>

              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
                <div>
                  <Text className="font-medium mb-2" customColor="#702083">📊 Data & Documentation Updates</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Update all client records in CRM system</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Document any new client interactions or progress</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Log completed tasks and outcomes</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Update program delivery status and metrics</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#702083] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Save and backup all work documents</Text>
                    </Section>
                  </Section>
                </div>

                <div>
                  <Text className="font-medium mb-2" customColor="#2592D0">📋 Planning & Communication</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Prepare next-day priority task list</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Review calendar and upcoming appointments</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Send necessary follow-up communications</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Generate daily activity summary report</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm">
                      <div className="w-4 h-4 border border-[#2592D0] rounded mt-0.5 flex-shrink-0"></div>
                      <Text variant="small" customColor="#6B7280">Share important updates with team via Teams</Text>
                    </Section>
                  </Section>
                </div>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'coordination' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Team Coordination</SubHeading>

              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-3">
                <div>
                  <Text className="font-semibold mb-2" customColor="#2592D0">📅 Regular Meetings</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Daily Standup:</span> 9:00 AM (15 minutes)</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Weekly Team Meeting:</span> Mondays 10:00 AM</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Monthly Review:</span> First Friday of month</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Quarterly Planning:</span> Seasonal reviews</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-semibold mb-2" customColor="#702083">💬 Communication Channels</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Microsoft Teams:</span> Daily coordination</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Email:</span> Formal communications</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">CRM:</span> Client-related updates</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Phone:</span> Urgent matters only</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-semibold mb-2" customColor="#FBBB02">📊 Reporting Structure</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Daily:</span> Activity summaries to Operations Manager</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Weekly:</span> Progress reports to Executive Director</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Monthly:</span> Comprehensive performance metrics</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Quarterly:</span> Strategic review and planning</Text>
                  </Section>
                </div>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'resources' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="md">
              <SubHeading>Resources & Tools</SubHeading>
              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-3">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">🛠️ Essential Tools</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small"><span className="font-semibold">CRM System:</span> Client management and tracking</Text>
                    <Text variant="small"><span className="font-semibold">Microsoft Teams:</span> Team communication and meetings</Text>
                    <Text variant="small"><span className="font-semibold">Easy Learn Platform:</span> Program delivery and resources</Text>
                    <Text variant="small"><span className="font-semibold">SharePoint:</span> Document management and collaboration</Text>
                  </Section>
                </Section>

                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">📋 Templates & Forms</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small">• Client intake assessment form</Text>
                    <Text variant="small">• Daily activity report template</Text>
                    <Text variant="small">• Program evaluation checklist</Text>
                    <Text variant="small">• Emergency contact procedures</Text>
                  </Section>
                </Section>

                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">📞 Quick Contacts</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small"><span className="font-semibold">Operations:</span> chuchi@worksourcealliance.ca</Text>
                    <Text variant="small"><span className="font-semibold">Technical:</span> info@worksourcealliance.ca</Text>
                    <Text variant="small"><span className="font-semibold">Executive:</span> daniel@worksourcealliance.ca</Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Card>
        )}
      </Section>
    </Section>
  );
}