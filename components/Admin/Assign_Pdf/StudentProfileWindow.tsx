"use client";
import React from "react";
import ShowBox from "@/components/common/ShowBox"; // Import the ShowBox component

const StudentProfileWindow = ({ student, onClose }: { student: any; onClose: () => void }) => {
    // Create the content inside the box
    const content = (
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
    );

    // Define the action buttons
    const actionButtons = (
        <div className="p-4 flex justify-center">
            <button
                className="py-2 px-4 bg-gray-500 text-white rounded-md"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );

    // Use the ShowBox component and pass necessary props
    return (
        <ShowBox
            title={`Profile Details of ${student.studentName}`}
            onClose={onClose}
            actionButtons={actionButtons}
        >
            {content}
        </ShowBox>
    );
};

export default StudentProfileWindow;
