// components/SideNavBar.jsx

"use client";

import React from 'react';

const SideNavBar = () => {
  const handleButtonClick = (action) => {
    console.log(action);
  };

  return (
    <div className="fixed top-0 left-0 w-48 bg-white text-black h-screen flex flex-col shadow-md z-40">
      {/* Logo Section */}
      <div className="flex items-center justify-center p-3 bg-white-200 border-b border-gray-300">
        <img
          src="/path-to-your-logo.png" // Replace with the path to your logo
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Modules Heading */}
      <div className="text-black w-full text-sm p-3 bg-gray-200 border-b border-gray-300">
        Modules
      </div>

      {/* Buttons Section */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => handleButtonClick('Updates & Support')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Updates & Support
          </button>
          <button
            onClick={() => handleButtonClick('Review Team Suggestion')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Review Team Suggestion
          </button>
          <button
            onClick={() => handleButtonClick('Answers')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Answers
          </button>
          <button
            onClick={() => handleButtonClick('Summary')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Summary
          </button>
          <button
            onClick={() => handleButtonClick('Payments')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Payments
          </button>
          <button
            onClick={() => handleButtonClick('Your Margin')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Your Margin
          </button>
          <button
            onClick={() => handleButtonClick('Your Profile')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Your Profile
          </button>
          <button
            onClick={() => handleButtonClick('Request Payment')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Request Payment
          </button>
          <button
            onClick={() => handleButtonClick('Mentorship Calls')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Mentorship Calls
          </button>
          <button
            onClick={() => handleButtonClick('Call History')}
            className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left"
          >
            Call History
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
