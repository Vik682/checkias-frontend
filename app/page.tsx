'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import handler  from '@/api/login/route';

const Login = () => {
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    handler(email)
    // // Simulate OTP sending process
    // console.log('OTP sent to email:', email);
    setIsOtpSent(true); // OTP has been sent
  };

  const handleOtpSubmit = (e: FormEvent) => {
    e.preventDefault();
    handler(email,otp)
    // // Handle OTP verification here
    // console.log('OTP submitted:', otp);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <div className="flex items-center mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
            <svg
              className="w-6 h-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.5a7.5 7.5 0 100 15A7.5 7.5 0 0012 4.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-blue-600 ml-2">login page</h2>
        </div>
        <form onSubmit={isOtpSent ? handleOtpSubmit : handleEmailSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          {isOtpSent && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                required
              />
              <p className="text-gray-600 text-xs mt-1">
                Please check the spam/promotions folder in case you donot see the OTP.
              </p>
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          >
            {isOtpSent ? 'CONTINUE' : 'SEND OTP TO MAIL'}
            <span className="pl-2">{isOtpSent ? '→' : ''}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
