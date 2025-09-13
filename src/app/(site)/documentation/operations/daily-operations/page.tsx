import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function DailyOperationsPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/operations" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Operations Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Daily Operations</span>
        </div>
        <Heading>📋 Daily Operations</Heading>
        <p className="text-gray-600 text-lg">
          Standard operating procedures for daily workflow management and team coordination
        </p>
      </Section>

      {/* Morning Checklist */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Morning Checklist</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Daily Startup Procedures</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🌅 Operations Team Start (8:00 AM)</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Review overnight system alerts and notifications</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Check client inquiries and messages from previous day</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Review daily schedule and priority tasks</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Update team on any urgent matters via Teams</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Verify all platform systems are operational</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">📊 System Status Verification</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">CRM System - Check login and data accessibility</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Easy Learn Platform - Verify course access</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Microsoft Teams - Test communication channels</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Email Systems - Check for delivery issues</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Website Status - Confirm public site functionality</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Client Onboarding Process */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Client Onboarding Process</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">6-Step Onboarding Workflow</h4>
            <div className="space-y-4">
              
              <div className="flex items-start border-l-4 border-[#2592D0] pl-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2592D0] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Initial Contact</h5>
                  <p className="text-sm text-gray-600 mb-2">Student/graduate reaches out through website, email, or referral</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Actions:</strong> Log inquiry in CRM, send acknowledgment email, schedule initial consultation</p>
                    <p><strong>Timeline:</strong> Response within 24 hours</p>
                    <p><strong>Responsible:</strong> Rita Olfi (Job Placement Coordinator)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-[#702083] pl-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#702083] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Intake Assessment</h5>
                  <p className="text-sm text-gray-600 mb-2">Comprehensive evaluation of skills, experience, and career goals</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Tools:</strong> Standardized intake forms, skills assessment questionnaire</p>
                    <p><strong>Duration:</strong> 45-60 minutes virtual or in-person meeting</p>
                    <p><strong>Outcome:</strong> Client profile created in CRM with detailed assessment data</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-[#FBBB02] pl-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FBBB02] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Program Matching</h5>
                  <p className="text-sm text-gray-600 mb-2">Determine most suitable programs and services based on assessment</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Options:</strong> PeerPals (free), Transitions (paid), Easy Learn (free), Graduate Mentorship</p>
                    <p><strong>Criteria:</strong> Client goals, experience level, availability, financial situation</p>
                    <p><strong>Decision:</strong> Collaborative discussion with client preferences</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-[#EF7B02] pl-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#EF7B02] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Registration & Documentation</h5>
                  <p className="text-sm text-gray-600 mb-2">Complete registration process and gather required documentation</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Documents:</strong> Program agreement, privacy consent, emergency contact information</p>
                    <p><strong>Setup:</strong> Platform access credentials, program materials distribution</p>
                    <p><strong>Payment:</strong> Process fees for paid programs (Transitions)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-[#012E55] pl-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#012E55] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">5</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Program Delivery Initiation</h5>
                  <p className="text-sm text-gray-600 mb-2">Begin active participation in selected programs and services</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Orientation:</strong> Program introduction session, expectations setting</p>
                    <p><strong>Scheduling:</strong> Regular check-ins, workshop sessions, mentorship meetings</p>
                    <p><strong>Resources:</strong> Access to Easy Learn platform, networking events</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-[#2592D0] pl-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2592D0] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">6</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Progress Monitoring</h5>
                  <p className="text-sm text-gray-600 mb-2">Regular evaluation and success outcome tracking</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Frequency:</strong> Bi-weekly check-ins, monthly progress reviews</p>
                    <p><strong>Metrics:</strong> Skill development, job applications, interview success, employment outcomes</p>
                    <p><strong>Support:</strong> Ongoing coaching, problem-solving, program adjustments</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Daily Task Management */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Daily Task Management</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">📅 Priority Task Categories</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-red-400 pl-3">
                  <h5 className="font-medium text-red-600">🚨 Urgent (Same Day)</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Client emergency situations</li>
                    <li>• System outages or technical issues</li>
                    <li>• Media inquiries or PR matters</li>
                    <li>• Executive requests</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-3">
                  <h5 className="font-medium text-orange-600">⚡ High Priority (1-2 Days)</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• New client onboarding</li>
                    <li>• Employer partnership opportunities</li>
                    <li>• Program delivery issues</li>
                    <li>• Team coordination needs</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-3">
                  <h5 className="font-medium text-yellow-600">📋 Regular (3-5 Days)</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Client progress reviews</li>
                    <li>• Documentation updates</li>
                    <li>• Marketing material development</li>
                    <li>• Process improvements</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">⏰ Time Management Framework</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#2592D0] mb-2">Morning Block (9:00 AM - 12:00 PM)</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• High-focus tasks and client consultations</li>
                    <li>• New client onboarding sessions</li>
                    <li>• Team coordination meetings</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#702083] mb-2">Afternoon Block (1:00 PM - 4:00 PM)</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Administrative tasks and documentation</li>
                    <li>• Client follow-ups and check-ins</li>
                    <li>• Program delivery activities</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#FBBB02] mb-2">End-of-Day (4:00 PM - 5:00 PM)</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Daily wrap-up and planning</li>
                    <li>• Progress reporting and updates</li>
                    <li>• Next-day preparation</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* End-of-Day Procedures */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>End-of-Day Procedures</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Daily Closure Checklist</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">📊 Data & Documentation Updates</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Update all client records in CRM system</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Document any new client interactions or progress</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Log completed tasks and outcomes</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Update program delivery status and metrics</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#702083]" disabled />
                    <span className="text-gray-600">Save and backup all work documents</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">📋 Planning & Communication</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Prepare next-day priority task list</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Review calendar and upcoming appointments</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Send necessary follow-up communications</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Generate daily activity summary report</span>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2 text-[#2592D0]" disabled />
                    <span className="text-gray-600">Share important updates with team via Teams</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Team Coordination */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Team Coordination</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">📅 Regular Meetings</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Daily Standup:</strong> 9:00 AM (15 minutes)</p>
                  <p><strong>Weekly Team Meeting:</strong> Mondays 10:00 AM</p>
                  <p><strong>Monthly Review:</strong> First Friday of month</p>
                  <p><strong>Quarterly Planning:</strong> Seasonal reviews</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-2">💬 Communication Channels</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Microsoft Teams:</strong> Daily coordination</p>
                  <p><strong>Email:</strong> Formal communications</p>
                  <p><strong>CRM:</strong> Client-related updates</p>
                  <p><strong>Phone:</strong> Urgent matters only</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">📊 Reporting Structure</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Daily:</strong> Activity summaries to Operations Manager</p>
                  <p><strong>Weekly:</strong> Progress reports to Executive Director</p>
                  <p><strong>Monthly:</strong> Comprehensive performance metrics</p>
                  <p><strong>Quarterly:</strong> Strategic review and planning</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Resources & Tools */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Resources & Tools</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🛠️ Essential Tools</h4>
              <div className="space-y-2 text-sm">
                <p><strong>CRM System:</strong> Client management and tracking</p>
                <p><strong>Microsoft Teams:</strong> Team communication and meetings</p>
                <p><strong>Easy Learn Platform:</strong> Program delivery and resources</p>
                <p><strong>SharePoint:</strong> Document management and collaboration</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📋 Templates & Forms</h4>
              <div className="space-y-2 text-sm">
                <p>• Client intake assessment form</p>
                <p>• Daily activity report template</p>
                <p>• Program evaluation checklist</p>
                <p>• Emergency contact procedures</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Quick Contacts</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Operations:</strong> chuchi@worksourcealliance.ca</p>
                <p><strong>Technical:</strong> info@worksourcealliance.ca</p>
                <p><strong>Executive:</strong> daniel@worksourcealliance.ca</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}