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
          <Text>Real-time website performance, Core Web Vitals, and visitor metrics</Text>

          <Section orientation="vertical" positioning="start" spacing="md">
            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="md">
                <SubHeading>Core Web Vitals</SubHeading>
                <Text className="text-sm text-gray-600 mb-4">Real-time performance metrics measuring user experience</Text>

                {webVitals.length > 0 ? (
                  <Section orientation="vertical" positioning="start" spacing="sm" className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
                    {webVitals.map((vital) => (
                      <Card key={vital.name} variant="white" className="border border-gray-200">
                        <Section orientation="vertical" positioning="start" spacing="sm">
                          <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                            <Label className="font-semibold">{vital.name}</Label>
                            <div
                              className="px-2 py-1 rounded text-xs font-medium text-white"
                              style={{ backgroundColor: getRatingColor(vital.rating) }}
                            >
                              {vital.rating.replace('-', ' ')}
                            </div>
                          </Section>
                          <Text className="text-2xl font-bold text-[#2592D0]">
                            {formatVitalValue(vital.name, vital.value)}
                          </Text>
                          <Text className="text-xs text-gray-500">
                            {getVitalDescription(vital.name)}
                          </Text>
                        </Section>
                      </Card>
                    ))}
                  </Section>
                ) : (
                  <Text className="text-gray-500 italic">Web Vitals data will appear as you interact with the site</Text>
                )}
              </Section>
            </Card>

            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>Vercel Analytics Dashboard</SubHeading>
                <Text className="mb-4">Access detailed visitor analytics, page views, and user behavior data</Text>
                <a
                  href="https://vercel.com/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#2592D0] text-white rounded hover:bg-[#1e7bb8] transition-colors"
                >
                  View Vercel Analytics →
                </a>
              </Section>
            </Card>

            <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading>Speed Insights</SubHeading>
                  <Text>Detailed performance analysis and optimization recommendations</Text>
                  <a
                    href="https://vercel.com/speed-insights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#702083] text-white rounded hover:bg-[#5a1a6b] transition-colors"
                  >
                    View Speed Insights →
                  </a>
                </Section>
              </Card>

              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading>Monthly Reports</SubHeading>
                  <Text>Automated analytics summaries perfect for team reports and quarterly reviews</Text>
                  <div className="text-sm text-gray-600 mt-2">
                    Data automatically collected for easy reporting
                  </div>
                </Section>
              </Card>
            </Section>
          </Section>
        </Section>
      </Card>
    </Section>
  );
}