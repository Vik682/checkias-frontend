"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isNewDropdownOpen, setNewDropdownOpen] = useState(false);
  const [isOtpSent, setOtpSent] = useState(false); // New state for OTP sent

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
    setOtpSent(false); // Reset OTP state when modal is closed
  };

  const toggleNewDropdown = () => {
    setNewDropdownOpen(!isNewDropdownOpen);
  };

  // Handle Send OTP button click
  const handleSendOtp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOtpSent(true);
  };

  // Handle Continue button click (currently does nothing)
  const handleContinue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic for what happens after OTP is entered
    console.log('OTP submitted');
  };

  return (
    <div className="bg-white shadow-md flex flex-col h-25 px-4 py-3">
      {/* Top section with login button */}
      <div className="flex items-center justify-between h-1/4">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IAS_Symbol.svg/220px-IAS_Symbol.svg.png"
            alt="IAS Symbol"
            className="h-8 w-8" // Increased logo size
          />
        </div>
        <button
          onClick={toggleLoginModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>

      {/* Bottom section with navigation buttons */}
      <div className="flex-grow flex items-end">
        <ul className="flex flex-wrap space-x-4 ml-auto">
          <li className="relative">
            <button
              onClick={toggleNewDropdown}
              className="bg-orange-100 text-orange-500 px-3 py-1 rounded-sm font-medium hover:bg-orange-200 flex items-center"
            >
              New
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
            {isNewDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <li>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    Prelims
                  </button>
                </li>
                {/* Add more items if needed */}
              </ul>
            )}
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">CSAT</button>
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">Notes</button>
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">MAW</button>
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">Videos</button>
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">Toppers Copies</button>
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">Contact Us</button>
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">Reviews</button>
          </li>
          <li>
            <button className="font-medium hover:text-blue-600">Careers</button>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
