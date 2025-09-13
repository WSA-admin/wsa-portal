import { Section, Heading, SubHeading, Card } from "@/app/components/ui";
import Link from "next/link";

export default function QualityAssurancePage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/operations" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Operations Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Quality Assurance</span>
        </div>
        <Heading>📊 Quality Assurance</Heading>
        <p className="text-gray-600 text-lg">
          Quality control processes, performance monitoring, continuous improvement protocols, and service excellence standards
        </p>
      </Section>

      {/* QA Framework Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Quality Assurance Framework</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2592D0] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">🎯</div>
                <h4 className="font-semibold text-[#2592D0] mb-2">Service Quality</h4>
                <p className="text-sm text-gray-600">Ensuring consistent, high-quality service delivery across all client touchpoints and program interactions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#702083] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">📈</div>
                <h4 className="font-semibold text-[#702083] mb-2">Performance Monitoring</h4>
                <p className="text-sm text-gray-600">Continuous tracking of key performance indicators, outcomes, and operational efficiency metrics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FBBB02] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">🔄</div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">Continuous Improvement</h4>
                <p className="text-sm text-gray-600">Systematic identification of improvement opportunities and implementation of enhanced processes</p>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Service Quality Standards */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Service Quality Standards</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🌟 Client Service Standards</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">Response Time Standards</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Initial inquiry response: <strong>Within 24 hours</strong></li>
                    <li>• Urgent client issues: <strong>Within 4 hours</strong></li>
                    <li>• Routine follow-ups: <strong>Within 48 hours</strong></li>
                    <li>• Program updates: <strong>Weekly scheduled</strong></li>
                    <li>• Emergency situations: <strong>Immediate response</strong></li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#702083] pl-3">
                  <h5 className="font-medium text-[#702083]">Communication Quality</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Professional and respectful tone in all interactions</li>
                    <li>• Clear, concise, and jargon-free communication</li>
                    <li>• Cultural sensitivity and inclusive language</li>
                    <li>• Active listening and empathetic responses</li>
                    <li>• Follow-up confirmation of understanding</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#FBBB02] pl-3">
                  <h5 className="font-medium text-[#FBBB02]">Service Delivery Excellence</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Consistent quality across all service channels</li>
                    <li>• Proactive identification of client needs</li>
                    <li>• Personalized service approach for each client</li>
                    <li>• Exceeding expectations whenever possible</li>
                    <li>• Continuous availability during business hours</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🎓 Program Quality Standards</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-[#EF7B02] pl-3">
                  <h5 className="font-medium text-[#EF7B02]">Content Quality Assurance</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Regular content review and updates quarterly</li>
                    <li>• Industry-relevant and current information</li>
                    <li>• Accessibility compliance (WCAG 2.1 standards)</li>
                    <li>• Multiple learning format availability</li>
                    <li>• Expert review and validation of materials</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#012E55] pl-3">
                  <h5 className="font-medium text-[#012E55]">Delivery Standards</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Punctual session start and end times</li>
                    <li>• Prepared and organized presentation materials</li>
                    <li>• Interactive and engaging delivery methods</li>
                    <li>• Clear learning objectives for each session</li>
                    <li>• Progress tracking and feedback mechanisms</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">Outcome Measurement</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Pre and post-program skill assessments</li>
                    <li>• Regular progress checkpoints and milestones</li>
                    <li>• Employment outcome tracking for 12 months</li>
                    <li>• Client satisfaction surveys after completion</li>
                    <li>• Long-term career advancement monitoring</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Performance Monitoring */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Performance Monitoring</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Key Performance Indicators (KPIs)</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div>
                <h5 className="font-semibold text-[#2592D0] mb-2">📊 Operational KPIs</h5>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Client Satisfaction Score</span>
                      <span className="text-[#2592D0] font-bold">4.5/5.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#2592D0] h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 4.5+ | Current: 4.6</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Response Time Compliance</span>
                      <span className="text-[#2592D0] font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#2592D0] h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 90+ | Current: 95%</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Service Quality Rating</span>
                      <span className="text-[#2592D0] font-bold">4.7/5.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#2592D0] h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 4.5+ | Current: 4.7</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#702083] mb-2">🎯 Program KPIs</h5>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Program Completion Rate</span>
                      <span className="text-[#702083] font-bold">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#702083] h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 85+ | Current: 82%</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Job Placement Rate</span>
                      <span className="text-[#702083] font-bold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#702083] h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 75+ | Current: 78%</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Client Retention (6mo)</span>
                      <span className="text-[#702083] font-bold">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#702083] h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 85+ | Current: 88%</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#FBBB02] mb-2">💼 Business KPIs</h5>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Employer Satisfaction</span>
                      <span className="text-[#FBBB02] font-bold">4.6/5.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#FBBB02] h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 4.5+ | Current: 4.6</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Partnership Growth</span>
                      <span className="text-[#FBBB02] font-bold">+15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#FBBB02] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: +20% | Current: +15%</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Referral Rate</span>
                      <span className="text-[#FBBB02] font-bold">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#FBBB02] h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 30+ | Current: 35%</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Quality Monitoring Processes */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Quality Monitoring Processes</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0] mb-3">📋 Regular Assessment Schedule</h4>
              <div className="space-y-3">
                
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">Daily Monitoring</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Client interaction quality spot checks</li>
                    <li>• Response time tracking and reporting</li>
                    <li>• System performance and uptime monitoring</li>
                    <li>• Staff adherence to service standards</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#702083] pl-3">
                  <h5 className="font-medium text-[#702083]">Weekly Reviews</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Team performance assessment meetings</li>
                    <li>• Client feedback compilation and analysis</li>
                    <li>• Process efficiency evaluation</li>
                    <li>• Training needs identification</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#FBBB02] pl-3">
                  <h5 className="font-medium text-[#FBBB02]">Monthly Evaluations</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Comprehensive KPI analysis and reporting</li>
                    <li>• Client satisfaction survey administration</li>
                    <li>• Program outcome assessment</li>
                    <li>• Quality improvement plan updates</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-[#EF7B02] pl-3">
                  <h5 className="font-medium text-[#EF7B02]">Quarterly Reviews</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Strategic goal alignment assessment</li>
                    <li>• Comprehensive service quality audit</li>
                    <li>• Stakeholder feedback integration</li>
                    <li>• Annual planning and target setting</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083] mb-3">🔍 Quality Control Methods</h4>
              <div className="space-y-3">
                
                <div className="bg-blue-50 p-3 rounded">
                  <h5 className="font-medium text-blue-700 mb-2">Client Feedback Collection</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Post-session satisfaction surveys</li>
                    <li>• Mid-program progress evaluations</li>
                    <li>• Exit interviews upon completion</li>
                    <li>• Anonymous feedback portal availability</li>
                    <li>• Focus groups for program improvement</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-3 rounded">
                  <h5 className="font-medium text-green-700 mb-2">Staff Performance Monitoring</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Random interaction quality assessments</li>
                    <li>• Peer review and collaborative evaluation</li>
                    <li>• Self-assessment and reflection exercises</li>
                    <li>• Supervisor observation and feedback</li>
                    <li>• 360-degree feedback from clients and colleagues</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-3 rounded">
                  <h5 className="font-medium text-purple-700 mb-2">Process Auditing</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standard operating procedure compliance checks</li>
                    <li>• Documentation accuracy and completeness review</li>
                    <li>• System usage and efficiency analysis</li>
                    <li>• Resource allocation and utilization assessment</li>
                    <li>• Best practice identification and sharing</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Continuous Improvement */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Continuous Improvement</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Improvement Cycle Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2592D0] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">1</div>
                <h5 className="font-semibold text-[#2592D0] mb-2">Identify</h5>
                <p className="text-sm text-gray-600">Systematic identification of improvement opportunities through data analysis, feedback, and observation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#702083] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">2</div>
                <h5 className="font-semibold text-[#702083] mb-2">Plan</h5>
                <p className="text-sm text-gray-600">Development of detailed improvement plans with specific goals, timelines, and resource requirements</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FBBB02] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">3</div>
                <h5 className="font-semibold text-[#FBBB02] mb-2">Implement</h5>
                <p className="text-sm text-gray-600">Careful execution of improvement initiatives with proper training, communication, and change management</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#EF7B02] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">4</div>
                <h5 className="font-semibold text-[#EF7B02] mb-2">Evaluate</h5>
                <p className="text-sm text-gray-600">Assessment of improvement effectiveness through measurement, analysis, and stakeholder feedback collection</p>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Improvement Initiatives */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Current Improvement Initiatives</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🎯 Active Projects</h4>
              <div className="space-y-3">
                
                <div className="border-l-4 border-green-400 pl-3">
                  <h5 className="font-medium text-green-600">Client Onboarding Enhancement</h5>
                  <div className="text-sm text-gray-600 mt-1">
                    <p><strong>Goal:</strong> Reduce onboarding time by 25%</p>
                    <p><strong>Timeline:</strong> Q1 2025 completion</p>
                    <p><strong>Status:</strong> 70% complete</p>
                    <p><strong>Impact:</strong> Improved client experience and faster program entry</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-3">
                  <h5 className="font-medium text-blue-600">Digital Platform Integration</h5>
                  <div className="text-sm text-gray-600 mt-1">
                    <p><strong>Goal:</strong> Unified client data management</p>
                    <p><strong>Timeline:</strong> Q2 2025 launch</p>
                    <p><strong>Status:</strong> 40% complete</p>
                    <p><strong>Impact:</strong> Enhanced data accuracy and staff efficiency</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-3">
                  <h5 className="font-medium text-purple-600">Staff Training Program Upgrade</h5>
                  <div className="text-sm text-gray-600 mt-1">
                    <p><strong>Goal:</strong> Improve service quality ratings to 4.8+</p>
                    <p><strong>Timeline:</strong> Ongoing through 2025</p>
                    <p><strong>Status:</strong> In development</p>
                    <p><strong>Impact:</strong> Higher client satisfaction and staff competency</p>
                  </div>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">📈 Planned Improvements</h4>
              <div className="space-y-3">
                
                <div className="border-l-4 border-yellow-400 pl-3">
                  <h5 className="font-medium text-yellow-600">Automated Reporting System</h5>
                  <div className="text-sm text-gray-600 mt-1">
                    <p><strong>Goal:</strong> Real-time KPI dashboard implementation</p>
                    <p><strong>Timeline:</strong> Q3 2025 planned start</p>
                    <p><strong>Priority:</strong> High</p>
                    <p><strong>Benefit:</strong> Faster decision-making and trend identification</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-3">
                  <h5 className="font-medium text-orange-600">Client Self-Service Portal</h5>
                  <div className="text-sm text-gray-600 mt-1">
                    <p><strong>Goal:</strong> 24/7 access to resources and updates</p>
                    <p><strong>Timeline:</strong> Q4 2025 target</p>
                    <p><strong>Priority:</strong> Medium</p>
                    <p><strong>Benefit:</strong> Improved accessibility and reduced staff workload</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-400 pl-3">
                  <h5 className="font-medium text-red-600">Alumni Network Enhancement</h5>
                  <div className="text-sm text-gray-600 mt-1">
                    <p><strong>Goal:</strong> Increase alumni engagement by 50%</p>
                    <p><strong>Timeline:</strong> 2026 strategic initiative</p>
                    <p><strong>Priority:</strong> Medium</p>
                    <p><strong>Benefit:</strong> Stronger support network and referral system</p>
                  </div>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Compliance & Standards */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Compliance & Standards</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">📋 Regulatory Compliance</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Privacy Regulation (GDPR)</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓ Compliant</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Accessibility Standards (WCAG 2.1)</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓ Compliant</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Employment Standards</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓ Compliant</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Educational Institution Requirements</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓ Compliant</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-2">🏆 Quality Certifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">ISO 9001:2015</p>
                    <p className="text-gray-600">Quality Management Systems</p>
                    <p className="text-xs text-gray-500">Certification Target: 2025</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">CAPP Standards</p>
                    <p className="text-gray-600">Career Development Services</p>
                    <p className="text-xs text-gray-500">Review: Annual</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Provincial Approval</p>
                    <p className="text-gray-600">Private Career College Standards</p>
                    <p className="text-xs text-gray-500">Status: Under Review</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">🔍 Audit Schedule</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Internal Quality Audit</p>
                    <p className="text-gray-600">Quarterly comprehensive review</p>
                    <p className="text-xs text-gray-500">Next: March 2025</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">External Assessment</p>
                    <p className="text-gray-600">Independent quality evaluation</p>
                    <p className="text-xs text-gray-500">Next: June 2025</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Compliance Review</p>
                    <p className="text-gray-600">Regulatory requirements check</p>
                    <p className="text-xs text-gray-500">Next: September 2025</p>
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
              <h4 className="font-semibold text-gray-900">📊 Quality Tools</h4>
              <div className="space-y-2 text-sm">
                <p>• Client satisfaction survey platform</p>
                <p>• Performance dashboard and analytics</p>
                <p>• Process documentation templates</p>
                <p>• Quality audit checklists</p>
                <p>• Improvement tracking spreadsheets</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Reference Materials</h4>
              <div className="space-y-2 text-sm">
                <p>• Quality management standards documentation</p>
                <p>• Best practices guides and frameworks</p>
                <p>• Industry benchmarking reports</p>
                <p>• Compliance requirement summaries</p>
                <p>• Training materials and resources</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Quality Team</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Quality Manager:</strong> chuchi@worksourcealliance.ca</p>
                <p><strong>Operations Director:</strong> daniel@worksourcealliance.ca</p>
                <p><strong>Client Coordinator:</strong> rita@worksourcealliance.ca</p>
                <p><strong>Strategic Support:</strong> melvis@worksourcealliance.ca</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}