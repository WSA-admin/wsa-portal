'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";

export default function SecurityMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'auth' | 'data' | 'input' | 'environment' | 'monitoring' | 'checklist'>('overview');

  const sections = [
    { id: 'overview', label: '🛡️ Overview', color: '#2592D0' },
    { id: 'auth', label: '🔐 Authentication', color: '#702083' },
    { id: 'data', label: '📊 Data Protection', color: '#FBBB02' },
    { id: 'input', label: '🛡️ Input Validation', color: '#EF7B02' },
    { id: 'environment', label: '⚙️ Environment', color: '#012E55' },
    { id: 'monitoring', label: '📊 Monitoring', color: '#059669' },
    { id: 'checklist', label: '✅ Checklist', color: '#DC2626' }
  ];

  return (
    <>
      {/* Security Section Navigation - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Security Topics</SubHeading>
        <Section layout="grid" gridCols="1-sm-2" gap="sm">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as typeof activeSection)}
              className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 w-full ${
                activeSection === section.id
                  ? 'text-white shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: activeSection === section.id ? section.color : 'transparent'
              }}
            >
              {section.label}
            </button>
          ))}
        </Section>
      </Section>

      {/* Security Overview */}
      {activeSection === 'overview' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Security Overview</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#2592D0] rounded-full mb-2"></div>
                <Heading level={4} color="blue" size="sm" className="mb-2">🛡️ Defense in Depth</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• Multiple layers of security controls</Text>
                  <Text variant="small" color="gray">• Authentication & authorization</Text>
                  <Text variant="small" color="gray">• Input validation & sanitization</Text>
                  <Text variant="small" color="gray">• Secure coding practices</Text>
                  <Text variant="small" color="gray">• Regular security audits</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#702083] rounded-full mb-2"></div>
                <Heading level={4} color="purple" size="sm" className="mb-2">🔐 Zero Trust Model</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• Never trust, always verify</Text>
                  <Text variant="small" color="gray">• Principle of least privilege</Text>
                  <Text variant="small" color="gray">• Continuous verification</Text>
                  <Text variant="small" color="gray">• Micro-segmentation</Text>
                  <Text variant="small" color="gray">• Secure by default</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full mb-2"></div>
                <Heading level={4} customColor="#FBBB02" size="sm" className="mb-2">📊 Compliance</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• GDPR compliance for EU users</Text>
                  <Text variant="small" color="gray">• CCPA compliance for CA users</Text>
                  <Text variant="small" color="gray">• SOC 2 Type II controls</Text>
                  <Text variant="small" color="gray">• Canadian privacy laws</Text>
                  <Text variant="small" color="gray">• Industry best practices</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Authentication & Authorization */}
      {activeSection === 'auth' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Authentication & Authorization</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Azure AD Security (WSA Portal)</Heading>
              <Section spacing="sm">
                <Text variant="small" weight="medium" customColor="#2592D0">🔑 PKCE OAuth Flow</Text>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• Proof Key for Code Exchange</Text>
                  <Text variant="small" color="gray">• Prevents authorization code interception</Text>
                  <Text variant="small" color="gray">• Client-side code challenge generation</Text>
                  <Text variant="small" color="gray">• Server-side code verifier validation</Text>
                </Section>
                <CodeBlock variant="compact" language="typescript">
{`// Generate PKCE challenge
function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64URLEncode(array);
}`}
                </CodeBlock>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">JWT Security (WSA-Central)</Heading>
              <Section spacing="sm">
                <Text variant="small" weight="medium" customColor="#702083">🔐 Token Security</Text>
                <CodeBlock variant="compact" language="python">
{`# JWT Configuration
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, JWT_SECRET_KEY)`}
                </CodeBlock>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🛡️ Session Management</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray" className="mb-3">iron-session for secure cookies:</Text>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Encrypted session data</Text>
                  <Text variant="small" color="gray">• HttpOnly and Secure flags</Text>
                  <Text variant="small" color="gray">• Automatic token refresh</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Data Protection */}
      {activeSection === 'data' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Data Protection & Privacy</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔒 Row Level Security</Heading>
              <Text variant="small" color="gray" className="mb-3">All Supabase tables must implement RLS policies</Text>
              <CodeBlock variant="compact" language="sql">
{`-- Example RLS policy
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
USING (auth.uid() = id);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📋 Data Classification</Heading>
              <Section spacing="sm">
                <Section>
                  <Text variant="small" weight="medium" customColor="#DC2626">🔴 Highly Sensitive</Text>
                  <Text variant="caption" color="gray">SSNs, banking info, medical records</Text>
                </Section>
                <Section>
                  <Text variant="small" weight="medium" customColor="#FBBB02">🟡 Sensitive</Text>
                  <Text variant="caption" color="gray">Email addresses, phone numbers, resumes</Text>
                </Section>
                <Section>
                  <Text variant="small" weight="medium" customColor="#059669">🟢 Public</Text>
                  <Text variant="caption" color="gray">Job listings, company info, blog posts</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔐 Encryption at Rest</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• AES-256 encryption for all data</Text>
                <Text variant="small" color="gray">• Automatic encryption in Supabase</Text>
                <Text variant="small" color="gray">• Encrypted backups</Text>
                <Text variant="small" color="gray">• Secure key management</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Input Validation */}
      {activeSection === 'input' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Input Validation & Sanitization</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📝 Form Validation with Zod</Heading>
              <CodeBlock variant="compact" language="typescript">
{`import { z } from 'zod';

const userSchema = z.object({
  email: z.string()
    .email("Invalid email")
    .max(254, "Email too long"),

  password: z.string()
    .min(12, "Password must be 12+ chars")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
      message: "Must contain upper, lower, number"
    })
});`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🧹 Content Sanitization</Heading>
              <CodeBlock variant="compact" language="typescript">
{`import DOMPurify from 'dompurify';

function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
    FORBID_SCRIPTS: true
  });
}`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🐍 Backend Validation</Heading>
              <CodeBlock variant="compact" language="python">
{`from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=12)
    full_name: str = Field(..., min_length=2, max_length=100)

    @validator('password')
    def validate_password(cls, v):
        if not re.match(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)', v):
            raise ValueError('Password requirements not met')
        return v`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Environment Security */}
      {activeSection === 'environment' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Environment & Secrets</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔒 Production Security</Heading>
              <Section spacing="sm" className="mb-3">
                <Text variant="small" color="gray">• Never commit secrets to version control</Text>
                <Text variant="small" color="gray">• Use environment-specific configurations</Text>
                <Text variant="small" color="gray">• Rotate secrets regularly</Text>
                <Text variant="small" color="gray">• Monitor for secret exposure</Text>
              </Section>
              <CodeBlock variant="compact" language="bash">
{`# .env.example (safe to commit)
AZURE_AD_CLIENT_SECRET=your_secret_key
SESSION_SECRET=your_session_secret

# .env.local (NEVER commit)
AZURE_AD_CLIENT_SECRET=actual_secret_here`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🛡️ Runtime Validation</Heading>
              <Text variant="small" color="gray" className="mb-3">Validate environment variables at startup</Text>
              <CodeBlock variant="compact" language="typescript">
{`const requiredEnvVars = [
  'AZURE_AD_CLIENT_SECRET',
  'SESSION_SECRET'
];

function validateEnvironment() {
  const missing = requiredEnvVars.filter(
    key => !process.env[key]
  );

  if (missing.length > 0) {
    throw new Error(\`Missing: \${missing.join(', ')}\`);
  }
}`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🛡️ Security Headers</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• HSTS: Force HTTPS connections</Text>
                <Text variant="small" color="gray">• CSP: Prevent XSS attacks</Text>
                <Text variant="small" color="gray">• X-Frame-Options: Prevent clickjacking</Text>
                <Text variant="small" color="gray">• X-Content-Type-Options: Prevent MIME sniffing</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Monitoring */}
      {activeSection === 'monitoring' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Security Monitoring</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📊 Logging & Alerting</Heading>
              <Section spacing="sm" className="mb-3">
                <Text variant="small" color="gray">• Log all authentication attempts</Text>
                <Text variant="small" color="gray">• Monitor suspicious activity patterns</Text>
                <Text variant="small" color="gray">• Alert on failed login thresholds</Text>
                <Text variant="small" color="gray">• Track API usage and rate limiting</Text>
              </Section>
              <CodeBlock variant="compact" language="typescript">
{`interface SecurityEvent {
  type: 'auth_failure' | 'rate_limit' | 'suspicious_activity';
  userId?: string;
  ip: string;
  timestamp: Date;
}

async function logSecurityEvent(event: SecurityEvent) {
  await supabase.from('security_events').insert(event);

  if (event.type === 'suspicious_activity') {
    await sendSecurityAlert(event);
  }
}`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🚨 Incident Response</Heading>
              <Section spacing="sm">
                <Section>
                  <Text variant="small" weight="medium" customColor="#DC2626">1. Detection & Assessment</Text>
                  <Text variant="caption" color="gray">Identify incident, assess severity, document findings</Text>
                </Section>
                <Section>
                  <Text variant="small" weight="medium" customColor="#FBBB02">2. Containment</Text>
                  <Text variant="caption" color="gray">Isolate systems, revoke credentials, block IPs</Text>
                </Section>
                <Section>
                  <Text variant="small" weight="medium" customColor="#059669">3. Recovery</Text>
                  <Text variant="caption" color="gray">Restore services, notify stakeholders, document lessons</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Security Checklist */}
      {activeSection === 'checklist' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Security Checklist</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📋 Pre-Deployment Checklist</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">All routes require proper authentication</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Authorization checks implemented</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Input validation on all forms</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Output sanitization implemented</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">No secrets in source code</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">HTTPS enforced in production</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Security headers configured</Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <input type="checkbox" className="mt-1" />
                  <Text variant="small">Security events logged</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🎓 Security Resources</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://owasp.org/www-project-top-ten/" target="_blank" className="text-[#2592D0] hover:underline">
                    OWASP Top 10
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://cheatsheetseries.owasp.org/" target="_blank" className="text-[#2592D0] hover:underline">
                    OWASP Cheat Sheets
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://snyk.io/" target="_blank" className="text-[#2592D0] hover:underline">
                    Snyk Vulnerability Scanning
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://securityheaders.com/" target="_blank" className="text-[#2592D0] hover:underline">
                    Security Headers Checker
                  </a>
                </Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📞 Emergency Contacts</Heading>
              <Section spacing="sm">
                <Section>
                  <Text variant="small" weight="medium" customColor="#2592D0">Security Lead: Tanguy Merrien</Text>
                  <Text variant="caption" customColor="#2592D0">📧 info@worksourcealliance.ca</Text>
                </Section>
                <Section>
                  <Text variant="small" weight="medium" customColor="#702083">Operations: Chuchi Soriano</Text>
                  <Text variant="caption" customColor="#702083">📧 chuchi@worksourcealliance.ca</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}
    </>
  );
}