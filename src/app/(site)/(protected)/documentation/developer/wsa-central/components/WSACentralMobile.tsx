'use client';

import { useState } from 'react';
import { Section, Card, SubHeading, Text, Heading, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WSACentralMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'architecture' | 'goals' | 'features' | 'api' | 'setup' | 'testing' | 'migration' | 'roadmap' | 'resources'>('overview');

  const sections = [
    { id: 'overview', label: '📋 Overview', color: '#702083' },
    { id: 'architecture', label: '🏗️ Architecture', color: '#2592D0' },
    { id: 'goals', label: '🎯 Goals', color: '#FBBB02' },
    { id: 'features', label: '⭐ Features', color: '#EF7B02' },
    { id: 'api', label: '📡 API', color: '#012E55' },
    { id: 'setup', label: '⚡ Setup', color: '#059669' },
    { id: 'testing', label: '🧪 Testing', color: '#DC2626' },
    { id: 'migration', label: '🔄 Migration', color: '#7C3AED' },
    { id: 'roadmap', label: '🗺️ Roadmap', color: '#EA580C' },
    { id: 'resources', label: '🔗 Resources', color: '#059669' }
  ];

  return (
    <>
      {/* Section Navigation - Mobile */}
      <Section delay={500} animationType="slideLeft">
        <SubHeading>API Sections</SubHeading>
        <Section layout="grid" gridCols="1-sm-3" gap="sm">
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

      {/* Project Overview */}
      {activeSection === 'overview' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Project Overview</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Section center>
                <Heading level={4} color="purple" size="sm" className="mb-2">🎯 Mission</Heading>
                <Text variant="small" color="gray" className="text-center">
                  WSA-Central is the next-generation centralized API platform for WorkSource Alliance, replacing the
                  decentralized Airtable-based approach with a robust, scalable solution.
                </Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Section center>
                <Heading level={4} color="blue" size="sm" className="mb-2">📊 Current Status</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray"><span className="font-semibold">Status:</span> Active Development</Text>
                  <Text variant="small" color="gray"><span className="font-semibold">Language:</span> Python 3.11+</Text>
                  <Text variant="small" color="gray"><span className="font-semibold">Repository:</span> WSA-admin/wsa-central</Text>
                </Section>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Section center>
                <Heading level={4} customColor="#FBBB02" size="sm" className="mb-2">⭐ Key Features</Heading>
                <Section spacing="sm" className="text-left">
                  <Text variant="small" color="gray">• 🏗️ Centralized Data Hub</Text>
                  <Text variant="small" color="gray">• 📄 Automated Resume Processing</Text>
                  <Text variant="small" color="gray">• 🤖 AI-powered Job Matching</Text>
                  <Text variant="small" color="gray">• 👤 Profile Management</Text>
                  <Text variant="small" color="gray">• 🔌 API-First Architecture</Text>
                  <Text variant="small" color="gray">• 📊 Candidate Scoring System</Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Technical Architecture */}
      {activeSection === 'architecture' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Technical Architecture</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Backend Stack</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray"><span className="font-semibold">Framework:</span> FastAPI (Python)</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Database:</span> PostgreSQL</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Authentication:</span> JWT with OAuth2</Text>
                <Text variant="small" color="gray"><span className="font-semibold">ORM:</span> SQLAlchemy</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Testing:</span> Pytest with async support</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Containerization:</span> Docker & Docker Compose</Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Development Tools</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray"><span className="font-semibold">Code Quality:</span> Black formatting, Ruff linting</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Architecture:</span> Clean Architecture pattern</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Rate Limiting:</span> Built-in protection</Text>
                <Text variant="small" color="gray"><span className="font-semibold">CI/CD:</span> GitHub Actions pipeline</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Coverage:</span> Codecov integration</Text>
                <Text variant="small" color="gray"><span className="font-semibold">Documentation:</span> Auto-generated OpenAPI</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Project Goals */}
      {activeSection === 'goals' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Project Goals</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} customColor="#2592D0" className="mb-3">🎯 Short-term Goals</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-green-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Resume Parsing System:</span> Automated resume parsing with job matching capabilities
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-green-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Candidate Scoring:</span> Point-based matching system for resume-job alignment
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-green-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Ranking Algorithm:</span> Automated candidate ranking for coordinator review
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-green-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Airtable Integration:</span> Maintain backward compatibility during transition
                  </Text>
                </Section>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} customColor="#702083" className="mb-3">🚀 Long-term Vision</Heading>
              <Section spacing="sm">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-blue-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Complete Data Migration:</span> Full transition from Airtable to WSA-Central
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-blue-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Website Integration:</span> Connect main WSA website to central system
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-blue-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Auto Profile Population:</span> Use parsing results to auto-fill user profiles
                  </Text>
                </Section>
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <span className="text-blue-500 text-lg">•</span>
                  <Text variant="small" color="gray">
                    <span className="font-semibold">Analytics & Reporting:</span> Advanced insights and reporting capabilities
                  </Text>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Current Features */}
      {activeSection === 'features' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Current Features</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} customColor="#2592D0" weight="semibold" className="mb-3">🏗️ Core Functionality</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Clean Architecture Design</Text>
                <Text variant="small" color="gray">• JWT Authentication System</Text>
                <Text variant="small" color="gray">• User Management</Text>
                <Text variant="small" color="gray">• Todo System (Sample)</Text>
                <Text variant="small" color="gray">• Rate Limiting Protection</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} customColor="#702083" weight="semibold" className="mb-3">📡 API Endpoints</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Authentication (Register/Login)</Text>
                <Text variant="small" color="gray">• User Profile Management</Text>
                <Text variant="small" color="gray">• Password Management</Text>
                <Text variant="small" color="gray">• Todo CRUD Operations</Text>
                <Text variant="small" color="gray">• OpenAPI Documentation</Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} customColor="#FBBB02" weight="semibold" className="mb-3">🔧 Development</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">• Docker Development Setup</Text>
                <Text variant="small" color="gray">• Automated Testing Suite</Text>
                <Text variant="small" color="gray">• Code Quality Tools</Text>
                <Text variant="small" color="gray">• CI/CD Pipeline</Text>
                <Text variant="small" color="gray">• Database Migrations</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* API Documentation */}
      {activeSection === 'api' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>API Documentation</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Authentication Endpoints</Heading>
              <CodeBlock variant="compact" language="text">
{`POST /auth/ - Register new user
POST /auth/token - User login`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">User Management</Heading>
              <CodeBlock variant="compact" language="text">
{`GET /users/me - Get profile
PUT /users/change-password`}
              </CodeBlock>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Todo Management</Heading>
              <CodeBlock variant="compact" language="text">
{`GET /todos/ - List todos
POST /todos/ - Create todo
PUT /todos/{id} - Update todo
DELETE /todos/{id} - Delete todo`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Documentation Access</Heading>
              <Section spacing="sm">
                <Text variant="small" color="gray">
                  <span className="font-semibold">Swagger UI:</span> <CodeBlock variant="inline">localhost:8000/docs</CodeBlock>
                </Text>
                <Text variant="small" color="gray">
                  <span className="font-semibold">ReDoc:</span> <CodeBlock variant="inline">localhost:8000/redoc</CodeBlock>
                </Text>
                <Text variant="small" color="gray">
                  <span className="font-semibold">OpenAPI:</span> <CodeBlock variant="inline">localhost:8000/openapi.json</CodeBlock>
                </Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Development Setup */}
      {activeSection === 'setup' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Development Setup</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Quick Start with Docker (Recommended)</Heading>
              <CodeBlock language="bash">
{`# Prerequisites: Docker Desktop, Python 3.11+, Git

# Clone repository
git clone <repository-url>
cd wsa-central/clean-architecture

# Start application with Docker
docker compose up --build

# Access the application
# API: http://localhost:8000
# Documentation: http://localhost:8000/docs
# Interactive API: http://localhost:8000/redoc

# Stop application
docker compose down`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Testing & Quality */}
      {activeSection === 'testing' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Testing & Quality</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Testing Commands</Heading>
              <CodeBlock variant="compact" language="bash">
{`# Run all tests
python -m pytest

# Unit tests only
python -m pytest tests/test_*.py

# Integration tests
python -m pytest tests/e2e/

# With coverage
python -m pytest --cov=src`}
              </CodeBlock>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Code Quality</Heading>
              <CodeBlock variant="compact" language="bash">
{`# Code formatting
black .

# Linting
ruff check .

# Type checking
mypy src/`}
              </CodeBlock>
            </Card>
          </Section>
        </Section>
      )}

      {/* Migration from Airtable */}
      {activeSection === 'migration' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Migration from Airtable</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">Why We&apos;re Moving Away from Airtable</Heading>
              <Section spacing="md">
                <Section>
                  <Heading level={5} customColor="#DC2626" className="mb-2">🚫 Current Challenges</Heading>
                  <Section spacing="sm">
                    <Text variant="small" color="gray">• Data decentralization issues</Text>
                    <Text variant="small" color="gray">• Scalability limitations</Text>
                    <Text variant="small" color="gray">• Integration challenges</Text>
                    <Text variant="small" color="gray">• Operational inefficiencies</Text>
                    <Text variant="small" color="gray">• Limited automation capabilities</Text>
                  </Section>
                </Section>
                <Section>
                  <Heading level={5} customColor="#059669" className="mb-2">✅ WSA-Central Benefits</Heading>
                  <Section spacing="sm">
                    <Text variant="small" color="gray">• Single source of truth</Text>
                    <Text variant="small" color="gray">• Unlimited scalability</Text>
                    <Text variant="small" color="gray">• Custom API integrations</Text>
                    <Text variant="small" color="gray">• Automated workflows</Text>
                    <Text variant="small" color="gray">• Advanced analytics</Text>
                  </Section>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Development Roadmap */}
      {activeSection === 'roadmap' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Development Roadmap</SubHeading>
          <Section spacing="md">
            <Card variant="gray" className="p-4">
              <Section spacing="lg">
                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <Section>
                    <Heading level={4} weight="semibold" className="mb-1">Phase 1: Foundation (Completed)</Heading>
                    <Text variant="small" color="gray">Clean architecture setup, authentication system, basic API endpoints</Text>
                  </Section>
                </Section>

                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                  <Section>
                    <Heading level={4} weight="semibold" className="mb-1">Phase 2: Resume Processing (In Progress)</Heading>
                    <Text variant="small" color="gray">Automated resume parsing, job matching algorithm, candidate scoring system</Text>
                  </Section>
                </Section>

                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                  <Section>
                    <Heading level={4} weight="semibold" className="mb-1">Phase 3: Integration (Planned)</Heading>
                    <Text variant="small" color="gray">Website integration, Airtable migration, profile auto-population</Text>
                  </Section>
                </Section>

                <Section orientation="horizontal" spacing="sm" className="items-start">
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 flex-shrink-0"></div>
                  <Section>
                    <Heading level={4} weight="semibold" className="mb-1">Phase 4: Analytics (Future)</Heading>
                    <Text variant="small" color="gray">Advanced reporting, insights dashboard, predictive analytics</Text>
                  </Section>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      )}

      {/* Resources & Links */}
      {activeSection === 'resources' && (
        <Section delay={700} animationType="fadeUp">
          <SubHeading>Resources & Links</SubHeading>
          <Section spacing="md">
            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🔗 Repository</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://github.com/WSA-admin/wsa-central" target="_blank" className="text-[#702083] hover:underline">
                    GitHub Repository
                  </a>
                </Text>
                <Text variant="small" color="gray">Private repository</Text>
                <Text variant="small" color="gray">Contact: info@worksourcealliance.ca</Text>
              </Section>
            </Card>

            <Card variant="gray" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">📚 Documentation</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <Link href="/documentation/developer" className="text-[#702083] hover:underline">
                    Developer Manual
                  </Link>
                </Text>
                <Text variant="small">
                  <a href="https://fastapi.tiangolo.com/" target="_blank" className="text-[#702083] hover:underline">
                    FastAPI Documentation
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://sqlalchemy.org/" target="_blank" className="text-[#702083] hover:underline">
                    SQLAlchemy Docs
                  </a>
                </Text>
              </Section>
            </Card>

            <Card variant="white" className="p-4">
              <Heading level={4} weight="semibold" className="mb-3">🛠️ Tools</Heading>
              <Section spacing="sm">
                <Text variant="small">
                  <a href="https://docs.docker.com/" target="_blank" className="text-[#702083] hover:underline">
                    Docker Documentation
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://docs.pytest.org/" target="_blank" className="text-[#702083] hover:underline">
                    Pytest Testing
                  </a>
                </Text>
                <Text variant="small">
                  <a href="https://black.readthedocs.io/" target="_blank" className="text-[#702083] hover:underline">
                    Black Formatter
                  </a>
                </Text>
              </Section>
            </Card>
          </Section>
        </Section>
      )}
    </>
  );
}