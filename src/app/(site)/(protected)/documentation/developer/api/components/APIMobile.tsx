'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function APIMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'central' | 'portal' | 'main' | 'auth' | 'tools'>('overview');

  const sections = [
    { id: 'overview', label: '📊 Overview', color: '#2592D0' },
    { id: 'central', label: '🏗️ WSA-Central', color: '#702083' },
    { id: 'portal', label: '📱 Portal APIs', color: '#FBBB02' },
    { id: 'main', label: '🌟 Main Platform', color: '#EF7B02' },
    { id: 'auth', label: '🔐 Authentication', color: '#012E55' },
    { id: 'tools', label: '🔧 Tools & Resources', color: '#6B7280' }
  ];

  return (
    <>
      {/* API Section Navigation - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>API Sections</SubHeading>
        <Section layout="grid" gridCols="1-sm-2-lg-3" gap="sm">
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

      {/* API Overview */}
      {activeSection === 'overview' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>API Overview</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#2592D0] rounded-full mb-2"></div>
                <Heading level={4} color="blue" size="sm" className="mb-2">🌟 Main Platform API</Heading>
                <Text variant="caption" className="mb-3">Supabase REST API with real-time subscriptions</Text>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• Auto-generated from schema</Text>
                  <Text variant="small" color="gray">• Row Level Security</Text>
                  <Text variant="small" color="gray">• OpenAPI 3.0 compatible</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#702083] rounded-full mb-2"></div>
                <Heading level={4} color="purple" size="sm" className="mb-2">🏗️ WSA-Central API</Heading>
                <Text variant="caption" className="mb-3">FastAPI with JWT authentication</Text>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• Resume processing</Text>
                  <Text variant="small" color="gray">• Job matching algorithms</Text>
                  <Text variant="small" color="gray">• OpenAPI documentation</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <div className="w-3 h-3 bg-[#FBBB02] rounded-full mb-2"></div>
                <Heading level={4} customColor="#FBBB02" size="sm" className="mb-2">📊 Portal APIs</Heading>
                <Text variant="caption" className="mb-3">Microsoft Graph & Azure AD integration</Text>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• SharePoint integration</Text>
                  <Text variant="small" color="gray">• User profile data</Text>
                  <Text variant="small" color="gray">• News and updates</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* WSA-Central API */}
      {activeSection === 'central' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>WSA-Central API</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔐 Authentication</Heading>
              <Section spacing="sm">
                <Text variant="small" weight="medium" customColor="#2592D0">User Registration</Text>
                <CodeBlock variant="compact" language="text">
{`POST /auth/register
{
  "email": "user@example.com",
  "password": "secure123",
  "full_name": "John Doe"
}`}
                </CodeBlock>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">👤 User Management</Heading>
              <Section spacing="sm">
                <Text variant="small" weight="medium" customColor="#702083">Get Current User</Text>
                <CodeBlock variant="compact" language="text">
{`GET /users/me
Authorization: Bearer jwt_token

Response:
{
  "id": 1,
  "email": "user@example.com",
  "full_name": "John Doe"
}`}
                </CodeBlock>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">✅ Todo Management</Heading>
              <Section spacing="sm">
                <Text variant="small" weight="medium" customColor="#2592D0">List Todos</Text>
                <CodeBlock variant="compact" language="text">
{`GET /todos/
Authorization: Bearer jwt_token

Response: Array of todo items`}
                </CodeBlock>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Portal APIs */}
      {activeSection === 'portal' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Portal API Endpoints</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔐 Authentication Status</Heading>
              <CodeBlock variant="compact" language="text">
{`GET /api/auth/status

Response (Authenticated):
{
  "authenticated": true,
  "user": {
    "displayName": "John Doe",
    "mail": "john@wsa.ca"
  }
}`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📊 Microsoft Graph</Heading>
              <Section spacing="sm">
                <Text variant="small" weight="medium" customColor="#2592D0">User Profile</Text>
                <CodeBlock variant="compact" language="text">
{`GET /api/graph/me

Response:
{
  "displayName": "John Doe",
  "mail": "john@wsa.ca",
  "jobTitle": "Developer"
}`}
                </CodeBlock>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📰 SharePoint News</Heading>
              <CodeBlock variant="compact" language="text">
{`GET /api/graph/news

Response: Array of news items`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Main Platform API */}
      {activeSection === 'main' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Main Platform (Supabase)</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">👤 User Profiles</Heading>
              <CodeBlock variant="compact" language="text">
{`GET /rest/v1/profiles
POST /rest/v1/profiles

Table Structure:
- id (uuid, primary key)
- email (text)
- full_name (text)
- avatar_url (text)`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">💼 Job Listings</Heading>
              <CodeBlock variant="compact" language="text">
{`GET /rest/v1/jobs
POST /rest/v1/jobs

Table Structure:
- id (uuid, primary key)
- title (text)
- description (text)
- company_id (uuid)`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📝 Applications</Heading>
              <CodeBlock variant="compact" language="text">
{`GET /rest/v1/applications
POST /rest/v1/applications

Table Structure:
- id (uuid, primary key)
- job_id (uuid, foreign key)
- applicant_id (uuid)
- status (enum)`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Authentication & Headers */}
      {activeSection === 'auth' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Authentication Methods</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🏗️ WSA-Central JWT</Heading>
              <Text variant="small" color="gray" className="mb-3">Bearer token authentication</Text>
              <CodeBlock variant="compact" language="text">
{`Authorization: Bearer eyJhbGciOiJIUzI1NiI...
Content-Type: application/json

# Token expires in 30 minutes`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🌟 Supabase Auth</Heading>
              <Text variant="small" color="gray" className="mb-3">API key and JWT session</Text>
              <CodeBlock variant="compact" language="text">
{`apikey: your_supabase_anon_key
Authorization: Bearer user_jwt_token
Content-Type: application/json`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">⚠️ Error Handling</Heading>
              <Section spacing="sm">
                <Text variant="small"><CodeBlock variant="inline">200 OK</CodeBlock> - Success</Text>
                <Text variant="small"><CodeBlock variant="inline">401 Unauthorized</CodeBlock> - Auth required</Text>
                <Text variant="small"><CodeBlock variant="inline">404 Not Found</CodeBlock> - Resource not found</Text>
                <Text variant="small"><CodeBlock variant="inline">500 Server Error</CodeBlock> - Internal error</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Tools & Resources */}
      {activeSection === 'tools' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Tools & Resources</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📚 Interactive Docs</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <strong>Swagger UI:</strong> <CodeBlock variant="inline">localhost:8000/docs</CodeBlock>
                </Text>
                <Text variant="small">
                  <strong>ReDoc:</strong> <CodeBlock variant="inline">localhost:8000/redoc</CodeBlock>
                </Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔧 Development Tools</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://www.postman.com" target="_blank" className="text-[#2592D0] hover:underline">
                    Postman API Client
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://insomnia.rest" target="_blank" className="text-[#2592D0] hover:underline">
                    Insomnia REST Client
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://curl.se" target="_blank" className="text-[#2592D0] hover:underline">
                    cURL Documentation
                  </a>
                </Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📖 External APIs</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://supabase.com/docs/reference/api" target="_blank" className="text-[#2592D0] hover:underline">
                    Supabase API Reference
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://docs.microsoft.com/en-us/graph/" target="_blank" className="text-[#2592D0] hover:underline">
                    Microsoft Graph API
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://fastapi.tiangolo.com" target="_blank" className="text-[#2592D0] hover:underline">
                    FastAPI Documentation
                  </a>
                </Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📋 Rate Limits</Heading>
              <Section spacing="sm">
                <Text variant="small"><strong>WSA-Central:</strong> 100 req/min</Text>
                <Text variant="small"><strong>Supabase:</strong> 2-100 req/sec</Text>
                <Text variant="small"><strong>Best Practice:</strong> Implement backoff</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Quick Links */}
      <Section delay={1100} animationType="fadeUp">
        <SubHeading>Quick Links</SubHeading>
        <Card variant="gray" className="p-4">
          <Section center spacing="sm">
            <Section orientation="horizontal" className="flex-wrap justify-center gap-4 text-sm">
              <Link href="/documentation/developer/wsa-central" className="text-[#702083] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] transform">
                WSA-Central Docs
              </Link>
              <Link href="/documentation/developer/worksourcealliance" className="text-[#2592D0] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] transform">
                Main Platform Docs
              </Link>
              <Link href="/documentation/developer/wsa-portal" className="text-[#FBBB02] font-medium transition-all duration-300 hover:scale-110 hover:text-[#012E55] transform">
                Portal Docs
              </Link>
            </Section>
            <Text variant="caption" className="transition-colors duration-300 hover:text-gray-700">
              Detailed documentation for each platform
            </Text>
          </Section>
        </Card>
      </Section>
    </>
  );
}