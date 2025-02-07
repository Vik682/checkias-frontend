"use client"; 
import React, { useState } from "react";

// Define the expected structure of the 'topper' object
interface Topper {
    name: string;
    review: string;
    attempts: string;
    achievements: string;
    subjects: string;
    optional: string;
}

const ProfileWindow = ({ topper, onClose }: { topper: Topper; onClose: () => void }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTopper, setEditedTopper] = useState<Topper>(topper);

    // Handler to update a specific field of the 'editedTopper' state
    const handleChange = (field: keyof Topper, value: string) => {
        setEditedTopper((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Save changes and exit edit mode
    const handleSave = () => {
        // Here you would typically send the updated data to the server
        console.log("Updated topper:", editedTopper);
        setIsEditing(false);
    };

    // Cancel changes and revert to the original 'topper' data
    const handleCancel = () => {
        setIsEditing(false);
        setEditedTopper(topper); // Reset to original topper data
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[80vw] h-[80vh] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                {/* Blue Strip with Close Icon */}
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
                    <h2 className="text-lg font-semibold">
                        Profile Details of {topper.name}
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
                            <p className="font-semibold">Review: </p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editedTopper.review}
                                    onChange={(e) => handleChange("review", e.target.value)}
                                    className="border p-2 rounded-md"
                                />
                            ) : (
                                <p>{topper.review}</p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Review: </p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editedTopper.review}
                                    onChange={(e) => handleChange("review", e.target.value)}
                                    className="border p-2 rounded-md"
                                />
                            ) : (
                                <p>{topper.review}</p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Attempts: </p>
                            {isEditing ? (
                                <input
                                    type="number"
                                    value={editedTopper.attempts}
                                    onChange={(e) => handleChange("attempts", e.target.value)}
                                    className="border p-2 rounded-md"
                                />
                            ) : (
                                <p>{topper.attempts}</p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Achievements: </p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editedTopper.achievements}
                                    onChange={(e) => handleChange("achievements", e.target.value)}
                                    className="border p-2 rounded-md"
                                />
                            ) : (
                                <p>{topper.achievements}</p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Subjects: </p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editedTopper.subjects}
                                    onChange={(e) => handleChange("subjects", e.target.value)}
                                    className="border p-2 rounded-md"
                                />
                            ) : (
                                <p>{topper.subjects}</p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Optional Subject: </p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editedTopper.optional}
                                    onChange={(e) => handleChange("optional", e.target.value)}
                                    className="border p-2 rounded-md"
                                />
                            ) : (
                                <p>{topper.optional}</p>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-between space-x-4">
                        {isEditing ? (
                            <>
                                <button
                                    className="py-2 px-4 bg-green-500 text-white rounded-md"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                                <button
                                    className="py-2 px-4 bg-gray-500 text-white rounded-md"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        )}
                        {/* Only show the delete button if NOT in editing mode */}
                        {!isEditing && (
                            <button
                                className="py-2 px-4 bg-red-500 text-white rounded-md"
                                onClick={() => console.log("Topper Deleted")}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileWindow;
