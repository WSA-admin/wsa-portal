'use client';

import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function SocialAnalyticsPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="none">
      <Card variant="white">
        <Section orientation="vertical" positioning="start" spacing="md">
          <Section orientation="horizontal" positioning="start" spacing="sm">
            <Link href="/analytics" className="text-[#2592D0] hover:underline">
              ← Analytics
            </Link>
          </Section>

          <Heading>Social Media Analytics</Heading>
          <Text>Track engagement and performance across Instagram, Facebook, and LinkedIn</Text>

          <Section orientation="vertical" positioning="start" spacing="md">
            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Instagram Analytics</SubHeading>
                <Text>Follower growth, post engagement, story views, and reach metrics</Text>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Facebook Analytics</SubHeading>
                <Text>Page insights, post performance, audience demographics, and engagement rates</Text>
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>LinkedIn Analytics</SubHeading>
                <Text>Company page analytics, post impressions, follower insights, and professional engagement</Text>
              </Section>
            </Card>
          </Section>
        </Section>
      </Card>
    </Section>
  );
}