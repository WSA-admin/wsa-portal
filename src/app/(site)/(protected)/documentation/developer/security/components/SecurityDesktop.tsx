import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";

export default function SecurityDesktop() {
  return (
    <>
      {/* Security Overview - Desktop */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>Security Overview</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">🛡️ Defense in Depth</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Multiple layers of security controls</Text>
                  <Text variant="small" color="gray">• Authentication & authorization</Text>
                  <Text variant="small" color="gray">• Input validation & sanitization</Text>
                  <Text variant="small" color="gray">• Secure coding practices</Text>
                  <Text variant="small" color="gray">• Regular security audits</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">🔐 Zero Trust Model</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Never trust, always verify</Text>
                  <Text variant="small" color="gray">• Principle of least privilege</Text>
                  <Text variant="small" color="gray">• Continuous verification</Text>
                  <Text variant="small" color="gray">• Micro-segmentation</Text>
                  <Text variant="small" color="gray">• Secure by default</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#FBBB02" weight="semibold" className="mb-3">📊 Compliance</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• GDPR compliance for EU users</Text>
                  <Text variant="small" color="gray">• CCPA compliance for CA users</Text>
                  <Text variant="small" color="gray">• SOC 2 Type II controls</Text>
                  <Text variant="small" color="gray">• Canadian privacy laws</Text>
                  <Text variant="small" color="gray">• Industry best practices</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Authentication & Authorization - Desktop */}
      <Section delay={700} animationType="fadeUp">
        <SubHeading>Authentication & Authorization</SubHeading>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Azure AD Security (WSA Portal)</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🔑 PKCE OAuth Flow</Heading>
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
}

async function generateCodeChallenge(verifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64URLEncode(new Uint8Array(digest));
}`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🛡️ Session Management</Heading>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• iron-session for secure cookies</Text>
                  <Text variant="small" color="gray">• Encrypted session data</Text>
                  <Text variant="small" color="gray">• HttpOnly and Secure flags</Text>
                  <Text variant="small" color="gray">• Automatic token refresh</Text>
                </Section>
                <CodeBlock variant="compact" language="typescript">
{`// Session configuration
const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "wsa-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    maxAge: 1800, // 30 minutes
  },
};`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">JWT Security (WSA-Central)</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🔐 Token Security Best Practices</Heading>
                <CodeBlock variant="compact" language="python">
{`# JWT Configuration
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)

    to_encode.update({
        "exp": expire,
        "iat": datetime.utcnow(),
        "iss": "wsa-central",
        "aud": "wsa-platform"
    })

    encoded_jwt = jwt.encode(to_encode, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)
    return encoded_jwt`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">⏰ Token Lifecycle Management</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Short-lived access tokens (30 minutes)</Text>
                  <Text variant="small" color="gray">• Secure token storage (HttpOnly cookies preferred)</Text>
                  <Text variant="small" color="gray">• Token refresh mechanisms</Text>
                  <Text variant="small" color="gray">• Proper token revocation</Text>
                  <Text variant="small" color="gray">• Blacklist compromised tokens</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Data Protection & Privacy - Desktop */}
      <Section delay={900} animationType="slideLeft">
        <SubHeading>Data Protection & Privacy</SubHeading>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Database Security (Supabase)</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🔒 Row Level Security (RLS)</Heading>
                <Text variant="small" color="gray" className="mb-3">All tables must implement proper RLS policies</Text>
                <CodeBlock variant="compact" language="sql">
{`-- Example RLS policy for user profiles
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
USING (auth.uid() = id);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🔐 Encryption at Rest</Heading>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• AES-256 encryption for all data</Text>
                  <Text variant="small" color="gray">• Automatic encryption in Supabase</Text>
                  <Text variant="small" color="gray">• Encrypted backups</Text>
                  <Text variant="small" color="gray">• Secure key management</Text>
                </Section>
                <CodeBlock variant="compact" language="typescript">
{`// Encrypt sensitive data before storage
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false
    }
  }
);

// Use service role key for server-side operations only`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Personal Data Handling</Heading>
            <Section spacing="md">
              <Section>
                <Heading level={5} customColor="#FBBB02" weight="semibold" className="mb-2">📋 Data Classification</Heading>
                <Section layout="grid" gridCols="1-sm-2-lg-3" gap="md">
                  <Section>
                    <Text variant="small" weight="semibold" customColor="#DC2626" className="mb-1">🔴 Highly Sensitive</Text>
                    <Section spacing="sm">
                      <Text variant="small" color="gray">• Social Security Numbers</Text>
                      <Text variant="small" color="gray">• Banking information</Text>
                      <Text variant="small" color="gray">• Medical records</Text>
                      <Text variant="small" color="gray">• Authentication credentials</Text>
                    </Section>
                  </Section>
                  <Section>
                    <Text variant="small" weight="semibold" customColor="#FBBB02" className="mb-1">🟡 Sensitive</Text>
                    <Section spacing="sm">
                      <Text variant="small" color="gray">• Email addresses</Text>
                      <Text variant="small" color="gray">• Phone numbers</Text>
                      <Text variant="small" color="gray">• Resume content</Text>
                      <Text variant="small" color="gray">• Employment history</Text>
                    </Section>
                  </Section>
                  <Section>
                    <Text variant="small" weight="semibold" customColor="#059669" className="mb-1">🟢 Public</Text>
                    <Section spacing="sm">
                      <Text variant="small" color="gray">• Public job listings</Text>
                      <Text variant="small" color="gray">• Company information</Text>
                      <Text variant="small" color="gray">• Published blog posts</Text>
                      <Text variant="small" color="gray">• Marketing materials</Text>
                    </Section>
                  </Section>
                </Section>
              </Section>

              <Section>
                <Heading level={5} customColor="#EF7B02" weight="semibold" className="mb-2">🛡️ Data Minimization</Heading>
                <CodeBlock variant="compact" language="typescript">
{`// Only collect necessary data
interface UserProfile {
  id: string;
  email: string;           // Required for communication
  full_name: string;       // Required for job applications
  phone?: string;          // Optional, user-provided
  resume_url?: string;     // Optional, for job matching
  // ❌ Avoid: unnecessary_field: string;
}

// Implement data retention policies
const DATA_RETENTION_DAYS = 365 * 7; // 7 years for employment records

async function cleanupOldData() {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - DATA_RETENTION_DAYS);

  await supabase
    .from('inactive_profiles')
    .delete()
    .lt('last_login', cutoffDate.toISOString());
}`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Input Validation & Sanitization - Desktop */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Input Validation & Sanitization</SubHeading>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Frontend Input Validation</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">📝 Form Validation with Zod</Heading>
                <CodeBlock variant="compact" language="typescript">
{`import { z } from 'zod';

// Comprehensive validation schema
const userRegistrationSchema = z.object({
  email: z.string()
    .email({ message: "Invalid email address" })
    .max(254, { message: "Email too long" }),

  password: z.string()
    .min(12, { message: "Password must be at least 12 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
      message: "Password must contain uppercase, lowercase, number, and special character"
    }),

  full_name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name too long" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters" })
});`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🧹 Content Sanitization</Heading>
                <CodeBlock variant="compact" language="typescript">
{`import DOMPurify from 'dompurify';

// Sanitize user-generated content
function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li'],
    ALLOWED_ATTR: [],
    FORBID_SCRIPTS: true,
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed']
  });
}

// XSS prevention for dynamic content
const UserContent: React.FC<{ content: string }> = ({ content }) => {
  const sanitizedContent = useMemo(() => sanitizeHtml(content), [content]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className="user-content"
    />
  );
};`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Backend Input Validation</Heading>
            <Section>
              <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🐍 Python/FastAPI Validation</Heading>
              <CodeBlock variant="compact" language="python">
{`from pydantic import BaseModel, EmailStr, validator, Field
from typing import Optional
import re

class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=12, max_length=128)
    full_name: str = Field(..., min_length=2, max_length=100)
    phone: Optional[str] = Field(None, max_length=20)

    @validator('password')
    def validate_password(cls, v):
        if not re.match(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])', v):
            raise ValueError('Password must contain uppercase, lowercase, number, and special character')
        return v

    @validator('full_name')
    def validate_name(cls, v):
        if not re.match(r'^[a-zA-Z\s\'-]+$', v):
            raise ValueError('Name contains invalid characters')
        return v.strip()

# SQL injection prevention
from sqlalchemy.text import text

# ❌ NEVER do this
# query = f"SELECT * FROM users WHERE email = '{email}'"

# ✅ Always use parameterized queries
query = text("SELECT * FROM users WHERE email = :email")
result = db.execute(query, {"email": email})`}
              </CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Environment & Secrets Management - Desktop */}
      <Section delay={1300} animationType="slideLeft">
        <SubHeading>Environment & Secrets Management</SubHeading>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Environment Variables Security</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🔒 Production Security</Heading>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• Never commit secrets to version control</Text>
                  <Text variant="small" color="gray">• Use environment-specific configurations</Text>
                  <Text variant="small" color="gray">• Rotate secrets regularly</Text>
                  <Text variant="small" color="gray">• Monitor for secret exposure</Text>
                </Section>
                <CodeBlock variant="compact" language="bash">
{`# .env.example (safe to commit)
AZURE_AD_TENANT_ID=your_tenant_id
AZURE_AD_CLIENT_ID=your_client_id
AZURE_AD_CLIENT_SECRET=your_secret_key
SESSION_SECRET=your_session_secret
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# .env.local (NEVER commit)
# Contains actual production values
AZURE_AD_TENANT_ID=12345678-1234-1234-1234-123456789012
AZURE_AD_CLIENT_SECRET=actual_secret_here`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🛡️ Runtime Validation</Heading>
                <Text variant="small" color="gray" className="mb-3">Validate environment variables at startup</Text>
                <CodeBlock variant="compact" language="typescript">
{`// Environment validation
const requiredEnvVars = [
  'AZURE_AD_TENANT_ID',
  'AZURE_AD_CLIENT_ID',
  'AZURE_AD_CLIENT_SECRET',
  'SESSION_SECRET'
] as const;

function validateEnvironment() {
  const missing = requiredEnvVars.filter(
    key => !process.env[key]
  );

  if (missing.length > 0) {
    throw new Error(
      \`Missing required environment variables: \${missing.join(', ')}\`
    );
  }
}

// Call at app startup
if (process.env.NODE_ENV === 'production') {
  validateEnvironment();
}`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Security Headers & HTTPS - Desktop */}
      <Section delay={1500} animationType="fadeUp">
        <SubHeading>Security Headers & HTTPS</SubHeading>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">HTTP Security Headers</Heading>
            <Section>
              <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🛡️ Vercel Security Configuration</Heading>
              <CodeBlock language="json">
{`{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}`}
              </CodeBlock>
            </Section>

            <Section layout="grid" gridCols="1-lg-2" gap="lg" className="mt-4">
              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🔒 Header Explanations</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• <strong>HSTS:</strong> Force HTTPS connections</Text>
                  <Text variant="small" color="gray">• <strong>CSP:</strong> Prevent XSS attacks</Text>
                  <Text variant="small" color="gray">• <strong>X-Frame-Options:</strong> Prevent clickjacking</Text>
                  <Text variant="small" color="gray">• <strong>X-Content-Type-Options:</strong> Prevent MIME sniffing</Text>
                </Section>
              </Section>
              <Section>
                <Heading level={5} customColor="#FBBB02" weight="semibold" className="mb-2">🛡️ Additional Protection</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• <strong>Referrer-Policy:</strong> Control referrer information</Text>
                  <Text variant="small" color="gray">• <strong>Permissions-Policy:</strong> Control browser features</Text>
                  <Text variant="small" color="gray">• <strong>TLS 1.2+:</strong> Modern encryption protocols</Text>
                  <Text variant="small" color="gray">• <strong>Certificate Pinning:</strong> Prevent MITM attacks</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Security Monitoring & Incident Response - Desktop */}
      <Section delay={1700} animationType="slideLeft">
        <SubHeading>Security Monitoring & Incident Response</SubHeading>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Security Monitoring</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">📊 Logging & Alerting</Heading>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• Log all authentication attempts</Text>
                  <Text variant="small" color="gray">• Monitor for suspicious activity patterns</Text>
                  <Text variant="small" color="gray">• Alert on failed login thresholds</Text>
                  <Text variant="small" color="gray">• Track API usage and rate limiting</Text>
                  <Text variant="small" color="gray">• Log all administrative actions</Text>
                </Section>
                <CodeBlock variant="compact" language="typescript">
{`// Security event logging
interface SecurityEvent {
  type: 'auth_failure' | 'rate_limit' | 'suspicious_activity';
  userId?: string;
  ip: string;
  userAgent: string;
  timestamp: Date;
  metadata: Record<string, any>;
}

async function logSecurityEvent(event: SecurityEvent) {
  await supabase
    .from('security_events')
    .insert(event);

  // Alert if critical
  if (event.type === 'suspicious_activity') {
    await sendSecurityAlert(event);
  }
}`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🚨 Incident Response Plan</Heading>
                <Section spacing="md">
                  <Section>
                    <Text variant="small" weight="semibold" customColor="#DC2626" className="mb-1">1. Detection & Assessment</Text>
                    <Section spacing="sm" className="ml-4">
                      <Text variant="small" color="gray">• Identify the security incident</Text>
                      <Text variant="small" color="gray">• Assess severity and impact</Text>
                      <Text variant="small" color="gray">• Document initial findings</Text>
                    </Section>
                  </Section>
                  <Section>
                    <Text variant="small" weight="semibold" customColor="#FBBB02" className="mb-1">2. Containment</Text>
                    <Section spacing="sm" className="ml-4">
                      <Text variant="small" color="gray">• Isolate affected systems</Text>
                      <Text variant="small" color="gray">• Revoke compromised credentials</Text>
                      <Text variant="small" color="gray">• Block malicious IP addresses</Text>
                    </Section>
                  </Section>
                  <Section>
                    <Text variant="small" weight="semibold" customColor="#059669" className="mb-1">3. Recovery & Communication</Text>
                    <Section spacing="sm" className="ml-4">
                      <Text variant="small" color="gray">• Restore services securely</Text>
                      <Text variant="small" color="gray">• Notify affected stakeholders</Text>
                      <Text variant="small" color="gray">• Document lessons learned</Text>
                    </Section>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Security Development Checklist - Desktop */}
      <Section delay={1900} animationType="fadeUp">
        <SubHeading>Security Development Checklist</SubHeading>
        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">📋 Pre-Deployment Security Checklist</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section spacing="md">
                <Section>
                  <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🔒 Authentication & Authorization</Heading>
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
                      <Text variant="small">Session management secure</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">Password policies enforced</Text>
                    </Section>
                  </Section>
                </Section>

                <Section>
                  <Heading level={5} customColor="#FBBB02" weight="semibold" className="mb-2">🔐 Environment Security</Heading>
                  <Section spacing="sm">
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">No secrets in source code</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">Environment variables validated</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">HTTPS enforced in production</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">Security headers configured</Text>
                    </Section>
                  </Section>
                </Section>
              </Section>

              <Section spacing="md">
                <Section>
                  <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🛡️ Data Protection</Heading>
                  <Section spacing="sm">
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
                      <Text variant="small">SQL injection prevention</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">XSS protection in place</Text>
                    </Section>
                  </Section>
                </Section>

                <Section>
                  <Heading level={5} customColor="#EF7B02" weight="semibold" className="mb-2">📊 Monitoring & Logging</Heading>
                  <Section spacing="sm">
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">Security events logged</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">Error handling implemented</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">Rate limiting configured</Text>
                    </Section>
                    <Section orientation="horizontal" spacing="sm" className="items-start">
                      <input type="checkbox" className="mt-1" />
                      <Text variant="small">Incident response plan ready</Text>
                    </Section>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Security Resources & Training - Desktop */}
      <Section delay={2100} animationType="slideLeft">
        <SubHeading>Security Resources & Training</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-2">🎓 Security Training</Heading>
                <Section spacing="sm">
                  <Text variant="small">
                    <a href="https://owasp.org/www-project-top-ten/" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      OWASP Top 10
                    </a>
                  </Text>
                  <Text variant="small">
                    <a href="https://cheatsheetseries.owasp.org/" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      OWASP Cheat Sheets
                    </a>
                  </Text>
                  <Text variant="small">
                    <a href="https://portswigger.net/web-security" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      Web Security Academy
                    </a>
                  </Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-2">🔧 Security Tools</Heading>
                <Section spacing="sm">
                  <Text variant="small">
                    <a href="https://snyk.io/" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      Snyk (Vulnerability Scanning)
                    </a>
                  </Text>
                  <Text variant="small">
                    <a href="https://github.com/advisories" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      GitHub Security Advisories
                    </a>
                  </Text>
                  <Text variant="small">
                    <a href="https://securityheaders.com/" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                      Security Headers Checker
                    </a>
                  </Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} weight="semibold" color="gray" className="mb-2">📞 Emergency Contacts</Heading>
                <Section spacing="sm">
                  <Section>
                    <Text variant="small" weight="semibold">Security Lead: Tanguy Merrien</Text>
                    <Text variant="small" customColor="#2592D0">📧 info@worksourcealliance.ca</Text>
                  </Section>
                  <Section>
                    <Text variant="small" weight="semibold">Operations Manager: Chuchi Soriano</Text>
                    <Text variant="small" customColor="#702083">📧 chuchi@worksourcealliance.ca</Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>
    </>
  );
}