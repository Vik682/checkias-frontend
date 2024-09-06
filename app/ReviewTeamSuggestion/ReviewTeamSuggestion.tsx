"use client";

import React, { useState } from 'react';
import { FaSync, FaPen } from 'react-icons/fa';

const ReviewTeamSuggestion = () => {
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage textarea content
  const [reply, setReply] = useState('');
  
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
    console.log('Reply submitted:', reply);
    // Reset state or handle form submission here
    setIsEditing(false);
    setReply('');
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Review Team Suggestion</h1>
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
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Comment</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Text</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-bold">Your Reply</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-600">Example comment here...</td>
                  <td className="py-3 px-4 text-gray-600">Example text here...</td>
                  <td className="py-3 px-4 relative">
                    {isEditing ? (
                      <div>
                        <textarea
                          className="w-full border border-gray-300 rounded-md p-2 mb-2"
                          placeholder="Write your reply..."
                          value={reply}
                          onChange={handleChange}
                          autoFocus
                        ></textarea>
                        {reply && (
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    ) : (
                      <div
                        className="flex items-center text-gray-600 cursor-pointer"
                        onClick={toggleEditing}
                      >
                        <FaPen className="mr-2" />
                        Click to write a reply
                      </div>
                    )}
                  </td>
                </tr>
                {/* Repeat rows as necessary */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewTeamSuggestion;
