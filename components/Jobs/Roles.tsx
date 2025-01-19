"use client"; // This directive tells Next.js that this is a Client Component
import React, { useState } from "react";
interface FormState {
  evaluator: boolean;
  mentor: boolean;
  contentCreator: boolean;
  evaluationLanguage: string;
  experience: string;
  existingStudentMailId: string;
}

interface Props {
  prevState: () => void;
  nextState: () => void;
}

const Roles = ({ prevState, nextState }: Props) => {
  const [formState, setFormState] = useState<FormState>({
    evaluator: false,
    mentor: false,
    contentCreator: false,
    evaluationLanguage: "",
    experience: "",
    existingStudentMailId: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, id } = event.target;

    if (type === "checkbox") {
      if (id === "evaluator") {
        setFormState((prevState) => ({
          ...prevState,
          [id]: !formState.evaluator,
        }));
      }
      if (id === "mentor") {
        setFormState((prevState) => ({
          ...prevState,
          [id]: !formState.mentor,
        }));
      }
      if (id === "contentCreator") {
        setFormState((prevState) => ({
          ...prevState,
          [id]: !formState.contentCreator,
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
    <div className="flex flex-col space-y-4">
      {/* Roles Step Fields */}
      <div className="font-bold text-xl">ROLES YOU'RE LOOKING FOR</div>
      <div className="flex space-x-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="evaluator"
            checked={formState.evaluator == true}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
          />
          <label
            htmlFor="evaluator"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Evaluator
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="mentor"
            checked={formState.mentor == true}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
          />
          <label
            htmlFor="mentor"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Mentor
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="contentCreator"
            checked={formState.contentCreator == true}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
          />
          <label
            htmlFor="contentCreator"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Content Creator
          </label>
        </div>
      </div>

      <div>
        <label
          htmlFor="evaluationLanguage"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Evaluation Language
        </label>
        <select
          id="evaluationLanguage"
          name="evaluationLanguage"
          value={formState.evaluationLanguage}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Select</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="experience"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          value={formState.experience}
          onChange={handleInputChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
          rows={4}
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="existingStudentMailId"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Existing Student Mail Id
        </label>
        <input
          type="email"
          id="existingStudentMailId"
          name="existingStudentMailId"
          value={formState.existingStudentMailId}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="(Only if you were Convert IAS student before)"
        />
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

export default Roles;
