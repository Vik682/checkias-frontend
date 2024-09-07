"use client";

import React, { useState } from 'react';
import { FaSync } from 'react-icons/fa';

const Payments = () => {
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage textarea content
  const [reply, setReply] = useState('');

  // Static data for demonstration
  const paymentsData = [
    { amountPaid: 120, date: '2024-09-01' },
    { amountPaid: 75, date: '2024-09-05' },
    { amountPaid: 30, date: '2024-09-10' },
  ];

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
    console.log('Payments submitted:', reply);
    // Reset state or handle form submission here
    setIsEditing(false);
    setReply('');
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Payments</h1>
          <div className="mb-4">
            <button 
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              onClick={toggleEditing}
            >
              <FaSync className="mr-2" />
              Refresh
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 border-b border-gray-300">
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Amount Paid</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Date</th>
                </tr>
              </thead>
              <tbody>
                {paymentsData.map((payment, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">{payment.amountPaid}</td>
                    <td className="py-3 px-4 text-gray-600">{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payments;
