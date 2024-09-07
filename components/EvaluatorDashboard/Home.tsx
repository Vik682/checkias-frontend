// app/Evaluator/page.tsx

import React from 'react';

const Home = () => {
  return (
    <div className="ml-48 p-6"> {/* Add margin-left to account for the SideNavBar width */}
      <div className="font-bold text-lg">
        Updates & Support: <a href="#" className="underline text-blue-500">HERE</a>
      </div>
      <div className="mt-4">
        <ul className="list-disc pl-5">
          <li>It is compulsory to respond to the queries submitted by students in the feedback box.</li>
          <li>
            The quality of evaluation is determined by the internal review team and has no impact on the rating given by the student.
            <span className="text-red-500">Unjustified inflated marking and substandard evaluation are taken very seriously and negatively impact the internal rating of the evaluator.</span>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ml-2">
            (New) Quality and Dedication Bonus: <a href="#" className="underline text-blue-500">HERE</a> (Effective from 1st July)
          </span>
        </div>
        <div className="mt-2 text-red-500">
          Note: To be eligible for the Quality & Dedication Bonus, the evaluation quality is crucial.
        </div>
      </div>
    </div>
  );
};

export default Home;
