// pages/api/login/router.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const sendOtpToEmail = async (email: string) => {
  try {
    // Sending a POST request to your Django backend
    const response = await axios.post('http://localhost:8000/api/send_otp/', { email });
    return response.data; // Assuming the Django backend responds with success
  } catch (error) {
    console.error('Error sending OTP to email:', error);
    throw new Error('Failed to send OTP');
  }
};

const verifyOtp = async (email: string, otp: string) => {
  try {
    // Sending a POST request to verify OTP in Django backend
    const response = await axios.post('http://localhost:8000/api/verify_otp/', { email, otp });
    return response.data; // Assuming Django returns success or failure
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw new Error('Failed to verify OTP');
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, otp } = req.body;

    if (otp) {
      // If OTP is provided, we verify it
      try {
        const result = await verifyOtp(email, otp);
        return res.status(200).json(result); // Return response from Django backend
      } catch (error) {
        return res.status(500).json({ message: 'OTP verification failed', error: error.message });
      }
    } else {
      // If no OTP, send OTP
      try {
        const result = await sendOtpToEmail(email);
        return res.status(200).json(result); // Return response from Django backend
      } catch (error) {
        return res.status(500).json({ message: 'Failed to send OTP', error: error.message });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
