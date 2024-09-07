// components/Footer.tsx

import React from 'react';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 h-[50vh] flex flex-col justify-between ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row border border-black rounded-md bg-white shadow-md">
        {/* CheckIAS Section */}
        <div className="flex-1 p-6 border-r border-black lg:border-r-0 lg:border-b lg:border-black lg:mb-0 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">CheckIAS</h2>
          <p className="text-gray-600 mb-4">
            CheckIAS is an online platform for Mains Answer Evaluation crafted with the aim of providing access to the right guidance and education to every aspirant.
          </p>
          <p className="text-gray-600 mb-4">
            A passionate team of rank holders and interview-appeared mentors evaluates your answers and guides you on your journey.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaTelegramPlane size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Quick Links</h3>
            <ul className="list-disc text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Address</a></li>
            </ul>
          </div>
        </div>

        {/* Send Us a Message Section */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">SEND US A MESSAGE</h2>
          <p className="text-gray-600 mb-4">
            We would love to hear your feedback about this program to make it more effective and robust for upcoming batches.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">Mobile</label>
              <input
                type="tel"
                id="mobile"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Mobile"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
        
      <div className="text-center text-gray-600 mt-4">
        ©2021 - CheckIAS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
