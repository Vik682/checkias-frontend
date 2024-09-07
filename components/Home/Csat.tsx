// components/Home/Csat.tsx

'use client'; // Mark this as a Client Component

import React from 'react';

const Csat: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      {/* Heading for CSAT Section */}
      <h1 className="text-2xl font-bold mb-6">CSAT</h1>
      
      {/* Button Group */}
      <div className="flex gap-4 mb-4">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          CSAT
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Sessions
        </button>
      </div>

      {/* Flex Container for the Two CSAT Cards */}
      <div className="flex gap-4">
        {/* CSAT 2025 (New Batch) Card */}
        <div className="bg-white rounded-lg shadow-md p-6 w-96">
          <h2 className="text-xl font-bold mb-2">CSAT - 2025 (New Batch)</h2>
          <p className="text-gray-600 text-sm mb-4">CSAT - Comprehensive Preparation! (Batch Starting from 14th Sept)</p>
          <p className="text-gray-600 text-sm mb-4">₹2,499 <span className="line-through">₹6,999</span> (Including GST)</p>
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM14 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z"></path>
            </svg>
            <p className="text-gray-600 text-sm">14 likes</p>
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            View Details & Subscribe
          </button>
        </div>

        {/* CSAT 2025 Card */}
        <div className="bg-white rounded-lg shadow-md p-6 w-96">
          <h2 className="text-xl font-bold mb-2">CSAT - 2025</h2>
          <p className="text-gray-600 text-sm mb-4">CSAT - Comprehensive Preparation!</p>
          <p className="text-gray-600 text-sm mb-4">₹2,999 <span className="line-through">₹6,999</span> (Including GST)</p>
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM14 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z"></path>
            </svg>
            <p className="text-gray-600 text-sm">88 likes</p>
          </div>
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
            Seats Full
          </button>
        </div>
      </div>
    </div>
  );
};

export default Csat;
