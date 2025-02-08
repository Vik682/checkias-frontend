"use client";
import React, { useEffect, useState } from "react";
import ShowBox from  "@/components/common/ShowBox"; // Import the ShowBox component

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

  // Create the content inside the box
  const content = pdfDetail ? (
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
      title={`PDF Details: ${pdfDetail?.title} (ID: ${pdfDetail?.pdfId})`}
      onClose={onClose}
      actionButtons={actionButtons}
    >
      {content}
    </ShowBox>
  );
};

export default PdfDetailWindow;
