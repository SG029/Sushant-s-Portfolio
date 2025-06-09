// import React, { useState, useEffect } from 'react';
// import Hero from './Hero';
// import Navbar from './Navbar';
// import About from './About';
// import Projects from './Projects';
// import Experience from './Experience';
// import Footer from './Footer';
// import { motion, AnimatePresence } from 'framer-motion';
// import icon from './assets/images/loading.png';
// import './App.css'

// function App() {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [cursorSize, setCursorSize] = useState(25); // Initial cursor size
//   const [loading, setLoading] = useState(true); // Loading state
//   const [progress, setProgress] = useState(0); // Progress state for the loading bar

//   useEffect(() => {
//     // Track mouse position
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     // Reattach event listeners after loading is complete
//     if (!loading) {
//       const handleMouseEnter = () => setCursorSize(100);
//       const handleMouseLeave = () => setCursorSize(25);

//       const headings = document.querySelectorAll('h1');
//       headings.forEach((heading) => {
//         heading.addEventListener('mouseenter', handleMouseEnter);
//         heading.addEventListener('mouseleave', handleMouseLeave);
//       });

//       // Cleanup event listeners
//       return () => {
//         headings.forEach((heading) => {
//           heading.removeEventListener('mouseenter', handleMouseEnter);
//           heading.removeEventListener('mouseleave', handleMouseLeave);
//         });
//       };
//     }
//   }, [loading]); // Dependency ensures this runs after loading changes to false

//   // Simulate loading delay with progress bar
//   useEffect(() => {
//     let progressInterval;

//     if (loading) {
//       progressInterval = setInterval(() => {
//         setProgress((prev) => {
//           if (prev < 100) return prev + 1; // Increment progress
//           clearInterval(progressInterval); // Stop the interval when complete
//           setLoading(false); // Hide loading screen
//           return 100;
//         });
//       }, 30); // Adjust speed of loading bar (30ms per step)
//     }

//     return () => clearInterval(progressInterval);
//   }, [loading]);

//   return (
//     <div className="bg-[#0A0A0C]">
//       <style>
//         {`
//           /* Custom scrollbar styling */
//           ::-webkit-scrollbar {
//             width: 10px;
//           }

//           ::-webkit-scrollbar-track {
//             background: #0A0A0C; /* Black track */
//           }

//           ::-webkit-scrollbar-thumb {
//             background: white; /* White thumb */
//             border-radius: 6px;
//           }

//           ::-webkit-scrollbar-thumb:hover {
//             background: #d1d1d1; /* Slightly lighter on hover */
//           }
//         `}
//       </style>

//       {/* Custom cursor */}
//       <motion.div
//         className="cursor fixed pointer-events-none rounded-full bg-white z-50"
//         style={{
//           mixBlendMode: 'difference',
//         }}
//         animate={{
//           x: cursorPosition.x - cursorSize / 2,
//           y: cursorPosition.y - cursorSize / 2,
//           width: `${cursorSize}px`,
//           height: `${cursorSize}px`,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 800,
//           damping: 50,
//           mass: 0.5,
//           velocity: 0.5,
//         }}
//       ></motion.div>

//       {/* Loading Screen */}
//       <AnimatePresence>
//         {loading && (
//           <motion.div
//             className="fixed top-0 left-0 w-full h-full bg-[#0A0A0C] flex flex-col items-center justify-center z-50"
//             initial={{ y: 0 }}
//             animate={{ y: 0 }}
//             exit={{ y: '-100%' }}
//             transition={{ duration: 1, ease: 'easeInOut' }}
//           >
//             <motion.img
//               src={icon} // Replace with the path to your loading image
//               alt="Loading"
//               className="w-32 h-32 mb-6"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             />
//             <div className="w-2/12 h-2 bg-gray-700 rounded-full overflow-hidden">
//               <motion.div
//                 className="h-full bg-white"
//                 initial={{ width: '0%' }}
//                 animate={{ width: `${progress}%` }}
//                 transition={{ duration: 0.3, ease: 'linear' }}
//                 style={{ transitionTimingFunction: 'ease-in-out' }}
//               ></motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main content */}
//       {!loading && (
//         <>
//           <Navbar />
//           <Hero />
//           <About />
//           <Projects />
//           <Experience />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import icon from './assets/images/loading.png';
import './App.css'

function App() {
  const [cursorSize, setCursorSize] = useState(25); // Initial cursor size
  const [loading, setLoading] = useState(true); // Loading state
  const [progress, setProgress] = useState(0); // Progress state for the loading bar
  const cursorRef = useRef(null); // Reference to cursor element
  const cursorPosition = useRef({ x: 0, y: 0 }); // Store cursor position

  useEffect(() => {
    // Set initial cursor position and create GSAP timeline for smooth animation
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    }

    // Track mouse position and animate cursor with GSAP
    const handleMouseMove = (e) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX ,
          y: e.clientY ,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Animate cursor size changes with GSAP - smoother hover transitions
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        width: cursorSize,
        height: cursorSize,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
        overwrite: "auto"
      });
    }
  }, [cursorSize]);

  useEffect(() => {
    // Reattach event listeners after loading is complete with smoother transitions
    if (!loading) {
      const handleMouseEnter = () => {
        setCursorSize(100);
        // Add scale animation for extra smoothness
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: 1
          });
        }
      };
      
      const handleMouseLeave = () => {
        setCursorSize(25);
        // Reset any scale animations
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        }
      };

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
      <style>
        {`
          /* Custom scrollbar styling */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #0A0A0C; /* Black track */
          }

          ::-webkit-scrollbar-thumb {
            background: white; /* White thumb */
            border-radius: 6px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #d1d1d1; /* Slightly lighter on hover */
          }

          /* Custom cursor styling */
          .cursor {
            mix-blend-mode: difference;
          }
        `}
      </style>

      {/* Custom cursor with GSAP animation */}
      {!loading && (
        <div
          ref={cursorRef}
          className="cursor fixed pointer-events-none rounded-full bg-white z-50"
          style={{
            width: cursorSize,
            height: cursorSize,
            left: 0,
            top: 0,
          }}
        ></div>
      )}

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