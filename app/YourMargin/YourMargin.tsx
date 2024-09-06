"use client";

import React, { useState } from 'react';
import { FaSync } from 'react-icons/fa';

const YourMargin = () => {
  // State for managing the daily evaluation bandwidth
  const [bandwidth, setBandwidth] = useState(40);
  // State for managing the reason for stopping assignments
  const [reason, setReason] = useState<string>('');
  // State for managing the form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change in bandwidth input
  const handleBandwidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBandwidth(Number(event.target.value));
  };

  // Handle change in reason select
  const handleReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Bandwidth:', bandwidth);
    console.log('Reason:', reason);
    setIsSubmitted(true);
  };

  // Handle "Stop Assigning" button click
  const handleStopAssigning = () => {
    if (reason) {
      console.log('Stopping assignments due to:', reason);
      // Here you could handle the logic to stop assigning, e.g., sending this info to a server
    } else {
      alert('Please select a reason before stopping assignments.');
    }
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Your Margin</h1>
          
          {/* Submit Button - Positioned above the content */}
          <div className="flex justify-end mb-4">
            <button 
              className={`flex items-center px-4 py-2 rounded-md shadow-md ${isSubmitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              onClick={handleSubmit}
              disabled={isSubmitted}
            >
              <FaSync className="mr-2" />
              {isSubmitted ? 'Submitted' : 'Submit'}
            </button>
          </div>
          
          {/* Content */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-lg">Mention the number of questions you can evaluate on a daily basis.</div>
            <div className="font-normal text-sm">P.S: You do not need to update it daily. Update only when you want to change it.</div>
            <div className="flex gap-2 items-center">
              <label htmlFor="bandWidth" className="font-medium">Your Bandwidth</label>
              <input 
                type="number" 
                id="bandWidth" 
                className="border border-gray-300 rounded px-3 py-2"
                value={bandwidth}
                onChange={handleBandwidthChange}
              />
            </div>
            <div className="font-normal text-sm">If you're unavailable, choose your reason from the list and click 'Stop Assigning'. The assigning team won't give you questions until you update the margin again.</div>
            <div className="flex gap-2 items-center">
              <label htmlFor="reason" className="font-medium">Reason</label>
              <select 
                id="reason" 
                className="border border-gray-300 rounded px-3 py-2"
                value={reason}
                onChange={handleReasonChange}
              >
                <option value="">Select a reason</option>
                <option value="vacation">Vacation</option>
                <option value="sick">Sick</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            {/* Stop Assigning Button - Positioned below the content */}
            <div className="flex justify-end">
              <button
                className={`px-4 py-2 rounded-md shadow-md ${reason ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 cursor-not-allowed'}`}
                onClick={handleStopAssigning}
                disabled={!reason}
              >
                Stop Assigning
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YourMargin;
