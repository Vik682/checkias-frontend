"use client"; // This directive tells Next.js that this is a Client Component
import React, { useState } from "react";

interface FormState {
  name: string;
  prelimsAttempts: number | null;
  interviewsAppeared: number | null;
  mobileNumber: string;
  mainsAttempts: number | null;
  optionalSubject: string;
  securedRank: number | null;
}

interface Props{
    nextState:()=>void
}


const Information = ({nextState}:Props) => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    prelimsAttempts: 0,
    interviewsAppeared: 0,
    mobileNumber: "",
    mainsAttempts: 0,
    optionalSubject: "",
    securedRank: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, id } = event.target;

    if (type === "radio") {
      if (id === "securedRank-no") {
        setFormState((prevState) => ({
          ...prevState,
          securedRank: 0,
        }));
      }
      if (id === "securedRank-yes") {
        setFormState((prevState) => ({
          ...prevState,
          securedRank: 1,
        }));
      }
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };


  const nextClick=()=>{
    
    nextState()
  }

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Information Step Fields */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="prelimsAttempts"
            className="block text-gray-700 font-medium mb-2"
          >
            Number of Prelims Attempts
          </label>
          <input
            type="text"
            id="prelimsAttempts"
            name="prelimsAttempts"
            value={String(formState.prelimsAttempts)}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="interviewsAppeared"
            className="block text-gray-700 font-medium mb-2"
          >
            Number of Interviews Appeared
          </label>
          <input
            type="text"
            id="interviewsAppeared"
            name="interviewsAppeared"
            value={String(formState.interviewsAppeared)}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formState.mobileNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mainsAttempts"
            className="block text-gray-700 font-medium mb-2"
          >
            Number of Mains Attempts
          </label>
          <input
            type="text"
            id="mainsAttempts"
            name="mainsAttempts"
            value={String(formState.mainsAttempts)}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="optionalSubject"
            className="block text-gray-700 font-medium mb-2"
          >
            Optional Subject
          </label>
          <select
            id="optionalSubject"
            name="optionalSubject"
            value={formState.optionalSubject}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
          >
            <option value="" disabled>
              Select
            </option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Have you secured a rank in UPSC CSE or State PCS?
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="securedRank-yes"
              name="securedRank"
              value="yes"
              checked={formState.securedRank === 1}
              onChange={handleInputChange}
              className="mr-2 focus:ring-blue-500 focus:ring-1"
            />
            <label
              htmlFor="securedRank-yes"
              className="text-gray-700 font-medium"
            >
              Yes
            </label>
            <input
              type="radio"
              id="securedRank-no"
              name="securedRank"
              value="no"
              checked={formState.securedRank === 0}
              onChange={handleInputChange}
              className="ml-4 mr-2 focus:ring-blue-500 focus:ring-1"
            />
            <label
              htmlFor="securedRank-no"
              className="text-gray-700 font-medium"
            >
              No
            </label>
          </div>
        </div>
      </div>
      <button
          type="button"
          onClick={nextClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Next
        </button>
    </form>
  );
};

export default Information;
