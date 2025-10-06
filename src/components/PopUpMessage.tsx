"use client";
import React, { useState } from "react";

const PopUpMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      <div
        className="
          fixed 
          top-1/2 
          left-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/2 
          bg-gradient-to-br from-emerald-50 via-white to-teal-50
          text-gray-900
          p-6
          rounded-2xl 
          shadow-xl
          border border-emerald-100
          z-50 
          max-w-sm 
          w-10/12
          animate-[scale-in_0.3s_ease-out]
        "
      >
        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute 
            top-3 
            right-3 
            w-6
            h-6
            flex
            items-center
            justify-center
            text-gray-400
            hover:text-gray-700
            hover:bg-gray-100
            rounded-full
            transition-all
            duration-200
            cursor-pointer
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-700 w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold bg-green-700 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-sm">
              Book your free consultation today
            </p>
          </div>

          <div className="w-full space-y-2">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-emerald-100/50 hover:border-emerald-200 transition-all duration-200 hover:shadow-sm">
              <div className="w-8 h-8 bg-green-700 rounded-md flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium text-sm">
                Strategic Consultation
              </span>
            </div>

            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-emerald-100/50 hover:border-emerald-200 transition-all duration-200 hover:shadow-sm">
              <div className="w-8 h-8 bg-green-700 rounded-md flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium text-sm">
                Discuss Your Goals
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="
              w-full 
              py-3
              bg-red-700
              text-white 
              font-semibold
              text-sm
              rounded-lg
              hover:bg-red-800
              transform hover:scale-[1.02]
              active:scale-[0.98]
              transition-all
              duration-200
              shadow-md
              hover:shadow-lg
            "
          >
            <span className="flex items-center justify-center space-x-1 cursor-pointer">
              {/* <span>⚡</span> */}
              <span>Book Now</span>
              {/* <span>⚡</span> */}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
          >
            Explore first
          </button>
        </div>
      </div>
    </>
  );
};

export default PopUpMessage;