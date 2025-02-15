// pages/api/login/router.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const sendOtpToEmail = async (email: string) => {
  try {
    // Sending a POST request to your Django backend to send OTP
    const response = await axios.post('http://localhost:8000/api/send_otp/', { email });
    return response.data; // Assuming the Django backend responds with success
  } catch (error: unknown) {
    // Type error as AxiosError or any
    if (axios.isAxiosError(error)) {
      console.error('Axios Error while sending OTP: 1', error.message);
      throw new Error('Failed to send OTP');
    } else {
      console.error('General Error while sending OTP:', error);
      throw new Error('Failed to send OTP');
    }
  }
};

const verifyOtp = async (email: string, otp: string) => {
  try {
    // Sending a POST request to verify OTP in Django backend
    const response = await axios.post('http://localhost:8000/api/verify_otp/', { email, otp });
    return response.data; // Assuming Django returns success or failure
  } catch (error: unknown) {
    // Type error as AxiosError or any
    if (axios.isAxiosError(error)) {
      console.error('Axios Error while verifying OTP:', error.message);
      throw new Error('Failed to verify OTP');
    } else {
      console.error('General Error while verifying OTP:', error);
      throw new Error('Failed to verify OTP');
    }
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(abc);
  
  if (req.method === 'POST') {
    const { email, otp } = req.body;

    if (otp) {
      // If OTP is provided, we verify it
      try {
        const result = await verifyOtp(email, otp);
        return res.status(200).json(result); // Return response from Django backend
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('OTP verification failed (AxiosError):', error.message);
        } else {
          console.error('OTP verification failed (General Error):', error);
        }
        return res.status(500).json({ message: 'OTP verification failed', error: (error instanceof Error ? error.message : 'Unknown error') });
      }
    } else {
      // If no OTP, send OTP
      try {
        const result = await sendOtpToEmail(email);
        return res.status(200).json(result); // Return response from Django backend
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Failed to send OTP (AxiosError):', error.message);
        } else {
          console.error('Failed to send OTP (General Error):', error);
        }
        return res.status(500).json({ message: 'Failed to send OTP', error: (error instanceof Error ? error.message : 'Unknown error') });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
