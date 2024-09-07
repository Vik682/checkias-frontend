// components/Home/NewPrelims.tsx

'use client'; // Mark this as a Client Component

import React from 'react';

const NewPrelims: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      {/* Heading for Prelims Modules Section */}
      <header className="text-xl font-bold mb-4">
        Prelims Modules
      </header>

      {/* Flex Container for Button and Card */}
      <div className="flex gap-4">
        {/* Segment for UPSC CSE - Prelims Button */}
        <div className="flex-none">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md">
            UPSC CSE - Prelims
          </button>
        </div>

        {/* Segment for Prelims Test Series Card */}
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-2 flex-grow max-w-md">
          <div className="text-xl font-bold">Prelims Test Series 2025</div>
          <div className="text-gray-600 text-sm">Comprehensive Prelims Practice! (Launch Offer - Lowest Price for FIRST 100 Students)</div>
          <div className="text-lg font-bold">₹2,499 <span className="line-through">₹6,999</span> (Including GST)</div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md">
            View Details & Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPrelims;
