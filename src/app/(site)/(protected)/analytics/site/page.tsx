'use client';

import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function SiteAnalyticsPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="none">
      <Card variant="white">
        <Section orientation="vertical" positioning="start" spacing="md">
          <Section orientation="horizontal" positioning="start" spacing="sm">
            <Link href="/analytics" className="text-[#2592D0] hover:underline">
              ← Analytics
            </Link>
          </Section>

          <Heading>Site Analytics</Heading>
          <Text>Monitor website performance, deployments, and visitor metrics from Vercel</Text>

          <Section orientation="vertical" positioning="start" spacing="md">
            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Vercel Analytics</SubHeading>
                <Text>Integration with Vercel analytics dashboard coming soon</Text>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Performance Metrics</SubHeading>
                <Text>Page load times, Core Web Vitals, and performance insights</Text>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Visitor Statistics</SubHeading>
                <Text>Traffic patterns, user behavior, and engagement metrics</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      </Card>
    </Section>
  );
}