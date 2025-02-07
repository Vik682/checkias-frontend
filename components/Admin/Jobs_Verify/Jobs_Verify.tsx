"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import { FaSearch } from 'react-icons/fa'; // Search icon for search bar
import ProfileWindow from './profile_window'; // Import ProfileWindow

const JobsVerify = () => {
  const [jobs, setJobs] = useState<any[]>([]); // Jobs data
  const [selectedJob, setSelectedJob] = useState<any | null>(null); // Selected job for details
  const [searchTerm, setSearchTerm] = useState<string>(''); // For searching jobs
  const [page, setPage] = useState<number>(1); // Pagination page number
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [itemsPerPage] = useState<number>(10); // Default items per page

  const sampleJobs = [
    { id: 1, name: "Software Engineer", status: "Pending", details: "Reviewing application for the software engineering position." },
    { id: 2, name: "Product Manager", status: "Verified", details: "Interviewed the candidate and verified all details." },
    { id: 3, name: "UI/UX Designer", status: "Rejected", details: "Application rejected due to insufficient experience in design." },
    { id: 4, name: "Data Scientist", status: "Pending", details: "Waiting for the final interview round." },
    { id: 5, name: "Full Stack Developer", status: "Verified", details: "Successfully verified, awaiting onboarding." },
    { id: 6, name: "Backend Developer", status: "Pending", details: "Awaiting review of test results." },
    { id: 7, name: "Marketing Specialist", status: "Verified", details: "Confirmed background and skills after the interview." },
    { id: 8, name: "Sales Manager", status: "Rejected", details: "Candidate failed to meet performance expectations." },
    { id: 9, name: "DevOps Engineer", status: "Pending", details: "Waiting for final decision after interview round." },
    { id: 10, name: "QA Tester", status: "Verified", details: "Test results confirmed. Preparing for offer letter." },
    { id: 11, name: "Software Architect", status: "Rejected", details: "Rejected due to overqualification for the position." },
    { id: 12, name: "HR Manager", status: "Pending", details: "Waiting for confirmation on references." },
    { id: 13, name: "Frontend Developer", status: "Verified", details: "Candidate confirmed for the frontend developer role." },
    { id: 14, name: "Database Administrator", status: "Pending", details: "Interviews conducted. Waiting for final review." },
    { id: 15, name: "Security Specialist", status: "Rejected", details: "No response from the candidate after multiple attempts." },
    { id: 16, name: "Business Analyst", status: "Verified", details: "Role confirmed after a successful interview." },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        setJobs(sampleJobs); // Use the sample data
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Filter jobs based on search term
  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate the jobs data
  const paginatedJobs = filteredJobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Handle job selection
  const handleJobClick = (job: any) => {
    setSelectedJob(job); // Set the clicked job's details
  };

  // Handle Verify or Reject actions
  const handleVerify = () => {
    console.log(`Job ${selectedJob?.name} verified.`);
    setSelectedJob(null); // Close the modal
  };

  const handleReject = () => {
    console.log(`Job ${selectedJob?.name} rejected.`);
    setSelectedJob(null); // Close the modal
  };

  // Handle next button for pagination
  const handleNext = () => {
    setPage(page + 1);
  };

  // Handle previous button for pagination
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="ml-48 p-6">
      {/* Filter and Search Bar at the top right */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {/* Search bar */}
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded-md">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Jobs List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Verify Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedJobs.map((job, index) => (
              <tr
                key={job.id}
                onClick={() => handleJobClick(job)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="border px-4 py-2">{(page - 1) * itemsPerPage + index + 1}</td>
                <td className="border px-4 py-2">{job.name}</td>
                <td className="border px-4 py-2">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <p className="mr-4">Showing {paginatedJobs.length} of {filteredJobs.length} jobs</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            className="p-2 bg-yellow-500 text-white rounded-md"
            disabled={page <= 1} // Disable button on first page
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-green-500 text-white rounded-md"
            disabled={paginatedJobs.length < itemsPerPage} // Disable next button if there are fewer jobs than the items per page
          >
            Next
          </button>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <ProfileWindow job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default JobsVerify;
