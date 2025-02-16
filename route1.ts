// pages/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, otp } = reqBody;
    console.log(reqBody);
    console.log(email, otp);

    // Return a response with the OTP (for example, "0000")
    return NextResponse.json({ otp: "0000" }, { status: 200 });

  } catch (error: any) {
    // Handle errors by checking for message and returning a 500 status
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}