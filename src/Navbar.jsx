import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef([]); // Store references to navigation items
  const [hoveredPage, setHoveredPage] = useState(''); // Track hovered page
  const paddingX = 20; // Horizontal padding for the white indicator
  const paddingY = 2; // Vertical padding for the white indicator

  useEffect(() => {
    const page = hoveredPage; // Use hoveredPage directly
    const activeIndex = ['About', 'Projects', 'Experience', 'Contact', 'Resume'].indexOf(page);

    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth, offsetHeight } = navRefs.current[activeIndex];
      setIndicatorStyle({
        left: offsetLeft - paddingX,
        width: offsetWidth + 2 * paddingX,
        top: `calc(50% - ${(offsetHeight + 2 * paddingY) / 2}px)`,
        height: offsetHeight + 2 * paddingY,
        opacity: 1, // Ensure it's visible during hover
      });
    } else {
      // Reset the indicator style when no page is hovered
      setIndicatorStyle({
        opacity: 0, // Fade out
      });
    }
  }, [hoveredPage]); // Runs whenever hoveredPage changes

  const handleClick = (page) => {
    if (page === 'Resume') {
      // Open the resume URL in a new tab
      window.open(
        'https://docs.google.com/document/d/163KJuMx16JnW3m1wn5aBG53-lklK7btE/edit?usp=sharing&ouid=109458991970907611938&rtpof=true&sd=true',
        '_blank'
      );
      return;
    }

    // Scroll to the corresponding section for other pages
    setHoveredPage(page);
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-8 left-0 w-full z-40">
      <div
        className="w-5/12 py-3 mx-auto backdrop-blur-md rounded-full relative overflow-hidden"
        style={{
          background: '#111111',
          border: '0.5px solid transparent',
          borderRadius: '50px',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'border-box',
          backgroundImage: `linear-gradient(#111111, #111111), 
              linear-gradient(to bottom, white, black, black, white)`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex items-center justify-center h-full gap-1 relative">
          {/* White indicator div with framer-motion */}
          <AnimatePresence>
            {hoveredPage && (
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
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            )}
          </AnimatePresence>

          {/* Navigation links */}
          {['About', 'Projects', 'Experience', 'Contact', 'Resume'].map((page, index) => (
            <div
              key={page}
              ref={(el) => (navRefs.current[index] = el)}
              className="relative mx-5 cursor-pointer"
              onClick={() => handleClick(page)}
              onMouseEnter={() => setHoveredPage(page)} // Set hovered page on hover
              onMouseLeave={() => setHoveredPage('')} // Reset hovered page when mouse leaves
            >
              <span
                className={`${
                  hoveredPage === page
                    ? 'text-black font-semibold text-md font-instrumentSerif'
                    : 'text-white font-light text-base hover:text-gray-400'
                } transition ease-in duration-300`}
              >
                {page}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
