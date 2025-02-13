"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Search icon for search bar
import PaymentRequestWindow from './PaymentRequestWindow'; // Import ProfileWindow component

const PaymentRequest = () => {
  const [requests, setRequests] = useState<any[]>([]); // Payment requests data
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null); // Selected request for details
  const [searchTerm, setSearchTerm] = useState<string>(''); // For searching requests
  const [page, setPage] = useState<number>(1); // Pagination page number
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [itemsPerPage] = useState<number>(10); // Default items per page
  const [isProfileWindowOpen, setIsProfileWindowOpen] = useState<boolean>(false); // Manage ProfileWindow visibility

  const sampleRequests = [
    { id: 1, name: "John Doe", amount: 500, details: "Payment for service rendered in January" },
    { id: 2, name: "Jane Smith", amount: 750, details: "Consulting fees for the February project" },
    { id: 3, name: "Alice Johnson", amount: 320, details: "Payment for design work" },
    { id: 4, name: "Bob Lee", amount: 600, details: "Payment for software development project" },
    { id: 5, name: "Charlie Brown", amount: 450, details: "Payment for marketing consultation" },
    { id: 6, name: "David Wilson", amount: 900, details: "Payment for business analysis services" },
    { id: 7, name: "Emma Davis", amount: 150, details: "Payment for SEO optimization services" },
    { id: 8, name: "Frank Miller", amount: 1000, details: "Payment for IT infrastructure services" },
    { id: 9, name: "Grace White", amount: 720, details: "Consulting fees for product management" },
    { id: 10, name: "Hannah Clark", amount: 550, details: "Payment for UI/UX design work" },
    { id: 11, name: "Ivy Harris", amount: 850, details: "Payment for backend development services" },
    { id: 12, name: "Jack Scott", amount: 420, details: "Payment for content creation" },
    { id: 13, name: "Kevin Young", amount: 300, details: "Payment for SEO writing" },
    { id: 14, name: "Laura Allen", amount: 650, details: "Payment for digital marketing consulting" },
    { id: 15, name: "Mike Thomas", amount: 700, details: "Payment for sales strategy consulting" },
    { id: 16, name: "Nina Moore", amount: 800, details: "Payment for HR consultation" },
  ];

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        setRequests(sampleRequests); // Use the sample data
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // Filter requests based on search term
  const filteredRequests = requests.filter((request) =>
    request.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate the requests data
  const paginatedRequests = filteredRequests.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Handle request selection
  const handleRequestClick = (request: any) => {
    setSelectedRequest(request); // Set the clicked request's details
    setIsProfileWindowOpen(true); // Open the profile window
  };

  // Handle Accept action (or payment processing)
  const handleAccept = () => {
    console.log(`Request for ${selectedRequest?.name} with amount $${selectedRequest?.amount} accepted.`);
    setSelectedRequest(null); // Close the modal
    setIsProfileWindowOpen(false); // Close the profile window
  };

  // Handle Reject action
  const handleReject = () => {
    console.log(`Request for ${selectedRequest?.name} with amount $${selectedRequest?.amount} rejected.`);
    setSelectedRequest(null); // Close the modal
    setIsProfileWindowOpen(false); // Close the profile window
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
    <div >
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

      {/* Requests List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRequests.map((request, index) => (
              <tr
                key={request.id}
                onClick={() => handleRequestClick(request)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="border px-4 py-2">{(page - 1) * itemsPerPage + index + 1}</td>
                <td className="border px-4 py-2">{request.name}</td>
                <td className="border px-4 py-2">${request.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <p className="mr-4">Showing {paginatedRequests.length} of {filteredRequests.length} requests</p>
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
            disabled={paginatedRequests.length < itemsPerPage} // Disable next button if there are fewer requests than the items per page
          >
            Next
          </button>
        </div>
      </div>

      {/* Payment Request Window */}
      {isProfileWindowOpen && selectedRequest && (
        <PaymentRequestWindow
          request={selectedRequest}
          onClose={() => setIsProfileWindowOpen(false)}
        />
      )}
    </div>
  );
};

export default PaymentRequest;
