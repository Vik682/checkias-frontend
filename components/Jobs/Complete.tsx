"use client"; // This directive tells Next.js that this is a Client Component
import React, { useState } from "react";
export interface FormState {
  name: string;
  prelimsAttempts: number | null;
  interviewsAppeared: number | null;
  mobileNumber: string;
  mainsAttempts: number | null;
  optionalSubject: string;
  securedRank: number | null;
  evaluator: boolean;
  mentor: boolean;
  contentCreator: boolean;
  language: number;
  evaluationLanguage: string;
  experience: string;
  existingStudentMailId: string;
}
interface Props {
  prevState: () => void;
  successCallback:()=>void;
}
const Complete = ({ prevState, successCallback}: Props) => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    prelimsAttempts: null,
    interviewsAppeared: null,
    mobileNumber: "",
    mainsAttempts: null,
    optionalSubject: "",
    securedRank: null,
    evaluator: false,
    mentor: false,
    contentCreator: false,
    language: -1,
    evaluationLanguage: "",
    experience: "",
    existingStudentMailId: "",
  });

  const handleSubmit=()=>{
    successCallback();
    console.log("Submitted")
  }


  return (
    <div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      {/* Complete Step Fields */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Complete</h2>
      <p className="text-gray-700 mb-4">
        Review your information and complete the application.
      </p>
      <div className="space-y-4">
        <div className="text-gray-700 mb-4">
          <strong>Name:</strong> {formState.name}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Prelims Attempts:</strong> {formState.prelimsAttempts}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Interviews Appeared:</strong> {formState.interviewsAppeared}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Mobile Number:</strong> {formState.mobileNumber}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Mains Attempts:</strong> {formState.mainsAttempts}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Optional Subject:</strong> {formState.optionalSubject}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Secured Rank:</strong> {formState.securedRank}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Roles:</strong>
          {/* {get role here} */}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Evaluation Language:</strong> {formState.evaluationLanguage}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Experience:</strong> {formState.experience}
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Existing Student Mail Id:</strong>{" "}
          {formState.existingStudentMailId}
        </div>
      </div>
      <div className="text-center">
        <p className="mt-2 text-sm text-gray-600">
          Please upload your Marks Sheet by clicking on the button below.
        </p>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Upload
        </button>
      </div>
      

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
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Complete;
