'use client';

import React, { useState, useEffect } from 'react';
import { FaSync } from 'react-icons/fa';

const CallHistory = () => {
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage textarea content
  const [reply, setReply] = useState('');

  // State to track timestamps
  const [timestamps, setTimestamps] = useState<{ completedOn: string[], cancelledOn: string[] }>({
    completedOn: [],
    cancelledOn: [],
  });

  // Static data for demonstration
  const data = [
    {
      uid: '1',
      topic: 'Billing Inquiry',
      description: 'User inquired about recent charges',
      userTimeSlot: '2024-09-05T10:00:00Z',
      adminMessage: 'Reviewed billing details',
      messageToAdmin: 'Please review the account status.',
      completedOn: '123',
      cancelledOn: '',
    },
    {
      uid: '2',
      topic: 'Service Issue',
      description: 'Service interruption reported',
      userTimeSlot: '2024-09-06T14:00:00Z',
      adminMessage: 'Issue escalated to support team',
      messageToAdmin: 'Urgent attention required.',
      completedOn: '',
      cancelledOn: '',
    },
    // Add more entries as needed
  ];

  // Update timestamps state based on data length
  useEffect(() => {
    setTimestamps({
      completedOn: Array(data.length).fill(''),
      cancelledOn: Array(data.length).fill(''),
    });
  }, [data.length]);

  // Handle toggle of timestamps
  const handleToggle = (index: number, type: 'completedOn' | 'cancelledOn') => {
    setTimestamps((prev) => {
      const newTimestamps = { ...prev };
      const currentTimestamp = new Date().toISOString();
      newTimestamps[type][index] = newTimestamps[type][index] ? '' : currentTimestamp;
      return newTimestamps;
    });
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
          <h1 className="text-3xl font-bold mb-4">Call History</h1>
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
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">UID</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Topic</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Description</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">User Time Slot</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Admin Message</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Message to Admin</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Completed On</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Cancelled On</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">{item.uid}</td>
                    <td className="py-3 px-4 text-gray-600">{item.topic}</td>
                    <td className="py-3 px-4 text-gray-600">{item.description}</td>
                    <td className="py-3 px-4 text-gray-600">{item.userTimeSlot}</td>
                    <td className="py-3 px-4 text-gray-600">{item.adminMessage}</td>
                    <td className="py-3 px-4 text-gray-600">{item.messageToAdmin}</td>
                    <td className="py-3 px-4">
                      {timestamps.completedOn[index] ? (
                        `Completed on ${new Date(timestamps.completedOn[index]).toLocaleString()}`
                      ) : (
                        <button
                          onClick={() => handleToggle(index, 'completedOn')}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                        >
                          Mark as Completed
                        </button>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {timestamps.cancelledOn[index] ? (
                        `Cancelled on ${new Date(timestamps.cancelledOn[index]).toLocaleString()}`
                      ) : (
                        <button
                          onClick={() => handleToggle(index, 'cancelledOn')}
                          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
                        >
                          Mark as Cancelled
                        </button>
                      )}
                    </td>
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

export default CallHistory;
