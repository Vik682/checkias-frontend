'use client';

import React, { useState, useEffect } from 'react';
import { FaSync, FaPen } from 'react-icons/fa';

const MentorshipCalls = () => {
  // State to manage textarea content
  const [tempMessage, setTempMessage] = useState<string>('');
  // State to manage the index of the item being edited
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // State to track timestamps
  const [timestamps, setTimestamps] = useState<{ completedOn: string[], cancelledOn: string[] }>({
    completedOn: [],
    cancelledOn: [],
  });

  // Static data for demonstration
  const [data, setData] = useState([
    {
      uid: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      userPhoneNumber: '+1234567890',
      optional: 'N/A',
      topic: 'Billing Inquiry',
      description: 'User inquired about recent charges',
      userTimeSlot: '2024-09-05T10:00:00Z',
      adminMessage: 'Reviewed billing details',
      messageToAdmin: 'Please review the account status.',
      completedOn: '123',
      cancelledOn: '',
      assignedAt: '2024-09-01T08:00:00Z',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      userPhoneNumber: '+0987654321',
      optional: 'N/A',
      topic: 'Service Issue',
      description: 'Service interruption reported',
      userTimeSlot: '2024-09-06T14:00:00Z',
      adminMessage: 'Issue escalated to support team',
      messageToAdmin: 'Urgent attention required.',
      completedOn: '',
      cancelledOn: '',
      assignedAt: '2024-09-02T09:00:00Z',
    },
    // Add more entries as needed
  ]);

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

  // Handle edit button click
  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setTempMessage(data[index].messageToAdmin);
  };

  // Handle message change
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTempMessage(event.target.value);
  };

  // Handle submit action for message
  const handleMessageSubmit = () => {
    if (editIndex !== null) {
      setData((prev) => {
        const newData = [...prev];
        newData[editIndex] = { ...newData[editIndex], messageToAdmin: tempMessage };
        return newData;
      });
      setEditIndex(null);
      setTempMessage('');
    }
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Mentorship Calls</h1>
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
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Name</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Email</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">UID</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">User Phone Number</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Optional</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Topic</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Description</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">User Time Slot</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Admin Message</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Message to Admin</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Cancel</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Mark as Complete</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Assigned At</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">{item.name}</td>
                    <td className="py-3 px-4 text-gray-600">{item.email}</td>
                    <td className="py-3 px-4 text-gray-600">{item.uid}</td>
                    <td className="py-3 px-4 text-gray-600">{item.userPhoneNumber}</td>
                    <td className="py-3 px-4 text-gray-600">{item.optional}</td>
                    <td className="py-3 px-4 text-gray-600">{item.topic}</td>
                    <td className="py-3 px-4 text-gray-600">{item.description}</td>
                    <td className="py-3 px-4 text-gray-600">{item.userTimeSlot}</td>
                    <td className="py-3 px-4 text-gray-600">{item.adminMessage}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {editIndex === index ? (
                        <div>
                          <textarea
                            value={tempMessage}
                            onChange={handleMessageChange}
                            className="border p-2 w-full"
                          />
                          <button
                            onClick={handleMessageSubmit}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                          >
                            Submit
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>{item.messageToAdmin}</span>
                          {editIndex === null && (
                            <button
                              onClick={() => handleEditClick(index)}
                              className="ml-2 text-blue-500 hover:text-blue-700"
                            >
                              <FaPen />
                            </button>
                          )}
                        </div>
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
                          Cancel
                        </button>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {timestamps.completedOn[index] ? (
                        `Completed on ${new Date(timestamps.completedOn[index]).toLocaleString()}`
                      ) : (
                        <button
                          onClick={() => handleToggle(index, 'completedOn')}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                        >
                          Mark as Complete
                        </button>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{new Date(item.assignedAt).toLocaleString()}</td>
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

export default MentorshipCalls;
