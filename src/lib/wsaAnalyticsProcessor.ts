import { VercelAnalyticsData } from './vercelAnalytics';

export interface WSAAnalyticsEvent {
  type: 'pageview' | 'event';
  timestamp: number;
  sessionId: string;
  userId?: string;
  data: {
    url: string;
    referrer: string;
    user_agent: string;
    language: string;
    screen_width: number;
    screen_height: number;
    viewport_width: number;
    viewport_height: number;
    event_name?: string;
    event_data?: Record<string, any>;
    server_ip?: string;
  };
}

export function processWSAAnalyticsEvents(
  events: WSAAnalyticsEvent[],
  period: string
): VercelAnalyticsData {
  // Filter events for the requested period
  const filteredEvents = filterWSAEventsByPeriod(events, period);
  const pageviews = filteredEvents.filter(event => event.type === 'pageview');
  const customEvents = filteredEvents.filter(event => event.type === 'event');

  // Calculate basic metrics
  const totalViews = pageviews.length;
  const uniqueVisitors = new Set(pageviews.map(event => event.sessionId)).size;

  // Process top pages from real URLs
  const pageViews = new Map<string, number>();
  pageviews.forEach(event => {
    try {
      const path = new URL(event.data.url).pathname;
      pageViews.set(path, (pageViews.get(path) || 0) + 1);
    } catch {
      // Fallback for invalid URLs
      pageViews.set(event.data.url, (pageViews.get(event.data.url) || 0) + 1);
    }
  });

  const topPages = Array.from(pageViews.entries())
    .map(([page, views]) => ({ page, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  // Process countries/regions from server IPs or user agents
  const locationVisitors = new Map<string, Set<string>>();
  pageviews.forEach(event => {
    // For now, extract country from language or default to "Unknown"
    // In production, you'd use IP geolocation
    const country = extractCountryFromLanguage(event.data.language) || 'Unknown';

    if (!locationVisitors.has(country)) {
      locationVisitors.set(country, new Set());
    }
    locationVisitors.get(country)!.add(event.sessionId);
  });

  const topCountries = Array.from(locationVisitors.entries())
    .map(([country, visitors]) => ({ country, visitors: visitors.size }))
    .sort((a, b) => b.visitors - a.visitors)
    .slice(0, 10);

  // Process devices from user agent and screen size
  const deviceVisitors = new Map<string, Set<string>>();
  pageviews.forEach(event => {
    const device = detectDeviceFromWSAData(event.data);

    if (!deviceVisitors.has(device)) {
      deviceVisitors.set(device, new Set());
    }
    deviceVisitors.get(device)!.add(event.sessionId);
  });

  const devices = Array.from(deviceVisitors.entries())
    .map(([device, visitors]) => ({ device, visitors: visitors.size }))
    .sort((a, b) => b.visitors - a.visitors);

  // Process referrers from real referrer data
  const referrerVisitors = new Map<string, Set<string>>();
  pageviews.forEach(event => {
    const referrer = event.data.referrer ?
      getReferrerDomain(event.data.referrer) : 'Direct';

    if (!referrerVisitors.has(referrer)) {
      referrerVisitors.set(referrer, new Set());
    }
    referrerVisitors.get(referrer)!.add(event.sessionId);
  });

  const referrers = Array.from(referrerVisitors.entries())
    .map(([referrer, visitors]) => ({ referrer, visitors: visitors.size }))
    .sort((a, b) => b.visitors - a.visitors)
    .slice(0, 10);

  return {
    views: totalViews,
    visitors: uniqueVisitors,
    topPages,
    topCountries,
    devices,
    referrers
  };
}

function filterWSAEventsByPeriod(events: WSAAnalyticsEvent[], period: string): WSAAnalyticsEvent[] {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // Analytics started September 8, 2025
  const analyticsStartDate = new Date(2025, 8, 8);

  let startTime: Date;
  let endTime: Date = now;

  switch (period) {
    case 'last-7-days':
      startTime = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;

    case 'since-analytics':
      startTime = analyticsStartDate;
      break;

    case 'current-month':
      startTime = new Date(2025, 8, 1); // September 1, 2025
      break;

    case 'previous-month':
      startTime = new Date(2025, 7, 1); // August 1, 2025
      endTime = new Date(2025, 8, 0); // August 31, 2025
      break;

    case 'since-launch':
      startTime = new Date(2025, 6, 15); // July 15, 2025 (site launch)
      break;

    case '2025-07':
      startTime = new Date(2025, 6, 15); // July 15, 2025
      endTime = new Date(2025, 7, 0); // July 31, 2025
      break;

    default:
      // Default to since analytics started
      startTime = analyticsStartDate;
  }

  return events.filter(event => {
    const eventDate = new Date(event.timestamp);
    return eventDate >= startTime && eventDate <= endTime;
  });
}

function extractCountryFromLanguage(language: string): string | null {
  if (!language) return null;

  // Extract country from language tags like "en-US", "en-CA", "fr-FR"
  const countryMap: Record<string, string> = {
    'us': 'United States',
    'ca': 'Canada',
    'gb': 'United Kingdom',
    'uk': 'United Kingdom',
    'fr': 'France',
    'de': 'Germany',
    'au': 'Australia',
    'in': 'India'
  };

  const parts = language.toLowerCase().split('-');
  if (parts.length > 1) {
    const countryCode = parts[1];
    return countryMap[countryCode] || countryCode.toUpperCase();
  }

  // Default based on primary language
  if (language.startsWith('en')) return 'United States';
  if (language.startsWith('fr')) return 'France';

  return null;
}

function detectDeviceFromWSAData(data: WSAAnalyticsEvent['data']): string {
  const userAgent = data.user_agent;
  const screenWidth = data.screen_width;

  // Use screen width as primary indicator
  if (screenWidth <= 768) return 'Mobile';
  if (screenWidth <= 1024) return 'Tablet';

  // Also check user agent
  if (/Mobile|Android|iPhone/.test(userAgent)) return 'Mobile';
  if (/iPad/.test(userAgent)) return 'Tablet';

  return 'Desktop';
}

function getReferrerDomain(referrer: string): string {
  if (!referrer || referrer === '') return 'Direct';

  try {
    const url = new URL(referrer);
    const domain = url.hostname.replace('www.', '');

    // Map common domains to readable names
    const domainMap: Record<string, string> = {
      'google.com': 'Google Search',
      'google.ca': 'Google Search',
      'bing.com': 'Bing Search',
      'facebook.com': 'Facebook',
      'linkedin.com': 'LinkedIn',
      'twitter.com': 'Twitter',
      't.co': 'Twitter',
      'instagram.com': 'Instagram'
    };

    return domainMap[domain] || domain;
  } catch {
    return 'Direct';
  }
}

export function getWSAAnalyticsInsights(events: WSAAnalyticsEvent[]): {
  totalEvents: number;
  pageviews: number;
  customEvents: number;
  uniqueSessions: number;
  avgSessionDuration: number;
  topCustomEvents: { name: string; count: number }[];
  deviceBreakdown: { device: string; percentage: number }[];
  timeDistribution: { hour: number; events: number }[];
} {
  const pageviews = events.filter(e => e.type === 'pageview');
  const customEvents = events.filter(e => e.type === 'event');
  const uniqueSessions = new Set(events.map(e => e.sessionId)).size;

  // Calculate average session duration
  const sessionDurations = new Map<string, { start: number; end: number }>();
  events.forEach(event => {
    const sessionId = event.sessionId;
    if (!sessionDurations.has(sessionId)) {
      sessionDurations.set(sessionId, { start: event.timestamp, end: event.timestamp });
    } else {
      const session = sessionDurations.get(sessionId)!;
      session.start = Math.min(session.start, event.timestamp);
      session.end = Math.max(session.end, event.timestamp);
    }
  });

  const avgSessionDuration = Array.from(sessionDurations.values())
    .map(session => session.end - session.start)
    .reduce((sum, duration) => sum + duration, 0) / sessionDurations.size;

  // Top custom events
  const eventCounts = new Map<string, number>();
  customEvents.forEach(event => {
    const eventName = event.data.event_name || 'Unknown Event';
    eventCounts.set(eventName, (eventCounts.get(eventName) || 0) + 1);
  });

  const topCustomEvents = Array.from(eventCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Device breakdown
  const deviceCounts = new Map<string, number>();
  events.forEach(event => {
    const device = detectDeviceFromWSAData(event.data);
    deviceCounts.set(device, (deviceCounts.get(device) || 0) + 1);
  });

  const totalDeviceEvents = Array.from(deviceCounts.values()).reduce((sum, count) => sum + count, 0);
  const deviceBreakdown = Array.from(deviceCounts.entries())
    .map(([device, count]) => ({
      device,
      percentage: Math.round((count / totalDeviceEvents) * 100)
    }));

  // Time distribution (by hour)
  const hourCounts = new Array(24).fill(0);
  events.forEach(event => {
    const hour = new Date(event.timestamp).getHours();
    hourCounts[hour]++;
  });

  const timeDistribution = hourCounts.map((events, hour) => ({ hour, events }));

  return {
    totalEvents: events.length,
    pageviews: pageviews.length,
    customEvents: customEvents.length,
    uniqueSessions,
    avgSessionDuration: Math.round(avgSessionDuration / 1000), // Convert to seconds
    topCustomEvents,
    deviceBreakdown,
    timeDistribution
  };
}