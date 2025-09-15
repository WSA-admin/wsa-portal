'use client';

import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function ClientManagementDesktop() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-fadeUp"
      >
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

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideLeft"
      >
        <SubHeading>Client Lifecycle Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <Section orientation="horizontal" positioning="start" spacing="lg" className="grid grid-cols-1 md:grid-cols-3">
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
      </Section>

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideRight"
      >
        <SubHeading>Client Categories</SubHeading>
        <Section orientation="horizontal" positioning="start" spacing="lg" className="grid grid-cols-1 md:grid-cols-2">
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <Text className="font-semibold">🎓 Student Categories</Text>
              <Section orientation="vertical" positioning="start" spacing="md">
                <Card variant="white" className="border-l-4 border-[#2592D0]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#2592D0">Current International Students</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• Enrolled in PEI educational institutions</Text>
                      <Text variant="small" customColor="#6B7280">• Seeking part-time work opportunities</Text>
                      <Text variant="small" customColor="#6B7280">• Need career guidance and skill development</Text>
                      <Text variant="small" customColor="#6B7280">• Eligible for PeerPals and Easy Learn programs</Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#702083]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#702083">Recent Graduates</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• Completed studies within last 2 years</Text>
                      <Text variant="small" customColor="#6B7280">• Seeking full-time employment</Text>
                      <Text variant="small" customColor="#6B7280">• Require job placement assistance</Text>
                      <Text variant="small" customColor="#6B7280">• Eligible for all programs including Transitions</Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#FBBB02]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#FBBB02">Alumni Network</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• Successfully employed program graduates</Text>
                      <Text variant="small" customColor="#6B7280">• Potential mentors for current participants</Text>
                      <Text variant="small" customColor="#6B7280">• Career advancement support available</Text>
                      <Text variant="small" customColor="#6B7280">• Alumni referral network participants</Text>
                    </Section>
                  </Section>
                </Card>
              </Section>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <Text className="font-semibold">💼 Employer Categories</Text>
              <Section orientation="vertical" positioning="start" spacing="md">
                <Card variant="white" className="border-l-4 border-[#EF7B02]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#EF7B02">Partner Employers</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• Established partnerships with WSA</Text>
                      <Text variant="small" customColor="#6B7280">• Regular job posting and recruitment</Text>
                      <Text variant="small" customColor="#6B7280">• EDI consultation clients</Text>
                      <Text variant="small" customColor="#6B7280">• Internship and co-op providers</Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#012E55]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#012E55">New Prospects</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• Companies new to international hiring</Text>
                      <Text variant="small" customColor="#6B7280">• Require education on immigration processes</Text>
                      <Text variant="small" customColor="#6B7280">• Need support with diversity initiatives</Text>
                      <Text variant="small" customColor="#6B7280">• Potential pre-vetting program clients</Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#2592D0]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#2592D0">Government & Non-Profit</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• Public sector employment opportunities</Text>
                      <Text variant="small" customColor="#6B7280">• Community organization partnerships</Text>
                      <Text variant="small" customColor="#6B7280">• Grant and funding collaborators</Text>
                      <Text variant="small" customColor="#6B7280">• Policy development stakeholders</Text>
                    </Section>
                  </Section>
                </Card>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideLeft"
      >
        <SubHeading>Client Intake Process</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <Text className="font-semibold mb-3">Comprehensive Assessment Framework</Text>
            <Section orientation="horizontal" positioning="start" spacing="lg" className="grid grid-cols-1 md:grid-cols-2">
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
      </Section>

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideRight"
      >
        <SubHeading>CRM System Management</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <Section orientation="horizontal" positioning="start" spacing="lg" className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <Text className="font-semibold mb-3" customColor="#2592D0">📊 Client Data Management</Text>
                <Section orientation="vertical" positioning="start" spacing="md">
                  <Card variant="gray" className="border-l-4 border-[#2592D0]">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium">Profile Setup</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Complete contact information and emergency contacts</Text>
                        <Text variant="small" customColor="#6B7280">• Educational background and credential verification</Text>
                        <Text variant="small" customColor="#6B7280">• Employment history and reference information</Text>
                        <Text variant="small" customColor="#6B7280">• Skills matrix and competency assessment results</Text>
                        <Text variant="small" customColor="#6B7280">• Program enrollment status and payment records</Text>
                      </Section>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-[#702083]">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium">Activity Tracking</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• All client interactions (emails, calls, meetings)</Text>
                        <Text variant="small" customColor="#6B7280">• Program participation and attendance records</Text>
                        <Text variant="small" customColor="#6B7280">• Job applications submitted and outcomes</Text>
                        <Text variant="small" customColor="#6B7280">• Interview feedback and employer responses</Text>
                        <Text variant="small" customColor="#6B7280">• Coaching sessions and progress notes</Text>
                      </Section>
                    </Section>
                  </Card>
                </Section>
              </div>

              <div>
                <Text className="font-semibold mb-3" customColor="#702083">📈 Progress Monitoring</Text>
                <Section orientation="vertical" positioning="start" spacing="md">
                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#FBBB02">Weekly Metrics</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Job applications submitted (target: 5-10)</Text>
                        <Text variant="small" customColor="#6B7280">• Networking events attended (target: 1-2)</Text>
                        <Text variant="small" customColor="#6B7280">• Skills development hours (target: 3-5)</Text>
                        <Text variant="small" customColor="#6B7280">• Interview requests received (track all)</Text>
                      </Section>
                    </Section>
                  </Card>

                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#EF7B02">Monthly Reviews</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Goal achievement assessment</Text>
                        <Text variant="small" customColor="#6B7280">• Program effectiveness evaluation</Text>
                        <Text variant="small" customColor="#6B7280">• Career advancement progress</Text>
                        <Text variant="small" customColor="#6B7280">• Support needs reassessment</Text>
                      </Section>
                    </Section>
                  </Card>

                  <Card variant="gray">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#012E55">Success Outcomes</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Job offers received and accepted</Text>
                        <Text variant="small" customColor="#6B7280">• Salary negotiations and outcomes</Text>
                        <Text variant="small" customColor="#6B7280">• Career advancement achievements</Text>
                        <Text variant="small" customColor="#6B7280">• Alumni network participation</Text>
                      </Section>
                    </Section>
                  </Card>
                </Section>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideLeft"
      >
        <SubHeading>Communication Protocols</SubHeading>
        <Section orientation="horizontal" positioning="start" spacing="lg" className="grid grid-cols-1 md:grid-cols-2">
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <Text className="font-semibold">📧 Communication Standards</Text>
              <Section orientation="vertical" positioning="start" spacing="md">
                <Card variant="white" className="border-l-4 border-[#2592D0]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#2592D0">Response Time Requirements</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Initial Inquiry:</span> 24 hours acknowledgment</Text>
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Urgent Matters:</span> 4 hours response</Text>
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Routine Questions:</span> 48 hours response</Text>
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Progress Updates:</span> Weekly scheduled check-ins</Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="white" className="border-l-4 border-[#702083]">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium" customColor="#702083">Communication Channels</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Email:</span> Primary formal communication</Text>
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Phone:</span> Urgent matters and consultations</Text>
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Microsoft Teams:</span> Program-related discussions</Text>
                      <Text variant="small" customColor="#6B7280">• <span className="font-semibold">Video Calls:</span> Assessment and coaching sessions</Text>
                    </Section>
                  </Section>
                </Card>
              </Section>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <Text className="font-semibold">📝 Documentation Standards</Text>
              <Section orientation="vertical" positioning="start" spacing="md">
                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium mb-2" customColor="#FBBB02">Interaction Records</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• Date, time, and duration of contact</Text>
                      <Text variant="small" customColor="#6B7280">• Communication method used</Text>
                      <Text variant="small" customColor="#6B7280">• Key discussion points and decisions</Text>
                      <Text variant="small" customColor="#6B7280">• Action items and follow-up required</Text>
                      <Text variant="small" customColor="#6B7280">• Client mood and engagement level</Text>
                    </Section>
                  </Section>
                </Card>

                <Card variant="white">
                  <Section orientation="vertical" positioning="start" spacing="sm">
                    <Text className="font-medium mb-2" customColor="#EF7B02">Privacy & Confidentiality</Text>
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text variant="small" customColor="#6B7280">• All client information strictly confidential</Text>
                      <Text variant="small" customColor="#6B7280">• Secure storage in CRM system only</Text>
                      <Text variant="small" customColor="#6B7280">• Limited access to authorized team members</Text>
                      <Text variant="small" customColor="#6B7280">• Regular data protection training for staff</Text>
                      <Text variant="small" customColor="#6B7280">• Client consent required for data sharing</Text>
                    </Section>
                  </Section>
                </Card>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideRight"
      >
        <SubHeading>Client Success Framework</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <Text className="font-semibold mb-3">Success Metrics & KPIs</Text>
            <Section orientation="horizontal" positioning="start" spacing="lg" className="grid grid-cols-1 md:grid-cols-3">
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
      </Section>

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideLeft"
      >
        <SubHeading>Challenge Management</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <Section orientation="horizontal" positioning="start" spacing="lg" className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <Text className="font-semibold mb-3" customColor="#EF7B02">⚠️ Common Client Challenges</Text>
                <Section orientation="vertical" positioning="start" spacing="md">
                  <Card variant="gray" className="border-l-4 border-red-400">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#DC2626">High Priority Issues</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Lack of Canadian work experience</Text>
                        <Text variant="small" customColor="#6B7280">• Difficulty with job application processes</Text>
                        <Text variant="small" customColor="#6B7280">• Interview anxiety and cultural barriers</Text>
                        <Text variant="small" customColor="#6B7280">• Professional networking challenges</Text>
                        <Text variant="small" customColor="#6B7280">• Resume and cover letter effectiveness</Text>
                      </Section>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-orange-400">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#EA580C">Systemic Challenges</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Employer bias and unconscious discrimination</Text>
                        <Text variant="small" customColor="#6B7280">• Credential recognition difficulties</Text>
                        <Text variant="small" customColor="#6B7280">• Language barrier in professional settings</Text>
                        <Text variant="small" customColor="#6B7280">• Limited understanding of Canadian workplace culture</Text>
                        <Text variant="small" customColor="#6B7280">• Financial constraints during job search</Text>
                      </Section>
                    </Section>
                  </Card>
                </Section>
              </div>

              <div>
                <Text className="font-semibold mb-3" customColor="#012E55">💡 Solution Strategies</Text>
                <Section orientation="vertical" positioning="start" spacing="md">
                  <Card variant="gray" className="border-l-4 border-green-400">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#059669">Skill Development</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Canadian workplace culture training</Text>
                        <Text variant="small" customColor="#6B7280">• Professional communication workshops</Text>
                        <Text variant="small" customColor="#6B7280">• Industry-specific skill enhancement</Text>
                        <Text variant="small" customColor="#6B7280">• Mock interview practice sessions</Text>
                      </Section>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-blue-400">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#2563EB">Network Building</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• Alumni mentorship program connection</Text>
                        <Text variant="small" customColor="#6B7280">• Industry networking event facilitation</Text>
                        <Text variant="small" customColor="#6B7280">• Professional association introductions</Text>
                        <Text variant="small" customColor="#6B7280">• LinkedIn profile optimization support</Text>
                      </Section>
                    </Section>
                  </Card>

                  <Card variant="gray" className="border-l-4 border-purple-400">
                    <Section orientation="vertical" positioning="start" spacing="sm">
                      <Text className="font-medium" customColor="#7C3AED">Direct Support</Text>
                      <Section orientation="vertical" positioning="start" spacing="sm">
                        <Text variant="small" customColor="#6B7280">• One-on-one coaching and mentorship</Text>
                        <Text variant="small" customColor="#6B7280">• Job matching and pre-vetting services</Text>
                        <Text variant="small" customColor="#6B7280">• Employer education and partnership development</Text>
                        <Text variant="small" customColor="#6B7280">• Financial assistance program referrals</Text>
                      </Section>
                    </Section>
                  </Card>
                </Section>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>

      <Section
        orientation="vertical"
        positioning="start"
        spacing="md"
        className="animate-slideRight"
      >
        <SubHeading>Resources & Tools</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <Text className="font-semibold">📋 Assessment Tools</Text>
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text variant="small">• Comprehensive intake assessment form</Text>
                <Text variant="small">• Skills competency evaluation matrix</Text>
                <Text variant="small">• Career goals and objectives questionnaire</Text>
                <Text variant="small">• Monthly progress review checklist</Text>
              </Section>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <Text className="font-semibold">🛠️ Management Systems</Text>
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text variant="small">• CRM client database and tracking</Text>
                <Text variant="small">• Microsoft Teams communication platform</Text>
                <Text variant="small">• SharePoint document collaboration</Text>
                <Text variant="small">• Easy Learn program delivery platform</Text>
              </Section>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <Text className="font-semibold">📞 Support Network</Text>
              <Section orientation="vertical" positioning="start" spacing="sm">
                <Text variant="small"><span className="font-semibold">Client Coordinator:</span> rita@worksourcealliance.ca</Text>
                <Text variant="small"><span className="font-semibold">Operations Manager:</span> chuchi@worksourcealliance.ca</Text>
                <Text variant="small"><span className="font-semibold">Executive Director:</span> daniel@worksourcealliance.ca</Text>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}