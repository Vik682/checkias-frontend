// ProfileWindow.tsx
"use client";
import React from 'react';
import ShowBox from '../../common/ShowBox';

const ProfileWindow = ({ job, onClose }: { job: any; onClose: () => void }) => {
    const actionButtons = (
        <>
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
        </>
    );

    const profileDetails = (
        <>
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
        </>
    );

    return (
        <ShowBox title={`Profiless of ${job.name}`} onClose={onClose} actionButtons={actionButtons}>
            {profileDetails}
        </ShowBox>
    );
};

export default ProfileWindow;
