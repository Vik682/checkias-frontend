"use client"; 
import React, { useState } from "react";
import ShowBox from "@/components/common/ShowBox"; // Import the ShowBox component

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
        console.log("Updated topper:", editedTopper);
        setIsEditing(false);
    };

    // Cancel changes and revert to the original 'topper' data
    const handleCancel = () => {
        setIsEditing(false);
        setEditedTopper(topper); // Reset to original topper data
    };

    // Content for the profile details
    const profileDetailsContent = (
        <div className="space-y-4 mt-6">
            {Object.keys(topper).map((key, index) => (
                <div key={index} className="flex justify-between">
                    <p className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}: </p>
                    {isEditing ? (
                        <input
                            type={key === "attempts" ? "number" : "text"}
                            value={(editedTopper as any)[key]}
                            onChange={(e) => handleChange(key as keyof Topper, e.target.value)}
                            className="border p-2 rounded-md"
                        />
                    ) : (
                        <p>{(topper as any)[key]}</p>
                    )}
                </div>
            ))}
        </div>
    );

    // Content for the action buttons (edit/save/cancel/delete)
    const actionButtonsContent = (
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
    );

    // Use the ShowBox component to render the window with title, content, and actions
    return (
        <ShowBox
            title={`Profile Details of ${topper.name}`}
            onClose={onClose}
        >
            {profileDetailsContent}
            {actionButtonsContent}
        </ShowBox>
    );
};

export default ProfileWindow;
