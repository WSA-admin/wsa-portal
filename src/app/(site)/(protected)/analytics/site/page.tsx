'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Section, Heading, SubHeading, Text, Card, Label } from "@/app/components/ui";
import { VercelAnalyticsData, VercelSpeedData, getGradeColor, formatMetricValue } from '@/lib/vercelAnalytics';

export default function SiteAnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState<VercelAnalyticsData | null>(null);
  const [speedData, setSpeedData] = useState<VercelSpeedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [analyticsResponse, speedResponse] = await Promise.all([
        fetch(`/api/analytics/vercel?since=${timeRange}&type=analytics`),
        fetch(`/api/analytics/vercel?since=${timeRange}&type=speed`)
      ]);

      if (!analyticsResponse.ok || !speedResponse.ok) {
        throw new Error('Failed to fetch analytics data');
      }

      const analytics = await analyticsResponse.json();
      const speed = await speedResponse.json();

      setAnalyticsData(analytics);
      setSpeedData(speed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Section orientation="vertical" positioning="center" spacing="lg" className="min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#2592D0' }}></div>
        <Text>Loading WorkSource Alliance analytics...</Text>
      </Section>
    );
  }

  if (error) {
    return (
      <Section orientation="vertical" positioning="start" spacing="none">
        <Card variant="white">
          <Section orientation="vertical" positioning="start" spacing="md">
            <Link href="/analytics" className="text-[#2592D0] hover:underline">
              ← Analytics
            </Link>
            <Heading>Site Analytics</Heading>
            <Card variant="gray" className="border-red-200 bg-red-50">
              <Text className="text-red-700">Error loading analytics: {error}</Text>
              <Text className="text-sm text-red-600 mt-2">
                Please ensure your Vercel API credentials are configured correctly.
              </Text>
            </Card>
          </Section>
        </Card>
      </Section>
    );
  }

  return (
    <Section orientation="vertical" positioning="start" spacing="none">
      <Card variant="white">
        <Section orientation="vertical" positioning="start" spacing="md">
          <Section orientation="horizontal" positioning="start" spacing="sm">
            <Link href="/analytics" className="text-[#2592D0] hover:underline">
              ← Analytics
            </Link>
          </Section>

          <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
            <div>
              <Heading>WorkSource Alliance Site Analytics</Heading>
              <Text>Live analytics for worksourcealliance.ca</Text>
            </div>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
            >
              <option value="1d">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </Section>

          <Section orientation="vertical" positioning="start" spacing="md">
            {/* Traffic Overview */}
            <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2 lg:grid-cols-4">
              <Card variant="gray" className="border border-blue-200 bg-blue-50">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Label className="text-[#2592D0] font-semibold">Total Views</Label>
                  <Text className="text-3xl font-bold text-[#2592D0]">
                    {analyticsData?.views.toLocaleString() || 0}
                  </Text>
                </Section>
              </Card>

              <Card variant="gray" className="border border-purple-200 bg-purple-50">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Label className="text-[#702083] font-semibold">Unique Visitors</Label>
                  <Text className="text-3xl font-bold text-[#702083]">
                    {analyticsData?.visitors.toLocaleString() || 0}
                  </Text>
                </Section>
              </Card>

              <Card variant="gray" className="border border-navy-200 bg-navy-50">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Label className="text-[#012E55] font-semibold">Top Pages</Label>
                  <Text className="text-3xl font-bold text-[#012E55]">
                    {analyticsData?.topPages.length || 0}
                  </Text>
                </Section>
              </Card>

              <Card variant="gray" className="border border-orange-200 bg-orange-50">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <Label className="text-[#EF7B02] font-semibold">Countries</Label>
                  <Text className="text-3xl font-bold text-[#EF7B02]">
                    {analyticsData?.topCountries.length || 0}
                  </Text>
                </Section>
              </Card>
            </Section>

            {/* Core Web Vitals */}
            {speedData && (
              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="md">
                  <SubHeading>Core Web Vitals</SubHeading>
                  <Section orientation="vertical" positioning="start" spacing="sm" className="sm:grid sm:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(speedData).map(([metric, data]) => (
                      <Card key={metric} variant="white" className="border border-gray-200">
                        <Section orientation="vertical" positioning="start" spacing="sm">
                          <Section orientation="horizontal" positioning="start" spacing="sm" className="justify-between">
                            <Label className="font-semibold">{metric.toUpperCase()}</Label>
                            <div
                              className="px-2 py-1 rounded text-xs font-medium text-white"
                              style={{ backgroundColor: getGradeColor(data.grade) }}
                            >
                              {data.grade}
                            </div>
                          </Section>
                          <Text className="text-2xl font-bold text-[#2592D0]">
                            {formatMetricValue(metric, data.value)}
                          </Text>
                        </Section>
                      </Card>
                    ))}
                  </Section>
                </Section>
              </Card>
            )}

            {/* Top Pages & Countries */}
            <Section orientation="vertical" positioning="start" spacing="md" className="sm:grid sm:grid-cols-2">
              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading>Top Pages</SubHeading>
                  <div className="space-y-2">
                    {analyticsData?.topPages.slice(0, 5).map((page, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <Text className="text-sm truncate flex-1 mr-2">{page.page}</Text>
                        <Text className="text-sm font-semibold text-[#2592D0]">{page.views.toLocaleString()}</Text>
                      </div>
                    )) || <Text className="text-gray-500 italic">No data available</Text>}
                  </div>
                </Section>
              </Card>

              <Card variant="gray">
                <Section orientation="vertical" positioning="start" spacing="sm">
                  <SubHeading>Top Countries</SubHeading>
                  <div className="space-y-2">
                    {analyticsData?.topCountries.slice(0, 5).map((country, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <Text className="text-sm flex-1 mr-2">{country.country}</Text>
                        <Text className="text-sm font-semibold text-[#702083]">{country.visitors.toLocaleString()}</Text>
                      </div>
                    )) || <Text className="text-gray-500 italic">No data available</Text>}
                  </div>
                </Section>
              </Card>
            </Section>

            {/* External Links */}
            <Card variant="gray">
              <Section orientation="vertical" positioning="start" spacing="sm">
                <SubHeading>External Analytics Tools</SubHeading>
                <Section orientation="horizontal" positioning="start" spacing="sm" className="flex-wrap">
                  <a
                    href="https://vercel.com/analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#2592D0] text-white rounded hover:bg-[#1e7bb8] transition-colors"
                  >
                    Full Vercel Analytics →
                  </a>
                  <a
                    href="https://vercel.com/speed-insights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#702083] text-white rounded hover:bg-[#5a1a6b] transition-colors"
                  >
                    Speed Insights →
                  </a>
                </Section>
              </Section>
            </Card>
          </Section>
        </Section>
      </Card>
    </Section>
  );
}