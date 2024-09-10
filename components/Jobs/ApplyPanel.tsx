'use client'; // This directive tells Next.js that this is a Client Component

import React, { useState } from 'react';
import ProgressBar from '@/components/Jobs/ProgressBar'; // Ensure the path is correct

interface FormState {
  name: string;
  prelimsAttempts: string;
  interviewsAppeared: string;
  mobileNumber: string;
  mainsAttempts: string;
  optionalSubject: string;
  securedRank: string;
  roles: {
    evaluator: boolean;
    mentor: boolean;
    contentCreator: boolean;
    english: boolean;
    hindi: boolean;
  };
  evaluationLanguage: string;
  experience: string;
  existingStudentMailId: string;
}

const steps = ["Information", "Roles", "Assignment", "Complete"];

const ApplyPanel: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    prelimsAttempts: '',
    interviewsAppeared: '',
    mobileNumber: '',
    mainsAttempts: '',
    optionalSubject: '',
    securedRank: '',
    roles: {
      evaluator: false,
      mentor: false,
      contentCreator: false,
      english: false,
      hindi: false,
    },
    evaluationLanguage: '',
    experience: '',
    existingStudentMailId: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked, id } = event.target;

    if (type === 'checkbox') {
      if (id in formState.roles) {
        setFormState(prevState => ({
          ...prevState,
          roles: {
            ...prevState.roles,
            [id]: checked
          }
        }));
      }
    } else {
      setFormState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
  };

  const handleNext = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form Submitted:', formState);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img 
              className="mx-auto h-12 w-auto" 
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" 
              alt="Workflow" 
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Congratulations</h2>
            <p className="mt-2 text-sm text-gray-600">You have submitted your assignment. Please wait for the update.</p>
            <p className="mt-2 text-sm text-gray-600">Review Status: UNDER EVALUATION</p>
          </div>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">Please upload your Marks Sheet by clicking on the button below.</p>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </div>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">For any further queries regarding your application please follow this <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">link</a>.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 w-full max-w-6xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="md:w-1/4">
        <ProgressBar currentStep={currentStep} />
      </div>
      {/* Form Panel */}
      <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">{steps[currentStep]}</h2>
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Information Step Fields */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
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
                <label htmlFor="prelimsAttempts" className="block text-gray-700 font-medium mb-2">Number of Prelims Attempts</label>
                <input
                  type="text"
                  id="prelimsAttempts"
                  name="prelimsAttempts"
                  value={formState.prelimsAttempts}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="interviewsAppeared" className="block text-gray-700 font-medium mb-2">Number of Interviews Appeared</label>
                <input
                  type="text"
                  id="interviewsAppeared"
                  name="interviewsAppeared"
                  value={formState.interviewsAppeared}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
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
                <label htmlFor="mainsAttempts" className="block text-gray-700 font-medium mb-2">Number of Mains Attempts</label>
                <input
                  type="text"
                  id="mainsAttempts"
                  name="mainsAttempts"
                  value={formState.mainsAttempts}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="optionalSubject" className="block text-gray-700 font-medium mb-2">Optional Subject</label>
                <select
                  id="optionalSubject"
                  name="optionalSubject"
                  value={formState.optionalSubject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1"
                >
                  <option value="" disabled>Select</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="mb-4 col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Have you secured a rank in UPSC CSE or State PCS?</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="securedRank-yes"
                    name="securedRank"
                    value="yes"
                    checked={formState.securedRank === 'yes'}
                    onChange={handleInputChange}
                    className="mr-2 focus:ring-blue-500 focus:ring-1"
                  />
                  <label htmlFor="securedRank-yes" className="text-gray-700 font-medium">Yes</label>
                  <input
                    type="radio"
                    id="securedRank-no"
                    name="securedRank"
                    value="no"
                    checked={formState.securedRank === 'no'}
                    onChange={handleInputChange}
                    className="ml-4 mr-2 focus:ring-blue-500 focus:ring-1"
                  />
                  <label htmlFor="securedRank-no" className="text-gray-700 font-medium">No</label>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="flex flex-col space-y-4">
              {/* Roles Step Fields */}
              <div className="font-bold text-xl">ROLES YOU'RE LOOKING FOR</div>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="evaluator"
                    checked={formState.roles.evaluator}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                  />
                  <label htmlFor="evaluator" className="ml-2 text-sm font-medium text-gray-900">Evaluator</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mentor"
                    checked={formState.roles.mentor}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                  />
                  <label htmlFor="mentor" className="ml-2 text-sm font-medium text-gray-900">Mentor</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="contentCreator"
                    checked={formState.roles.contentCreator}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                  />
                  <label htmlFor="contentCreator" className="ml-2 text-sm font-medium text-gray-900">Content Creator</label>
                </div>
              </div>

              <div>
                <label htmlFor="evaluationLanguage" className="block mb-2 text-sm font-medium text-gray-900">Evaluation Language</label>
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
                <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900">Experience</label>
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
                <label htmlFor="existingStudentMailId" className="block mb-2 text-sm font-medium text-gray-900">Existing Student Mail Id</label>
                <input
                  type="text"
                  id="existingStudentMailId"
                  name="existingStudentMailId"
                  value={formState.existingStudentMailId}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="(Only if you were Convert IAS student before)"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              {/* Assignment Step Fields */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">ASSIGNMENT</h2>
              <p className="text-gray-700 mb-4">Kindly select a medium to download and evaluate a sample answer copy.</p>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="english"
                  checked={formState.roles.english}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="english" className="text-gray-700 mr-4">ENGLISH</label>
                <input
                  type="checkbox"
                  id="hindi"
                  checked={formState.roles.hindi}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="hindi" className="text-gray-700">HINDI</label>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              >
                <svg
                  className="inline-block w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.88 9.12L12 13.88V4.12L6.12 9.12L2 5.06v10.18l4.12 4.12L12 15.88v-4.12l4.88 4.88z"
                  />
                </svg>
                Download Assignment
              </button>
              <p className="text-gray-700 mb-4">Upload your evaluated copy</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              >
                Upload Answer Copy
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              {/* Complete Step Fields */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Complete</h2>
              <p className="text-gray-700 mb-4">Review your information and complete the application.</p>
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
                  {Object.entries(formState.roles)
                    .filter(([_, value]) => value)
                    .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
                    .join(', ')}
                </div>
                <div className="text-gray-700 mb-4">
                  <strong>Evaluation Language:</strong> {formState.evaluationLanguage}
                </div>
                <div className="text-gray-700 mb-4">
                  <strong>Experience:</strong> {formState.experience}
                </div>
                <div className="text-gray-700 mb-4">
                  <strong>Existing Student Mail Id:</strong> {formState.existingStudentMailId}
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Application
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between space-x-4 mt-4">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPanel;
