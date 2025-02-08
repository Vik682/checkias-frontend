"use client";
import React, { useState } from "react";
import ShowBox from "@/components/common/ShowBox"; // Import the ShowBox component

const PaymentRequestWindow = ({ request, onClose }: { request: any; onClose: () => void }) => {
  const [remark, setRemark] = useState<string>(''); // State to hold the remark for decline
  const [isDeclining, setIsDeclining] = useState<boolean>(false); // State to track if decline was clicked

  // Handle Remark input change
  const handleRemarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemark(e.target.value);
  };

  // Handle Decline action
  const handleDecline = () => {
    setIsDeclining(true); // Show the remark input after decline is clicked
  };

  // Submit Decline action with remark
  const handleSubmitDecline = () => {
    console.log(`Request for ${request.name} with amount $${request.amount} declined. Remark: ${remark}`);
    setRemark(''); // Reset the remark after submission
    setIsDeclining(false); // Hide the remark input and reset the decline state
    onClose(); // Close the modal
  };

  // Handle Accept action
  const handleAccept = () => {
    console.log(`Request for ${request.name} with amount $${request.amount} accepted.`);
    onClose(); // Close the modal
  };

  // Content for the payment history section
  const paymentHistoryContent = (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="font-semibold text-lg">Payment History</h3>

      {/* Table for Payment History */}
      {request.history && request.history.length > 0 ? (
        <table className="min-w-full bg-white table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left font-semibold">Date</th>
              <th className="p-2 text-left font-semibold">Amount</th>
              <th className="p-2 text-left font-semibold">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {request.history.map((payment: any, index: number) => (
              <tr key={index} className="border-b">
                <td className="p-2">{payment.date}</td>
                <td className="p-2">${payment.amount}</td>
                <td className="p-2">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payment history available</p> // Fallback message if history is empty or undefined
      )}
    </div>
  );

  // Content for the current payable amount section
  const currentBalanceContent = (
    <div className="bg-green-100 p-4 rounded-lg mt-6">
      <h3 className="font-semibold text-lg">Current Payable Amount</h3>
      <p className="text-2xl">${request.amount}</p>
    </div>
  );

  // Content for the decline remark and actions
  const declineActionsContent = (
    <div className="mt-6 space-y-4">
      <div className="flex justify-between">
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-md"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-md"
          onClick={handleDecline}
        >
          Decline
        </button>
      </div>

      {/* Decline Remark Input (Only shown after Decline button is clicked) */}
      {isDeclining && (
        <div className="space-y-4 mt-4">
          <div>
            <input
              type="text"
              className="p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter remark for decline"
              value={remark}
              onChange={handleRemarkChange}
            />
          </div>

          {/* Submit Decline Button */}
          <button
            className="py-2 px-4 bg-red-600 text-white rounded-md"
            onClick={handleSubmitDecline}
            disabled={!remark}
          >
            Submit Decline
          </button>
        </div>
      )}
    </div>
  );

  // Use the ShowBox component to render the window with title, content, and actions
  return (
    <ShowBox
      title={`Payment Request Details of ${request.name}`}
      onClose={onClose}
    >
      {paymentHistoryContent}
      {currentBalanceContent}
      {declineActionsContent}
    </ShowBox>
  );
};

export default PaymentRequestWindow;
