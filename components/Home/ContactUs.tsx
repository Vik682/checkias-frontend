// components/Home/ContactUs.tsx

'use client'; // Mark this as a Client Component

import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl font-bold underline text-blue-500">Contact Us</h1>
      </div>
      <div className="flex justify-center items-center mt-10 gap-10">
        <button
          onClick={() => window.location.href = 'tel:9108075088'}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-phone"
          >
            <path d="M22 16.921v3a2 2 0 0 1-2.16 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M22 12.921v3a2 2 0 0 1-2.16 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M22 8.921v3a2 2 0 0 1-2.16 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Call Us</span>
        </button>
        <button
          onClick={() => window.open('https://t.me/yourtelegramhandle', '_blank')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-send"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 13 7 13 22 2" />
          </svg>
          <span>Telegram</span>
        </button>
        <button
          onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-message-circle"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-2.9 3.3 8.38 8.38 0 0 1-3.8-.9 8.5 8.5 0 0 1-3.3-2.9 8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 2.9-3.3 8.38 8.38 0 0 1 3.8-.9 8.5 8.5 0 0 1 3.3 2.9 8.38 8.38 0 0 1 .9 3.8 8.5 8.5 0 0 1 2.9 3.3z" />
          </svg>
          <span>WhatsApp</span>
        </button>
        <button
          onClick={() => window.location.href = 'mailto:convertias@gmail.com'}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>Email Us</span>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
