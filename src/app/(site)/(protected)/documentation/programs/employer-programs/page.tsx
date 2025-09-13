import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function EmployerProgramsPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/programs" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Programs Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Employer Programs</span>
        </div>
        <Heading>🏢 Employer Programs</Heading>
        <p className="text-gray-600 text-lg">
          Strategic services to help employers build diverse, inclusive workforces while accessing top international talent through evidence-based hiring practices
        </p>
      </Section>

      {/* Service Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Service Overview</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <p className="text-gray-700">
              WorkSource Alliance provides comprehensive employer services designed to bridge the gap between talented 
              international students/graduates and Canadian employers seeking diverse talent. Our research-based approach 
              addresses systemic barriers while providing practical solutions for effective recruitment and integration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg flex flex-col">
                <h4 className="font-semibold text-[#702083] mb-2">Core Services</h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• Pre-vetting and talent matching</li>
                  <li>• Recruitment process optimization</li>
                  <li>• EDI consultation and training</li>
                  <li>• Bias reduction strategies</li>
                  <li>• Integration support systems</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col">
                <h4 className="font-semibold text-[#2592D0] mb-2">Target Employers</h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• Small and medium enterprises (SMEs)</li>
                  <li>• Large corporations and multinationals</li>
                  <li>• Government and public sector</li>
                  <li>• Non-profit organizations</li>
                  <li>• Healthcare and education sectors</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Service Categories */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Service Categories</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pre-vetting & Recruitment */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#702083] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#702083]">Pre-vetting & Recruitment</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Comprehensive talent screening and matching services that connect employers with pre-qualified international candidates.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Process:</strong> Skills assessment, work authorization verification, cultural fit evaluation</p>
                <p><strong>Timeline:</strong> 2-4 weeks from request to candidate presentation</p>
                <p><strong>Support:</strong> Interview coordination, reference checking, onboarding assistance</p>
                <p><strong>Success Rate:</strong> 85% placement success within 90 days</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-[#702083] p-3 rounded-r">
                <h5 className="font-medium text-[#702083] mb-1">Key Benefits</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Reduced hiring time and costs</li>
                  <li>• Access to diverse talent pool</li>
                  <li>• Quality-assured candidates</li>
                  <li>• Ongoing placement support</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* EDI Consultation */}
          <Card variant="white" className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-[#FBBB02]">EDI Consultation Services</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Evidence-based equity, diversity, and inclusion consulting to help organizations build more inclusive hiring practices.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Assessment:</strong> Current hiring practice evaluation and bias identification</p>
                <p><strong>Strategy:</strong> Custom EDI framework development and implementation plans</p>
                <p><strong>Training:</strong> Staff workshops on inclusive hiring and unconscious bias</p>
                <p><strong>Monitoring:</strong> Ongoing progress tracking and adjustment recommendations</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-[#FBBB02] p-3 rounded-r">
                <h5 className="font-medium text-[#FBBB02] mb-1">Consultation Areas</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Job description optimization</li>
                  <li>• Interview process redesign</li>
                  <li>• Workplace integration planning</li>
                  <li>• Performance evaluation systems</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Service Delivery Process */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Service Delivery Process</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Employer Engagement Workflow</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <div className="bg-blue-50 border border-[#2592D0] p-4 rounded-lg flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-[#2592D0] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</div>
                  <h5 className="font-semibold text-[#2592D0]">Initial Consultation</h5>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• Needs assessment meeting</li>
                  <li>• Current process evaluation</li>
                  <li>• Goal setting and timeline</li>
                  <li>• Service package selection</li>
                  <li>• Contract and pricing agreement</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 font-medium">Duration: 1-2 weeks</p>
              </div>

              <div className="bg-purple-50 border border-[#702083] p-4 rounded-lg flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-[#702083] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</div>
                  <h5 className="font-semibold text-[#702083]">Strategy Development</h5>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• Custom hiring strategy design</li>
                  <li>• Job description optimization</li>
                  <li>• Interview process redesign</li>
                  <li>• EDI framework integration</li>
                  <li>• Success metrics definition</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 font-medium">Duration: 2-3 weeks</p>
              </div>

              <div className="bg-yellow-50 border border-[#FBBB02] p-4 rounded-lg flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-[#FBBB02] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</div>
                  <h5 className="font-semibold text-[#FBBB02]">Implementation</h5>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• Candidate sourcing and screening</li>
                  <li>• Staff training delivery</li>
                  <li>• Process implementation support</li>
                  <li>• Interview coordination</li>
                  <li>• Ongoing consultation and adjustments</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 font-medium">Duration: 4-8 weeks</p>
              </div>

              <div className="bg-orange-50 border border-[#EF7B02] p-4 rounded-lg flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-[#EF7B02] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">4</div>
                  <h5 className="font-semibold text-[#EF7B02]">Follow-up & Support</h5>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  <li>• 30/60/90-day check-ins</li>
                  <li>• Performance evaluation review</li>
                  <li>• Integration success assessment</li>
                  <li>• Additional support as needed</li>
                  <li>• Long-term partnership development</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 font-medium">Duration: 6 months+</p>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Success Stories & Impact */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Success Stories & Impact</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray" className="flex flex-col">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📈 Quantitative Outcomes</h4>
              <div className="space-y-3 flex-1">
                <div className="bg-white p-3 rounded border-l-4 border-[#2592D0]">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Successful Placements</span>
                    <span className="text-[#2592D0] font-bold">150+ positions</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Across 45+ partner employers since 2022</p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-[#702083]">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Employer Satisfaction</span>
                    <span className="text-[#702083] font-bold">92%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Would recommend our services to other employers</p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-[#FBBB02]">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Retention Rate</span>
                    <span className="text-[#FBBB02] font-bold">88%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Employees retained after 12 months</p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-[#EF7B02]">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Time to Hire Reduction</span>
                    <span className="text-[#EF7B02] font-bold">35%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Average reduction in hiring timeline</p>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray" className="flex flex-col">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🎯 Case Study Highlights</h4>
              <div className="space-y-3 flex-1">
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#2592D0] mb-1">Tech Startup Scale-up</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Helped a 15-person tech company hire 8 international developers within 6 months, 
                    implementing EDI practices that increased team diversity by 60%.
                  </p>
                  <p className="text-xs text-gray-500">Industry: Technology | Team size: 15 → 23</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#702083] mb-1">Healthcare System Expansion</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Supported regional hospital in hiring 12 internationally-trained healthcare professionals, 
                    reducing recruitment costs by 40% while improving cultural competency.
                  </p>
                  <p className="text-xs text-gray-500">Industry: Healthcare | Positions: 12 hires</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-[#FBBB02] mb-1">Manufacturing Diversification</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Enabled manufacturing company to successfully hire and integrate 20 international 
                    workers, establishing mentorship programs that improved retention by 25%.
                  </p>
                  <p className="text-xs text-gray-500">Industry: Manufacturing | Retention: +25%</p>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Pricing & Packages */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Service Packages & Pricing</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Flexible Service Options</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="border border-[#2592D0] rounded-lg p-4 flex flex-col">
                <div className="text-center mb-4">
                  <h5 className="text-lg font-semibold text-[#2592D0]">Starter Package</h5>
                  <p className="text-sm text-gray-600">Single Position Recruitment</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-[#2592D0]">$2,500</span>
                    <span className="text-sm text-gray-500">/position</span>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Job description optimization</li>
                    <li>✓ Candidate pre-screening (up to 5)</li>
                    <li>✓ Interview coordination</li>
                    <li>✓ Basic EDI guidance</li>
                    <li>✓ 30-day placement support</li>
                  </ul>
                </div>
                <div className="text-xs text-gray-500 mt-4">
                  <strong>Best for:</strong> Small businesses, single-position hiring
                </div>
              </div>

              <div className="border-2 border-[#702083] rounded-lg p-4 relative flex flex-col">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#702083] text-white px-3 py-1 rounded-full text-xs font-medium">POPULAR</span>
                </div>
                <div className="text-center mb-4">
                  <h5 className="text-lg font-semibold text-[#702083]">Growth Package</h5>
                  <p className="text-sm text-gray-600">Multi-Position + EDI Consultation</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-[#702083]">$8,500</span>
                    <span className="text-sm text-gray-500">/quarter</span>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Up to 5 positions per quarter</li>
                    <li>✓ Comprehensive EDI assessment</li>
                    <li>✓ Staff training workshop</li>
                    <li>✓ Process optimization consulting</li>
                    <li>✓ 90-day integration support</li>
                    <li>✓ Quarterly progress reviews</li>
                  </ul>
                </div>
                <div className="text-xs text-gray-500 mt-4">
                  <strong>Best for:</strong> Growing companies, regular hiring needs
                </div>
              </div>

              <div className="border border-[#FBBB02] rounded-lg p-4 flex flex-col">
                <div className="text-center mb-4">
                  <h5 className="text-lg font-semibold text-[#FBBB02]">Enterprise Package</h5>
                  <p className="text-sm text-gray-600">Strategic Partnership</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-[#FBBB02]">Custom</span>
                    <span className="text-sm text-gray-500">pricing</span>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Unlimited positions</li>
                    <li>✓ Dedicated account manager</li>
                    <li>✓ Custom EDI framework development</li>
                    <li>✓ Executive coaching and training</li>
                    <li>✓ Annual strategic planning</li>
                    <li>✓ Priority candidate access</li>
                  </ul>
                </div>
                <div className="text-xs text-gray-500 mt-4">
                  <strong>Best for:</strong> Large organizations, strategic partnerships
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Getting Started */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Getting Started</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="white" className="flex flex-col">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-[#2592D0]">🚀 Ready to Begin?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Schedule a free consultation to discuss your hiring needs and explore how our services can help 
                your organization build a more diverse and effective workforce.
              </p>
              <div className="space-y-3 flex-1">
                <div className="bg-blue-50 border-l-4 border-[#2592D0] p-3 rounded-r">
                  <h5 className="font-medium text-[#2592D0] mb-1">Free Initial Consultation</h5>
                  <p className="text-sm text-gray-600">45-minute needs assessment and service overview</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#2592D0] p-3 rounded-r">
                  <h5 className="font-medium text-[#2592D0] mb-1">Custom Proposal</h5>
                  <p className="text-sm text-gray-600">Tailored service package and timeline within 48 hours</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#2592D0] p-3 rounded-r">
                  <h5 className="font-medium text-[#2592D0] mb-1">Implementation Support</h5>
                  <p className="text-sm text-gray-600">Dedicated support throughout the entire process</p>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray" className="flex flex-col">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Contact Information</h4>
              <div className="space-y-3 flex-1">
                <div className="border-l-4 border-[#702083] pl-4">
                  <h5 className="font-medium text-[#702083]">Chuchi Soriano</h5>
                  <p className="text-sm text-gray-600">Operations & Administration Manager</p>
                  <p className="text-sm text-[#2592D0] font-medium">📧 chuchi@worksourcealliance.ca</p>
                  <p className="text-xs text-gray-500">Service inquiries and initial consultations</p>
                </div>
                
                <div className="border-l-4 border-[#2592D0] pl-4">
                  <h5 className="font-medium text-[#2592D0]">Daniel Ohaegbu</h5>
                  <p className="text-sm text-gray-600">Co-founder & Executive Director</p>
                  <p className="text-sm text-[#2592D0] font-medium">📧 daniel@worksourcealliance.ca</p>
                  <p className="text-xs text-gray-500">Strategic partnerships and enterprise clients</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-gray-900 mb-1">Business Hours</h5>
                  <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM AST</p>
                  <p className="text-sm text-gray-600">Response time: Within 24 hours</p>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Additional Resources */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Additional Resources</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Related Documentation</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/programs" className="text-[#2592D0] hover:underline">← Back to Programs Manual</Link></p>
                <p><Link href="/documentation/programs/student-programs" className="text-[#2592D0] hover:underline">Student Programs Overview</Link></p>
                <p><Link href="/documentation/programs/graduate-mentorship" className="text-[#2592D0] hover:underline">Graduate Mentorship Program</Link></p>
                <p><Link href="/documentation/operations" className="text-[#2592D0] hover:underline">Operations Manual</Link></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔗 External Resources</h4>
              <div className="space-y-2 text-sm">
                <p><strong>UPEI Career Services:</strong> Partnership coordination</p>
                <p><strong>EForce PEI:</strong> Technology sector connections</p>
                <p><strong>Startup Zone:</strong> Entrepreneurship opportunities</p>
                <p><strong>Government of PEI:</strong> Immigration and workforce development</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📈 Success Metrics</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Target:</strong> 200+ placements annually by 2025</p>
                <p><strong>Employer Growth:</strong> 75+ active partners by end of year</p>
                <p><strong>Retention Goal:</strong> 90%+ employee retention at 12 months</p>
                <p><strong>Satisfaction Target:</strong> 95%+ employer satisfaction scores</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}