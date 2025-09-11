import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@/lib/msalServer';
import { newsService } from '@/lib/sharepoint';

// Middleware to check authentication
async function checkAuth() {
  const session = await getServerSession();
  if (!session.isLoggedIn) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  return null;
}

// GET /api/graph/news - Get all news items
export async function GET(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const searchParams = request.nextUrl.searchParams;
    const top = searchParams.get('top') ? parseInt(searchParams.get('top')!) : undefined;
    const filter = searchParams.get('filter') || undefined;
    const orderBy = searchParams.get('orderBy') || undefined;

    const newsItems = await newsService.getAllNews({
      top,
      filter,
      orderBy,
    });

    return NextResponse.json({
      success: true,
      data: newsItems,
      count: newsItems.length,
    });

  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch news',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST /api/graph/news - Create new news item
export async function POST(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.summary) {
      return NextResponse.json(
        { error: 'Title and summary are required' },
        { status: 400 }
      );
    }

    // Create news item
    const newsItem = await newsService.createNews({
      title: body.title,
      summary: body.summary,
      body: body.body || '',
      published: body.published || new Date().toISOString(),
      imageUrl: body.imageUrl,
    });

    return NextResponse.json({
      success: true,
      data: newsItem,
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create news item',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// PUT /api/graph/news?id=123 - Update news item
export async function PUT(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'News item ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    // Update news item
    const updatedNewsItem = await newsService.updateNews(id, {
      title: body.title,
      summary: body.summary,
      body: body.body,
      published: body.published,
      imageUrl: body.imageUrl,
    });

    return NextResponse.json({
      success: true,
      data: updatedNewsItem,
    });

  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { 
        error: 'Failed to update news item',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE /api/graph/news?id=123 - Delete news item
export async function DELETE(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'News item ID is required' },
        { status: 400 }
      );
    }

    await newsService.deleteNews(id);

    return NextResponse.json({
      success: true,
      message: 'News item deleted successfully',
    });

  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { 
        error: 'Failed to delete news item',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
