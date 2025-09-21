"use client";
import React from 'react';

const Head: React.FC = () => {
  return (
    <section
      className="pt-40 pb-40 bg-cover bg-center relative min-h-[500px] flex items-center"
      style={{ backgroundImage: `url(/UAE.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with 
            <span className="block mt-2 text-red-700 hover:text-red-800">Innovations</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful businesses who&apos;ve accelerated their growth with our proven solutions. 
            Ready to unlock your potential?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer bg-[#c21d25] border border-[#c21d25] hover:bg-[#a01820] hover:border-[#a01820]"
          >
            Get Started Today
          </button>
          <button 
            className="font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 duration-300 bg-[#1b6a3d] text-white hover:bg-[#14502e] cursor-pointer"
          >
            Learn More
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;