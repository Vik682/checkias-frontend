"use client";

import React, { useState } from 'react';
import { FaSync } from 'react-icons/fa';

const RequestPayment = () => {
  // State to manage button and message display
  const [isRequested, setIsRequested] = useState(false);

  // Static data for demonstration
  const paymentsData = [
    { amountPaid: 120, date: '2024-09-01' },
    { amountPaid: 75, date: '2024-09-05' },
    { amountPaid: 30, date: '2024-09-10' },
  ];

  // Handle request action
  const handleRequest = () => {
    setIsRequested(true);
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Request Payment</h1>
          <div className="mb-4">
            {!isRequested ? (
              <>
                <div className="mb-4 flex justify-end">
                  <button 
                    className={`flex items-center px-4 py-2 rounded-md shadow-md ${isRequested ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    onClick={handleRequest}
                    disabled={isRequested}
                  >
                    <FaSync className="mr-2" />
                    Request Payment
                  </button>
                </div>
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
              </>
            ) : (
              <div className="text-red-500">
                <p>Your request is being processed.</p>
                <p>Payment is released after every 100 questions. Kindly raise a request once 100 questions are done.</p>
                <p>P.S: It may take 6-7 days for the review team to go through your evaluated copies and process the payment.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestPayment;
