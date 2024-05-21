import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // Default Header
  response.headers.set('pathname', request.nextUrl.pathname);
  response.headers.set('href', request.nextUrl.href);
  return response;
}
