"use client";

import React, { useState } from 'react';
import { FaSync } from 'react-icons/fa';

const Summary = () => {
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage textarea content
  const [reply, setReply] = useState('');

  // Static data for demonstration
  const data = {
    avgRating: 4.5,
    qPaid: 120,
    ePaid: 75,
    opPaid: 30, // Added Op Paid data
    qRemaining: 30,
    eRemaining: 20,
    oRemaining: 15,
    currentMonth: 10, // Sum of Q + O for the current month
  };

  // Toggle editing mode
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // Handle change in textarea content
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.target.value);
  };

  // Handle submit action
  const handleSubmit = () => {
    console.log('Summary submitted:', reply);
    // Reset state or handle form submission here
    setIsEditing(false);
    setReply('');
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Summary</h1>
          <div className="mb-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
              <FaSync className="mr-2" />
              Refresh
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 border-b border-gray-300">
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Avg Rating</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Q Paid</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">E Paid</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Op Paid</th> {/* Added Op Paid */}
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Q Remaining</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">E Remaining</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">O Remaining</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Currently Month (Q+O)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-600">{data.avgRating}</td>
                  <td className="py-3 px-4 text-gray-600">{data.qPaid}</td>
                  <td className="py-3 px-4 text-gray-600">{data.ePaid}</td>
                  <td className="py-3 px-4 text-gray-600">{data.opPaid}</td> {/* Added Op Paid */}
                  <td className="py-3 px-4 text-gray-600">{data.qRemaining}</td>
                  <td className="py-3 px-4 text-gray-600">{data.eRemaining}</td>
                  <td className="py-3 px-4 text-gray-600">{data.oRemaining}</td>
                  <td className="py-3 px-4 text-gray-600">{data.currentMonth}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Summary;
