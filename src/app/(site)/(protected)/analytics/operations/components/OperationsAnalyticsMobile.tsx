'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function OperationsAnalyticsMobile() {
  const [activeSection, setActiveSection] = useState<'overview' | 'development' | 'system' | 'program'>('overview');

  const sections = [
    { id: 'overview', label: 'Overview', color: '#2592D0' },
    { id: 'development', label: 'Development', color: '#702083' },
    { id: 'system', label: 'System', color: '#012E55' },
    { id: 'program', label: 'Program', color: '#FBBB02' }
  ];

  return (
    <Section orientation="vertical" positioning="start" spacing="none">
      <Card variant="white">
        <Section orientation="vertical" positioning="start" spacing="md">
          <Section orientation="horizontal" positioning="start" spacing="sm">
            <Link href="/analytics" className="text-[#2592D0] hover:underline">
              ← Analytics
            </Link>
          </Section>

          <Heading>Operations & Programming Analytics</Heading>
          <Text>Monitor development metrics, system performance, and program operations</Text>

          <Section orientation="horizontal" positioning="start" spacing="sm" className="flex-wrap">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as typeof activeSection)}
                className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                  activeSection === section.id
                    ? 'text-white font-medium'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: activeSection === section.id ? section.color : undefined
                }}
              >
                {section.label}
              </button>
            ))}
          </Section>

          <Section orientation="vertical" positioning="start" spacing="md">
            {activeSection === 'overview' && (
              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading customColor="#2592D0">Analytics Overview</SubHeading>
                  <Text>
                    Comprehensive monitoring and analytics for all operational aspects of WorkSource Alliance systems.
                    Track development progress, system health, and program effectiveness from a single dashboard.
                  </Text>
                  <Text>
                    <span className="font-semibold">Key Features:</span> Real-time monitoring, historical trend analysis,
                    automated reporting, and performance insights across development, infrastructure, and program operations.
                  </Text>
                </Section>
              </Card>
            )}

            {activeSection === 'development' && (
              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading customColor="#702083">Development Metrics</SubHeading>
                  <Text>Code commits, deployment frequency, build success rates, and development velocity</Text>
                  <Text>
                    <span className="font-semibold">Tracked Metrics:</span> Git commit frequency, pull request merge rates,
                    build pipeline success/failure rates, deployment frequency, code review turnaround times, and developer productivity indicators.
                  </Text>
                  <Text>
                    <span className="font-semibold">Integration:</span> Connected to GitHub repositories, Vercel deployments,
                    and CI/CD pipelines for comprehensive development lifecycle tracking.
                  </Text>
                </Section>
              </Card>
            )}

            {activeSection === 'system' && (
              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading customColor="#012E55">System Performance</SubHeading>
                  <Text>Server uptime, response times, error rates, and resource utilization</Text>
                  <Text>
                    <span className="font-semibold">Infrastructure Monitoring:</span> Server uptime tracking, API response times,
                    database performance metrics, CDN efficiency, and resource utilization across all services.
                  </Text>
                  <Text>
                    <span className="font-semibold">Alert Systems:</span> Automated alerts for downtime, performance degradation,
                    error rate spikes, and resource threshold breaches with escalation procedures.
                  </Text>
                </Section>
              </Card>
            )}

            {activeSection === 'program' && (
              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading customColor="#FBBB02">Program Analytics</SubHeading>
                  <Text>WorkSource Alliance program effectiveness, participant engagement, and outcome tracking</Text>
                  <Text>
                    <span className="font-semibold">Program Metrics:</span> Participant enrollment rates, engagement levels,
                    completion rates, employment outcomes, and long-term career advancement tracking.
                  </Text>
                  <Text>
                    <span className="font-semibold">Outcome Analysis:</span> Job placement success rates, salary improvements,
                    skill development progress, employer satisfaction, and program ROI measurement.
                  </Text>
                </Section>
              </Card>
            )}
          </Section>
        </Section>
      </Card>
    </Section>
  );
}