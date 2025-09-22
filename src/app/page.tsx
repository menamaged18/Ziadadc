'use client'
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import NavBar from '../components/NavBar/NavBar';
import UAEHero from '../components/Heros/UAEHero';
import SpainHero from '../components/Heros/SpainHero';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import AboutPage from '../components/About';
import ServicesSection from '../components/Services';
import ContactSection from '../components/Contact';

export default function Home() {
  const [showUaeHero, setShowUaeHero] = useState(true);
  const toggleCountRef = useRef(0);

  useEffect(() => {
    const toggleHero = () => {
      
      if (toggleCountRef.current < 2) {
        setShowUaeHero(prevState => !prevState);
        toggleCountRef.current += 1; 
        
        setTimeout(toggleHero, 6000);
      }
    };

    // Start the first toggle after the initial render
    const initialTimer = setTimeout(toggleHero, 3000);

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(initialTimer);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="relative">
        <AnimatePresence mode="wait">
          {showUaeHero ? (
            <motion.div
              key="uae-hero"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <UAEHero setShowUaeHero={setShowUaeHero} showUaeHero={showUaeHero} />
            </motion.div>
          ) : (
            <motion.div
              key="spain-hero"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SpainHero setShowUaeHero={setShowUaeHero} showUaeHero={showUaeHero} />
            </motion.div>
          )}
        </AnimatePresence>
        <AboutPage />
        <ServicesSection />
        <WhyChooseUs />
        <FAQs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}