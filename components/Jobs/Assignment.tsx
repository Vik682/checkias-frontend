"use client"; // This directive tells Next.js that this is a Client Component
import React, { useState } from "react";

interface FormState {
  evaluationLanguage: string;
  experience: string;
  existingStudentMailId: string;
  language: number;
}
interface Props {
  prevState: () => void;
  nextState: () => void;
}
const Assignment = ({ prevState, nextState }: Props) => {
  const [formState, setFormState] = useState<FormState>({
    evaluationLanguage: "",
    experience: "",
    existingStudentMailId: "",
    language: -1,
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, id } = event.target;

    if (type === "checkbox") {
      if (id === "english") {
        setFormState((prevState) => ({
          ...prevState,

          language: 0,
        }));
      }
      if (id === "hindi") {
        setFormState((prevState) => ({
          ...prevState,

          language: 1,
        }));
      }
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Assignment Step Fields */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ASSIGNMENT</h2>
        <p className="text-gray-700 mb-4">
          Kindly select a medium to download and evaluate a sample answer copy.
        </p>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="english"
            checked={formState.language == 0}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label htmlFor="english" className="text-gray-700 mr-4">
            ENGLISH
          </label>
          <input
            type="checkbox"
            id="hindi"
            checked={formState.language == 1}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label htmlFor="hindi" className="text-gray-700">
            HINDI
          </label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
          <svg
            className="inline-block w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.12L12 13.88V4.12L6.12 9.12L2 5.06v10.18l4.12 4.12L12 15.88v-4.12l4.88 4.88z" />
          </svg>
          Download Assignment
        </button>
        <p className="text-gray-700 mb-4">Upload your evaluated copy</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
          Upload Answer Copy
        </button>
      </div>
      <div className="flex justify-between space-x-4 mt-4">
        <button
          type="button"
          onClick={prevState}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={nextState}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Assignment;
