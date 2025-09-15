import { NextRequest, NextResponse } from 'next/server';
import { fetchVercelAnalytics, fetchVercelSpeedInsights } from '@/lib/vercelAnalytics';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const since = searchParams.get('since') || '7d';
    const type = searchParams.get('type') || 'analytics';

    const teamId = process.env.VERCEL_TEAM_ID;
    const projectId = process.env.VERCEL_WSA_PROJECT_ID;

    if (!teamId || !projectId) {
      return NextResponse.json(
        { error: 'Missing Vercel configuration' },
        { status: 500 }
      );
    }

    if (type === 'speed') {
      const speedData = await fetchVercelSpeedInsights(teamId, projectId, since);
      return NextResponse.json(speedData);
    } else {
      const analyticsData = await fetchVercelAnalytics(teamId, projectId, since);
      return NextResponse.json(analyticsData);
    }
  } catch (error) {
    console.error('Analytics API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}