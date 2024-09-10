"use client"; // This directive tells Next.js that this is a Client Component

import React from 'react';

const Header = () => {
  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logged out');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 z-50 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" // Replace with your logo URL
            alt="Logo"
            className="w-12 h-12" // Adjust size as needed
          />
        </div>

        {/* Spacer to push logout button to the right */}
        <div className="flex-grow"></div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
