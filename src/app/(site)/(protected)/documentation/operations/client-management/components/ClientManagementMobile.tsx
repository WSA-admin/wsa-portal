'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function ClientManagementMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'lifecycle' | 'categories' | 'intake' | 'crm' | 'communication' | 'success' | 'challenges' | 'resources'>('overview');

  const sections = [
    { id: 'overview', label: 'Overview', color: '#2592D0' },
    { id: 'lifecycle', label: 'Lifecycle', color: '#702083' },
    { id: 'categories', label: 'Categories', color: '#012E55' },
    { id: 'intake', label: 'Intake', color: '#FBBB02' },
    { id: 'crm', label: 'CRM', color: '#EF7B02' },
    { id: 'communication', label: 'Communication', color: '#2592D0' },
    { id: 'success', label: 'Success', color: '#702083' },
    { id: 'challenges', label: 'Challenges', color: '#012E55' },
    { id: 'resources', label: 'Resources', color: '#FBBB02' }
  ];

  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <Section orientation="horizontal" positioning="start" spacing="sm" className="mb-4">
          <Link href="/documentation/operations" className="text-[#2592D0] hover:text-[#012E55]">
            ← Operations Manual
          </Link>
          <Text variant="small" customColor="#9CA3AF">/</Text>
          <Text variant="small" customColor="#6B7280">Client Management</Text>
        </Section>
        <Heading>🤝 Client Management</Heading>
        <Text customColor="#6B7280" className="text-lg">
          Comprehensive client relationship management from initial contact through program completion and beyond
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
              <SubHeading>Client Management Overview</SubHeading>
              <Text customColor="#374151">
                WorkSource Alliance&apos;s client management system provides comprehensive support from initial contact through successful employment and beyond.
                Our approach focuses on individualized service delivery, measurable outcomes, and long-term relationship building.
              </Text>
              <Text>
                <span className="font-semibold">Key Components:</span> Systematic intake process, personalized program matching, ongoing progress tracking,
                employer relationship management, and alumni network development for sustained career growth.
              </Text>
              <Text>
                <span className="font-semibold">Success Metrics:</span> 75% job placement rate, 85% program completion rate, 90% client satisfaction,
                and 65% career advancement within first year of program completion.
              </Text>
            </Section>
          </Card>
        )}

        {activeSection === 'lifecycle' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Client Lifecycle Overview</SubHeading>
              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-3">
                <Section orientation="vertical" positioning="center" spacing="sm" className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto" style={{ backgroundColor: '#2592D0' }}>1</div>
                  <Text className="font-semibold" customColor="#2592D0">Acquisition Phase</Text>
                  <Text variant="small" customColor="#6B7280">Initial contact, inquiry processing, and engagement setup</Text>
                </Section>

                <Section orientation="vertical" positioning="center" spacing="sm" className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto" style={{ backgroundColor: '#702083' }}>2</div>
                  <Text className="font-semibold" customColor="#702083">Development Phase</Text>
                  <Text variant="small" customColor="#6B7280">Active program participation, skill building, and support delivery</Text>
                </Section>

                <Section orientation="vertical" positioning="center" spacing="sm" className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto" style={{ backgroundColor: '#FBBB02' }}>3</div>
                  <Text className="font-semibold" customColor="#FBBB02">Success Phase</Text>
                  <Text variant="small" customColor="#6B7280">Job placement, career advancement, and ongoing alumni support</Text>
                </Section>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'categories' && (
          <Section orientation="vertical" positioning="start" spacing="md">
            <SubHeading>Client Categories</SubHeading>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text className="font-semibold">🎓 Student Categories</Text>

                <Card variant="white" className="border-l-4 border-[#2592D0]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#2592D0">Current International Students</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Enrolled in PEI educational institutions{'\n'}
                      • Seeking part-time work opportunities{'\n'}
                      • Need career guidance and skill development{'\n'}
                      • Eligible for PeerPals and Easy Learn programs
                    </Text>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#702083]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#702083">Recent Graduates</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Completed studies within last 2 years{'\n'}
                      • Seeking full-time employment{'\n'}
                      • Require job placement assistance{'\n'}
                      • Eligible for all programs including Transitions
                    </Text>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#FBBB02]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#FBBB02">Alumni Network</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Successfully employed program graduates{'\n'}
                      • Potential mentors for current participants{'\n'}
                      • Career advancement support available{'\n'}
                      • Alumni referral network participants
                    </Text>
                  </Section>
                </Card>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text className="font-semibold">💼 Employer Categories</Text>

                <Card variant="white" className="border-l-4 border-[#EF7B02]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#EF7B02">Partner Employers</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Established partnerships with WSA{'\n'}
                      • Regular job posting and recruitment{'\n'}
                      • EDI consultation clients{'\n'}
                      • Internship and co-op providers
                    </Text>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#012E55]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#012E55">New Prospects</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Companies new to international hiring{'\n'}
                      • Require education on immigration processes{'\n'}
                      • Need support with diversity initiatives{'\n'}
                      • Potential pre-vetting program clients
                    </Text>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#2592D0]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#2592D0">Government & Non-Profit</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Public sector employment opportunities{'\n'}
                      • Community organization partnerships{'\n'}
                      • Grant and funding collaborators{'\n'}
                      • Policy development stakeholders
                    </Text>
                  </Section>
                </Card>
              </Section>
            </Card>
          </Section>
        )}

        {activeSection === 'intake' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Client Intake Process</SubHeading>
              <Text className="font-semibold mb-3">Comprehensive Assessment Framework</Text>

              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
                <div>
                  <Text className="font-medium mb-2" customColor="#2592D0">📋 Personal Information</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Basic Demographics:</span> Name, age, contact information, location</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Immigration Status:</span> Study permit, work permit, PR status, citizenship</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Education Background:</span> Degrees, certifications, institutions, graduation dates</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Language Proficiency:</span> English/French levels, communication skills assessment</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-medium mb-2" customColor="#702083">💼 Professional Profile</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Work Experience:</span> Previous roles, industries, responsibilities, achievements</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Technical Skills:</span> Software proficiency, certifications, specialized knowledge</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Career Goals:</span> Target roles, salary expectations, preferred locations</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Availability:</span> Start date, schedule flexibility, commitment level</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-medium mb-2" customColor="#FBBB02">🎯 Needs Assessment</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Challenges Identified:</span> Job search barriers, skill gaps, confidence issues</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Support Requirements:</span> Resume help, interview prep, networking guidance</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Program Interest:</span> Preferred services, time commitment, payment capacity</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Success Metrics:</span> Personal definition of success, measurable goals</Text>
                  </Section>
                </div>

                <div>
                  <Text className="font-medium mb-2" customColor="#EF7B02">🤝 Compatibility Assessment</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Program Fit:</span> Alignment with available services and expertise</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Commitment Level:</span> Realistic expectations about time and effort required</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Communication Style:</span> Preferred methods, frequency, feedback receptiveness</Text>
                    <Text variant="small" customColor="#6B7280"><span className="font-semibold">Cultural Considerations:</span> Background factors affecting job search approach</Text>
                  </Section>
                </div>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'crm' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>CRM System Management</SubHeading>

              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
                <div>
                  <Text className="font-semibold mb-3" customColor="#2592D0">📊 Client Data Management</Text>

                  <Card variant="gray" className="border-l-4 border-[#2592D0] mb-3">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium">Profile Setup</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Complete contact information and emergency contacts{'\n'}
                        • Educational background and credential verification{'\n'}
                        • Employment history and reference information{'\n'}
                        • Skills matrix and competency assessment results{'\n'}
                        • Program enrollment status and payment records
                      </Text>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-[#702083]">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium">Activity Tracking</Text>
                      <Text variant="small" customColor="#6B7280">
                        • All client interactions (emails, calls, meetings){'\n'}
                        • Program participation and attendance records{'\n'}
                        • Job applications submitted and outcomes{'\n'}
                        • Interview feedback and employer responses{'\n'}
                        • Coaching sessions and progress notes
                      </Text>
                    </Section>
                  </Card>
                </div>

                <div>
                  <Text className="font-semibold mb-3" customColor="#702083">📈 Progress Monitoring</Text>

                  <Card variant="gray" className="mb-3">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#FBBB02">Weekly Metrics</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Job applications submitted (target: 5-10){'\n'}
                        • Networking events attended (target: 1-2){'\n'}
                        • Skills development hours (target: 3-5){'\n'}
                        • Interview requests received (track all)
                      </Text>
                    </Section>
                  </Card>

                  <Card variant="gray" className="mb-3">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#EF7B02">Monthly Reviews</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Goal achievement assessment{'\n'}
                        • Program effectiveness evaluation{'\n'}
                        • Career advancement progress{'\n'}
                        • Support needs reassessment
                      </Text>
                    </Section>
                  </Card>

                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#012E55">Success Outcomes</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Job offers received and accepted{'\n'}
                        • Salary negotiations and outcomes{'\n'}
                        • Career advancement achievements{'\n'}
                        • Alumni network participation
                      </Text>
                    </Section>
                  </Card>
                </div>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'communication' && (
          <Section orientation="vertical" positioning="start" spacing="md">
            <SubHeading>Communication Protocols</SubHeading>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text className="font-semibold">📧 Communication Standards</Text>

                <Card variant="white" className="border-l-4 border-[#2592D0]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#2592D0">Response Time Requirements</Text>
                    <Text variant="small" customColor="#6B7280">
                      • <span className="font-semibold">Initial Inquiry:</span> 24 hours acknowledgment{'\n'}
                      • <span className="font-semibold">Urgent Matters:</span> 4 hours response{'\n'}
                      • <span className="font-semibold">Routine Questions:</span> 48 hours response{'\n'}
                      • <span className="font-semibold">Progress Updates:</span> Weekly scheduled check-ins
                    </Text>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#702083]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#702083">Communication Channels</Text>
                    <Text variant="small" customColor="#6B7280">
                      • <span className="font-semibold">Email:</span> Primary formal communication{'\n'}
                      • <span className="font-semibold">Phone:</span> Urgent matters and consultations{'\n'}
                      • <span className="font-semibold">Microsoft Teams:</span> Program-related discussions{'\n'}
                      • <span className="font-semibold">Video Calls:</span> Assessment and coaching sessions
                    </Text>
                  </Section>
                </Card>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text className="font-semibold">📝 Documentation Standards</Text>

                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium mb-2" customColor="#FBBB02">Interaction Records</Text>
                    <Text variant="small" customColor="#6B7280">
                      • Date, time, and duration of contact{'\n'}
                      • Communication method used{'\n'}
                      • Key discussion points and decisions{'\n'}
                      • Action items and follow-up required{'\n'}
                      • Client mood and engagement level
                    </Text>
                  </Section>
                </Card>

                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium mb-2" customColor="#EF7B02">Privacy & Confidentiality</Text>
                    <Text variant="small" customColor="#6B7280">
                      • All client information strictly confidential{'\n'}
                      • Secure storage in CRM system only{'\n'}
                      • Limited access to authorized team members{'\n'}
                      • Regular data protection training for staff{'\n'}
                      • Client consent required for data sharing
                    </Text>
                  </Section>
                </Card>
              </Section>
            </Card>
          </Section>
        )}

        {activeSection === 'success' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Client Success Framework</SubHeading>
              <Text className="font-semibold mb-3">Success Metrics & KPIs</Text>

              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-3">
                <div>
                  <Text className="font-semibold mb-2" customColor="#2592D0">🎯 Engagement Metrics</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Program Completion Rate</Text>
                      <Text variant="small" className="font-medium" customColor="#2592D0">Target: 85%</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Session Attendance Rate</Text>
                      <Text variant="small" className="font-medium" customColor="#2592D0">Target: 90%</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Client Satisfaction Score</Text>
                      <Text variant="small" className="font-medium" customColor="#2592D0">Target: 4.5/5</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Referral Rate</Text>
                      <Text variant="small" className="font-medium" customColor="#2592D0">Target: 30%</Text>
                    </Section>
                  </Section>
                </div>

                <div>
                  <Text className="font-semibold mb-2" customColor="#702083">💼 Employment Outcomes</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Job Placement Rate</Text>
                      <Text variant="small" className="font-medium" customColor="#702083">Target: 75%</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Time to Employment</Text>
                      <Text variant="small" className="font-medium" customColor="#702083">Target: 3 months</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Salary Achievement</Text>
                      <Text variant="small" className="font-medium" customColor="#702083">Target: 80% of goal</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Job Retention (6 months)</Text>
                      <Text variant="small" className="font-medium" customColor="#702083">Target: 85%</Text>
                    </Section>
                  </Section>
                </div>

                <div>
                  <Text className="font-semibold mb-2" customColor="#FBBB02">🚀 Development Impact</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Skill Improvement</Text>
                      <Text variant="small" className="font-medium" customColor="#FBBB02">Target: 2+ levels</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Confidence Increase</Text>
                      <Text variant="small" className="font-medium" customColor="#FBBB02">Target: 40% gain</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Network Expansion</Text>
                      <Text variant="small" className="font-medium" customColor="#FBBB02">Target: 20+ contacts</Text>
                    </Section>
                    <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                      <Text variant="small" customColor="#6B7280">Career Advancement</Text>
                      <Text variant="small" className="font-medium" customColor="#FBBB02">Target: 65% within 1yr</Text>
                    </Section>
                  </Section>
                </div>
              </Section>
            </Section>
          </Card>
        )}

        {activeSection === 'challenges' && (
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <SubHeading>Challenge Management</SubHeading>

              <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
                <div>
                  <Text className="font-semibold mb-3" customColor="#EF7B02">⚠️ Common Client Challenges</Text>

                  <Card variant="gray" className="border-l-4 border-red-400 mb-3">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#DC2626">High Priority Issues</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Lack of Canadian work experience{'\n'}
                        • Difficulty with job application processes{'\n'}
                        • Interview anxiety and cultural barriers{'\n'}
                        • Professional networking challenges{'\n'}
                        • Resume and cover letter effectiveness
                      </Text>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-orange-400">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#EA580C">Systemic Challenges</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Employer bias and unconscious discrimination{'\n'}
                        • Credential recognition difficulties{'\n'}
                        • Language barrier in professional settings{'\n'}
                        • Limited understanding of Canadian workplace culture{'\n'}
                        • Financial constraints during job search
                      </Text>
                    </Section>
                  </Card>
                </div>

                <div>
                  <Text className="font-semibold mb-3" customColor="#012E55">💡 Solution Strategies</Text>

                  <Card variant="gray" className="border-l-4 border-green-400 mb-3">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#059669">Skill Development</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Canadian workplace culture training{'\n'}
                        • Professional communication workshops{'\n'}
                        • Industry-specific skill enhancement{'\n'}
                        • Mock interview practice sessions
                      </Text>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-blue-400 mb-3">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#2563EB">Network Building</Text>
                      <Text variant="small" customColor="#6B7280">
                        • Alumni mentorship program connection{'\n'}
                        • Industry networking event facilitation{'\n'}
                        • Professional association introductions{'\n'}
                        • LinkedIn profile optimization support
                      </Text>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-purple-400">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#7C3AED">Direct Support</Text>
                      <Text variant="small" customColor="#6B7280">
                        • One-on-one coaching and mentorship{'\n'}
                        • Job matching and pre-vetting services{'\n'}
                        • Employer education and partnership development{'\n'}
                        • Financial assistance program referrals
                      </Text>
                    </Section>
                  </Card>
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
                  <Text className="font-semibold">📋 Assessment Tools</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small">• Comprehensive intake assessment form</Text>
                    <Text variant="small">• Skills competency evaluation matrix</Text>
                    <Text variant="small">• Career goals and objectives questionnaire</Text>
                    <Text variant="small">• Monthly progress review checklist</Text>
                  </Section>
                </Section>

                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">🛠️ Management Systems</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small">• CRM client database and tracking</Text>
                    <Text variant="small">• Microsoft Teams communication platform</Text>
                    <Text variant="small">• SharePoint document collaboration</Text>
                    <Text variant="small">• Easy Learn program delivery platform</Text>
                  </Section>
                </Section>

                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Text className="font-semibold">📞 Support Network</Text>
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text variant="small"><span className="font-semibold">Client Coordinator:</span> rita@worksourcealliance.ca</Text>
                    <Text variant="small"><span className="font-semibold">Operations Manager:</span> chuchi@worksourcealliance.ca</Text>
                    <Text variant="small"><span className="font-semibold">Executive Director:</span> daniel@worksourcealliance.ca</Text>
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