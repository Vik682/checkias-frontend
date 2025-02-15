"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon for search bar
import ProfileWindow from "./profile_window"; // Assuming ProfileWindow is imported here

// Example topper data
const sampleToppers = [
  { id: 1, name: "John Doe", rank: 1, review: "Excellent performance in all assessments.", score: 95 },
  { id: 2, name: "Jane Smith", rank: 2, review: "Strong analytical skills and problem-solving ability.", score: 92 },
  { id: 3, name: "Robert Brown", rank: 3, review: "Creative and innovative solutions to complex problems.", score: 90 },
  { id: 4, name: "Emily Johnson", rank: 4, review: "Excellent team player with great communication skills.", score: 88 },
  { id: 5, name: "Michael Lee", rank: 5, review: "Great work ethic and attention to detail.", score: 87 },
  // Add more toppers as needed
];

const ToppersReview = () => {
  const [toppers, setToppers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term for filtering toppers
  const [page, setPage] = useState<number>(1); // Pagination page number
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [selectedTopper, setSelectedTopper] = useState<any | null>(null); // Selected topper for the profile modal
  const [itemsPerPage] = useState<number>(5); // Default items per page

  useEffect(() => {
    const fetchToppers = async () => {
      setLoading(true);
      try {
        setToppers(sampleToppers); // Simulate fetching data
      } catch (error) {
        console.error("Error fetching toppers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchToppers();
  }, []);

  // Filter toppers based on the search term
  const filteredToppers = toppers.filter((topper) =>
    topper.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate the topper data
  const paginatedToppers = filteredToppers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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

  // Handle topper row click to open profile window
  const handleTopperClick = (topper: any) => {
    setSelectedTopper(topper); // Open profile modal with the selected topper's details
  };

  return (
    <div >
      {/* Filter and Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
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

      {/* Toppers List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Rank</th>
            </tr>
          </thead>
          <tbody>
            {paginatedToppers.map((topper, index) => (
              <tr
                key={topper.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleTopperClick(topper)} // Open profile modal on click
              >
                <td className="border px-4 py-2">{(page - 1) * itemsPerPage + index + 1}</td>
                <td className="border px-4 py-2">{topper.name}</td>
                <td className="border px-4 py-2">{topper.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <p className="mr-4">
            Showing {paginatedToppers.length} of {filteredToppers.length} toppers
          </p>
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
            disabled={paginatedToppers.length < itemsPerPage} // Disable next button if fewer toppers than items per page
          >
            Next
          </button>
        </div>
      </div>

      {/* Profile Modal for Topper */}
      {selectedTopper && (
        <ProfileWindow topper={selectedTopper} onClose={() => setSelectedTopper(null)} />
      )}
    </div>
  );
};

export default ToppersReview;
