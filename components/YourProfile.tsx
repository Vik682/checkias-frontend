"use client";

import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';

const YourProfile = () => {
  // State to manage profile form data
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
  });

  // State to manage button blur
  const [isBlurred, setIsBlurred] = useState(false);

  // Handle change in profile input fields
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit action
  const handleSubmit = () => {
    console.log('Profile submitted:', profileData);
    // Optionally handle form submission logic here
    setIsBlurred(true);
    // Reset blur after a short delay (e.g., for visual feedback)
    setTimeout(() => setIsBlurred(false), 2000);
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          {/* Submit button placed above profile details */}
          <div className="flex justify-end mb-6">
            <button
              className={`flex items-center px-4 py-2 rounded-md shadow-md ${isBlurred ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}
              onClick={handleSubmit}
              disabled={isBlurred}
            >
              <FaSave className="mr-2" />
              {isBlurred ? 'Submitted' : 'Submit'}
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={profileData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={profileData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={profileData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YourProfile;
