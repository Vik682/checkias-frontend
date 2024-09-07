'use client'; // Mark this as a Client Component

import React from 'react';

// ToppersCopy Component
const ToppersCopy: React.FC<{
  name: string;
  rank: string;
  examYear: string;
  likes: number;
  optional: string;
  imageUrl: string;
}> = ({ name, rank, examYear, likes, optional, imageUrl }) => {
  return (
    <div className="relative bg-purple-500 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      {/* Likes Icon and Count */}
      <div className="absolute top-4 left-4 flex items-center text-white">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L7.414 11H13a1 1 0 100-2H7.414l2.293-2.293z"></path>
        </svg>
        <span>{likes}</span>
      </div>

      <div className="text-center text-white font-bold text-3xl">{rank}</div>
      <div className="text-center text-white font-bold text-lg mt-2">{examYear}</div>
      <div className="flex justify-center mt-4">
        <img src={imageUrl} alt={`${name}`} className="rounded-full w-24 h-24" />
      </div>
      <div className="text-center text-white font-bold text-xl mt-4">{name}</div>
      <div className="text-center text-white mt-2">Optional: {optional}</div>
      <div className="text-center mt-4">
        <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded-full hover:bg-purple-100">
          View Copies
        </button>
      </div>
    </div>
  );
};

// Array of Toppers Copy Details
const toppersCopiesDetails = [
  {
    name: "Ishita Rathi",
    rank: "AIR 8",
    examYear: "UPSC CSE 2021",
    likes: 498,
    optional: "ECONOMICS",
    imageUrl: "https://www.insightsonindia.com/wp-content/uploads/2021/10/Ishita-Rathi-AIR-8-UPSC-CSE-2021-Topper.jpg",
  },
  {
    name: "John Doe",
    rank: "AIR 5",
    examYear: "UPSC CSE 2022",
    likes: 350,
    optional: "GEOGRAPHY",
    imageUrl: "https://example.com/john_doe.jpg",
  },
  // Add more details here as needed
];

// ToppersCopies Component
const ToppersCopies: React.FC = () => {
  return (
    <div className="bg-violet-800 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-white text-center my-6">Toppers from CheckIAS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toppersCopiesDetails.map((details, index) => (
          <ToppersCopy
            key={index}
            name={details.name}
            rank={details.rank}
            examYear={details.examYear}
            likes={details.likes}
            optional={details.optional}
            imageUrl={details.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ToppersCopies;
