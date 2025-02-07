"use client";
import React, { useState, useEffect } from 'react';
import EvaluatorProfileWindow from './EvaluatorProfileWindow';  // Import the evaluator profile window
import StudentProfileWindow from './StudentProfileWindow';
import PdfDetailWindow from './PdfDetailWindow';  // Import the PDF detail window

// Dummy evaluators list for the button to select
const evaluators = [
  { id: 1, name: "Evaluator A" },
  { id: 2, name: "Evaluator B" },
  { id: 3, name: "Evaluator C" },
];

interface Request {
  id: number;
  studentId: string;
  pdfId: string;
  evaluator: string | null; // Evaluator will be initially null
}

interface Student {
  studentId: string;
  studentName: string;
  course: string;
  coursePurchaseDate: string;
  previousCopies: number;
  marksScore: number;
  totalCopies: number;
  photoUrl: string;
}

const AssignPdf = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEvaluatorProfileOpen, setIsEvaluatorProfileOpen] = useState<boolean>(false);
  const [selectedEvaluator, setSelectedEvaluator] = useState<any>(null);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isPdfDetailWindowOpen, setIsPdfDetailWindowOpen] = useState<boolean>(false); // New state for PDF Detail Window
  const [selectedPdfId, setSelectedPdfId] = useState<string | null>(null); // Track selected PDF ID

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      // Sample data for requests
      const sampleRequests: Request[] = [
        { id: 1, studentId: "S101", pdfId: "PDF001", evaluator: null },
        { id: 2, studentId: "S102", pdfId: "PDF002", evaluator: null },
        { id: 3, studentId: "S103", pdfId: "PDF003", evaluator: null },
        { id: 4, studentId: "S104", pdfId: "PDF004", evaluator: null },
        { id: 5, studentId: "S105", pdfId: "PDF005", evaluator: null },
      ];
      setRequests(sampleRequests);
      setLoading(false);
    };
    fetchRequests();
  }, []);

  // Sample student data for the profile window
  const sampleStudents: { [key: string]: Student } = {
    "S101": {
      studentId: "S101",
      studentName: "John Doe",
      course: "Web Development",
      coursePurchaseDate: "2024-01-15",
      previousCopies: 3,
      marksScore: 85,
      totalCopies: 5,
      photoUrl: "https://via.placeholder.com/150"
    },
    "S102": {
      studentId: "S102",
      studentName: "Jane Smith",
      course: "Machine Learning",
      coursePurchaseDate: "2024-02-10",
      previousCopies: 2,
      marksScore: 90,
      totalCopies: 4,
      photoUrl: "https://via.placeholder.com/150"
    },
    // Add more students as needed
  };

  // Handle when an evaluator is clicked
  const handleEvaluatorClick = (evaluatorId: number) => {
    const evaluator = evaluators.find((ev) => ev.id === evaluatorId);
    if (evaluator) {
      setSelectedEvaluator(evaluator);
      setIsEvaluatorProfileOpen(true);
    }
  };

  const handleStudentClick = (studentId: string) => {
    const studentData = sampleStudents[studentId];
    if (studentData) {
      setSelectedStudent(studentData);
      setIsProfileOpen(true); // Open the profile window when the student ID is clicked
    } else {
      console.error(`Student with ID ${studentId} not found!`);
    }
  };

  const handlePdfClick = (pdfId: string) => {
    setSelectedPdfId(pdfId);
    setIsPdfDetailWindowOpen(true); // Open the PDF detail window
  };

  const handleCloseProfileWindow = () => {
    setIsProfileOpen(false);
  };

  const handleCloseEvaluatorProfileWindow = () => {
    setIsEvaluatorProfileOpen(false);
  };

  const handleClosePdfDetailWindow = () => {
    setIsPdfDetailWindowOpen(false); // Close the PDF detail window
  };

  return (
    <div className="ml-48 p-6">
      {/* Title and Table Header */}
      <h1 className="text-2xl font-semibold mb-4">Assign Evaluators to PDF Submissions</h1>

      {/* Table of Requests */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Serial Number</th>
              <th className="border px-4 py-2">Student ID</th>
              <th className="border px-4 py-2">PDF ID</th>
              <th className="border px-4 py-2">Assign Evaluator</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleStudentClick(request.studentId)}
                  >
                    {request.studentId}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handlePdfClick(request.pdfId)} // Open PDF detail window on click
                  >
                    {request.pdfId}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  {/* Button to assign evaluator */}
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => handleEvaluatorClick(request.evaluator ? parseInt(request.evaluator) : evaluators[0].id)}
                  >
                    Assign Evaluator
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Evaluator Profile Window */}
      {isEvaluatorProfileOpen && selectedEvaluator && (
        <EvaluatorProfileWindow
          evaluator={selectedEvaluator}
          onClose={handleCloseEvaluatorProfileWindow}
        />
      )}

      {/* Student Profile Window */}
      {isProfileOpen && selectedStudent && (
        <StudentProfileWindow
          student={selectedStudent}
          onClose={handleCloseProfileWindow}
        />
      )}

      {/* PDF Detail Window */}
      {isPdfDetailWindowOpen && selectedPdfId && (
        <PdfDetailWindow
          pdfId={selectedPdfId}
          onClose={handleClosePdfDetailWindow}
        />
      )}
    </div>
  );
};

export default AssignPdf;
