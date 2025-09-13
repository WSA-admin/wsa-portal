import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function ProgramsManualPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Documentation Hub
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Programs Manual</span>
        </div>
        <Heading>🎓 Programs Manual</Heading>
        <p className="text-gray-600 text-lg">
          Comprehensive guide to WorkSource Alliance programs, services, implementation procedures, and outcome measurement
        </p>
      </Section>

      {/* Programs Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Programs Overview</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <p className="text-gray-700">
              WorkSource Alliance offers comprehensive programs designed to connect international students and graduates 
              with Atlantic Canada&apos;s job opportunities through strategic partnerships with employers, organizations, and policymakers.
              Our programs address the full spectrum of career development needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg flex flex-col">
                <h4 className="font-semibold text-[#2592D0] mb-2">Student-Focused Programs</h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• PeerPals Program (Free)</li>
                  <li>• Transitions Program (Paid)</li>
                  <li>• Easy Learn Platform (Free)</li>
                  <li>• Skills development workshops</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col">
                <h4 className="font-semibold text-[#702083] mb-2">Employer Services</h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• Pre-vetting & recruitment</li>
                  <li>• EDI consultation services</li>
                  <li>• Diversity training programs</li>
                  <li>• Partnership development</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col">
                <h4 className="font-semibold text-[#FBBB02] mb-2">Specialized Support</h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• Graduate mentorship program</li>
                  <li>• Alumni network activities</li>
                  <li>• Career advancement support</li>
                  <li>• Long-term success tracking</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Target Market */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Target Market & Mission</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col">
                <h4 className="font-semibold text-[#2592D0] mb-2">🎯 Target Market</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Our target market is all international students and graduates studying in PEI. With the main focus 
                  in PEI, the plan is to start with the first ASDA platform at PEI and then move swiftly to other 
                  provinces across the Maritime.
                </p>
                <div className="bg-blue-50 border-l-4 border-[#2592D0] p-3 rounded-r flex-1">
                  <h5 className="font-medium text-[#2592D0] mb-1">End Goal</h5>
                  <p className="text-sm text-gray-600">
                    Create a community that fosters confidence, sharing of resources, and building networks to 
                    easier integrate international students and Canadian employers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="font-semibold text-[#702083] mb-2">🚀 Vision & Mission</h4>
                <div className="space-y-3 flex-1 flex flex-col">
                  <div className="bg-purple-50 border-l-4 border-[#702083] p-3 rounded-r flex-1">
                    <h5 className="font-medium text-[#702083] mb-1">Vision</h5>
                    <p className="text-sm text-gray-600">
                      International students and graduates who choose to stay in Canada hold meaningful employment 
                      and thrive in their communities.
                    </p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-[#702083] p-3 rounded-r flex-1">
                    <h5 className="font-medium text-[#702083] mb-1">Mission</h5>
                    <p className="text-sm text-gray-600">
                      By building partnerships with public and private sector employers, organizations, and policymakers, 
                      ASDA facilitates job opportunities for international students and graduates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Program Categories */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Program Categories</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Student Programs */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#2592D0] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#2592D0]">Student Programs</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Comprehensive support services for international students at all stages of their academic and career journey.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Programs:</strong> PeerPals, Transitions, Easy Learn Platform</p>
                <p><strong>Target:</strong> Current students and recent graduates</p>
                <p><strong>Focus:</strong> Skill development, job readiness, work experience</p>
                <p><strong>Partners:</strong> UPEI, EForce PEI, Startup Zone</p>
              </div>
            </div>
            <Link 
              href="/documentation/programs/student-programs" 
              className="text-[#2592D0] hover:text-[#012E55] font-medium transition-colors"
            >
              View Student Programs →
            </Link>
          </Card>

          {/* Employer Programs */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#702083] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#702083]">Employer Programs</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Strategic services to help employers build diverse, inclusive workforces while accessing top international talent.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Services:</strong> Pre-vetting, recruitment, EDI consultation</p>
                <p><strong>Target:</strong> SMEs, corporations, government organizations</p>
                <p><strong>Focus:</strong> Diversity hiring, bias reduction, talent matching</p>
                <p><strong>Approach:</strong> Research-based solutions and strategies</p>
              </div>
            </div>
            <Link 
              href="/documentation/programs/employer-programs" 
              className="text-[#702083] hover:text-[#012E55] font-medium transition-colors"
            >
              View Employer Programs →
            </Link>
          </Card>

          {/* Graduate Mentorship */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#FBBB02]">Graduate Mentorship</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Comprehensive mentorship program designed to support recent graduates in their transition to the Canadian workforce.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Features:</strong> One-on-one mentorship, networking, career planning</p>
                <p><strong>Target:</strong> Recent international graduates</p>
                <p><strong>Focus:</strong> Career transition, professional development</p>
                <p><strong>Support:</strong> Monthly check-ins, industry connections</p>
              </div>
            </div>
            <Link 
              href="/documentation/programs/graduate-mentorship" 
              className="text-[#FBBB02] hover:text-[#012E55] font-medium transition-colors"
            >
              View Graduate Mentorship →
            </Link>
          </Card>

          {/* Program Administration */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#EF7B02] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#EF7B02]">Program Administration</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Administrative procedures, delivery guidelines, outcome measurement, and quality assurance for all programs.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Coverage:</strong> Implementation guides, assessment tools</p>
                <p><strong>Focus:</strong> Quality delivery, outcome tracking</p>
                <p><strong>Standards:</strong> Performance metrics, success measurement</p>
                <p><strong>Support:</strong> Staff training, resource management</p>
              </div>
            </div>
            <Link 
              href="/documentation/programs/administration" 
              className="text-[#EF7B02] hover:text-[#012E55] font-medium transition-colors"
            >
              View Program Administration →
            </Link>
          </Card>
        </div>
      </Section>

      {/* WSA Values */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Our Values</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Core Values Guiding Our Programs</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="space-y-4 flex flex-col">
                <div className="border-l-4 border-[#2592D0] pl-4 flex-1">
                  <h5 className="font-semibold text-[#2592D0]">♿ Accessibility</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Our programming and services will be accessible to international students and graduates, 
                    and we will work to identify and remove barriers.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#702083] pl-4 flex-1">
                  <h5 className="font-semibold text-[#702083]">🔍 Transparency</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Our team, leadership and board are open and transparent in all we do with members, 
                    employers and stakeholders.
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex flex-col">
                <div className="border-l-4 border-[#FBBB02] pl-4 flex-1">
                  <h5 className="font-semibold text-[#FBBB02]">💡 Innovative</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    We look for new and better ways to deliver on our mission and vision; we are open to 
                    change and believe good ideas can come from anyone.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#EF7B02] pl-4 flex-1">
                  <h5 className="font-semibold text-[#EF7B02]">🤝 Trust</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    We treat each person with respect; our team and board and our partners and 
                    stakeholders are valued.
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex flex-col">
                <div className="border-l-4 border-[#012E55] pl-4 flex-1">
                  <h5 className="font-semibold text-[#012E55]">🏘️ Community</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    We are committed to contributing to the socio-economic growth of every community 
                    in which we work or live.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#2592D0] pl-4 flex-1">
                  <h5 className="font-semibold text-[#2592D0]">📈 Kaizen</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    We believe in growth and continuous improvement in all aspects of our programs 
                    and services.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Program Success Metrics */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Program Success Metrics</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Key Performance Indicators Across All Programs</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="flex flex-col">
                <h5 className="font-semibold text-[#2592D0] mb-2">🎯 Participation Metrics</h5>
                <div className="space-y-3 flex-1">
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Program Enrollment</span>
                      <span className="text-[#2592D0] font-bold">250+ annually</span>
                    </div>
                    <p className="text-xs text-gray-500">Active participants across all programs</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Completion Rate</span>
                      <span className="text-[#2592D0] font-bold">85%</span>
                    </div>
                    <p className="text-xs text-gray-500">Target: 85% | Current performance</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Satisfaction Score</span>
                      <span className="text-[#2592D0] font-bold">4.6/5.0</span>
                    </div>
                    <p className="text-xs text-gray-500">Average across all program evaluations</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="font-semibold text-[#702083] mb-2">💼 Employment Outcomes</h5>
                <div className="space-y-3 flex-1">
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Job Placement Rate</span>
                      <span className="text-[#702083] font-bold">75%</span>
                    </div>
                    <p className="text-xs text-gray-500">Within 6 months of program completion</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Average Time to Job</span>
                      <span className="text-[#702083] font-bold">3.2 months</span>
                    </div>
                    <p className="text-xs text-gray-500">From program start to job offer</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Salary Achievement</span>
                      <span className="text-[#702083] font-bold">82%</span>
                    </div>
                    <p className="text-xs text-gray-500">Meeting or exceeding salary goals</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="font-semibold text-[#FBBB02] mb-2">🚀 Long-term Impact</h5>
                <div className="space-y-3 flex-1">
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Career Advancement</span>
                      <span className="text-[#FBBB02] font-bold">65%</span>
                    </div>
                    <p className="text-xs text-gray-500">Promotion within 12 months</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Alumni Engagement</span>
                      <span className="text-[#FBBB02] font-bold">40%</span>
                    </div>
                    <p className="text-xs text-gray-500">Active in alumni network and mentoring</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Referral Rate</span>
                      <span className="text-[#FBBB02] font-bold">35%</span>
                    </div>
                    <p className="text-xs text-gray-500">Graduates referring new participants</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Partnership Network */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Partnership Network</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray" className="flex flex-col">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🎓 Educational Partners</h4>
              <div className="space-y-3 flex-1">
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">University of Prince Edward Island (UPEI)</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Student referral programs</li>
                    <li>• Career services collaboration</li>
                    <li>• Joint programming initiatives</li>
                    <li>• Research and data sharing</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#702083] pl-3">
                  <h5 className="font-medium text-[#702083]">EForce PEI</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Technology sector partnerships</li>
                    <li>• Skills development programs</li>
                    <li>• Industry networking events</li>
                    <li>• Professional development support</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray" className="flex flex-col">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🏢 Business Partners</h4>
              <div className="space-y-3 flex-1">
                <div className="border-l-4 border-[#FBBB02] pl-3">
                  <h5 className="font-medium text-[#FBBB02]">Startup Zone</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Entrepreneurship programs</li>
                    <li>• Innovation and startup support</li>
                    <li>• Business development mentorship</li>
                    <li>• Networking and pitch opportunities</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#EF7B02] pl-3">
                  <h5 className="font-medium text-[#EF7B02]">Regional Employers</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• SMEs and large corporations</li>
                    <li>• Government and public sector</li>
                    <li>• Non-profit organizations</li>
                    <li>• Healthcare and education sectors</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Program Coordination */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Program Coordination Team</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col">
                <h4 className="font-semibold text-[#2592D0] mb-3">👥 Program Leadership</h4>
                <div className="space-y-3 flex-1 flex flex-col">
                  <div className="border-l-4 border-[#2592D0] pl-4 flex-1">
                    <h5 className="font-medium text-[#2592D0]">Daniel Ohaegbu</h5>
                    <p className="text-sm text-gray-600">Co-founder & Executive Director</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 daniel@worksourcealliance.ca</p>
                    <p className="text-xs text-gray-500">Strategic program oversight and stakeholder relations</p>
                  </div>
                  
                  <div className="border-l-4 border-[#702083] pl-4 flex-1">
                    <h5 className="font-medium text-[#702083]">Chuchi Soriano</h5>
                    <p className="text-sm text-gray-600">Operations & Administration Manager</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 chuchi@worksourcealliance.ca</p>
                    <p className="text-xs text-gray-500">Program administration and quality assurance</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="font-semibold text-[#702083] mb-3">🎯 Program Delivery Team</h4>
                <div className="space-y-3 flex-1 flex flex-col">
                  <div className="border-l-4 border-[#FBBB02] pl-4 flex-1">
                    <h5 className="font-medium text-[#FBBB02]">Rita Olfi</h5>
                    <p className="text-sm text-gray-600">Job Placement & Outreach Coordinator</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 rita@worksourcealliance.ca</p>
                    <p className="text-xs text-gray-500">Direct program delivery and client coordination</p>
                  </div>
                  
                  <div className="border-l-4 border-[#EF7B02] pl-4 flex-1">
                    <h5 className="font-medium text-[#EF7B02]">Melvis O. Onoriode</h5>
                    <p className="text-sm text-gray-600">Digital & Strategic Support Coordinator</p>
                    <p className="text-sm text-[#2592D0] font-medium">📧 melvis@worksourcealliance.ca</p>
                    <p className="text-xs text-gray-500">Digital program support and strategic coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Quick Reference */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Quick Reference</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📋 Program Resources</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/programs/student-programs" className="text-[#2592D0] hover:underline">Student Programs Guide</Link></p>
                <p><Link href="/documentation/programs/employer-programs" className="text-[#2592D0] hover:underline">Employer Services Overview</Link></p>
                <p><Link href="/documentation/programs/graduate-mentorship" className="text-[#2592D0] hover:underline">Mentorship Program Details</Link></p>
                <p><Link href="/documentation/programs/administration" className="text-[#2592D0] hover:underline">Program Administration Guide</Link></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🎯 Program Enrollment</h4>
              <div className="space-y-2 text-sm">
                <p><strong>PeerPals:</strong> Open enrollment year-round</p>
                <p><strong>Transitions:</strong> Cohort-based with quarterly intake</p>
                <p><strong>Easy Learn:</strong> Self-paced, continuous access</p>
                <p><strong>Mentorship:</strong> Monthly matching process</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Program Contacts</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Program Coordinator:</strong> rita@worksourcealliance.ca</p>
                <p><strong>Operations Manager:</strong> chuchi@worksourcealliance.ca</p>
                <p><strong>Executive Director:</strong> daniel@worksourcealliance.ca</p>
                <p><strong>General Inquiries:</strong> info@worksourcealliance.ca</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}