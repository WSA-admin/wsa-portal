export interface VercelAnalyticsData {
  views: number;
  visitors: number;
  topPages: { page: string; views: number }[];
  topCountries: { country: string; visitors: number }[];
  devices: { device: string; visitors: number }[];
  referrers: { referrer: string; visitors: number }[];
}

export interface VercelSpeedData {
  lcp: { value: number; grade: string };
  fcp: { value: number; grade: string };
  cls: { value: number; grade: string };
  ttfb: { value: number; grade: string };
}

export async function fetchVercelAnalytics(
  teamId: string,
  projectId: string,
  since: string = '7d'
): Promise<VercelAnalyticsData> {
  const token = process.env.VERCEL_ACCESS_TOKEN;

  if (!token) {
    throw new Error('VERCEL_ACCESS_TOKEN is required');
  }

  // Convert time range to timestamps
  const now = Date.now();
  const timeRanges = {
    '1d': 24 * 60 * 60 * 1000,
    '7d': 7 * 24 * 60 * 60 * 1000,
    '30d': 30 * 24 * 60 * 60 * 1000,
    '90d': 90 * 24 * 60 * 60 * 1000,
  };
  const fromTimestamp = now - (timeRanges[since as keyof typeof timeRanges] || timeRanges['7d']);

  try {
    // Fetch analytics data using the correct API endpoint
    const analyticsUrl = `https://api.vercel.com/v1/analytics`;
    const params = new URLSearchParams({
      teamId,
      projectId,
      from: fromTimestamp.toString(),
      to: now.toString(),
      type: 'pageviews'
    });

    const response = await fetch(`${analyticsUrl}?${params}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch analytics: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    // Transform the response to match our interface
    // Note: The actual Vercel Analytics API structure may differ
    // This is a basic implementation that should be adjusted based on the real API response
    return {
      views: data.total?.pageviews || 0,
      visitors: data.total?.visitors || 0,
      topPages: data.pages?.slice(0, 10) || [],
      topCountries: data.countries?.slice(0, 10) || [],
      devices: data.devices?.slice(0, 5) || [],
      referrers: data.referrers?.slice(0, 10) || [],
    };
  } catch (error) {
    console.error('Error fetching Vercel analytics:', error);
    throw error;
  }
}

export async function fetchVercelSpeedInsights(
  teamId: string,
  projectId: string,
  since: string = '7d'
): Promise<VercelSpeedData> {
  const token = process.env.VERCEL_ACCESS_TOKEN;

  if (!token) {
    throw new Error('VERCEL_ACCESS_TOKEN is required');
  }

  const baseUrl = `https://vercel.com/api/web/insights/speed`;
  const params = new URLSearchParams({
    teamId,
    projectId,
    since,
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch speed insights: ${response.status}`);
    }

    const data = await response.json();

    return {
      lcp: data.lcp || { value: 0, grade: 'N/A' },
      fcp: data.fcp || { value: 0, grade: 'N/A' },
      cls: data.cls || { value: 0, grade: 'N/A' },
      ttfb: data.ttfb || { value: 0, grade: 'N/A' },
    };
  } catch (error) {
    console.error('Error fetching Vercel speed insights:', error);
    throw error;
  }
}

export function getGradeColor(grade: string): string {
  switch (grade.toLowerCase()) {
    case 'a':
    case 'good':
      return '#10B981';
    case 'b':
    case 'needs improvement':
      return '#F59E0B';
    case 'c':
    case 'poor':
      return '#EF4444';
    default:
      return '#6B7280';
  }
}

export function formatMetricValue(metric: string, value: number): string {
  switch (metric) {
    case 'lcp':
    case 'fcp':
    case 'ttfb':
      return `${(value / 1000).toFixed(2)}s`;
    case 'cls':
      return value.toFixed(3);
    default:
      return value.toString();
  }
}