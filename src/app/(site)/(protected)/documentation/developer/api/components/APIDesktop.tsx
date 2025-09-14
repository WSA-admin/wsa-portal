import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function APIDesktop() {
  return (
    <>
      {/* API Overview - Desktop */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>API Overview</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">🌟 Main Platform API</Heading>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• Supabase REST API</Text>
                  <Text variant="small" color="gray">• Real-time subscriptions</Text>
                  <Text variant="small" color="gray">• Row Level Security</Text>
                  <Text variant="small" color="gray">• Auto-generated from schema</Text>
                  <Text variant="small" color="gray">• OpenAPI 3.0 compatible</Text>
                </Section>
                <Text variant="caption" color="gray" customColor="#6B7280">
                  Base: <CodeBlock variant="inline">https://api.worksourcealliance.com</CodeBlock>
                </Text>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">🏗️ WSA-Central API</Heading>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• FastAPI framework</Text>
                  <Text variant="small" color="gray">• JWT authentication</Text>
                  <Text variant="small" color="gray">• Resume processing</Text>
                  <Text variant="small" color="gray">• Job matching algorithms</Text>
                  <Text variant="small" color="gray">• OpenAPI documentation</Text>
                </Section>
                <Text variant="caption" color="gray" customColor="#6B7280">
                  Base: <CodeBlock variant="inline">http://localhost:8000</CodeBlock>
                </Text>
              </Section>

              <Section>
                <Heading level={4} customColor="#FBBB02" weight="semibold" className="mb-3">📊 Portal APIs</Heading>
                <Section spacing="sm" className="mb-3">
                  <Text variant="small" color="gray">• Microsoft Graph API</Text>
                  <Text variant="small" color="gray">• Azure AD authentication</Text>
                  <Text variant="small" color="gray">• SharePoint integration</Text>
                  <Text variant="small" color="gray">• User profile data</Text>
                  <Text variant="small" color="gray">• News and updates</Text>
                </Section>
                <Text variant="caption" color="gray" customColor="#6B7280">
                  Base: <CodeBlock variant="inline">https://portal.worksourcealliance.ca/api</CodeBlock>
                </Text>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* WSA-Central API Details - Desktop */}
      <Section delay={700} animationType="fadeUp">
        <SubHeading>WSA-Central API Endpoints</SubHeading>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Authentication Endpoints</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">User Registration</Heading>
                <CodeBlock variant="compact" language="text">
{`POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123",
  "full_name": "John Doe"
}

Response:
{
  "access_token": "jwt_token_here",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "full_name": "John Doe"
  }
}`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">User Login</Heading>
                <CodeBlock variant="compact" language="text">
{`POST /auth/token
Content-Type: application/x-www-form-urlencoded

username=user@example.com&password=securepassword123

Response:
{
  "access_token": "jwt_token_here",
  "token_type": "bearer"
}`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">User Management</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">Get Current User Profile</Heading>
                <CodeBlock variant="compact" language="text">
{`GET /users/me
Authorization: Bearer jwt_token_here

Response:
{
  "id": 1,
  "email": "user@example.com",
  "full_name": "John Doe",
  "is_active": true,
  "created_at": "2025-01-01T00:00:00Z"
}`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">Change Password</Heading>
                <CodeBlock variant="compact" language="text">
{`PUT /users/change-password
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "current_password": "oldpassword123",
  "new_password": "newpassword456"
}

Response:
{
  "message": "Password updated successfully"
}`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Todo Management (Sample API)</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">List All Todos</Heading>
                <CodeBlock variant="compact" language="text">
{`GET /todos/
Authorization: Bearer jwt_token_here

Response:
[
  {
    "id": 1,
    "title": "Complete project setup",
    "description": "Set up development environment",
    "completed": false,
    "created_at": "2025-01-01T00:00:00Z",
    "owner_id": 1
  }
]`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">Create New Todo</Heading>
                <CodeBlock variant="compact" language="text">
{`POST /todos/
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "title": "New task",
  "description": "Task description"
}

Response:
{
  "id": 2,
  "title": "New task",
  "description": "Task description",
  "completed": false,
  "created_at": "2025-01-01T12:00:00Z",
  "owner_id": 1
}`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Portal API Details - Desktop */}
      <Section delay={900} animationType="slideLeft">
        <SubHeading>Portal API Endpoints</SubHeading>

        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Authentication & User Management</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#FBBB02" weight="semibold" className="mb-2">Authentication Status</Heading>
                <CodeBlock variant="compact" language="text">
{`GET /api/auth/status

Response (Authenticated):
{
  "authenticated": true,
  "user": {
    "displayName": "John Doe",
    "mail": "john.doe@worksourcealliance.ca",
    "id": "user-id-here"
  }
}

Response (Not Authenticated):
{
  "authenticated": false
}`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#EF7B02" weight="semibold" className="mb-2">Logout</Heading>
                <CodeBlock variant="compact" language="text">
{`POST /api/auth/logout

Response:
{
  "success": true,
  "message": "Logged out successfully"
}`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>

        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Microsoft Graph Integration</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">Get User Profile</Heading>
                <CodeBlock variant="compact" language="text">
{`GET /api/graph/me

Response:
{
  "id": "user-id-here",
  "displayName": "John Doe",
  "mail": "john.doe@worksourcealliance.ca",
  "jobTitle": "Developer",
  "department": "IT",
  "officeLocation": "Remote"
}`}
                </CodeBlock>
              </Section>

              <Section>
                <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">Get SharePoint News</Heading>
                <CodeBlock variant="compact" language="text">
{`GET /api/graph/news

Response:
[
  {
    "id": "news-item-1",
    "title": "Team Update",
    "description": "Latest team updates and announcements",
    "created": "2025-01-01T10:00:00Z",
    "webUrl": "https://sharepoint-url-here"
  }
]`}
                </CodeBlock>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Main Platform API - Desktop */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Main Platform API (Supabase)</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Key Database Tables & Endpoints</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section spacing="md">
                <Section>
                  <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">User Profiles</Heading>
                  <CodeBlock variant="compact" language="text">
{`GET /rest/v1/profiles
POST /rest/v1/profiles
PATCH /rest/v1/profiles?id=eq.user-id

Table Structure:
- id (uuid, primary key)
- email (text)
- full_name (text)
- avatar_url (text)
- created_at (timestamp)`}
                  </CodeBlock>
                </Section>

                <Section>
                  <Heading level={5} customColor="#FBBB02" weight="semibold" className="mb-2">Applications</Heading>
                  <CodeBlock variant="compact" language="text">
{`GET /rest/v1/applications
POST /rest/v1/applications
PATCH /rest/v1/applications?id=eq.app-id

Table Structure:
- id (uuid, primary key)
- job_id (uuid, foreign key)
- applicant_id (uuid, foreign key)
- status (enum)
- applied_at (timestamp)`}
                  </CodeBlock>
                </Section>
              </Section>

              <Section spacing="md">
                <Section>
                  <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">Job Listings</Heading>
                  <CodeBlock variant="compact" language="text">
{`GET /rest/v1/jobs
POST /rest/v1/jobs
PATCH /rest/v1/jobs?id=eq.job-id

Table Structure:
- id (uuid, primary key)
- title (text)
- description (text)
- company_id (uuid, foreign key)
- location (text)
- salary_range (text)`}
                  </CodeBlock>
                </Section>

                <Section>
                  <Heading level={5} customColor="#EF7B02" weight="semibold" className="mb-2">Companies</Heading>
                  <CodeBlock variant="compact" language="text">
{`GET /rest/v1/companies
POST /rest/v1/companies
PATCH /rest/v1/companies?id=eq.company-id

Table Structure:
- id (uuid, primary key)
- name (text)
- description (text)
- website (text)
- logo_url (text)
- location (text)`}
                  </CodeBlock>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Authentication & Headers - Desktop */}
      <Section delay={1300} animationType="slideLeft">
        <SubHeading>Authentication & Request Headers</SubHeading>
        <Section layout="grid" gridCols="1-lg-2" gap="lg">
          <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray" className="mb-3">WSA-Central Authentication</Heading>
              <Text variant="small" color="gray" className="mb-3">JWT Bearer token authentication</Text>
              <CodeBlock variant="compact" language="text">
{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

# Token expires in 30 minutes
# Refresh by re-authenticating with /auth/token`}
              </CodeBlock>
            </Section>
          </Card>

          <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray" className="mb-3">Supabase Authentication</Heading>
              <Text variant="small" color="gray" className="mb-3">API key and JWT session authentication</Text>
              <CodeBlock variant="compact" language="text">
{`apikey: your_supabase_anon_key
Authorization: Bearer user_jwt_session_token
Content-Type: application/json

# Session managed by Supabase client
# Auto-refresh handled by SDK`}
              </CodeBlock>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Error Handling - Desktop */}
      <Section delay={1500} animationType="fadeUp">
        <SubHeading>Error Handling & Status Codes</SubHeading>
        <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Heading level={4} weight="semibold" color="gray" className="mb-3">Common HTTP Status Codes</Heading>
            <Section layout="grid" gridCols="1-lg-2" gap="lg">
              <Section>
                <Heading level={5} customColor="#059669" weight="semibold" className="mb-2">Success Codes</Heading>
                <Section spacing="sm">
                  <Text variant="small"><CodeBlock variant="inline">200 OK</CodeBlock> - Request successful</Text>
                  <Text variant="small"><CodeBlock variant="inline">201 Created</CodeBlock> - Resource created</Text>
                  <Text variant="small"><CodeBlock variant="inline">204 No Content</CodeBlock> - Success, no response body</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={5} customColor="#DC2626" weight="semibold" className="mb-2">Error Codes</Heading>
                <Section spacing="sm">
                  <Text variant="small"><CodeBlock variant="inline">400 Bad Request</CodeBlock> - Invalid request data</Text>
                  <Text variant="small"><CodeBlock variant="inline">401 Unauthorized</CodeBlock> - Authentication required</Text>
                  <Text variant="small"><CodeBlock variant="inline">403 Forbidden</CodeBlock> - Access denied</Text>
                  <Text variant="small"><CodeBlock variant="inline">404 Not Found</CodeBlock> - Resource not found</Text>
                  <Text variant="small"><CodeBlock variant="inline">422 Validation Error</CodeBlock> - Invalid input data</Text>
                  <Text variant="small"><CodeBlock variant="inline">500 Server Error</CodeBlock> - Internal server error</Text>
                </Section>
              </Section>
            </Section>

            <Section className="mt-4">
              <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">Error Response Format</Heading>
              <CodeBlock variant="compact" language="text">
{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "issue": "Must be a valid email address"
    }
  }
}`}
              </CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Rate Limiting & Usage Guidelines - Desktop */}
      <Section delay={1700} animationType="slideLeft">
        <SubHeading>Rate Limiting & Usage Guidelines</SubHeading>
        <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
          <Section spacing="md">
            <Section layout="grid" gridCols="1-sm-2-lg-3" gap="lg">
              <Section>
                <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-2">WSA-Central Limits</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• 100 requests per minute</Text>
                  <Text variant="small" color="gray">• 1000 requests per hour</Text>
                  <Text variant="small" color="gray">• Based on IP address</Text>
                  <Text variant="small" color="gray">• Higher limits for authenticated users</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#702083" weight="semibold" className="mb-2">Supabase Limits</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Free tier: 2 requests/second</Text>
                  <Text variant="small" color="gray">• Pro tier: 100+ requests/second</Text>
                  <Text variant="small" color="gray">• Based on project usage</Text>
                  <Text variant="small" color="gray">• Real-time subscriptions limited</Text>
                </Section>
              </Section>

              <Section>
                <Heading level={4} customColor="#FBBB02" weight="semibold" className="mb-2">Best Practices</Heading>
                <Section spacing="sm">
                  <Text variant="small" color="gray">• Implement exponential backoff</Text>
                  <Text variant="small" color="gray">• Cache frequently accessed data</Text>
                  <Text variant="small" color="gray">• Use pagination for large datasets</Text>
                  <Text variant="small" color="gray">• Handle rate limit errors gracefully</Text>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Interactive Documentation & Resources - Desktop */}
      <Section delay={1900} animationType="fadeUp">
        <SubHeading>Interactive API Documentation & Resources</SubHeading>
        <Section layout="grid" gridCols="1-lg-2" gap="lg">
          <Card variant="white" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray" className="mb-3">Live API Documentation</Heading>
              <Section spacing="md">
                <Section>
                  <Heading level={5} customColor="#702083" weight="semibold" className="mb-2">🏗️ WSA-Central API Docs</Heading>
                  <Text variant="small" color="gray" className="mb-3">Interactive Swagger UI and ReDoc interfaces</Text>
                  <Section spacing="sm">
                    <Text variant="small"><strong>Swagger UI:</strong> <CodeBlock variant="inline">http://localhost:8000/docs</CodeBlock></Text>
                    <Text variant="small"><strong>ReDoc:</strong> <CodeBlock variant="inline">http://localhost:8000/redoc</CodeBlock></Text>
                    <Text variant="small"><strong>OpenAPI JSON:</strong> <CodeBlock variant="inline">http://localhost:8000/openapi.json</CodeBlock></Text>
                  </Section>
                </Section>

                <Section>
                  <Heading level={5} customColor="#2592D0" weight="semibold" className="mb-2">🌟 Supabase Auto-docs</Heading>
                  <Text variant="small" color="gray" className="mb-3">Auto-generated from database schema</Text>
                  <Section spacing="sm">
                    <Text variant="small"><strong>REST API:</strong> Auto-generated endpoints</Text>
                    <Text variant="small"><strong>Real-time:</strong> WebSocket subscriptions</Text>
                    <Text variant="small"><strong>Dashboard:</strong> Supabase Studio interface</Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Card>

          <Card variant="gray" className="transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
            <Section spacing="sm">
              <Heading level={4} weight="semibold" color="gray" className="mb-3">Resources & Tools</Heading>
              <Section layout="grid" gridCols="1-sm-3" gap="md">
                <Section>
                  <Heading level={5} weight="semibold" color="gray" className="mb-2">📚 API Documentation</Heading>
                  <Section spacing="sm">
                    <Text variant="small">
                      <Link href="/documentation/developer/wsa-central" className="text-[#2592D0] hover:underline transition-colors">
                        WSA-Central Docs
                      </Link>
                    </Text>
                    <Text variant="small">
                      <Link href="/documentation/developer/worksourcealliance" className="text-[#2592D0] hover:underline transition-colors">
                        Main Platform Docs
                      </Link>
                    </Text>
                    <Text variant="small">
                      <Link href="/documentation/developer/wsa-portal" className="text-[#2592D0] hover:underline transition-colors">
                        Portal API Docs
                      </Link>
                    </Text>
                  </Section>
                </Section>

                <Section>
                  <Heading level={5} weight="semibold" color="gray" className="mb-2">🔧 Development Tools</Heading>
                  <Section spacing="sm">
                    <Text variant="small">
                      <a href="https://www.postman.com" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                        Postman
                      </a>
                    </Text>
                    <Text variant="small">
                      <a href="https://insomnia.rest" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                        Insomnia REST Client
                      </a>
                    </Text>
                    <Text variant="small">
                      <a href="https://curl.se" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                        cURL Documentation
                      </a>
                    </Text>
                  </Section>
                </Section>

                <Section>
                  <Heading level={5} weight="semibold" color="gray" className="mb-2">📖 External APIs</Heading>
                  <Section spacing="sm">
                    <Text variant="small">
                      <a href="https://supabase.com/docs/reference/api" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                        Supabase API Reference
                      </a>
                    </Text>
                    <Text variant="small">
                      <a href="https://docs.microsoft.com/en-us/graph/" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                        Microsoft Graph API
                      </a>
                    </Text>
                    <Text variant="small">
                      <a href="https://fastapi.tiangolo.com" target="_blank" className="text-[#2592D0] hover:underline transition-colors">
                        FastAPI Documentation
                      </a>
                    </Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Card>
        </Section>
      </Section>
    </>
  );
}