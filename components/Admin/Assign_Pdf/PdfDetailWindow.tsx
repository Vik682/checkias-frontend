"use client";
import React, { useEffect, useState } from "react";

// Sample data for PDF details (In a real application, you would fetch this from a server)
interface PdfDetail {
  pdfId: string;
  title: string;
  author: string;
  dateCreated: string;
  description: string;
  assignedEvaluator: string;
}

const PdfDetailWindow = ({ pdfId, onClose }: { pdfId: string; onClose: () => void }) => {
  const [pdfDetail, setPdfDetail] = useState<PdfDetail | null>(null);

  useEffect(() => {
    // Simulate fetching PDF details based on pdfId (you'd usually fetch this from a server)
    const fetchPdfDetails = () => {
      // Sample PDF details for illustration
      const pdfData: { [key: string]: PdfDetail } = {
        "PDF001": {
          pdfId: "PDF001",
          title: "Introduction to React",
          author: "John Doe",
          dateCreated: "2024-01-15",
          description: "A beginner's guide to ReactJS.",
          assignedEvaluator: "Evaluator A",
        },
        "PDF002": {
          pdfId: "PDF002",
          title: "Advanced Machine Learning",
          author: "Jane Smith",
          dateCreated: "2024-02-10",
          description: "Deep dive into machine learning algorithms.",
          assignedEvaluator: "Evaluator B",
        },
        // Add more PDF details as needed
      };

      setPdfDetail(pdfData[pdfId] || null);
    };

    fetchPdfDetails();
  }, [pdfId]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[80vw] h-[80vh] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        {/* Blue Strip with Close Icon */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
          <h2 className="text-lg font-semibold">
            PDF Details: {pdfDetail?.title} (ID: {pdfDetail?.pdfId})
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
          {pdfDetail ? (
            <>
              <div className="flex justify-between">
                <p className="font-semibold">Title:</p>
                <p>{pdfDetail.title}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Author:</p>
                <p>{pdfDetail.author}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Date Created:</p>
                <p>{pdfDetail.dateCreated}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Description:</p>
                <p>{pdfDetail.description}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Assigned Evaluator:</p>
                <p>{pdfDetail.assignedEvaluator}</p>
              </div>
            </>
          ) : (
            <p>Loading PDF details...</p>
          )}
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

export default PdfDetailWindow;
