import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
const key = 'P1324325ra1dhan'; // Secret key

export function middleware(req:NextRequest) {
  const url =new URL(req.url); // Get the current request URL

  // Access the token from the cookies
  const token = req.cookies.get("token")?.value; // Extract the value of the token
  console.log('avhfvh',token);
  
  // Accessing the path (child route)
  const path = url.pathname; // Example: '/abc'

  if (
    (path === '/abc' || path === '/logout' || path === '/') ||
    (token && path === '/Dashboard')
  ) {
    console.log("middleware reach2"); // Log when the condition is met
    return NextResponse.next();
  }
  
  // If there's no token and user tries to access any page except abc, logout, home, or Dashboard, redirect to abc
  if (path !== '/abc' && path !== '/logout' && path !== '/') {
    url.pathname='/abc'
    console.log("middleware reach3 - redirect to abc", url);
    return NextResponse.redirect(url ); // Redirect to abc if conditions match
  }

  try {
    if (token) {
      jwt.verify(token, key); // Verify the JWT token
      console.log("middleware reach5"); // Log when the token is valid
      return NextResponse.next(); // If token is valid, continue the request
    }
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return NextResponse.redirect(new URL('/abc', req.url)); // Redirect to abc if token is invalid
  }
}


// Apply middleware to all routes except static assets and specific paths
export const config = {
  matcher: ['/((?!_next/static|favicon.ico|api/login).*)'], // Exclude static assets, favicon, and login API
};
