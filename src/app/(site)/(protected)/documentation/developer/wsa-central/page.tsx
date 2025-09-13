import { Section, Heading, SubHeading, Card, CodeBlock } from "@/app/components/ui";
import Link from "next/link";

export default function WSACentralPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="lg">
      <Section orientation="vertical" positioning="start" spacing="md">
        <div className="flex items-center mb-4">
          <Link href="/documentation/developer" className="text-[#2592D0] hover:text-[#012E55] mr-2">
            ← Developer Manual
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-2 text-gray-600">WSA-Central API</span>
        </div>
        <Heading>🏗️ WSA-Central API</Heading>
        <p className="text-gray-600 text-lg">
          Centralized data management system with resume processing and job matching algorithms
        </p>
      </Section>

      {/* Project Overview */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Overview</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#702083] mb-2">Mission</h4>
                <p className="text-gray-600 text-sm mb-4">
                  WSA-Central is the next-generation centralized API platform for WorkSource Alliance, replacing the 
                  decentralized Airtable-based approach with a robust, scalable solution.
                </p>
                
                <h4 className="font-semibold text-[#2592D0] mb-2">Current Status</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Status:</span> Active Development</p>
                  <p><span className="font-medium">Language:</span> Python 3.11+</p>
                  <p><span className="font-medium">Repository:</span> WSA-admin/wsa-central</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">Key Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 🏗️ Centralized Data Hub</li>
                  <li>• 📄 Automated Resume Processing</li>
                  <li>• 🤖 AI-powered Job Matching</li>
                  <li>• 👤 Profile Management</li>
                  <li>• 🔌 API-First Architecture</li>
                  <li>• 📊 Candidate Scoring System</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Technical Architecture */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Technical Architecture</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Backend Stack</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Framework:</strong> FastAPI (Python)</p>
                <p><strong>Database:</strong> PostgreSQL</p>
                <p><strong>Authentication:</strong> JWT with OAuth2</p>
                <p><strong>ORM:</strong> SQLAlchemy</p>
                <p><strong>Testing:</strong> Pytest with async support</p>
                <p><strong>Containerization:</strong> Docker & Docker Compose</p>
              </div>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Development Tools</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Code Quality:</strong> Black formatting, Ruff linting</p>
                <p><strong>Architecture:</strong> Clean Architecture pattern</p>
                <p><strong>Rate Limiting:</strong> Built-in protection</p>
                <p><strong>CI/CD:</strong> GitHub Actions pipeline</p>
                <p><strong>Coverage:</strong> Codecov integration</p>
                <p><strong>Documentation:</strong> Auto-generated OpenAPI</p>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Project Goals */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Project Goals</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#2592D0] mb-3">🎯 Short-term Goals</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Resume Parsing System:</strong> Automated resume parsing with job matching capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Candidate Scoring:</strong> Point-based matching system for resume-job alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Ranking Algorithm:</strong> Automated candidate ranking for coordinator review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><strong>Airtable Integration:</strong> Maintain backward compatibility during transition</span>
                </li>
              </ul>
            </Section>
          </Card>

          <Card variant="white">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-[#702083] mb-3">🚀 Long-term Vision</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Complete Data Migration:</strong> Full transition from Airtable to WSA-Central</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Website Integration:</strong> Connect main WSA website to central system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Auto Profile Population:</strong> Use parsing results to auto-fill user profiles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Analytics & Reporting:</strong> Advanced insights and reporting capabilities</span>
                </li>
              </ul>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Current Features */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Current Features</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div>
                <h4 className="font-semibold text-[#2592D0] mb-2">🏗️ Core Functionality</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Clean Architecture Design</li>
                  <li>• JWT Authentication System</li>
                  <li>• User Management</li>
                  <li>• Todo System (Sample)</li>
                  <li>• Rate Limiting Protection</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#702083] mb-2">📡 API Endpoints</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Authentication (Register/Login)</li>
                  <li>• User Profile Management</li>
                  <li>• Password Management</li>
                  <li>• Todo CRUD Operations</li>
                  <li>• OpenAPI Documentation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#FBBB02] mb-2">🔧 Development</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Docker Development Setup</li>
                  <li>• Automated Testing Suite</li>
                  <li>• Code Quality Tools</li>
                  <li>• CI/CD Pipeline</li>
                  <li>• Database Migrations</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* API Documentation */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>API Documentation</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Authentication Endpoints</h4>
              <CodeBlock 
                variant="compact"
                language="text"
              >{`POST /auth/ - Register new user
POST /auth/token - User login`}</CodeBlock>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">User Management</h4>
              <CodeBlock 
                variant="compact"
                language="text"
              >{`GET /users/me - Get profile
PUT /users/change-password`}</CodeBlock>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Todo Management</h4>
              <CodeBlock 
                variant="compact"
                language="text"
              >{`GET /todos/ - List todos
POST /todos/ - Create todo
PUT /todos/{id} - Update todo
DELETE /todos/{id} - Delete todo`}</CodeBlock>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Documentation Access</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Swagger UI:</strong> <CodeBlock variant="inline">localhost:8000/docs</CodeBlock></p>
                <p><strong>ReDoc:</strong> <CodeBlock variant="inline">localhost:8000/redoc</CodeBlock></p>
                <p><strong>OpenAPI:</strong> <CodeBlock variant="inline">localhost:8000/openapi.json</CodeBlock></p>
              </div>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Development Setup */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Setup</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Quick Start with Docker (Recommended)</h4>
            <CodeBlock 
              title="Quick Start with Docker (Recommended)"
              language="bash"
            >{`# Prerequisites: Docker Desktop, Python 3.11+, Git

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
docker compose down`}</CodeBlock>
          </Section>
        </Card>
      </Section>

      {/* Testing & Quality */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Testing & Quality Assurance</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Testing Commands</h4>
              <CodeBlock 
                variant="compact"
                language="bash"
              >{`# Run all tests
python -m pytest

# Unit tests only
python -m pytest tests/test_*.py

# Integration tests
python -m pytest tests/e2e/

# With coverage
python -m pytest --cov=src`}</CodeBlock>
            </Section>
          </Card>

          <Card variant="gray">
            <Section orientation="vertical" positioning="start" spacing="sm">
              <h4 className="font-semibold text-gray-900">Code Quality</h4>
              <CodeBlock 
                variant="compact"
                language="bash"
              >{`# Code formatting
black .

# Linting
ruff check .

# Type checking
mypy src/`}</CodeBlock>
            </Section>
          </Card>
        </div>
      </Section>

      {/* Migration from Airtable */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Migration from Airtable</SubHeading>
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <h4 className="font-semibold text-gray-900 mb-3">Why We&apos;re Moving Away from Airtable</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h5 className="font-medium text-red-600 mb-2">🚫 Current Challenges</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Data decentralization issues</li>
                  <li>• Scalability limitations</li>
                  <li>• Integration challenges</li>
                  <li>• Operational inefficiencies</li>
                  <li>• Limited automation capabilities</li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-green-600 mb-2">✅ WSA-Central Benefits</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Single source of truth</li>
                  <li>• Unlimited scalability</li>
                  <li>• Custom API integrations</li>
                  <li>• Automated workflows</li>
                  <li>• Advanced analytics</li>
                </ul>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Roadmap */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Development Roadmap</SubHeading>
        <Card variant="gray">
          <Section orientation="vertical" positioning="start" spacing="sm">
            <div className="space-y-4">
              
              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 1: Foundation (Completed)</h4>
                  <p className="text-sm text-gray-600">Clean architecture setup, authentication system, basic API endpoints</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 2: Resume Processing (In Progress)</h4>
                  <p className="text-sm text-gray-600">Automated resume parsing, job matching algorithm, candidate scoring system</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 3: Integration (Planned)</h4>
                  <p className="text-sm text-gray-600">Website integration, Airtable migration, profile auto-population</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 4: Analytics (Future)</h4>
                  <p className="text-sm text-gray-600">Advanced reporting, insights dashboard, predictive analytics</p>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Section>

      {/* Resources & Links */}
      <Section orientation="vertical" positioning="start" spacing="md">
        <SubHeading>Resources & Links</SubHeading>
        <Card variant="white">
          <Section orientation="horizontal" positioning="start" spacing="lg">
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🔗 Repository</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://github.com/WSA-admin/wsa-central" target="_blank" className="text-[#702083] hover:underline">GitHub Repository</a></p>
                <p><span className="text-gray-500">Private repository</span></p>
                <p><span className="text-gray-500">Contact: info@worksourcealliance.ca</span></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">📚 Documentation</h4>
              <div className="space-y-2 text-sm">
                <p><Link href="/documentation/developer" className="text-[#702083] hover:underline">Developer Manual</Link></p>
                <p><a href="https://fastapi.tiangolo.com/" target="_blank" className="text-[#702083] hover:underline">FastAPI Documentation</a></p>
                <p><a href="https://sqlalchemy.org/" target="_blank" className="text-[#702083] hover:underline">SQLAlchemy Docs</a></p>
              </div>
            </Section>
            <Section orientation="vertical" positioning="start" spacing="sm" fill>
              <h4 className="font-semibold text-gray-900">🛠️ Tools</h4>
              <div className="space-y-2 text-sm">
                <p><a href="https://docs.docker.com/" target="_blank" className="text-[#702083] hover:underline">Docker Documentation</a></p>
                <p><a href="https://docs.pytest.org/" target="_blank" className="text-[#702083] hover:underline">Pytest Testing</a></p>
                <p><a href="https://black.readthedocs.io/" target="_blank" className="text-[#702083] hover:underline">Black Formatter</a></p>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>
    </Section>
  );
}