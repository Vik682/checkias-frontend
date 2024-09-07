'use client'; // Mark this as a Client Component

import React from 'react';

// VideoCard Component
const VideoCard: React.FC<{
  title: string;
  description: string;
  price: string;
  originalPrice: string;
}> = ({ title, description, price, originalPrice,  }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
      {/* Likes Icon and Count */}
      <div className="absolute top-4 left-4 flex items-center text-gray-500">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM14 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z"></path>
        </svg>
      </div>

      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <p className="text-gray-600 text-sm mb-4">
        {price} <span className="line-through text-red-500">{originalPrice}</span> (Including GST)
      </p>
      <div className="text-center">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          View Library
        </button>
      </div>
    </div>
  );
};

// Videos Component
const Videos: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center my-6">PYQ Modules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <VideoCard
          title="GS4 PYQs Solved"
          description="ConvertIas video subscription"
          price="₹799"
          originalPrice="₹999"
          
        />
        <VideoCard
          title="GS4 - Complete PYQ Solved"
          description="Complete PYQ Solution Theme Wise - IPS Ankita Mishra"
          price="₹799"
          originalPrice="₹999"
        />
        {/* Add more VideoCard components as needed */}
      </div>
    </div>
  );
};

export default Videos;
