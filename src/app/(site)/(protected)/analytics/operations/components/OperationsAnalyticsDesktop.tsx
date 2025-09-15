'use client';

import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function OperationsAnalyticsDesktop() {
  return (
    <Section orientation="vertical" positioning="start" spacing="none">
      <Card variant="white">
        <Section orientation="vertical" positioning="start" spacing="md">
          <Section
            orientation="horizontal"
            positioning="start"
            spacing="sm"
            className="animate-fadeUp"
          >
            <Link href="/analytics" className="text-[#2592D0] hover:underline">
              ← Analytics
            </Link>
          </Section>

          <Section
            orientation="vertical"
            positioning="start"
            spacing="sm"
            className="animate-fadeUp"
          >
            <Heading>Operations & Programming Analytics</Heading>
            <Text>Monitor development metrics, system performance, and program operations</Text>
          </Section>

          <Section
            orientation="vertical"
            positioning="start"
            spacing="md"
            className="animate-fadeUp"
          >
            <Card variant="gray" className="animate-slideLeft">
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

            <Card variant="gray" className="animate-slideRight">
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

            <Card variant="gray" className="animate-slideLeft">
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
          </Section>
        </Section>
      </Card>
    </Section>
  );
}