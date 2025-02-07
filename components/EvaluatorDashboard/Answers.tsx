"use client";

import React, { useState } from 'react';
import { FaSync, FaPen, FaCheck, FaUpload, FaChevronDown } from 'react-icons/fa';

const rejectionOptions = [
  'Not readable', 'Tag mismatch', 'Number of questions mismatch', 'Images not aligned',
  'Duplicate Answer', 'Handwriting mismatch', 'Not supported in demo', 'Upload only single PDF',
  'Wrong Copy', 'Blur Image', 'Write Que b4 Ans', 'Incomplete Copy', 'This pack does not have optional',
  'Optional not available', 'Same question(s)', 'Wrong medium', 'Typed Copy', 'Wrong Format',
  'Question not mentioned', 'Upgrade account'
];

const Answers = () => {
  const [isUserReviewEditing, setIsUserReviewEditing] = useState(false);
  const [isEvaluatorCommentEditing, setIsEvaluatorCommentEditing] = useState(false);
  const [userReview, setUserReview] = useState('');
  const [evaluatorComment, setEvaluatorComment] = useState('');
  const [rejectionOption, setRejectionOption] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const toggleEdit = (type: 'userReview' | 'evaluatorComment') => {
    if (type === 'userReview') setIsUserReviewEditing(!isUserReviewEditing);
    if (type === 'evaluatorComment') setIsEvaluatorCommentEditing(!isEvaluatorCommentEditing);
  };

  const handleSubmit = (type: 'userReview' | 'evaluatorComment') => {
    console.log(`${type} submitted:`, type === 'userReview' ? userReview : evaluatorComment);
    if (type === 'userReview') setUserReview('');
    if (type === 'evaluatorComment') setEvaluatorComment('');
    toggleEdit(type === 'userReview' ? 'userReview' : 'evaluatorComment');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <main className="ml-64 mt-16 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Answers</h1>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mb-4">
            <FaSync className="mr-2" /> Refresh
          </button>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 border-b border-gray-300">
                  {['Uid', 'Priority', 'PDF', 'Reject', 'Evad', 'Admin Comment', 'User Review', 'Evaluator Comment', 'ReEvaluate', 'ReEvaluation Reason', 'Review Comment', 'Admin message', '#Q', '#E', '#Op', 'Assigned At']
                    .map((header, idx) => (
                      <th key={idx} className="py-3 px-4 text-left text-gray-700 font-bold">{header}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-600">12345</td>
                  <td className="py-3 px-4 text-gray-600"><FaCheck className="text-green-500" /></td>
                  <td className="py-3 px-4 text-gray-600">
                    <label className="flex items-center cursor-pointer bg-blue-500 text-white px-2 py-1 rounded-md">
                      <FaUpload className="mr-1" /> Upload PDF
                      <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                    </label>
                  </td>
                  <td className="py-3 px-4 text-gray-600 relative">
                    <button className="bg-red-500 text-white px-4 py-1 rounded-md flex items-center" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      Reject <FaChevronDown className="ml-2" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full mt-2 w-64 max-h-64 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {rejectionOptions.map(option => (
                          <button key={option} className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { setRejectionOption(option); setIsDropdownOpen(false); }}>
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="mt-2">{rejectionOption && <div className="text-gray-600 z">Rejected as: {rejectionOption}</div>}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">Some evad content</td>
                  <td className="py-3 px-4 text-gray-600">Admin comment here...</td>
                  <td className="py-3 px-4">
                    {isUserReviewEditing ? (
                      <div>
                        <input className="w-full border border-gray-300 rounded-md p-2 mb-2" placeholder="Write your review..." value={userReview} onChange={(e) => setUserReview(e.target.value)} />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleSubmit('userReview')}>Submit</button>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600 cursor-pointer" onClick={() => toggleEdit('userReview')}>
                        <FaPen className="mr-2" /> Click to write a review
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {isEvaluatorCommentEditing ? (
                      <div>
                        <input className="w-full border border-gray-300 rounded-md p-2 mb-2" placeholder="Write evaluator comment..." value={evaluatorComment} onChange={(e) => setEvaluatorComment(e.target.value)} />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleSubmit('evaluatorComment')}>Submit</button>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600 cursor-pointer" onClick={() => toggleEdit('evaluatorComment')}>
                        <FaPen className="mr-2" /> Click to write a comment
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600">ReEvaluate content</td>
                  <td className="py-3 px-4 text-gray-600">ReEvaluation Reason here...</td>
                  <td className="py-3 px-4 text-gray-600">Review Comment here...</td>
                  <td className="py-3 px-4 text-gray-600">Admin message here...</td>
                  <td className="py-3 px-4 text-gray-600">#Q content</td>
                  <td className="py-3 px-4 text-gray-600">#E content</td>
                  <td className="py-3 px-4 text-gray-600">#Op content</td>
                  <td className="py-3 px-4 text-gray-600">Assigned At content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Answers;
