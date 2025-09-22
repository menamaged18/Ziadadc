import { IHero } from '@/src/interfaces/IHero'
import React from 'react'


function HeroToggle({setShowUaeHero, showUaeHero}: IHero) {
  return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          <button
            onClick={() => setShowUaeHero(true)}
            className={`w-5 h-5 rounded-full transition-colors duration-300 ${
              showUaeHero ? 'bg-red-700' : 'bg-gray-400'
            }`}
            aria-label="Show UAE Hero"
          ></button>
          <button
            onClick={() => setShowUaeHero(false)}
            className={`w-5 h-5 rounded-full transition-colors duration-300 ${
              !showUaeHero ? 'bg-red-700' : 'bg-gray-400'
            }`}
            aria-label="Show Spain Hero"
          ></button>
        </div>
  )
}

export default HeroToggle