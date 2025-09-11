import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@/lib/msalServer';
import { sharePointService } from '@/lib/graphClient';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session.isLoggedIn) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get current user information from Microsoft Graph
    const user = await sharePointService.getCurrentUser();
    
    return NextResponse.json({
      success: true,
      data: {
        displayName: user.displayName,
        userPrincipalName: user.userPrincipalName,
        mail: user.mail,
        jobTitle: user.jobTitle,
        department: user.department,
        id: user.id,
      },
    });

  } catch (error) {
    console.error('Error fetching user info:', error);
    
    // Handle specific Graph API errors
    if (error instanceof Error && error.message.includes('401')) {
      return NextResponse.json(
        { error: 'Unauthorized - please log in again' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch user information',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
