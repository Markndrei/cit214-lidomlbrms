// pages/_middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(req: NextRequest) {
  const { isAuthenticated } = await getKindeServerSession(req);

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect('/');
  }

  // Continue to the requested page if authenticated
  return NextResponse.next();
}
