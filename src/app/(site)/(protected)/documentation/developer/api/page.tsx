import { Section, Heading, SubHeading, Card, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function APIReferencePage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Developer Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">API Reference</span>
        </div>
        <Heading>📖 WSA API Reference</Heading>
        <p className="text-gray-600">
          Comprehensive API documentation for all WorkSource Alliance platform endpoints and services
        </p>
      </Section>

      {/* API Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>API Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-3">🌟 Main Platform API</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Supabase REST API</li>
                  <li>• Real-time subscriptions</li>
                  <li>• Row Level Security</li>
                  <li>• Auto-generated from schema</li>
                  <li>• OpenAPI 3.0 compatible</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">Base: <CodeBlock variant="inline">https://api.worksourcealliance.com</CodeBlock></p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-3">🏗️ WSA-Central API</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FastAPI framework</li>
                  <li>• JWT authentication</li>
                  <li>• Resume processing</li>
                  <li>• Job matching algorithms</li>
                  <li>• OpenAPI documentation</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">Base: <CodeBlock variant="inline">http://localhost:8000</CodeBlock></p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-3">📊 Portal APIs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Microsoft Graph API</li>
                  <li>• Azure AD authentication</li>
                  <li>• SharePoint integration</li>
                  <li>• User profile data</li>
                  <li>• News and updates</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">Base: <CodeBlock variant="inline">https://portal.worksourcealliance.ca/api</CodeBlock></p>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* WSA-Central API Details */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>WSA-Central API Endpoints</SubHeading>
        
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Authentication Endpoints</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">User Registration</h5>
                <CodeBlock variant="compact" language="text">
{`POST /auth/
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
}`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">User Login</h5>
                <CodeBlock variant="compact" language="text">
{`POST /auth/token
Content-Type: application/x-www-form-urlencoded

username=user@example.com&password=securepassword123

Response:
{
  "access_token": "jwt_token_here",
  "token_type": "bearer"
}`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>

        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">User Management</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">Get Current User Profile</h5>
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
}`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">Change Password</h5>
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
}`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>

        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Todo Management (Sample API)</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">List All Todos</h5>
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
]`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">Create New Todo</h5>
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
}`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Portal API Details */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Portal API Endpoints</SubHeading>
        
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Authentication & User Management</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#FBBB02] mb-2">Authentication Status</h5>
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
}`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#EF7B02] mb-2">Logout</h5>
                <CodeBlock variant="compact" language="text">
{`POST /api/auth/logout

Response:
{
  "success": true,
  "message": "Logged out successfully"
}`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>

        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Microsoft Graph Integration</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">Get User Profile</h5>
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
}`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">Get SharePoint News</h5>
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
]`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Main Platform API */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Main Platform API (Supabase)</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Key Database Tables & Endpoints</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">User Profiles</h5>
                <CodeBlock variant="compact" language="text">
{`GET /rest/v1/profiles
POST /rest/v1/profiles
PATCH /rest/v1/profiles?id=eq.user-id

Table Structure:
- id (uuid, primary key)
- email (text)
- full_name (text)
- avatar_url (text)
- created_at (timestamp)`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#702083] mb-2">Job Listings</h5>
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
- salary_range (text)`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FBBB02] mb-2">Applications</h5>
                <CodeBlock variant="compact" language="text">
{`GET /rest/v1/applications
POST /rest/v1/applications
PATCH /rest/v1/applications?id=eq.app-id

Table Structure:
- id (uuid, primary key)
- job_id (uuid, foreign key)
- applicant_id (uuid, foreign key)
- status (enum)
- applied_at (timestamp)`}</CodeBlock>
              </div>
              
              <div>
                <h5 className="font-medium text-[#EF7B02] mb-2">Companies</h5>
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
- location (text)`}</CodeBlock>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Authentication & Headers */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Authentication & Request Headers</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900 mb-3">WSA-Central Authentication</h4>
              <p className="text-sm text-gray-600 mb-3">JWT Bearer token authentication</p>
              <CodeBlock variant="compact" language="text">
{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

# Token expires in 30 minutes
# Refresh by re-authenticating with /auth/token`}</CodeBlock>
            </Section>
          </Card>
          
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900 mb-3">Supabase Authentication</h4>
              <p className="text-sm text-gray-600 mb-3">API key and JWT session authentication</p>
              <CodeBlock variant="compact" language="text">
{`apikey: your_supabase_anon_key
Authorization: Bearer user_jwt_session_token
Content-Type: application/json

# Session managed by Supabase client
# Auto-refresh handled by SDK`}</CodeBlock>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Error Handling */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Error Handling & Status Codes</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Common HTTP Status Codes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-green-600 mb-2">Success Codes</h5>
                <ul className="text-sm space-y-1">
                  <li><CodeBlock variant="inline">200 OK</CodeBlock> - Request successful</li>
                  <li><CodeBlock variant="inline">201 Created</CodeBlock> - Resource created</li>
                  <li><CodeBlock variant="inline">204 No Content</CodeBlock> - Success, no response body</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-red-600 mb-2">Error Codes</h5>
                <ul className="text-sm space-y-1">
                  <li><CodeBlock variant="inline">400 Bad Request</CodeBlock> - Invalid request data</li>
                  <li><CodeBlock variant="inline">401 Unauthorized</CodeBlock> - Authentication required</li>
                  <li><CodeBlock variant="inline">403 Forbidden</CodeBlock> - Access denied</li>
                  <li><CodeBlock variant="inline">404 Not Found</CodeBlock> - Resource not found</li>
                  <li><CodeBlock variant="inline">422 Validation Error</CodeBlock> - Invalid input data</li>
                  <li><CodeBlock variant="inline">500 Server Error</CodeBlock> - Internal server error</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium text-[#2592D0] mb-2">Error Response Format</h5>
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
}`}</CodeBlock>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Rate Limiting */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Rate Limiting & Usage Guidelines</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">WSA-Central Limits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 100 requests per minute</li>
                  <li>• 1000 requests per hour</li>
                  <li>• Based on IP address</li>
                  <li>• Higher limits for authenticated users</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#702083] mb-2">Supabase Limits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Free tier: 2 requests/second</li>
                  <li>• Pro tier: 100+ requests/second</li>
                  <li>• Based on project usage</li>
                  <li>• Real-time subscriptions limited</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">Best Practices</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Implement exponential backoff</li>
                  <li>• Cache frequently accessed data</li>
                  <li>• Use pagination for large datasets</li>
                  <li>• Handle rate limit errors gracefully</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Interactive Documentation */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Interactive API Documentation</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Live API Documentation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-[#702083] mb-2">🏗️ WSA-Central API Docs</h5>
                <p className="text-sm text-gray-600 mb-3">Interactive Swagger UI and ReDoc interfaces</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Swagger UI:</strong> <CodeBlock variant="inline">http://localhost:8000/docs</CodeBlock></p>
                  <p><strong>ReDoc:</strong> <CodeBlock variant="inline">http://localhost:8000/redoc</CodeBlock></p>
                  <p><strong>OpenAPI JSON:</strong> <CodeBlock variant="inline">http://localhost:8000/openapi.json</CodeBlock></p>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-[#2592D0] mb-2">🌟 Supabase Auto-docs</h5>
                <p className="text-sm text-gray-600 mb-3">Auto-generated from database schema</p>
                <div className="space-y-2 text-sm">
                  <p><strong>REST API:</strong> Auto-generated endpoints</p>
                  <p><strong>Real-time:</strong> WebSocket subscriptions</p>
                  <p><strong>Dashboard:</strong> Supabase Studio interface</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Resources & Links */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Resources & Tools</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 API Documentation</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/developer/wsa-central" className="text-[#2592D0] hover:underline">WSA-Central Docs</Link></p>
                <p><Link href="/documentation/developer/worksourcealliance" className="text-[#2592D0] hover:underline">Main Platform Docs</Link></p>
                <p><Link href="/documentation/developer/wsa-portal" className="text-[#2592D0] hover:underline">Portal API Docs</Link></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔧 Development Tools</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://www.postman.com" target="_blank" className="text-[#2592D0] hover:underline">Postman</a></p>
                <p><a href="https://insomnia.rest" target="_blank" className="text-[#2592D0] hover:underline">Insomnia REST Client</a></p>
                <p><a href="https://curl.se" target="_blank" className="text-[#2592D0] hover:underline">cURL Documentation</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📖 External APIs</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://supabase.com/docs/reference/api" target="_blank" className="text-[#2592D0] hover:underline">Supabase API Reference</a></p>
                <p><a href="https://docs.microsoft.com/en-us/graph/" target="_blank" className="text-[#2592D0] hover:underline">Microsoft Graph API</a></p>
                <p><a href="https://fastapi.tiangolo.com" target="_blank" className="text-[#2592D0] hover:underline">FastAPI Documentation</a></p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}