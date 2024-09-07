// components/Home/Notes.tsx

'use client'; // Mark this as a Client Component

import React from 'react';

// Define the Note Type
interface Note {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  likes: number;
}

// NoteCard Component
const NoteCard: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-4 max-w-xs mx-auto">
      <div className="text-xl font-bold">{note.title}</div>
      <div className="text-gray-600 text-sm">{note.description}</div>
      <div className="text-lg font-bold">
        {note.price} <span className="line-through">{note.originalPrice}</span> (Including GST)
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM14 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z"></path>
        </svg>
        <p className="text-gray-600 text-sm">{note.likes} likes</p>
      </div>
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md">
        View Details & Subscribe
      </button>
    </div>
  );
};

// Note Data with Additional Entries
const notesData: Note[] = [
  {
    title: "Mains Diamonds - CA Model Answers",
    description: "Model Answers from Current Affairs Topics. Must for Revision (Monthly Compilation)",
    price: "₹1,999",
    originalPrice: "₹4,999",
    likes: 613,
  },
  {
    title: "Mains 2025 Diamonds (New)",
    description: "Model Answers from Current Affairs Topics. Must for Revision (Monthly Compilation)",
    price: "₹1,999",
    originalPrice: "₹4,999",
    likes: 254,
  },
  {
    title: "Prelims Strategy Guide",
    description: "Comprehensive strategy guide for the upcoming Prelims. Includes tips and resources.",
    price: "₹1,499",
    originalPrice: "₹3,499",
    likes: 389,
  },
  {
    title: "Essay Writing Techniques",
    description: "Master essay writing with expert techniques and sample essays.",
    price: "₹899",
    originalPrice: "₹2,499",
    likes: 198,
  },
  {
    title: "Essay Writing Techniques",
    description: "Master essay writing with expert techniques and sample essays.",
    price: "₹899",
    originalPrice: "₹2,499",
    likes: 198,
  },
  {
    title: "Essay Writing Techniques",
    description: "Master essay writing with expert techniques and sample essays.",
    price: "₹899",
    originalPrice: "₹2,499",
    likes: 198,
  },
  {
    title: "Essay Writing Techniques",
    description: "Master essay writing with expert techniques and sample essays.",
    price: "₹899",
    originalPrice: "₹2,499",
    likes: 198,
  },
  {
    title: "Essay Writing Techniques",
    description: "Master essay writing with expert techniques and sample essays.",
    price: "₹899",
    originalPrice: "₹2,499",
    likes: 198,
  },

  // Add more notes here if needed
];

// Notes Component
const Notes: React.FC = () => {
  return (
    <main className="flex flex-col h-screen bg-gray-100 p-4">
      {/* Heading for Notes Modules Section */}
      <header className="text-xl font-bold mb-4">
        Notes Modules
      </header>

      {/* Flex Container for Note Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-grow">
        {notesData.map((note, index) => (
          <NoteCard key={index} note={note} />
        ))}
      </div>
    </main>
  );
};

export default Notes;
