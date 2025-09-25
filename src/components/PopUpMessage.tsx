"use client";
import React, { useState } from 'react';

function PopUpMessage() {
    const [isOpen, setIsOpen] = useState(true);

    // If the pop-up is not open, render nothing.
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div 
                className='fixed inset-0 bg-transparent backdrop-blur-sm z-40' 
                onClick={() => setIsOpen(false)}
            />

            {/* Pop-up Container: Centered on the screen with styling to make it stand out. */}
            <div className='
                fixed 
                top-1/2 
                left-1/2 
                transform 
                -translate-x-1/2 
                -translate-y-1/2 
                bg-white 
                text-gray-800 
                p-8 
                rounded-xl 
                shadow-2xl 
                z-50 
                max-w-sm 
                w-11/12
            '>
                
                {/* Close Button: Positioned absolutely in the top-right corner. */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className='
                        absolute 
                        top-2 
                        right-4 
                        text-2xl 
                        text-gray-500 
                        hover:text-gray-900 
                        font-bold 
                        cursor-pointer
                    '
                >
                    &times;
                </button>

                {/* Pop-up Content */}
                <div className='flex flex-col items-center space-y-4'>
                    <h2 className='text-2xl font-bold text-green-700'>
                        Book a Consultation now!
                    </h2>
                    <div className="bg-white rounded-xl shadow-lg p-2 border border-gray-100"> 
                        <div className="space-y-2">
                            <div className="flex items-start space-x-4 group hover:bg-green-50 p-3 rounded-lg transition-colors duration-200">
                                <div className="flex-shrink-0 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                                    Schedule Strategic Consultation
                                </span>
                            </div>
                            
                            <div className="flex items-start space-x-4 group hover:bg-green-50 p-3 rounded-lg transition-colors duration-200">
                                <div className="flex-shrink-0 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                                    Discuss Your Objectives before you decide
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* The primary Call to Action (CTA) button. */}
                    <button 
                        onClick={() => {
                            // console.log("User is claiming their offer!");
                            setIsOpen(false); 

                        }}
                        className='
                            w-full 
                            py-3 
                            bg-green-600 
                            text-white 
                            font-semibold 
                            rounded-lg 
                            hover:bg-green-700 
                            transition 
                            duration-300
                            cursor-pointer
                        '
                    >
                        ⚡ Book Consultation Now ⚡
                    </button>
                    
                    {/* Secondary action button for users who don't want the Consultation. */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className='text-xs text-gray-500 hover:text-gray-700 underline cursor-pointer'
                    >
                        No, thanks. I&apos;ll expore first.
                    </button>
                </div>
            </div>
        </>
    );
}

export default PopUpMessage;
