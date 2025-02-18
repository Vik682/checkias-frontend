// pages/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'
const KEY="PARDHAN"
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const salt="asgv"
    const token=jwt.sign({email,salt},KEY)
    console.log(token);
     // Set the token as a cookie in the response
    const response = NextResponse.json({ otp: "0000" }, { status: 200 });
    response.cookies.set("token", token, {
    httpOnly: true, // make it accessible only through HTTP(S)
    secure: process.env.NODE_ENV === "production", // only set cookie over HTTPS in production
    maxAge: 60 * 60 * 24, // cookie expiration time (e.g., 1 day)
    path: "/"
    });
 
    return response;

  } catch (error: Unknown) {
    // Handle errors by checking for message and returning a 500 status
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}







export async function GET(request: NextRequest) {
  try {
    // Access the token from the cookies
    const token = request.cookies.get("token")?.value; // Extract the value of the token

    if (!token) {
      console.log("Token not found in cookies");
      return NextResponse.json({ error: "Token not found" }, { status: 401 });
    }

    // Log the token value to the console
    console.log("Token from cookies:", token);

    // Verify the token
    jwt.verify(token, KEY, (err, decoded) => {
      if (err) {
        console.log("Error verifying token:", err);
        return NextResponse.json({ error: "Invalid token" }, { status: 403 });
      }

      // If the token is valid, log the decoded token
      console.log("Decoded token:", decoded);
    });

    return NextResponse.json({ message: "Token received and logged" }, { status: 200 });
  } catch (error: Unknown) {
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}