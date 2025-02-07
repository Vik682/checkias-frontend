"use client";
import React from "react";

const ProfileWindow = ({ job, onClose }: { job: any; onClose: () => void }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[80vw] h-[80vh] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                {/* Blue Strip with Close Icon */}
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
                    <h2 className="text-lg font-semibold">
                        Profile Details of {job.name}
                    </h2>
                    <div className="absolute top-0 right-0 p-2 z-137">
                        <span
                            className="cursor-pointer text-white font-bold hover:text-gray-200"
                            onClick={onClose} // Close button handler
                        >
                            &times; {/* This is the "X" symbol */}
                        </span>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="p-4 space-y-4 overflow-y-auto flex-1">
                    {/* Sender's Information */}
                    <div className="bg-green-100 p-4 rounded-lg flex space-x-4">
                        <img
                            alt="Profile picture"
                            className="w-12 h-12 rounded-full"
                            src={job.photoUrl || "https://via.placeholder.com/150"}
                        />
                        <div>
                            <p className="text-sm">
                                <strong>From: </strong>{job.name} - {job.role}
                                <strong> Date: </strong> {job.date}
                            </p>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="space-y-4 mt-6">
                        <div className="flex justify-between">
                            <p className="font-semibold">Job Name:</p>
                            <p>{job.name}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Status:</p>
                            <p>{job.status}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Details:</p>
                            <p>{job.details}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <p className="font-semibold">Number of Prelims Attempts:</p>
                                <p>{job.prelimsAttempts}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Number of Interviews Appeared:</p>
                                <p>{job.interviewsAppeared}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Number of Mains Attempts:</p>
                                <p>{job.mainsAttempts}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Optional Subject:</p>
                                <p>{job.optionalSubject}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Roles You're Looking For:</p>
                                <p>{job.rolesLookingFor}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Evaluation Language:</p>
                                <p>{job.evaluationLanguage}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Experience:</p>
                                <p>{job.experience}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Existing Student Mail Id:</p>
                                <p>{job.studentMailId}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Download Evaluated Copy:</p>
                                <button className="border p-2 rounded-md bg-blue-500 text-white">
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-between space-x-4">
                        <button
                            className="py-2 px-4 bg-green-500 text-white rounded-md"
                            onClick={() => console.log("Profile Verified")}
                        >
                            Verify
                        </button>
                        <button
                            className="py-2 px-4 bg-red-500 text-white rounded-md"
                            onClick={() => console.log("Profile Rejected")}
                        >
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileWindow;
