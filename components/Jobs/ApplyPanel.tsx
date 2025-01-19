"use client"; // This directive tells Next.js that this is a Client Component

import React, { useState } from "react";
import ProgressBar from "@/components/Jobs/ProgressBar"; // Ensure the path is correct
import Information from "./Information";
import Roles from "./Roles";
import Assignment from "./Assignment";
import Complete from "./Complete";
import Success from "./Success";

const steps = ["Information", "Roles", "Assignment", "Complete"];
const ApplyPanel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const successCallback = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return <Success />;
  }
  const formSteps:any = [<Information nextState={handleNext} />, <Roles prevState={handlePrevious} nextState={handleNext} />, <Assignment prevState={handlePrevious} nextState={handleNext} />,  <Complete prevState={handlePrevious} successCallback={successCallback}/>]
  console.log("current step", currentStep);
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 w-full max-w-6xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="md:w-1/4">
        <ProgressBar currentStep={currentStep} />
      </div>
      {/* Form Panel */}
      <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          {steps[currentStep]}
        </h2>
        {formSteps[currentStep]}
      </div>
    </div>
  );
};
export default ApplyPanel;
