"use client";
import React from "react";
import ShowBox from  "@/components/common/ShowBox"; // Import the ShowBox component

const EvaluatorProfileWindow = ({ evaluator, onClose }: { evaluator: any; onClose: () => void }) => {
    // Ensure evaluator is defined before trying to access its properties
    if (!evaluator) {
        return <div>No evaluator data available.</div>;
    }

    const assignedPdfs = Array.isArray(evaluator.assignedPdfs) ? evaluator.assignedPdfs : [];

    // Create the content inside the box
    const content = (
        <div className="space-y-4 mt-6">
            <div className="flex justify-between">
                <p className="font-semibold">Evaluator Name:</p>
                <p>{evaluator.evaluatorName}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-semibold">Evaluator ID:</p>
                <p>{evaluator.evaluatorId}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-semibold">Evaluating Course:</p>
                <p>{evaluator.course}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-semibold">Assigned PDFs:</p>
                <p>{assignedPdfs.length > 0 ? assignedPdfs.join(", ") : "No PDFs assigned"}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-semibold">Total PDFs Assigned:</p>
                <p>{assignedPdfs.length}</p>
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
            title={`Profile Details of ${evaluator.evaluatorName}`}
            onClose={onClose}
            actionButtons={actionButtons}
        >
            {content}
        </ShowBox>
    );
};

export default EvaluatorProfileWindow;
