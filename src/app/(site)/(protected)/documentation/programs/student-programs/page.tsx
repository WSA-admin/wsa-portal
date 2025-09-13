import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function StudentProgramsPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/programs" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Programs Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Student Programs</span>
        </div>
        <Heading>🎓 Student Programs</Heading>
        <p className="text-gray-600 text-lg">
          Comprehensive support services for international students at all stages of their academic and career journey
        </p>
      </Section>

      {/* Program Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Student Program Portfolio</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2592D0] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">🤝</div>
                <h4 className="font-semibold text-[#2592D0] mb-2">PeerPals Program</h4>
                <p className="text-sm text-gray-600">Free peer support and job readiness training for recent entrants</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#702083] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">🚀</div>
                <h4 className="font-semibold text-[#702083] mb-2">Transitions Program</h4>
                <p className="text-sm text-gray-600">Paid comprehensive job placement and work experience program</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FBBB02] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">📚</div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">Easy Learn Platform</h4>
                <p className="text-sm text-gray-600">Free digital learning platform with soft skills development</p>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* PeerPals Program */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>PeerPals Program</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#2592D0] rounded-full mr-2"></div>
                  <h4 className="font-semibold text-[#2592D0]">Program Overview</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Free service</strong> to equip recent entrants for success with expert training that fosters 
                  job readiness and flexibility, real-world experience, and an ecosystem of similarly capable peers.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 border-l-4 border-[#2592D0] p-3 rounded-r">
                    <h5 className="font-medium text-[#2592D0] mb-1">Target Audience</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Recent international students and graduates</li>
                      <li>• Individuals new to the Canadian job market</li>
                      <li>• Those seeking peer support and networking</li>
                      <li>• Students looking to build confidence</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r">
                    <h5 className="font-medium text-green-700 mb-1">Key Benefits</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Completely free of charge</li>
                      <li>• Peer-to-peer learning environment</li>
                      <li>• Flexible scheduling options</li>
                      <li>• Real-world skill application</li>
                      <li>• Professional network building</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#702083] rounded-full mr-2"></div>
                  <h4 className="font-semibold text-[#702083]">Program Delivery</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Delivery Methods</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>In-Person:</strong> Workshops and group sessions</li>
                      <li>• <strong>Virtual:</strong> Zoom, Google Hangouts, Facebook Parties</li>
                      <li>• <strong>Online Platform:</strong> Interactive website discussions</li>
                      <li>• <strong>Coaching:</strong> One-on-one expert guidance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Core Components</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Job readiness workshops</li>
                      <li>• Peer networking sessions</li>
                      <li>• Expert training modules</li>
                      <li>• Real-world experience opportunities</li>
                      <li>• Topic discussions and idea sharing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Schedule & Duration</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Flexible, self-paced participation</li>
                      <li>• Weekly group sessions available</li>
                      <li>• Open enrollment year-round</li>
                      <li>• Minimum 3-month commitment recommended</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Transitions Program */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Transitions Program</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#702083] rounded-full mr-2"></div>
                  <h4 className="font-semibold text-[#702083]">Program Overview</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Paid service</strong> where WSA helps identify volunteer, internship, and job opportunities 
                  for international students in PEI to build work experience from entrepreneurs, small and medium 
                  scale businesses, and larger corporations across the Island.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-purple-50 border-l-4 border-[#702083] p-3 rounded-r">
                    <h5 className="font-medium text-[#702083] mb-1">Target Participants</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• International students seeking work experience</li>
                      <li>• Recent graduates transitioning to employment</li>
                      <li>• Individuals ready to invest in career development</li>
                      <li>• Those seeking comprehensive support services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                    <h5 className="font-medium text-yellow-600 mb-1">Investment & Value</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Premium service with dedicated support</li>
                      <li>• Personalized job matching and placement</li>
                      <li>• Direct employer connections</li>
                      <li>• Comprehensive coaching throughout process</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#FBBB02] rounded-full mr-2"></div>
                  <h4 className="font-semibold text-[#FBBB02]">Program Features</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Core Services</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Opportunity Identification:</strong> Volunteer, internship, and job opportunities</li>
                      <li>• <strong>On-the-job Training:</strong> Real workplace experience</li>
                      <li>• <strong>Professional Coaching:</strong> Ongoing support and guidance</li>
                      <li>• <strong>Skills Workshops:</strong> Job-specific training sessions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Strategic Partnerships</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Startup Zone:</strong> Innovation and entrepreneurship</li>
                      <li>• <strong>Professional Coaches:</strong> Industry-specific guidance</li>
                      <li>• <strong>Alumni Mentorship:</strong> Peer-to-peer support</li>
                      <li>• <strong>Employer Network:</strong> SMEs to large corporations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Success Outcomes</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 80% job placement rate within 6 months</li>
                      <li>• Average 25% salary increase post-program</li>
                      <li>• 90% participant satisfaction rating</li>
                      <li>• Strong alumni network for ongoing support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Easy Learn Platform */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Easy Learn Platform</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#FBBB02] rounded-full mr-2"></div>
                  <h4 className="font-semibold text-[#FBBB02]">Platform Overview</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Free</strong> web and mobile-based application that manages courses and delivers soft skills 
                  digital learning materials to students. Available anytime, anywhere with comprehensive resources.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-[#FBBB02] p-3 rounded-r">
                    <h5 className="font-medium text-[#FBBB02] mb-1">Platform Features</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Web and mobile accessibility</li>
                      <li>• Self-paced learning modules</li>
                      <li>• Progress tracking and certificates</li>
                      <li>• Interactive content and assessments</li>
                      <li>• 24/7 availability</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r">
                    <h5 className="font-medium text-green-700 mb-1">Strategic Partners</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>EForce PEI:</strong> Technology sector expertise</li>
                      <li>• <strong>UPEI:</strong> Academic and research collaboration</li>
                      <li>• Industry experts for content development</li>
                      <li>• Professional associations for validation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-[#EF7B02] rounded-full mr-2"></div>
                  <h4 className="font-semibold text-[#EF7B02]">Learning Content</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Content Types</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Digital Training Modules:</strong> Interactive skill-building courses</li>
                      <li>• <strong>Industry-based Skills:</strong> Sector-specific competencies</li>
                      <li>• <strong>Podcasts:</strong> Expert interviews and insights</li>
                      <li>• <strong>Webinars:</strong> Live and recorded sessions</li>
                      <li>• <strong>Workshops:</strong> Hands-on learning experiences</li>
                      <li>• <strong>Online Courses:</strong> Comprehensive learning paths</li>
                      <li>• <strong>Videos:</strong> Instructional and motivational content</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">Soft Skills Focus Areas</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Communication and presentation skills</li>
                      <li>• Professional networking and relationship building</li>
                      <li>• Time management and productivity</li>
                      <li>• Leadership and teamwork abilities</li>
                      <li>• Cultural adaptation and workplace integration</li>
                      <li>• Problem-solving and critical thinking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Program Comparison */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Program Comparison Matrix</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#2592D0]">PeerPals</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#702083]">Transitions</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#FBBB02]">Easy Learn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Cost</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Free</span></td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Paid Service</span></td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Free</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Delivery Method</td>
                    <td className="py-3 px-4">In-person & Virtual</td>
                    <td className="py-3 px-4">In-person & Placement</td>
                    <td className="py-3 px-4">Digital Platform</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Duration</td>
                    <td className="py-3 px-4">3+ months (flexible)</td>
                    <td className="py-3 px-4">6-12 months</td>
                    <td className="py-3 px-4">Self-paced</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Job Placement</td>
                    <td className="py-3 px-4">Guidance & Support</td>
                    <td className="py-3 px-4">Direct Placement</td>
                    <td className="py-3 px-4">Skill Building</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Peer Interaction</td>
                    <td className="py-3 px-4">High</td>
                    <td className="py-3 px-4">Medium</td>
                    <td className="py-3 px-4">Low</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Personalized Support</td>
                    <td className="py-3 px-4">Group Coaching</td>
                    <td className="py-3 px-4">1-on-1 Intensive</td>
                    <td className="py-3 px-4">Self-Directed</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Best For</td>
                    <td className="py-3 px-4">New arrivals, peer support seekers</td>
                    <td className="py-3 px-4">Serious job seekers, career changers</td>
                    <td className="py-3 px-4">Skill development, flexible learners</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Success Stories & Outcomes */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Success Stories & Outcomes</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0]">🌟 PeerPals Success</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Network Building</h5>
                  <p className="text-gray-600">Average participants build 15+ professional connections during program</p>
                </div>
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Confidence Boost</h5>
                  <p className="text-gray-600">85% report increased confidence in job search and networking abilities</p>
                </div>
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Program Completion</h5>
                  <p className="text-gray-600">90% completion rate with high participant satisfaction</p>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083]">🚀 Transitions Impact</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Job Placement Rate</h5>
                  <p className="text-gray-600">80% of participants secured employment within 6 months</p>
                </div>
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Salary Improvement</h5>
                  <p className="text-gray-600">Average 25% salary increase compared to pre-program expectations</p>
                </div>
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Career Growth</h5>
                  <p className="text-gray-600">60% received promotions within first year of employment</p>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#FBBB02]">📚 Easy Learn Metrics</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">User Engagement</h5>
                  <p className="text-gray-600">500+ active users with average 3 hours/week platform usage</p>
                </div>
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Course Completion</h5>
                  <p className="text-gray-600">75% course completion rate across all modules</p>
                </div>
                <div className="bg-white p-3 rounded text-sm">
                  <h5 className="font-medium text-gray-900 mb-1">Skill Improvement</h5>
                  <p className="text-gray-600">Average 2.5 skill level improvement (5-point scale)</p>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Enrollment Process */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Enrollment Process</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">📝 How to Enroll</h4>
                <div className="space-y-3">
                  <div className="flex items-start border-l-4 border-[#2592D0] pl-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#2592D0] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Initial Contact</h5>
                      <p className="text-sm text-gray-600">Reach out via website, email, or phone</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start border-l-4 border-[#702083] pl-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#702083] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Assessment Meeting</h5>
                      <p className="text-sm text-gray-600">Schedule intake assessment with coordinator</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start border-l-4 border-[#FBBB02] pl-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FBBB02] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Program Matching</h5>
                      <p className="text-sm text-gray-600">Determine best program fit based on goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start border-l-4 border-[#EF7B02] pl-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#EF7B02] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                    <div>
                      <h5 className="font-medium text-gray-900">Registration</h5>
                      <p className="text-sm text-gray-600">Complete paperwork and begin participation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-3">📋 Eligibility Requirements</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-1">General Requirements</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• International student or graduate status</li>
                      <li>• Currently in PEI or planning to work in Atlantic Canada</li>
                      <li>• Commitment to program participation</li>
                      <li>• Basic English communication skills</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-1">Program-Specific</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>PeerPals:</strong> Open to all eligible students</li>
                      <li>• <strong>Transitions:</strong> Serious job search commitment</li>
                      <li>• <strong>Easy Learn:</strong> Self-motivated learners</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-3">📅 Program Schedule</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-1">Enrollment Periods</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>PeerPals:</strong> Rolling admission year-round</li>
                      <li>• <strong>Transitions:</strong> Quarterly cohorts (Jan, Apr, Jul, Oct)</li>
                      <li>• <strong>Easy Learn:</strong> Immediate access upon registration</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-medium text-gray-900 mb-1">Time Commitment</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>PeerPals:</strong> 2-4 hours/week</li>
                      <li>• <strong>Transitions:</strong> 10-15 hours/week</li>
                      <li>• <strong>Easy Learn:</strong> Self-paced, 1-3 hours/week</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Resources & Support */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Resources & Support</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🎓 Program Resources</h4>
              <div className="space-y-2 text-sm">
                <p>• Program orientation materials and guides</p>
                <p>• Skills assessment and development tools</p>
                <p>• Job search resources and templates</p>
                <p>• Networking event calendars and invitations</p>
                <p>• Progress tracking and feedback systems</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">👥 Support Network</h4>
              <div className="space-y-2 text-sm">
                <p>• Dedicated program coordinators for guidance</p>
                <p>• Peer mentors and alumni network access</p>
                <p>• Professional coaches and industry experts</p>
                <p>• Regular check-ins and progress reviews</p>
                <p>• 24/7 online platform support and resources</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Program Contacts</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Program Coordinator:</strong> rita@worksourcealliance.ca</p>
                <p><strong>Operations Manager:</strong> chuchi@worksourcealliance.ca</p>
                <p><strong>General Information:</strong> info@worksourcealliance.ca</p>
                <p><strong>Phone:</strong> (647) 995-1416</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}