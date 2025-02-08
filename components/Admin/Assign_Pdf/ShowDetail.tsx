// ShowDetail.tsx
"use client";
import React from 'react';

interface ShowDetailProps {
  requests: { [key: string]: any }[]; // Dynamically typed request items
  columns: string[];  // Column names passed dynamically
  onDynamicClick: (type: string, id: string | number | null) => void;  // Handler for dynamic click
}

const ShowDetail = ({
  requests,
  columns,
  onDynamicClick
}: ShowDetailProps) => {

  return (
    <div>
      {/* Table for Requests */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column, index) => (
              <th key={index} className="border px-4 py-2">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {columns.map((column, i) => {
                if (column === 'Student ID') {
                  return (
                    <td key={i} className="border px-4 py-2">
                      <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => onDynamicClick('student', request.studentId)}  // Trigger student click
                      >
                        {request.studentId}
                      </span>
                    </td>
                  );
                }

                if (column === 'PDF ID') {
                  return (
                    <td key={i} className="border px-4 py-2">
                      <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => onDynamicClick('pdf', request.pdfId)}  // Trigger PDF click
                      >
                        {request.pdfId}
                      </span>
                    </td>
                  );
                }

                if (column === 'Assign Evaluator') {
                  return (
                    <td key={i} className="border px-4 py-2">
                      <button
                        onClick={() => onDynamicClick('evaluator', request.evaluator ? parseInt(request.evaluator) : 1)}  // Trigger evaluator click
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        Assign Evaluator
                      </button>
                    </td>
                  );
                }

                // Default rendering for other columns
                return (
                  <td key={i} className="border px-4 py-2">
                    {request[column]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowDetail;
