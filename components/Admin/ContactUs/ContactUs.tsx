'use client'
import React, { useState } from 'react';
import SearchAndPagination from '../../common/SearchAndPagination';
import ShowBox from '../../common/ShowBox';
import { FaSearch } from 'react-icons/fa';

// Sample Data
const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    message: 'I need help with my account.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    message: 'I have a question about the pricing.',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    email: 'samwilson@example.com',
    message: 'Can I get a refund for my purchase?',
  },
  {
    id: 4,
    name: 'Anna Lee',
    email: 'annalee@example.com',
    message: 'How do I reset my password?',
  },
  {
    id: 5,
    name: 'Chris Johnson',
    email: 'chrisjohnson@example.com',
    message: 'Where can I find more tutorials?',
  },
];

interface ContactUsProps {
  items: any[]; // The list of contact requests (or messages)
}

const ContactUs: React.FC<ContactUsProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null); // Store selected contact info
  const [isShowBoxOpen, setIsShowBoxOpen] = useState(false); // Track ShowBox visibility

  // Handle item selection and open ShowBox
  const handleItemSelect = (item: any) => {
    setSelectedItem(item);
    setIsShowBoxOpen(true);
  };

  // Close ShowBox
  const handleCloseShowBox = () => {
    setIsShowBoxOpen(false);
    setSelectedItem(null);
  };

  // Ensure items are defined and an array before mapping
  const modifiedItems = (Array.isArray(items) ? items : []).map((item) => ({
    id: item.id, // Preserve item ID
    name: item.name,
    email: item.email,
    studentId: item.name, // Use name as a "studentId" placeholder
    pdfId: item.email, // Use email as a "pdfId" placeholder
    message: item.message,
  }));

  // Debugging: Check the modified items
  console.log(modifiedItems);

  // Render item in table rows
  const renderItem = (item: any, index: number) => (
    <td className="p-2">
      {item.name} - {item.email}
    </td> // Render name and email here
  );

  // Render table header
  const renderTableHeader = () => (
    <>
      <th className="p-2">Name</th>
      <th className="p-2">Email</th>
      {/* Add more columns like 'Message', etc. */}
    </>
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search and Pagination */}
      <SearchAndPagination
        items={modifiedItems}
        itemsPerPage={5}
        onItemSelect={handleItemSelect}
        renderItem={renderItem}
        renderTableHeader={renderTableHeader}
      />

      {/* ShowBox for displaying contact details */}
      {isShowBoxOpen && selectedItem && (
        <ShowBox title="Contact Details" onClose={handleCloseShowBox}>
          <div>
            <h3>Name: {selectedItem.name}</h3>
            <p>Email: {selectedItem.email}</p>
            <p>Message: {selectedItem.message}</p>
            {/* You can include more fields here */}
          </div>
        </ShowBox>
      )}
    </div>
  );
};

export default ContactUs;

// To test locally, you can use the following:
// <ContactUs items={sampleData} />
