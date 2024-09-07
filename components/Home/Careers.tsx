// components/Home/Careers.tsx

'use client'; // Mark this as a Client Component

import React, { useState } from 'react';

// Define an interface for the form state
interface FormState {
  evaluator: boolean;
  mentorship: boolean;
  reviews: boolean;
}

const Careers: React.FC = () => {
  // Initialize form state
  const [formState, setFormState] = useState<FormState>({
    evaluator: false,
    mentorship: false,
    reviews: false,
  });

  // Handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // For now, just log the form data to the console
    console.log('Form Submitted:', formState);
    // Here you would typically handle the form submission, e.g., send data to a server
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Careers Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="evaluator"
            name="evaluator"
            checked={formState.evaluator}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="evaluator" className="ml-2 text-gray-700">
            Evaluator
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="mentorship"
            name="mentorship"
            checked={formState.mentorship}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="mentorship" className="ml-2 text-gray-700">
            Mentorship
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="reviews"
            name="reviews"
            checked={formState.reviews}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="reviews" className="ml-2 text-gray-700">
            Reviews
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default Careers;
