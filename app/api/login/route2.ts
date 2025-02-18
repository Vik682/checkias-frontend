// pages/api/login/router.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Helper function to send OTP to email
const sendOtpToEmail = async (email: string) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/', { email });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Handle network-related errors or timeouts
      if (error.code === 'ECONNABORTED') {
        console.error('Timeout Error while sending OTP:', error.message);
        throw new Error('Request timed out while sending OTP. Please try again later.');
      }
      // Handle HTTP status codes, if needed
      if (error.response) {
        console.error('Received non-200 status while sending OTP:', error.response.status);
        throw new Error(`Failed to send OTP. Server returned status ${error.response.status}`);
      }
      console.error('Axios Error while sending OTP:', error.message);
      throw new Error('Failed to send OTP. Please check your network connection.');
    } else {
      console.error('General Error while sending OTP:', error);
      throw new Error('Failed to send OTP. An unknown error occurred.');
    }
  }
};

const verifyOtp = async (email: string, otp: string) => {
  try {
    const response = await axios.post('http://localhost:8000/', { email, otp });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        console.error('Timeout Error while verifying OTP:', error.message);
        throw new Error('Request timed out while verifying OTP. Please try again later.');
      }
      if (error.response) {
        console.error('Received non-200 status while verifying OTP:', error.response.status);
        throw new Error(`Failed to verify OTP. Server returned status ${error.response.status}`);
      }
      console.error('Axios Error while verifying OTP:', error.message);
      throw new Error('Failed to verify OTP. Please check your network connection.');
    } else {
      console.error('General Error while verifying OTP:', error);
      throw new Error('Failed to verify OTP. An unknown error occurred.');
    }
  }
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, endpoint, otp } = body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    if (endpoint === 'send-otp') {
      try {
        const result = await sendOtpToEmail(email);
        return NextResponse.json(result, { status: 200 });
      } catch (error: unknown) {
        return NextResponse.json(
          { message: 'Failed to send OTP', error: error instanceof Error ? error.message : 'Unknown error' },
          { status: 500 }
        );
      }
    } else if (endpoint === 'verify-otp') {
      if (!otp) {
        return NextResponse.json({ message: 'OTP is required' }, { status: 400 });
      }

      try {
        const result = await verifyOtp(email, otp);
        return NextResponse.json(result, { status: 200 });
      } catch (error: unknown) {
        return NextResponse.json(
          { message: 'Failed to verify OTP', error: error instanceof Error ? error.message : 'Unknown error' },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: 'Unrecognized endpoint', error: 'Unknown error' },
        { status: 400 }
      );
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
