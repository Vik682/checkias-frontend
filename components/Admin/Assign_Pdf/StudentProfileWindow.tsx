"use client";
import React from "react";

const StudentProfileWindow = ({ student, onClose }: { student: any; onClose: () => void }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[80vw] h-[80vh] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                {/* Blue Strip with Close Icon */}
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
                    <h2 className="text-lg font-semibold">
                        Profile Details of {student.studentName}
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
                    {/* Profile Details */}
                    <div className="space-y-4 mt-6">
                        <div className="flex justify-between">
                            <p className="font-semibold">Student Name:</p>
                            <p>{student.studentName}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Course Purchased:</p>
                            <p>{student.course}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Previous Copies:</p>
                            <p>{student.previousCopies}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Marks Score:</p>
                            <p>{student.marksScore}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Total Copies:</p>
                            <p>{student.totalCopies}</p>
                        </div>
                    </div>
                </div>

                {/* Close Button */}
                <div className="p-4 flex justify-center">
                    <button
                        className="py-2 px-4 bg-gray-500 text-white rounded-md"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileWindow;
