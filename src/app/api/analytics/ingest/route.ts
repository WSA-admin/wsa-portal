import { NextRequest, NextResponse } from 'next/server';

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
    // Custom event data for events
    event_name?: string;
    event_data?: Record<string, any>;
  };
}

// Simple in-memory storage for now (in production, use a proper database)
const analyticsData: WSAAnalyticsEvent[] = [];
const MAX_EVENTS = 10000; // Keep last 10k events

export async function POST(request: NextRequest) {
  // Add CORS headers for cross-origin requests
  const response = NextResponse.json({ success: true });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  try {
    console.log('📊 WSA Analytics POST request received');

    const event: WSAAnalyticsEvent = await request.json();
    console.log('📊 WSA Event data:', JSON.stringify(event, null, 2));

    // Validate required fields for WSA format
    if (!event.type || !event.data?.url || !event.sessionId) {
      console.log('❌ Missing required WSA fields:', {
        type: event.type,
        url: event.data?.url,
        sessionId: event.sessionId
      });
      return NextResponse.json(
        { error: 'Missing required fields: type, data.url, sessionId' },
        { status: 400 }
      );
    }

    // Add server-side enrichment
    const enrichedEvent: WSAAnalyticsEvent = {
      ...event,
      timestamp: event.timestamp || Date.now(),
      data: {
        ...event.data,
        // Add server IP if needed
        server_ip: request.headers.get('x-forwarded-for') ||
                   request.headers.get('x-real-ip') ||
                   'unknown'
      }
    };

    // Store the event (in production, save to database)
    analyticsData.push(enrichedEvent);

    // Keep only the most recent events
    if (analyticsData.length > MAX_EVENTS) {
      analyticsData.splice(0, analyticsData.length - MAX_EVENTS);
    }

    console.log(`📊 WSA Analytics Event Stored (${analyticsData.length} total):`, {
      type: enrichedEvent.type,
      url: enrichedEvent.data.url,
      referrer: enrichedEvent.data.referrer,
      sessionId: enrichedEvent.sessionId,
      timestamp: new Date(enrichedEvent.timestamp).toISOString(),
      screenSize: `${enrichedEvent.data.screen_width}x${enrichedEvent.data.screen_height}`
    });

    const successResponse = NextResponse.json({
      success: true,
      eventId: enrichedEvent.timestamp,
      totalEvents: analyticsData.length
    });

    // Add CORS headers to response
    successResponse.headers.set('Access-Control-Allow-Origin', '*');
    successResponse.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    successResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return successResponse;

  } catch (error) {
    console.error('Analytics ingestion error:', error);
    return NextResponse.json(
      { error: 'Failed to process analytics event' },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// GET endpoint to retrieve stored analytics data
export async function GET(request: NextRequest) {
  try {
    console.log(`📊 Analytics GET request - stored events: ${analyticsData.length}`);

    const { searchParams } = new URL(request.url);
    const since = searchParams.get('since');
    const type = searchParams.get('type');

    let filteredEvents = [...analyticsData];

    // Filter by time if specified
    if (since) {
      const sinceTimestamp = parseInt(since);
      filteredEvents = filteredEvents.filter(event => event.timestamp >= sinceTimestamp);
    }

    // Filter by type if specified
    if (type) {
      filteredEvents = filteredEvents.filter(event => event.type === type);
    }

    const response = NextResponse.json({
      events: filteredEvents,
      total: filteredEvents.length,
      stored: analyticsData.length,
      debug: {
        hasEvents: analyticsData.length > 0,
        lastEvent: analyticsData.length > 0 ? analyticsData[analyticsData.length - 1] : null
      }
    });

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;

  } catch (error) {
    console.error('Analytics retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve analytics data' },
      { status: 500 }
    );
  }
}