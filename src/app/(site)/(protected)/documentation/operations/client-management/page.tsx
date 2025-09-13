import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function ClientManagementPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/operations" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Operations Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Client Management</span>
        </div>
        <Heading>🤝 Client Management</Heading>
        <p className="text-gray-600 text-lg">
          Comprehensive client relationship management from initial contact through program completion and beyond
        </p>
      </Section>

      {/* Client Lifecycle Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Client Lifecycle Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2592D0] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">1</div>
                <h4 className="font-semibold text-[#2592D0] mb-2">Acquisition Phase</h4>
                <p className="text-sm text-gray-600">Initial contact, inquiry processing, and engagement setup</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#702083] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">2</div>
                <h4 className="font-semibold text-[#702083] mb-2">Development Phase</h4>
                <p className="text-sm text-gray-600">Active program participation, skill building, and support delivery</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FBBB02] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">3</div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">Success Phase</h4>
                <p className="text-sm text-gray-600">Job placement, career advancement, and ongoing alumni support</p>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Client Categories */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Client Categories</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🎓 Student Categories</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">Current International Students</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Enrolled in PEI educational institutions</li>
                    <li>• Seeking part-time work opportunities</li>
                    <li>• Need career guidance and skill development</li>
                    <li>• Eligible for PeerPals and Easy Learn programs</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#702083] pl-3">
                  <h5 className="font-medium text-[#702083]">Recent Graduates</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Completed studies within last 2 years</li>
                    <li>• Seeking full-time employment</li>
                    <li>• Require job placement assistance</li>
                    <li>• Eligible for all programs including Transitions</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#FBBB02] pl-3">
                  <h5 className="font-medium text-[#FBBB02]">Alumni Network</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Successfully employed program graduates</li>
                    <li>• Potential mentors for current participants</li>
                    <li>• Career advancement support available</li>
                    <li>• Alumni referral network participants</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">💼 Employer Categories</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-[#EF7B02] pl-3">
                  <h5 className="font-medium text-[#EF7B02]">Partner Employers</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Established partnerships with WSA</li>
                    <li>• Regular job posting and recruitment</li>
                    <li>• EDI consultation clients</li>
                    <li>• Internship and co-op providers</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#012E55] pl-3">
                  <h5 className="font-medium text-[#012E55]">New Prospects</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Companies new to international hiring</li>
                    <li>• Require education on immigration processes</li>
                    <li>• Need support with diversity initiatives</li>
                    <li>• Potential pre-vetting program clients</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">Government & Non-Profit</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Public sector employment opportunities</li>
                    <li>• Community organization partnerships</li>
                    <li>• Grant and funding collaborators</li>
                    <li>• Policy development stakeholders</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Client Intake Process */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Client Intake Process</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Comprehensive Assessment Framework</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">📋 Personal Information</h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Basic Demographics:</strong> Name, age, contact information, location</p>
                  <p><strong>Immigration Status:</strong> Study permit, work permit, PR status, citizenship</p>
                  <p><strong>Education Background:</strong> Degrees, certifications, institutions, graduation dates</p>
                  <p><strong>Language Proficiency:</strong> English/French levels, communication skills assessment</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#702083] mb-2">💼 Professional Profile</h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Work Experience:</strong> Previous roles, industries, responsibilities, achievements</p>
                  <p><strong>Technical Skills:</strong> Software proficiency, certifications, specialized knowledge</p>
                  <p><strong>Career Goals:</strong> Target roles, salary expectations, preferred locations</p>
                  <p><strong>Availability:</strong> Start date, schedule flexibility, commitment level</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#FBBB02] mb-2">🎯 Needs Assessment</h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Challenges Identified:</strong> Job search barriers, skill gaps, confidence issues</p>
                  <p><strong>Support Requirements:</strong> Resume help, interview prep, networking guidance</p>
                  <p><strong>Program Interest:</strong> Preferred services, time commitment, payment capacity</p>
                  <p><strong>Success Metrics:</strong> Personal definition of success, measurable goals</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#EF7B02] mb-2">🤝 Compatibility Assessment</h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Program Fit:</strong> Alignment with available services and expertise</p>
                  <p><strong>Commitment Level:</strong> Realistic expectations about time and effort required</p>
                  <p><strong>Communication Style:</strong> Preferred methods, frequency, feedback receptiveness</p>
                  <p><strong>Cultural Considerations:</strong> Background factors affecting job search approach</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* CRM Management */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>CRM System Management</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">📊 Client Data Management</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-[#2592D0] pl-3">
                    <h5 className="font-medium text-gray-900">Profile Setup</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Complete contact information and emergency contacts</li>
                      <li>• Educational background and credential verification</li>
                      <li>• Employment history and reference information</li>
                      <li>• Skills matrix and competency assessment results</li>
                      <li>• Program enrollment status and payment records</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-[#702083] pl-3">
                    <h5 className="font-medium text-gray-900">Activity Tracking</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All client interactions (emails, calls, meetings)</li>
                      <li>• Program participation and attendance records</li>
                      <li>• Job applications submitted and outcomes</li>
                      <li>• Interview feedback and employer responses</li>
                      <li>• Coaching sessions and progress notes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-3">📈 Progress Monitoring</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-[#FBBB02] mb-2">Weekly Metrics</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Job applications submitted (target: 5-10)</li>
                      <li>• Networking events attended (target: 1-2)</li>
                      <li>• Skills development hours (target: 3-5)</li>
                      <li>• Interview requests received (track all)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-[#EF7B02] mb-2">Monthly Reviews</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Goal achievement assessment</li>
                      <li>• Program effectiveness evaluation</li>
                      <li>• Career advancement progress</li>
                      <li>• Support needs reassessment</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-[#012E55] mb-2">Success Outcomes</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Job offers received and accepted</li>
                      <li>• Salary negotiations and outcomes</li>
                      <li>• Career advancement achievements</li>
                      <li>• Alumni network participation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Communication Protocols */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Communication Protocols</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">📧 Communication Standards</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">Response Time Requirements</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• <strong>Initial Inquiry:</strong> 24 hours acknowledgment</li>
                    <li>• <strong>Urgent Matters:</strong> 4 hours response</li>
                    <li>• <strong>Routine Questions:</strong> 48 hours response</li>
                    <li>• <strong>Progress Updates:</strong> Weekly scheduled check-ins</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#702083] pl-3">
                  <h5 className="font-medium text-[#702083]">Communication Channels</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• <strong>Email:</strong> Primary formal communication</li>
                    <li>• <strong>Phone:</strong> Urgent matters and consultations</li>
                    <li>• <strong>Microsoft Teams:</strong> Program-related discussions</li>
                    <li>• <strong>Video Calls:</strong> Assessment and coaching sessions</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">📝 Documentation Standards</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#FBBB02] mb-2">Interaction Records</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Date, time, and duration of contact</li>
                    <li>• Communication method used</li>
                    <li>• Key discussion points and decisions</li>
                    <li>• Action items and follow-up required</li>
                    <li>• Client mood and engagement level</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#EF7B02] mb-2">Privacy & Confidentiality</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• All client information strictly confidential</li>
                    <li>• Secure storage in CRM system only</li>
                    <li>• Limited access to authorized team members</li>
                    <li>• Regular data protection training for staff</li>
                    <li>• Client consent required for data sharing</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Client Success Framework */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Client Success Framework</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Success Metrics & KPIs</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div>
                <h5 className="font-semibold text-[#2592D0] mb-2">🎯 Engagement Metrics</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Program Completion Rate</span>
                    <span className="font-medium text-[#2592D0]">Target: 85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session Attendance Rate</span>
                    <span className="font-medium text-[#2592D0]">Target: 90%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Client Satisfaction Score</span>
                    <span className="font-medium text-[#2592D0]">Target: 4.5/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Referral Rate</span>
                    <span className="font-medium text-[#2592D0]">Target: 30%</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#702083] mb-2">💼 Employment Outcomes</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Job Placement Rate</span>
                    <span className="font-medium text-[#702083]">Target: 75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time to Employment</span>
                    <span className="font-medium text-[#702083]">Target: 3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salary Achievement</span>
                    <span className="font-medium text-[#702083]">Target: 80% of goal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Job Retention (6 months)</span>
                    <span className="font-medium text-[#702083]">Target: 85%</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#FBBB02] mb-2">🚀 Development Impact</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Skill Improvement</span>
                    <span className="font-medium text-[#FBBB02]">Target: 2+ levels</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Confidence Increase</span>
                    <span className="font-medium text-[#FBBB02]">Target: 40% gain</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Network Expansion</span>
                    <span className="font-medium text-[#FBBB02]">Target: 20+ contacts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Career Advancement</span>
                    <span className="font-medium text-[#FBBB02]">Target: 65% within 1yr</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Challenge Management */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Challenge Management</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#EF7B02] mb-3">⚠️ Common Client Challenges</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-400 pl-3">
                    <h5 className="font-medium text-red-600">High Priority Issues</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Lack of Canadian work experience</li>
                      <li>• Difficulty with job application processes</li>
                      <li>• Interview anxiety and cultural barriers</li>
                      <li>• Professional networking challenges</li>
                      <li>• Resume and cover letter effectiveness</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-orange-400 pl-3">
                    <h5 className="font-medium text-orange-600">Systemic Challenges</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Employer bias and unconscious discrimination</li>
                      <li>• Credential recognition difficulties</li>
                      <li>• Language barrier in professional settings</li>
                      <li>• Limited understanding of Canadian workplace culture</li>
                      <li>• Financial constraints during job search</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#012E55] mb-3">💡 Solution Strategies</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-400 pl-3 py-2">
                    <h5 className="font-medium text-green-700">Skill Development</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Canadian workplace culture training</li>
                      <li>• Professional communication workshops</li>
                      <li>• Industry-specific skill enhancement</li>
                      <li>• Mock interview practice sessions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 pl-3 py-2">
                    <h5 className="font-medium text-blue-700">Network Building</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Alumni mentorship program connection</li>
                      <li>• Industry networking event facilitation</li>
                      <li>• Professional association introductions</li>
                      <li>• LinkedIn profile optimization support</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-400 pl-3 py-2">
                    <h5 className="font-medium text-purple-700">Direct Support</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• One-on-one coaching and mentorship</li>
                      <li>• Job matching and pre-vetting services</li>
                      <li>• Employer education and partnership development</li>
                      <li>• Financial assistance program referrals</li>
                    </ul>
                  </div>
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
              <h4 className="font-semibold text-gray-900">📋 Assessment Tools</h4>
              <div className="space-y-2 text-sm">
                <p>• Comprehensive intake assessment form</p>
                <p>• Skills competency evaluation matrix</p>
                <p>• Career goals and objectives questionnaire</p>
                <p>• Monthly progress review checklist</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🛠️ Management Systems</h4>
              <div className="space-y-2 text-sm">
                <p>• CRM client database and tracking</p>
                <p>• Microsoft Teams communication platform</p>
                <p>• SharePoint document collaboration</p>
                <p>• Easy Learn program delivery platform</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Support Network</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Client Coordinator:</strong> rita@worksourcealliance.ca</p>
                <p><strong>Operations Manager:</strong> chuchi@worksourcealliance.ca</p>
                <p><strong>Executive Director:</strong> daniel@worksourcealliance.ca</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}