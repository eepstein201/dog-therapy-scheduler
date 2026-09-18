import { NextResponse } from 'next/server'

export async function middleware(req) {
  // We're stubbing out the middleware logic for now. 
  // In a real implementation, you would inspect the Supabase session cookie
  // and verify the JWT to enforce roles ('Admin', 'Volunteer', 'Requester').
  
  const { pathname } = req.nextUrl;

  // Placeholder pseudo-logic:
  /*
  const session = await getSupabaseSession(req);
  if (!session) return NextResponse.redirect(new URL('/login', req.url));

  const role = session.user.user_metadata.role;
  if (pathname.startsWith('/admin') && role !== 'Admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  */

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/volunteer/:path*', '/requester/:path*'],
}
