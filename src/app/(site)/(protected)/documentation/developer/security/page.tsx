import { Section, Heading, SubHeading, Card, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function SecurityGuidePage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Developer Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">Security Guide</span>
        </div>
        <Heading>🔒 WSA Security Guidelines</Heading>
        <p className="text-gray-600">
          Comprehensive security best practices and guidelines for WorkSource Alliance platform development
        </p>
      </Section>

      {/* Security Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Security Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">🛡️ Defense in Depth</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Multiple layers of security controls</li>
                  <li>• Authentication & authorization</li>
                  <li>• Input validation & sanitization</li>
                  <li>• Secure coding practices</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-3">🔐 Zero Trust Model</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Never trust, always verify</li>
                  <li>• Principle of least privilege</li>
                  <li>• Continuous verification</li>
                  <li>• Micro-segmentation</li>
                  <li>• Secure by default</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-3">📊 Compliance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• GDPR compliance for EU users</li>
                  <li>• CCPA compliance for CA users</li>
                  <li>• SOC 2 Type II controls</li>
                  <li>• Canadian privacy laws</li>
                  <li>• Industry best practices</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Authentication Security */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Authentication & Authorization</SubHeading>
        
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Azure AD Security (WSA Portal)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🔑 PKCE OAuth Flow</h5>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  <li>• Proof Key for Code Exchange</li>
                  <li>• Prevents authorization code interception</li>
                  <li>• Client-side code challenge generation</li>
                  <li>• Server-side code verifier validation</li>
                </ul>
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
}`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🛡️ Session Management</h5>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  <li>• iron-session for secure cookies</li>
                  <li>• Encrypted session data</li>
                  <li>• HttpOnly and Secure flags</li>
                  <li>• Automatic token refresh</li>
                </ul>
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
};`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>

        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">JWT Security (WSA-Central)</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🔐 Token Security Best Practices</h5>
                <CodeBlock variant="compact" language="python">
{`# JWT Configuration
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Token creation with proper claims
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
    return encoded_jwt`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">⏰ Token Lifecycle Management</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Short-lived access tokens (30 minutes)</li>
                  <li>• Secure token storage (HttpOnly cookies preferred)</li>
                  <li>• Token refresh mechanisms</li>
                  <li>• Proper token revocation</li>
                  <li>• Blacklist compromised tokens</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Data Protection */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Data Protection & Privacy</SubHeading>
        
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Database Security (Supabase)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🔒 Row Level Security (RLS)</h5>
                <p className="text-sm text-gray-600 mb-3">All tables must implement proper RLS policies</p>
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
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🔐 Encryption at Rest</h5>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  <li>• AES-256 encryption for all data</li>
                  <li>• Automatic encryption in Supabase</li>
                  <li>• Encrypted backups</li>
                  <li>• Secure key management</li>
                </ul>
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

// Use service role key for server-side operations only`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>

        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Personal Data Handling</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#FBBB02] mb-2">📋 Data Classification</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-red-600 mb-1">🔴 Highly Sensitive</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Social Security Numbers</li>
                      <li>• Banking information</li>
                      <li>• Medical records</li>
                      <li>• Authentication credentials</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-600 mb-1">🟡 Sensitive</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Email addresses</li>
                      <li>• Phone numbers</li>
                      <li>• Resume content</li>
                      <li>• Employment history</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-green-600 mb-1">🟢 Public</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Public job listings</li>
                      <li>• Company information</li>
                      <li>• Published blog posts</li>
                      <li>• Marketing materials</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-[#EF7B02] mb-2">🛡️ Data Minimization</h5>
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
}`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Input Validation & Sanitization */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Input Validation & Sanitization</SubHeading>
        
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Frontend Input Validation</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">📝 Form Validation with Zod</h5>
                <CodeBlock variant="compact" language="typescript">
{`import { z } from 'zod';

// Comprehensive validation schema
const userRegistrationSchema = z.object({
  email: z.string()
    .email({ message: "Invalid email address" })
    .max(254, { message: "Email too long" }),
  
  password: z.string()
    .min(12, { message: "Password must be at least 12 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
      message: "Password must contain uppercase, lowercase, number, and special character"
    }),
  
  full_name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name too long" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters" }),
  
  phone: z.string()
    .regex(/^\+?[\d\s\-\(\)]+$/, { message: "Invalid phone number format" })
    .optional()
});

// Usage in form component
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(userRegistrationSchema)
});`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🧹 Content Sanitization</h5>
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
};`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>

        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Backend Input Validation</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🐍 Python/FastAPI Validation</h5>
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
    
    @validator('phone')
    def validate_phone(cls, v):
        if v and not re.match(r'^\+?[\d\s\-\(\)]+$', v):
            raise ValueError('Invalid phone number format')
        return v

# SQL injection prevention
from sqlalchemy.text import text

# ❌ NEVER do this
# query = f"SELECT * FROM users WHERE email = '{email}'"

# ✅ Always use parameterized queries
query = text("SELECT * FROM users WHERE email = :email")
result = db.execute(query, {"email": email})`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Environment & Secrets Management */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Environment & Secrets Management</SubHeading>
        
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Environment Variables Security</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🔒 Production Security</h5>
                <ul className="text-sm text-gray-600 space-y-2 mb-3">
                  <li>• Never commit secrets to version control</li>
                  <li>• Use environment-specific configurations</li>
                  <li>• Rotate secrets regularly</li>
                  <li>• Monitor for secret exposure</li>
                </ul>
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
AZURE_AD_CLIENT_SECRET=actual_secret_here`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🛡️ Runtime Validation</h5>
                <p className="text-sm text-gray-600 mb-3">Validate environment variables at startup</p>
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
}`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Security Headers & HTTPS */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Security Headers & HTTPS</SubHeading>
        
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">HTTP Security Headers</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🛡️ Vercel Security Configuration</h5>
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
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co https://login.microsoftonline.com;"
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
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        }
      ]
    }
  ]
}`}</CodeBlock>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-[#702083] mb-2">🔒 Header Explanations</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>HSTS:</strong> Force HTTPS connections</li>
                    <li>• <strong>CSP:</strong> Prevent XSS attacks</li>
                    <li>• <strong>X-Frame-Options:</strong> Prevent clickjacking</li>
                    <li>• <strong>X-Content-Type-Options:</strong> Prevent MIME sniffing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-[#FBBB02] mb-2">🛡️ Additional Protection</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Referrer-Policy:</strong> Control referrer information</li>
                    <li>• <strong>Permissions-Policy:</strong> Control browser features</li>
                    <li>• <strong>TLS 1.2+:</strong> Modern encryption protocols</li>
                    <li>• <strong>Certificate Pinning:</strong> Prevent MITM attacks</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Monitoring & Incident Response */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Security Monitoring & Incident Response</SubHeading>
        
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Security Monitoring</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">📊 Logging & Alerting</h5>
                <ul className="text-sm text-gray-600 space-y-2 mb-3">
                  <li>• Log all authentication attempts</li>
                  <li>• Monitor for suspicious activity patterns</li>
                  <li>• Alert on failed login thresholds</li>
                  <li>• Track API usage and rate limiting</li>
                  <li>• Log all administrative actions</li>
                </ul>
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
}`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🚨 Incident Response Plan</h5>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-red-600 mb-1">1. Detection & Assessment</p>
                    <ul className="text-gray-600 space-y-1 ml-4">
                      <li>• Identify the security incident</li>
                      <li>• Assess severity and impact</li>
                      <li>• Document initial findings</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-600 mb-1">2. Containment</p>
                    <ul className="text-gray-600 space-y-1 ml-4">
                      <li>• Isolate affected systems</li>
                      <li>• Revoke compromised credentials</li>
                      <li>• Block malicious IP addresses</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-green-600 mb-1">3. Recovery & Communication</p>
                    <ul className="text-gray-600 space-y-1 ml-4">
                      <li>• Restore services securely</li>
                      <li>• Notify affected stakeholders</li>
                      <li>• Document lessons learned</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Security Checklist */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Security Development Checklist</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">📋 Pre-Deployment Security Checklist</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🔒 Authentication & Authorization</h5>
                <div className="space-y-2 text-sm">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>All routes require proper authentication</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Authorization checks implemented</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Session management secure</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Password policies enforced</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🛡️ Data Protection</h5>
                <div className="space-y-2 text-sm">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Input validation on all forms</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Output sanitization implemented</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>SQL injection prevention</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>XSS protection in place</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FBBB02] mb-2">🔐 Environment Security</h5>
                <div className="space-y-2 text-sm">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>No secrets in source code</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Environment variables validated</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>HTTPS enforced in production</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Security headers configured</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-[#EF7B02] mb-2">📊 Monitoring & Logging</h5>
                <div className="space-y-2 text-sm">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Security events logged</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Error handling implemented</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Rate limiting configured</span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Incident response plan ready</span>
                  </label>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Security Resources */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Security Resources & Training</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🎓 Security Training</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://owasp.org/www-project-top-ten/" target="_blank" className="text-[#2592D0] hover:underline">OWASP Top 10</a></p>
                <p><a href="https://cheatsheetseries.owasp.org/" target="_blank" className="text-[#2592D0] hover:underline">OWASP Cheat Sheets</a></p>
                <p><a href="https://portswigger.net/web-security" target="_blank" className="text-[#2592D0] hover:underline">Web Security Academy</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔧 Security Tools</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://snyk.io/" target="_blank" className="text-[#2592D0] hover:underline">Snyk (Vulnerability Scanning)</a></p>
                <p><a href="https://github.com/advisories" target="_blank" className="text-[#2592D0] hover:underline">GitHub Security Advisories</a></p>
                <p><a href="https://securityheaders.com/" target="_blank" className="text-[#2592D0] hover:underline">Security Headers Checker</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📞 Emergency Contacts</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Security Lead:</strong> Tanguy Merrien</p>
                <p>📧 info@worksourcealliance.ca</p>
                <p><strong>Operations Manager:</strong> Chuchi Soriano</p>
                <p>📧 chuchi@worksourcealliance.ca</p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}