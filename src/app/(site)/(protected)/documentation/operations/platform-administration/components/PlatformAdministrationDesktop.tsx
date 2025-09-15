import { Section, Heading, SubHeading, Card, Text } from "@/app/components/ui";
import Link from "next/link";

export default function PlatformAdministrationDesktop() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-fadeUp" style={{ animationDelay: '0ms' }}>
        <div className="flex items-center mb-4">
          <Link href="/documentation/operations" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Operations Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Platform Administration</span>
        </div>
        <Heading>💻 Platform Administration</Heading>
        <Text className="text-gray-600 text-lg">
          System access management, user permissions, platform security protocols, and technical support coordination
        </Text>
      </Section>

      {/* Platform Overview */}
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-slideLeft" style={{ animationDelay: '200ms' }}>
        <SubHeading>Platform Ecosystem</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">WSA Digital Infrastructure</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🏛️ Core Platforms</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">Main Website</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">WSA Portal</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Development</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">WSA-Central API</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Beta</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">Executive Hub</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Live</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-[#702083] mb-2">🛠️ Operational Tools</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">CRM System</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">Easy Learn Platform</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">Microsoft Teams</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium text-gray-700">Social Media Suite</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Access Management Matrix */}
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-slideRight" style={{ animationDelay: '400ms' }}>
        <SubHeading>Access Management Matrix</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Platform Access & Administration</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Platform</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Primary Administrator</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Backup Administrator</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">User Count</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Access Requests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#702083] rounded-full mr-2"></div>
                        <span className="font-medium text-[#702083]">CRM System</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Chuchi Soriano</td>
                    <td className="py-3 px-4">Daniel Ohaegbu</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">5 Active</span>
                    </td>
                    <td className="py-3 px-4">
                      <a href="mailto:chuchi@worksourcealliance.ca" className="text-[#2592D0] hover:underline">chuchi@worksourcealliance.ca</a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#2592D0] rounded-full mr-2"></div>
                        <span className="font-medium text-[#2592D0]">Easy Learn Platform</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Chuchi Soriano</td>
                    <td className="py-3 px-4">Tanguy Merrien</td>
                    <td className="py-3 px-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">50+ Students</span>
                    </td>
                    <td className="py-3 px-4">
                      <a href="mailto:chuchi@worksourcealliance.ca" className="text-[#2592D0] hover:underline">chuchi@worksourcealliance.ca</a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#FBBB02] rounded-full mr-2"></div>
                        <span className="font-medium text-[#FBBB02]">Microsoft Teams</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Daniel Ohaegbu</td>
                    <td className="py-3 px-4">Chuchi Soriano</td>
                    <td className="py-3 px-4">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">8 Staff</span>
                    </td>
                    <td className="py-3 px-4">
                      <a href="mailto:daniel@worksourcealliance.ca" className="text-[#2592D0] hover:underline">daniel@worksourcealliance.ca</a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#EF7B02] rounded-full mr-2"></div>
                        <span className="font-medium text-[#EF7B02]">Social Media Platforms</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Melvis O. Onoriode</td>
                    <td className="py-3 px-4">Chuchi Soriano</td>
                    <td className="py-3 px-4">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Multi-platform</span>
                    </td>
                    <td className="py-3 px-4">
                      <a href="mailto:melvis@worksourcealliance.ca" className="text-[#2592D0] hover:underline">melvis@worksourcealliance.ca</a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#012E55] rounded-full mr-2"></div>
                        <span className="font-medium text-[#012E55]">SharePoint</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">Chuchi Soriano</td>
                    <td className="py-3 px-4">Daniel Ohaegbu</td>
                    <td className="py-3 px-4">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Team Access</span>
                    </td>
                    <td className="py-3 px-4">
                      <a href="mailto:chuchi@worksourcealliance.ca" className="text-[#2592D0] hover:underline">chuchi@worksourcealliance.ca</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Security Protocols */}
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-fadeUp" style={{ animationDelay: '600ms' }}>
        <SubHeading>Security Protocols</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🔐 Access Control</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-[#2592D0] pl-3">
                  <h5 className="font-medium text-[#2592D0]">Authentication Requirements</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Multi-factor authentication (MFA) enabled on all accounts</li>
                    <li>• Strong password policy: minimum 12 characters</li>
                    <li>• Regular password changes every 90 days</li>
                    <li>• Single sign-on (SSO) where available</li>
                    <li>• Session timeout after 4 hours of inactivity</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#702083] pl-3">
                  <h5 className="font-medium text-[#702083]">Permission Management</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• Role-based access control (RBAC) implementation</li>
                    <li>• Principle of least privilege enforced</li>
                    <li>• Regular access reviews quarterly</li>
                    <li>• Immediate access revocation upon departure</li>
                    <li>• Guest access limited to 30 days maximum</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">🛡️ Data Protection</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-[#FBBB02] pl-3">
                  <h5 className="font-medium text-[#FBBB02]">Data Security Measures</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• End-to-end encryption for sensitive data transmission</li>
                    <li>• Automated daily backups with 30-day retention</li>
                    <li>• Data loss prevention (DLP) policies active</li>
                    <li>• Regular security vulnerability assessments</li>
                    <li>• GDPR and privacy regulation compliance</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#EF7B02] pl-3">
                  <h5 className="font-medium text-[#EF7B02]">Incident Response</h5>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>• 24-hour security incident reporting requirement</li>
                    <li>• Immediate containment and assessment protocols</li>
                    <li>• Forensic analysis and recovery procedures</li>
                    <li>• Stakeholder notification within 72 hours</li>
                    <li>• Post-incident review and improvement process</li>
                  </ul>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* User Management */}
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-slideLeft" style={{ animationDelay: '800ms' }}>
        <SubHeading>User Management</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">User Lifecycle Management</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>
                <h5 className="font-semibold text-[#2592D0] mb-2">👤 User Onboarding</h5>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <h6 className="font-medium text-gray-900 mb-1">New Employee Process</h6>
                    <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                      <li>IT equipment and account setup request</li>
                      <li>Platform access provisioning based on role</li>
                      <li>Security training completion required</li>
                      <li>Initial password setup and MFA configuration</li>
                      <li>Platform orientation and training sessions</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <h6 className="font-medium text-gray-900 mb-1">Client Registration</h6>
                    <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Program eligibility verification</li>
                      <li>Easy Learn platform account creation</li>
                      <li>Privacy consent and data collection agreement</li>
                      <li>Platform tutorial and support resources</li>
                      <li>Progress tracking setup and monitoring</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#702083] mb-2">🔄 Access Management</h5>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <h6 className="font-medium text-gray-900 mb-1">Role Assignments</h6>
                    <ul className="text-gray-600 space-y-1">
                      <li><strong>Administrator:</strong> Full system access and configuration</li>
                      <li><strong>Manager:</strong> User management and reporting access</li>
                      <li><strong>Staff:</strong> Day-to-day operational system access</li>
                      <li><strong>Client:</strong> Program-specific platform access</li>
                      <li><strong>Guest:</strong> Limited temporary access for specific purposes</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <h6 className="font-medium text-gray-900 mb-1">Permission Updates</h6>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Role change requests processed within 24 hours</li>
                      <li>• Additional access requires manager approval</li>
                      <li>• Temporary elevated permissions time-limited</li>
                      <li>• Access logging and audit trail maintained</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#FBBB02] mb-2">🚪 User Offboarding</h5>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <h6 className="font-medium text-gray-900 mb-1">Employee Departure</h6>
                    <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Immediate account deactivation upon notice</li>
                      <li>Data transfer and backup procedures</li>
                      <li>Equipment return and access card collection</li>
                      <li>Final security clearance confirmation</li>
                      <li>Account archival and retention policy compliance</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <h6 className="font-medium text-gray-900 mb-1">Program Completion</h6>
                    <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Program completion status confirmation</li>
                      <li>Alumni access level adjustment</li>
                      <li>Data retention policy enforcement</li>
                      <li>Future engagement opportunity setup</li>
                      <li>Feedback collection and exit survey</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Technical Support */}
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-slideRight" style={{ animationDelay: '1000ms' }}>
        <SubHeading>Technical Support</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0] mb-3">🛠️ Support Tiers</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-green-400 pl-3">
                  <h5 className="font-medium text-green-600">Tier 1: Basic Support</h5>
                  <p className="text-sm text-gray-600 mb-1">First-line support for common issues</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Password resets and account lockouts</li>
                    <li>• Basic platform navigation assistance</li>
                    <li>• Common troubleshooting procedures</li>
                    <li>• User training and orientation</li>
                  </ul>
                  <p className="text-sm font-medium mt-2">Response Time: Within 4 hours</p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-3">
                  <h5 className="font-medium text-yellow-600">Tier 2: Advanced Support</h5>
                  <p className="text-sm text-gray-600 mb-1">Technical issues requiring system expertise</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• System configuration and customization</li>
                    <li>• Integration issues and API problems</li>
                    <li>• Performance optimization and tuning</li>
                    <li>• Security incident investigation</li>
                  </ul>
                  <p className="text-sm font-medium mt-2">Response Time: Within 24 hours</p>
                </div>

                <div className="border-l-4 border-red-400 pl-3">
                  <h5 className="font-medium text-red-600">Tier 3: Critical Support</h5>
                  <p className="text-sm text-gray-600 mb-1">Emergency situations requiring immediate attention</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• System outages and downtime</li>
                    <li>• Data loss or corruption incidents</li>
                    <li>• Security breaches and vulnerabilities</li>
                    <li>• Business-critical functionality failures</li>
                  </ul>
                  <p className="text-sm font-medium mt-2">Response Time: Within 2 hours</p>
                </div>
              </div>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083] mb-3">📞 Support Contacts</h4>
              <div className="space-y-4">

                <div className="bg-blue-50 p-3 rounded">
                  <h5 className="font-medium text-[#2592D0] mb-2">🔧 Technical Support</h5>
                  <div className="text-sm space-y-1">
                    <p><strong>Contact:</strong> Tanguy Merrien</p>
                    <p><strong>Email:</strong> <a href="mailto:info@worksourcealliance.ca" className="text-[#2592D0] hover:underline">info@worksourcealliance.ca</a></p>
                    <p><strong>Scope:</strong> Platform issues, system administration, development support</p>
                    <p><strong>Availability:</strong> Monday-Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <h5 className="font-medium text-[#702083] mb-2">📋 Operations Support</h5>
                  <div className="text-sm space-y-1">
                    <p><strong>Contact:</strong> Chuchi Soriano</p>
                    <p><strong>Email:</strong> <a href="mailto:chuchi@worksourcealliance.ca" className="text-[#702083] hover:underline">chuchi@worksourcealliance.ca</a></p>
                    <p><strong>Scope:</strong> User access, process issues, training support</p>
                    <p><strong>Availability:</strong> Monday-Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="bg-red-50 p-3 rounded">
                  <h5 className="font-medium text-red-600 mb-2">🚨 Emergency Escalation</h5>
                  <div className="text-sm space-y-1">
                    <p><strong>Contact:</strong> Daniel Ohaegbu</p>
                    <p><strong>Email:</strong> <a href="mailto:daniel@worksourcealliance.ca" className="text-red-600 hover:underline">daniel@worksourcealliance.ca</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+16479951416" className="text-red-600 hover:underline">(647) 995-1416</a></p>
                    <p><strong>Scope:</strong> Critical system failures, security incidents, executive decisions</p>
                    <p><strong>Availability:</strong> 24/7 for emergencies only</p>
                  </div>
                </div>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Maintenance & Updates */}
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-fadeUp" style={{ animationDelay: '1200ms' }}>
        <SubHeading>Maintenance & Updates</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">⏰ Scheduled Maintenance</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Regular Maintenance Windows:</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Weekly:</strong> Sundays 2:00 AM - 4:00 AM</li>
                    <li>• <strong>Monthly:</strong> First Saturday 10:00 PM - 2:00 AM</li>
                    <li>• <strong>Quarterly:</strong> Major updates as scheduled</li>
                  </ul>
                  <p className="mt-3"><strong>Advance Notification:</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 72 hours for routine maintenance</li>
                    <li>• 1 week for major system updates</li>
                    <li>• Email notifications to all users</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-2">🔄 Update Management</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Update Categories:</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Security Updates:</strong> Immediate deployment</li>
                    <li>• <strong>Bug Fixes:</strong> Weekly release cycle</li>
                    <li>• <strong>Feature Updates:</strong> Monthly deployment</li>
                    <li>• <strong>Major Releases:</strong> Quarterly planning</li>
                  </ul>
                  <p className="mt-3"><strong>Testing Protocol:</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Staging environment testing required</li>
                    <li>• User acceptance testing for major changes</li>
                    <li>• Rollback procedures documented</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">📊 System Monitoring</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Monitoring Metrics:</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• System uptime and availability (99.9% target)</li>
                    <li>• Response time and performance metrics</li>
                    <li>• User activity and engagement levels</li>
                    <li>• Security events and threat detection</li>
                  </ul>
                  <p className="mt-3"><strong>Alerting System:</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Real-time alerts for critical issues</li>
                    <li>• Daily summary reports to administrators</li>
                    <li>• Weekly performance analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Resources & Documentation */}
      <Section orientation="vertical" positioning="start" spacing="md" className="animate-slideLeft" style={{ animationDelay: '1400ms' }}>
        <SubHeading>Resources & Documentation</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Administrative Resources</h4>
              <div className="space-y-2 text-sm">
                <p>• Platform administrator user guides</p>
                <p>• System configuration documentation</p>
                <p>• Security policy and procedures manual</p>
                <p>• User training materials and tutorials</p>
                <p>• Troubleshooting guides and FAQs</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔗 External Resources</h4>
              <div className="space-y-2 text-sm">
                <p>• Platform vendor documentation and support</p>
                <p>• Security best practices and guidelines</p>
                <p>• Compliance and regulatory requirements</p>
                <p>• Industry standard operating procedures</p>
                <p>• Professional development and certification</p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Quick Reference</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Technical:</strong> info@worksourcealliance.ca</p>
                <p><strong>Operations:</strong> chuchi@worksourcealliance.ca</p>
                <p><strong>Emergency:</strong> daniel@worksourcealliance.ca</p>
                <p><strong>Support Portal:</strong> WSA Teams Channel</p>
                <p><strong>Documentation:</strong> SharePoint Repository</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}