"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

// Define types for the Button component props
interface ButtonProps {
  label: string;
  path: string;
}

const SideNavBar: React.FC = () => {
  const router = useRouter();

  // Updated Button component with proper types
  const Button: React.FC<ButtonProps> = ({ label, path }) => (
    <button
      onClick={() => router.push(path)}
      className="w-full text-black py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-left overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {label}
    </button>
  );

  // Buttons array with inferred types for label and path
  const buttons: { label: string; path: string }[] = [
    { label: 'Jobs Verify', path: '/Admin/Jobs_Verify' },
    { label: 'Toppers Review', path: '/Admin/Toppers_Review' },
    { label: 'Payment Request', path: '/Admin/Payment_Request' },
    { label: 'Assign Pdf', path: '/Admin/Assign_Pdf' },
    { label: 'Comments', path: '/Admin/Comments' },
    { label: 'Reply ContactUs', path: '/Admin/ContactUs' },
  ];

  return (
    <div className="fixed top-0 left-0 w-48 bg-white text-black h-screen flex flex-col shadow-md z-40">
      <div className="flex items-center justify-center p-3 bg-white-200 border-b border-gray-300">
        <img src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
      </div>
      <div className="text-black w-full text-sm p-3 bg-gray-200 border-b border-gray-300">Modules</div>
      <div className="flex-1 overflow-y-auto p-3">
        {buttons.map(({ label, path }) => (
          <Button key={path} label={label} path={path} />
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
