import { getToken } from "next-auth/jwt";
import {  NextResponse } from "next/server";

 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
  if(!token){
  }
  const publicRoutes = ['/signin', '/signup'];
  const privateRoutes = ['/bookings'];

  if (publicRoutes.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
  if (privateRoutes.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
    return NextResponse.next();
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/bookings',
    '/signin',
    '/signup'
  ],
}