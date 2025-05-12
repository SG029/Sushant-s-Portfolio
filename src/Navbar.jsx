// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function Navbar() {
//   const [indicatorStyle, setIndicatorStyle] = useState({});
//   const navRefs = useRef([]); // Store references to navigation items
//   const [hoveredPage, setHoveredPage] = useState(''); // Track hovered page
//   const paddingX = 20; // Horizontal padding for the white indicator
//   const paddingY = 2; // Vertical padding for the white indicator

//   useEffect(() => {
//     const page = hoveredPage; // Use hoveredPage directly
//     const activeIndex = ['About', 'Projects', 'Experience', 'Contact', 'Resume'].indexOf(page);

//     if (activeIndex !== -1 && navRefs.current[activeIndex]) {
//       const { offsetLeft, offsetWidth, offsetHeight } = navRefs.current[activeIndex];
//       setIndicatorStyle({
//         left: offsetLeft - paddingX,
//         width: offsetWidth + 2 * paddingX,
//         top: `calc(50% - ${(offsetHeight + 2 * paddingY) / 2}px)`,
//         height: offsetHeight + 2 * paddingY,
//         opacity: 1, // Ensure it's visible during hover
//       });
//     } else {
//       // Reset the indicator style when no page is hovered
//       setIndicatorStyle({
//         opacity: 0, // Fade out
//       });
//     }
//   }, [hoveredPage]); // Runs whenever hoveredPage changes

//   const handleClick = (page) => {
//     if (page === 'Resume') {
//       // Open the resume URL in a new tab
//       window.open(
//         'https://docs.google.com/document/d/163KJuMx16JnW3m1wn5aBG53-lklK7btE/edit?usp=sharing&ouid=109458991970907611938&rtpof=true&sd=true',
//         '_blank'
//       );
//       return;
//     }

//     // Scroll to the corresponding section for other pages
//     setHoveredPage(page);
//     const section = document.getElementById(page);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <div className="fixed top-8 left-0 w-full z-40">
//       <div
//         className="w-5/12 py-3 mx-auto backdrop-blur-md rounded-full relative overflow-hidden"
//         style={{
//           background: '#111111',
//           border: '0.5px solid transparent',
//           borderRadius: '50px',
//           backgroundClip: 'padding-box, border-box',
//           backgroundOrigin: 'border-box',
//           backgroundImage: `linear-gradient(#111111, #111111), 
//               linear-gradient(to bottom, white, black, black, white)`,
//           backdropFilter: 'blur(10px)',
//           WebkitBackdropFilter: 'blur(10px)',
//         }}
//       >
//         <div className="flex items-center justify-center h-full gap-1 relative">
//           {/* White indicator div with framer-motion */}
//           <AnimatePresence>
//             {hoveredPage && (
//               <motion.div
//                 className="absolute bg-white rounded-full"
//                 style={{
//                   ...indicatorStyle,
//                   position: 'absolute',
//                 }}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                   left: indicatorStyle.left,
//                   width: indicatorStyle.width,
//                   top: indicatorStyle.top,
//                   height: indicatorStyle.height,
//                 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4, ease: 'easeInOut' }}
//               />
//             )}
//           </AnimatePresence>

//           {/* Navigation links */}
//           {['About', 'Projects', 'Experience', 'Contact', 'Resume'].map((page, index) => (
//             <div
//               key={page}
//               ref={(el) => (navRefs.current[index] = el)}
//               className="relative mx-5 cursor-pointer"
//               onClick={() => handleClick(page)}
//               onMouseEnter={() => setHoveredPage(page)} // Set hovered page on hover
//               onMouseLeave={() => setHoveredPage('')} // Reset hovered page when mouse leaves
//             >
//               <span
//                 className={`${
//                   hoveredPage === page
//                     ? 'text-black font-semibold text-md font-instrumentSerif'
//                     : 'text-white font-light text-base hover:text-gray-400'
//                 } transition ease-in duration-300`}
//               >
//                 {page}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef([]);
  const [hoveredPage, setHoveredPage] = useState('');
  const [activePage, setActivePage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const paddingX = 16;
  const paddingY = 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const targetPage = hoveredPage || activePage;
    if (!targetPage) {
      setIndicatorStyle({ opacity: 0 });
      return;
    }

    const activeIndex = ['About', 'Projects', 'Experience', 'Contact', 'Resume'].indexOf(targetPage);
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth, offsetHeight } = navRefs.current[activeIndex];
      setIndicatorStyle({
        left: offsetLeft - paddingX,
        width: offsetWidth + 2 * paddingX,
        top: `calc(50% - ${(offsetHeight + 2 * paddingY) / 2}px)`,
        height: offsetHeight + 2 * paddingY,
        opacity: 1,
      });
    }
  }, [hoveredPage, activePage]);

  const scrollToSection = (page) => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClick = (page) => {
    setActivePage(page);

    if (page === 'Resume') {
      window.open(
        'https://docs.google.com/document/d/163KJuMx16JnW3m1wn5aBG53-lklK7btE/edit?usp=sharing&ouid=109458991970907611938&rtpof=true&sd=true',
        '_blank'
      );
      return;
    }

    if (isMobile) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        scrollToSection(page);
      }, 300); // matches animation duration
    } else {
      scrollToSection(page);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="w-full max-w-4xl py-3 mx-auto px-4">
          <div
            className="w-full py-3 mx-auto backdrop-blur-md rounded-full relative overflow-hidden"
            style={{
              background: '#111111',
              border: '0.5px solid transparent',
              borderRadius: '50px',
              backgroundClip: 'padding-box, border-box',
              backgroundOrigin: 'border-box',
              backgroundImage: `linear-gradient(#111111, #111111), 
                linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(0,0,0,0.3), rgba(0,0,0,0.3), rgba(255,255,255,0.3))`,
            }}
          >
            <div className="flex items-center justify-center h-full gap-1 relative">
              <AnimatePresence>
                {(hoveredPage || activePage) && (
                  <motion.div
                    className="absolute bg-white rounded-full"
                    style={{
                      ...indicatorStyle,
                      position: 'absolute',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      left: indicatorStyle.left,
                      width: indicatorStyle.width,
                      top: indicatorStyle.top,
                      height: indicatorStyle.height,
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                )}
              </AnimatePresence>

              {['About', 'Projects', 'Experience', 'Contact', 'Resume'].map((page, index) => (
                <div
                  key={page}
                  ref={(el) => (navRefs.current[index] = el)}
                  className="relative mx-2 lg:mx-4 cursor-pointer"
                  onClick={() => handleClick(page)}
                  onMouseEnter={() => setHoveredPage(page)}
                  onMouseLeave={() => setHoveredPage('')}
                >
                  <span
                    className={`${
                      hoveredPage === page || activePage === page
                        ? 'text-black font-semibold text-lg'
                        : 'text-white font-light text-md hover:text-gray-300'
                    } transition-all duration-300`}
                  >
                    {page}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="w-full py-3 px-4 backdrop-blur-md" style={{ background: '#111111' }}>
          <div className="flex justify-between items-center">
            <div className="text-white font-semibold text-lg">Portfolio</div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
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

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col space-y-3 mt-4">
                  {['About', 'Projects', 'Experience', 'Contact', 'Resume'].map((page) => (
                    <div
                      key={page}
                      className={`py-2 px-4 rounded-lg text-lg ${
                        activePage === page ? 'bg-white text-black' : 'text-white'
                      }`}
                      onClick={() => handleClick(page)}
                    >
                      {page}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
