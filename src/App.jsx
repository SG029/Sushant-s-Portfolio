import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import icon from './assets/images/loading.png';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(25); // Initial cursor size
  const [loading, setLoading] = useState(true); // Loading state
  const [progress, setProgress] = useState(0); // Progress state for the loading bar

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Reattach event listeners after loading is complete
    if (!loading) {
      const handleMouseEnter = () => setCursorSize(100);
      const handleMouseLeave = () => setCursorSize(25);

      const headings = document.querySelectorAll('h1');
      headings.forEach((heading) => {
        heading.addEventListener('mouseenter', handleMouseEnter);
        heading.addEventListener('mouseleave', handleMouseLeave);
      });

      // Cleanup event listeners
      return () => {
        headings.forEach((heading) => {
          heading.removeEventListener('mouseenter', handleMouseEnter);
          heading.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, [loading]); // Dependency ensures this runs after loading changes to false

  // Simulate loading delay with progress bar
  useEffect(() => {
    let progressInterval;

    if (loading) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 1; // Increment progress
          clearInterval(progressInterval); // Stop the interval when complete
          setLoading(false); // Hide loading screen
          return 100;
        });
      }, 30); // Adjust speed of loading bar (30ms per step)
    }

    return () => clearInterval(progressInterval);
  }, [loading]);

  return (
    <div className="bg-[#0A0A0C]">
      {/* Custom cursor */}
      <motion.div
        className="fixed pointer-events-none rounded-full bg-white z-50"
        style={{
          mixBlendMode: 'difference',
        }}
        animate={{
          x: cursorPosition.x - cursorSize / 2,
          y: cursorPosition.y - cursorSize / 2,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 50,
          mass: 0.5,
          velocity: 0.5,
        }}
      ></motion.div>

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[#0A0A0C] flex flex-col items-center justify-center z-50"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <motion.img
              src={icon} // Replace with the path to your loading image
              alt="Loading"
              className="w-32 h-32 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
            <div className="w-2/12 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'linear' }}
                style={{ transitionTimingFunction: 'ease-in-out' }}
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
