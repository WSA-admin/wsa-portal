import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

export interface WebVital {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

export interface AnalyticsData {
  webVitals: WebVital[];
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: { page: string; views: number }[];
  deviceBreakdown: { device: string; percentage: number }[];
  loadTime: number;
}

export function trackWebVitals(onVital: (vital: WebVital) => void) {
  onCLS(onVital);
  onINP(onVital);
  onFCP(onVital);
  onLCP(onVital);
  onTTFB(onVital);
}

export function getVitalRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    CLS: { good: 0.1, poor: 0.25 },
    INP: { good: 200, poor: 500 },
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    TTFB: { good: 800, poor: 1800 }
  };

  const threshold = thresholds[name as keyof typeof thresholds];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

export function formatVitalValue(name: string, value: number): string {
  switch (name) {
    case 'CLS':
      return value.toFixed(3);
    case 'INP':
    case 'FCP':
    case 'LCP':
    case 'TTFB':
      return `${Math.round(value)}ms`;
    default:
      return value.toString();
  }
}

export function getVitalDescription(name: string): string {
  const descriptions = {
    CLS: 'Cumulative Layout Shift - Visual stability of page elements',
    INP: 'Interaction to Next Paint - Time from user interaction to visual response',
    FCP: 'First Contentful Paint - Time until first content appears',
    LCP: 'Largest Contentful Paint - Time until largest content element loads',
    TTFB: 'Time to First Byte - Server response time'
  };

  return descriptions[name as keyof typeof descriptions] || 'Performance metric';
}