"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const More: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      {/* Button for both mobile and desktop */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 hover:text-[#1b6a3d] px-3 py-2 rounded-md w-full text-left lg:w-auto"
      >
        More
        <svg
          className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'group-hover:rotate-180'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:group-hover:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-full w-full lg:w-48 bg-white lg:shadow-lg rounded-md overflow-hidden z-20 transition-all duration-200 lg:opacity-0 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible`}
      >
        <Link
          href="#about"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          About
        </Link>
        <Link
          href="#why-choose-us"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          Why Us
        </Link>
        <Link
          href="#faqs"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          FAQs
        </Link>
        <Link
          href="#Services"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          Our Services
        </Link>
        <Link
          href="#Contact"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          Contact
        </Link>
        <Link
          // href="#Services"
          href="/"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          Our Clients Reviews
        </Link>
        <Link
          href="#faqs"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          Licence
        </Link>
        <Link
          href="#faqs"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1b6a3d]"
          onClick={closeDropdown}
        >
          Employees verifications
        </Link>
      </div>
    </div>
  );
};

export default More;