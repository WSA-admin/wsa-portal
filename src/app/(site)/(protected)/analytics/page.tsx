'use client';

import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card } from "@/app/components/ui";

export default function AnalyticsPage() {
  return (
    <Section orientation="vertical" positioning="start" spacing="none">
      <Card variant="white">
        <Section orientation="vertical" positioning="start" spacing="md">
          <Heading>Analytics Dashboard</Heading>
          <Text>Monitor performance across all platforms and systems</Text>

          <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/analytics/site" className="block">
              <Card variant="gray" className="hover:bg-gray-100 transition-colors duration-200 h-full">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading className="text-[#2592D0]">Site Analytics</SubHeading>
                  <Text>Vercel deployment metrics, performance data, and visitor statistics</Text>
                </Section>
              </Card>
            </Link>

            <Link href="/analytics/operations" className="block">
              <Card variant="gray" className="hover:bg-gray-100 transition-colors duration-200 h-full">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading className="text-[#702083]">Operations & Programming</SubHeading>
                  <Text>Development metrics, system performance, and program analytics</Text>
                </Section>
              </Card>
            </Link>

            <Link href="/analytics/social" className="block">
              <Card variant="gray" className="hover:bg-gray-100 transition-colors duration-200 h-full">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading className="text-[#012E55]">Social Media</SubHeading>
                  <Text>Instagram, Facebook, and LinkedIn engagement metrics</Text>
                </Section>
              </Card>
            </Link>
          </Section>
        </Section>
      </Card>
    </Section>
  );
}