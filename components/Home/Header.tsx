"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported
import Link from 'next/link'

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isOtpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  
  const router = useRouter();

  // Toggle the login modal's visibility
  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
    setOtpSent(false); // Reset OTP state when modal is opened
    setError(null);
    setMessage(null);
  };

  // Handle Send OTP button click
  const handleSendOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    try {
      await axios.post('/api/send-otp', { email }); // Replace with your API endpoint
      setOtpSent(true);
      setMessage('OTP sent successfully to your email');
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || 'Error sending OTP';
      setError(errorMessage);
      console.error('Error sending OTP:', err);
    }
  };

  // Handle Continue button click
  const handleContinue = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post('/api/verify-otp', { email, otp }); // Replace with your API endpoint
      if (response.status === 200) {
        setMessage('OTP verified successfully');
        router.push('/Evaluator'); // Redirect after successful OTP verification
      } else {
        setError('Invalid OTP');
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || 'Error verifying OTP';
      setError(errorMessage);
      console.error('Error verifying OTP:', err);
    }
  };

  return (
    <div className="bg-white shadow-md flex flex-col h-25 px-4 py-3">
      {/* Top section with login button */}
      <div className="flex items-center justify-between h-1/4">
        <div className="flex items-center">
          <img
            src=""
            alt="IAS Symbol"
            className="h-8 w-8" // Adjust logo size
          />
        </div>
        <button
          onClick={toggleLoginModal} // Added click handler to open login modal
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>

      {/* Bottom section with navigation buttons */}
      <div className="flex-grow flex items-end">
        <ul className="flex flex-wrap space-x-10 ml-auto">
          <li>
            <button
              onClick={() => router.push('/Home/EvaluationPlans')}
              className="font-medium text-violet-500 hover:text-blue-600">
              Evaluation Plans
            </button>
          </li>
          <li className="relative">
            <button
              onClick={() => router.push('/Home/NewPrelims')}
              className="bg-orange-100 text-orange-500 px-3 py-1 rounded-sm font-medium hover:bg-orange-200 flex items-center"
            >
              New Prelims
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/Home/Csat')}
              className="font-medium hover:text-blue-600"
            >
              CSAT
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/Home/Notes')}
              className="font-medium hover:text-blue-600"
            >
              Notes
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/Home/MAW')}
              className="font-medium hover:text-blue-600"
            >
              MAW
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/Home/Videos')}
              className="font-medium hover:text-blue-600"
            >
              Videos
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/Home/ToppersCopies')}
              className="font-medium hover:text-blue-600"
            >
              Toppers Copies
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/Home/ContactUs')}
              className="font-medium hover:text-blue-600"
            >
              Contact Us
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/Home/Reviews')}
              className="font-medium hover:text-blue-600"
            >
              Reviews
            </button>
          </li>
          <li>
            <Link href="https://jobs.checkias.com"
              className="font-medium hover:text-blue-600"
            >
              Careers
            </Link>
          </li>
        </ul>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md relative w-96">
            <button
              onClick={toggleLoginModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IAS_Symbol.svg/220px-IAS_Symbol.svg.png"
                alt="IAS Symbol"
                className="h-12 w-12 mb-4" // Adjust logo size if needed
              />
              <form
                className="w-full flex flex-col items-center"
                onSubmit={isOtpSent ? handleContinue : handleSendOtp}
              >
                <div className="mb-4 w-full">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                {!isOtpSent ? (
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send OTP
                  </button>
                ) : (
                  <div className="w-full flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="mb-4 mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Continue
                    </button>
                  </div>
                )}
              </form>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {message && <p className="text-green-500 mt-2">{message}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
