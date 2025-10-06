"use client";
import React from 'react';
import { IHero } from '../../interfaces/IHero';
import HeroToggle from './HeroToggle';


const SpainHero: React.FC<IHero> = ({setShowUaeHero, showUaeHero}) => {
  return (
<section
  className="h-[600px] pt-40 pb-40 bg-cover bg-center relative flex items-center"
  style={{ backgroundImage: `url(/Barcelona.jpg)` }}
>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative md:max-w-7xl max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white md:mb-6 mb-3 leading-tight">
            Want to immigrate to   
            <span className="block mx-auto mt-4 p-2 w-34 rounded-2xl text-white bg-red-800 transition-all transform hover:scale-105 duration-300">Spain</span>
          </h2>
          <p className="md:text-xl text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join Hundereds of successful Immigrations to Spain.
            Ready?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="text-white font-semibold md:py-4 md:px-8 py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer bg-red-800 hover:bg-red-900 "
            >
              Get Started Today
            </button>
            <button 
              className="font-semibold md:py-4 md:px-8 py-2 px-4 rounded-lg transition-all transform hover:scale-105 duration-300 bg-[#1b6a3d] text-white hover:bg-[#14502e] cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <p className='text-white text-2xl md:text-4xl my-2 font-bold absolute top-130 left-1/2 -translate-x-1/2 -translate-y-1/2'>or</p>
      <HeroToggle setShowUaeHero={setShowUaeHero} showUaeHero={showUaeHero} />
    </section>
  );
};

export default SpainHero;