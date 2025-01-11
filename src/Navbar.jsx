import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [activePage, setActivePage] = useState('About'); // Default to 'About'
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef([]); // Store references to navigation items
  const paddingX = 20; // Horizontal padding for the white indicator
  const paddingY = 2;  // Vertical padding for the white indicator

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Update current based on scroll position
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      // Update the active page
      setActivePage(current);
    };

    // Attach scroll event listener
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Find the active page index
    const activeIndex = ['About', 'Projects', 'Experience', 'Contact'].indexOf(activePage);
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth, offsetHeight } = navRefs.current[activeIndex];
      setIndicatorStyle({
        left: offsetLeft - paddingX,
        width: offsetWidth + 2 * paddingX,
        top: `calc(50% - ${(offsetHeight + 2 * paddingY) / 2}px)`,
        height: offsetHeight + 2 * paddingY,
      });
    }
  }, [activePage]); // Runs whenever the activePage changes

  const handleClick = (page) => {
    setActivePage(page); // Update the active page manually
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
          {/* White indicator div */}
          <div
            className="absolute bg-white rounded-full transition-all duration-500"
            style={{
              ...indicatorStyle,
            }}
          ></div>

          {/* Navigation links */}
          {['About', 'Projects', 'Experience', 'Contact', 'Resume'].map((page, index) => (
            <div
              key={page}
              ref={(el) => (navRefs.current[index] = el)}
              className="relative mx-5 cursor-pointer"
              onClick={() => handleClick(page)}
            >
              <span
                className={`${
                  activePage === page
                    ? 'text-black font-instrumentSerif text-md'
                    : 'text-white font-light text-base hover:text-gray-400'
                } transition ease-in duration-100`}
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
