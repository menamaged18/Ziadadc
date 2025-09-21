"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BusinessSetupDropdown from './BusinessSetupDropdown';
import ServiceDropDown from './ServiceDropDown';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#1b6a3d]">
              <Image
                src="/ZIADA-LOGO-COLORS.png"
                alt="ZIADA Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <BusinessSetupDropdown />
            <ServiceDropDown />
            <Link href="#about" className="text-gray-700 hover:text-[#1b6a3d] px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="#why-choose-us" className="text-gray-700 hover:text-[#1b6a3d] px-3 py-2 rounded-md">
              Why Us
            </Link>
            <Link href="#faqs" className="text-gray-700 hover:text-[#1b6a3d] px-3 py-2 rounded-md">
              FAQs
            </Link>
            <button className="bg-[#c21d25] text-white px-4 py-2 rounded-md hover:bg-[#a11820] transition">
              Get Started
            </button>
          </div>
          {/* Hamburger Button for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#1b6a3d] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <BusinessSetupDropdown />
            <ServiceDropDown />
            <Link
              href="#about"
              className="block text-gray-700 hover:text-[#1b6a3d] px-3 py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="#why-choose-us"
              className="block text-gray-700 hover:text-[#1b6a3d] px-3 py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              Why Us
            </Link>
            <Link
              href="#faqs"
              className="block text-gray-700 hover:text-[#1b6a3d] px-3 py-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              FAQs
            </Link>
            <button
              className="w-full bg-[#c21d25] text-white px-4 py-2 rounded-md hover:bg-[#a11820] transition text-left"
              onClick={toggleMobileMenu}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;