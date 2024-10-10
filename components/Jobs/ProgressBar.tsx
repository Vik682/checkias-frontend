'use client'; // This directive tells Next.js that this is a Client Component

import React from 'react';

interface ProgressBarProps {
  currentStep: number; // The current step to highlight
}

const steps = ["Information", "Roles", "Assignment", "Complete"];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="bg-white rounded-2xl md:mr-5 w-full h-full py-2 px-3 md:py-4 mb-5 md:mb-0 flex flex-col justify-center">
      <div className="flex flex-row md:flex-col w-full">
        <ul className="md:pr-5 flex flex-row md:flex-col w-full justify-between">
          {steps.map((step, index) => (
            <li key={index} className="flex md:flex-row flex-col items-center w-full">
              <div className="flex flex-row md:flex-col items-center md:mx-5 w-full md:w-fit relative">
                {/* Blue box fill */}
                {index < currentStep && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 rounded-full" style={{ zIndex: -1 }}></div>
                )}
                <div
                  className={`bg-white rounded-full border-[2px] border-blue-500 h-6 w-full max-w-[24px] min-w-[24px] flex items-center justify-center relative z-10 ${
                    index < currentStep ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {index < currentStep && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <div
                  className={`h-[3px] bg-blue-500 ${
                    index < currentStep ? 'bg-blue-500' : 'bg-white'
                  }`}
                ></div>
              </div>
              <p className={`text-xs md:text-base w-full ${
                index < currentStep ? 'text-blue-500' : 'text-gray-700'
              }`}>
                {step}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressBar;
