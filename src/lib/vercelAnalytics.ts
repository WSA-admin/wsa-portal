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

function getDateRangeFromPeriod(period: string): { start: Date; end: Date; label: string } {
  const now = new Date(); // September 15, 2025
  const currentYear = now.getFullYear(); // 2025
  const currentMonth = now.getMonth(); // 8 (September, 0-based)

  // Site launched in July 2025, analytics started September 8, 2025
  const siteLaunchDate = new Date(2025, 6, 15); // July 15, 2025
  const analyticsStartDate = new Date(2025, 8, 8); // September 8, 2025

  switch (period) {
    case 'last-7-days':
      return {
        start: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
        end: now,
        label: 'Last 7 Days'
      };

    case 'since-analytics':
      return {
        start: analyticsStartDate,
        end: now,
        label: 'Since Analytics Started (Sept 8)'
      };

    case 'since-launch':
      return {
        start: siteLaunchDate,
        end: now,
        label: 'Since Site Launch (July 15)'
      };

    case 'current-month':
      return {
        start: new Date(2025, 8, 1), // September 1, 2025
        end: now,
        label: 'September 2025 (Current)'
      };

    case 'previous-month':
      return {
        start: new Date(2025, 7, 1), // August 1, 2025
        end: new Date(2025, 8, 0), // August 31, 2025
        label: 'August 2025'
      };

    case '2025-07':
      return {
        start: new Date(2025, 6, 15), // July 15, 2025 (site launch)
        end: new Date(2025, 7, 0), // July 31, 2025
        label: 'July 2025 (Launch Month)'
      };

    default:
      // Handle specific months like "2025-08"
      if (period.match(/^\d{4}-\d{2}$/)) {
        const [year, month] = period.split('-').map(Number);

        // Don't allow dates before site launch
        const requestedStart = new Date(year, month - 1, 1);
        const actualStart = requestedStart < siteLaunchDate ? siteLaunchDate : requestedStart;

        return {
          start: actualStart,
          end: new Date(year, month, 0),
          label: new Date(year, month - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        };
      }

      // Default to last 7 days (most realistic for new analytics)
      return {
        start: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
        end: now,
        label: 'Last 7 Days'
      };
  }
}

function generateRealisticData(period: string): VercelAnalyticsData {
  const { start, end } = getDateRangeFromPeriod(period);
  const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  // Base actual traffic levels for WorkSource Alliance (matching your real analytics)
  // Current all-time: 131 views, 59 visitors
  // Assuming site has been live for ~30 days, that's about 4-5 views/day, 2 visitors/day
  const dailyViews = 4.5;
  const dailyVisitors = 2;

  // Scale based on period length with some variation
  const baseViews = Math.floor(dailyViews * daysDiff);
  const baseVisitors = Math.floor(dailyVisitors * daysDiff);

  // Add realistic variation (±20%)
  const periodViews = Math.floor(baseViews * (0.8 + Math.random() * 0.4));
  const periodVisitors = Math.floor(baseVisitors * (0.8 + Math.random() * 0.4));

  return {
    views: Math.max(periodViews, 1), // Ensure at least 1
    visitors: Math.max(periodVisitors, 1),
    topPages: [
      { page: '/', views: Math.max(Math.floor(periodViews * 0.45), 1) },
      { page: '/about', views: Math.max(Math.floor(periodViews * 0.20), 0) },
      { page: '/programs', views: Math.max(Math.floor(periodViews * 0.15), 0) },
      { page: '/contact', views: Math.max(Math.floor(periodViews * 0.10), 0) },
      { page: '/resources', views: Math.max(Math.floor(periodViews * 0.10), 0) },
    ].filter(page => page.views > 0),
    topCountries: [
      { country: 'Canada', visitors: Math.max(Math.floor(periodVisitors * 0.70), 1) },
      { country: 'United States', visitors: Math.max(Math.floor(periodVisitors * 0.20), 0) },
      { country: 'United Kingdom', visitors: Math.max(Math.floor(periodVisitors * 0.10), 0) },
    ].filter(country => country.visitors > 0),
    devices: [
      { device: 'Desktop', visitors: Math.max(Math.floor(periodVisitors * 0.60), 1) },
      { device: 'Mobile', visitors: Math.max(Math.floor(periodVisitors * 0.35), 0) },
      { device: 'Tablet', visitors: Math.max(Math.floor(periodVisitors * 0.05), 0) },
    ].filter(device => device.visitors > 0),
    referrers: [
      { referrer: 'Direct', visitors: Math.max(Math.floor(periodVisitors * 0.50), 1) },
      { referrer: 'Google Search', visitors: Math.max(Math.floor(periodVisitors * 0.30), 0) },
      { referrer: 'LinkedIn', visitors: Math.max(Math.floor(periodVisitors * 0.15), 0) },
      { referrer: 'Email', visitors: Math.max(Math.floor(periodVisitors * 0.05), 0) },
    ].filter(referrer => referrer.visitors > 0),
  };
}

function calculatePeriodDataFromKnownTotals(
  period: string,
  knownTotals: {
    totalViews: number;
    totalVisitors: number;
    analyticsStartDate: Date;
    siteLaunchDate: Date;
  }
): VercelAnalyticsData {
  const { start, end } = getDateRangeFromPeriod(period);
  const now = new Date();

  // Analytics have only been running for 1 week (since Sept 8, 2025)
  const analyticsRunningDays = Math.ceil((now.getTime() - knownTotals.analyticsStartDate.getTime()) / (1000 * 60 * 60 * 24));
  const periodDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  // Calculate overlap between analytics period and requested period
  const overlapStart = new Date(Math.max(start.getTime(), knownTotals.analyticsStartDate.getTime()));
  const overlapEnd = new Date(Math.min(end.getTime(), now.getTime()));
  const overlapDays = Math.max(0, Math.ceil((overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60 * 24)));

  // Calculate realistic daily averages for a new site with 1-week analytics
  const dailyViews = knownTotals.totalViews / Math.max(analyticsRunningDays, 1); // ~18 views/day
  const dailyVisitors = knownTotals.totalVisitors / Math.max(analyticsRunningDays, 1); // ~8 visitors/day

  // For periods before analytics started, show 0 or very minimal data
  let periodViews: number;
  let periodVisitors: number;

  if (start < knownTotals.analyticsStartDate) {
    // Period includes time before analytics - only count overlap
    periodViews = Math.floor(dailyViews * overlapDays);
    periodVisitors = Math.floor(dailyVisitors * overlapDays);
  } else {
    // Period is entirely within analytics timeframe
    periodViews = Math.floor(dailyViews * periodDays);
    periodVisitors = Math.floor(dailyVisitors * periodDays);
  }

  return {
    views: Math.max(periodViews, 0),
    visitors: Math.max(periodVisitors, 0),
    topPages: [
      { page: '/', views: Math.floor(periodViews * 0.45) },
      { page: '/about', views: Math.floor(periodViews * 0.20) },
      { page: '/programs', views: Math.floor(periodViews * 0.15) },
      { page: '/contact', views: Math.floor(periodViews * 0.10) },
      { page: '/resources', views: Math.floor(periodViews * 0.10) },
    ].filter(page => page.views > 0),
    topCountries: [
      { country: 'Canada', visitors: Math.floor(periodVisitors * 0.75) },
      { country: 'United States', visitors: Math.floor(periodVisitors * 0.20) },
      { country: 'Other', visitors: Math.floor(periodVisitors * 0.05) },
    ].filter(country => country.visitors > 0),
    devices: [
      { device: 'Desktop', visitors: Math.floor(periodVisitors * 0.60) },
      { device: 'Mobile', visitors: Math.floor(periodVisitors * 0.35) },
      { device: 'Tablet', visitors: Math.floor(periodVisitors * 0.05) },
    ].filter(device => device.visitors > 0),
    referrers: [
      { referrer: 'Direct', visitors: Math.floor(periodVisitors * 0.50) },
      { referrer: 'Google Search', visitors: Math.floor(periodVisitors * 0.30) },
      { referrer: 'LinkedIn', visitors: Math.floor(periodVisitors * 0.15) },
      { referrer: 'Other', visitors: Math.floor(periodVisitors * 0.05) },
    ].filter(referrer => referrer.visitors > 0),
  };
}

export async function fetchVercelAnalytics(
  teamId: string,
  projectId: string,
  period: string = 'last-7-days'
): Promise<VercelAnalyticsData> {
  try {
    // First, try to get real WSA analytics data from our ingestion endpoint
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/analytics/ingest`);

    if (response.ok) {
      const data = await response.json();

      if (data.events && data.events.length > 0) {
        // Process real WSA analytics events using the new processor
        const { processWSAAnalyticsEvents } = await import('./wsaAnalyticsProcessor');
        const analyticsData = processWSAAnalyticsEvents(data.events, period);

        console.log(`📊 Using real WSA analytics data: ${analyticsData.views} views, ${analyticsData.visitors} visitors`);
        return analyticsData;
      }
    }

    // Fallback: return empty data if no real analytics available
    console.log('📊 No real analytics data available, returning empty state');

    return {
      views: 0,
      visitors: 0,
      topPages: [],
      topCountries: [],
      devices: [],
      referrers: []
    };

  } catch (error) {
    console.error('Error fetching analytics data:', error);

    // Return empty data on error instead of mock data
    return {
      views: 0,
      visitors: 0,
      topPages: [],
      topCountries: [],
      devices: [],
      referrers: []
    };
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

  // For now, return sample speed data
  // TODO: Replace with actual Vercel Speed Insights API calls once endpoint is confirmed

  const generateGoodMetrics = (): VercelSpeedData => ({
    lcp: { value: Math.floor(Math.random() * 1000) + 1500, grade: 'A' }, // 1.5-2.5s
    fcp: { value: Math.floor(Math.random() * 800) + 1000, grade: 'A' },  // 1.0-1.8s
    cls: { value: Math.random() * 0.08 + 0.02, grade: 'A' },             // 0.02-0.1
    ttfb: { value: Math.floor(Math.random() * 400) + 400, grade: 'A' },  // 400-800ms
  });

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return generateGoodMetrics();
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