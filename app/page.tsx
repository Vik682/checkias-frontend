// app/page.tsx
"use client";
import axios from 'axios';
import { useState } from 'react';
import base_url from '@/services/baseurl';

const Page = () => {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = async () => {
    try {
      const response = await axios.post(`${base_url}/mail/send/`, {
        email: 'vy8882164@gmail.com',
      });
      setMessage('Email request sent successfully');
    } catch (err) {
      setError('Error sending email');
      console.error('Error sending email:', err);
    }
  };

  return (
    <div>
      <h1>Send Email</h1>
      <button onClick={sendEmail}>Send Email</button>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Page;
