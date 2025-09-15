'use client';

import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function OperationsAnalyticsPage() {
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

          <Section orientation="vertical" positioning="start" spacing="md">
            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Development Metrics</SubHeading>
                <Text>Code commits, deployment frequency, build success rates, and development velocity</Text>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>System Performance</SubHeading>
                <Text>Server uptime, response times, error rates, and resource utilization</Text>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Program Analytics</SubHeading>
                <Text>WorkSource Alliance program effectiveness, participant engagement, and outcome tracking</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      </Card>
    </Section>
  );
}