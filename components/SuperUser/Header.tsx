"use client"; // This directive tells Next.js that this is a Client Component
import Image from 'next/image';


import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logged out');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 z-50 flex items-center justify-between">
        {/* Other Content (if any) */}
        <div className="flex-grow"></div> {/* Spacer to push profile section to the right */}

        {/* Profile Picture and Dropdown Section */}
        <div className="relative flex items-center">
          <Image
            src="/images/abc.webp" // Replace with your profile picture URL
            alt="Profile"
            width={40}  // Specify the width of the image (in pixels)
            height={40} // Specify the height of the image (in pixels)
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
          <button
            onClick={toggleDropdown}
            className="ml-2 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <FaCaretDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Dropdown Menu (Now aligned to the rightmost corner) */}
        {isOpen && (
          <div className="absolute right-0 mt-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
