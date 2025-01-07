import React, { useState, useEffect } from 'react';
import Hero from './hero';
import Navbar from './Navbar';
import About from './About';
import { motion } from 'framer-motion';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(25);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setCursorSize(100);
    const handleMouseLeave = () => setCursorSize(25);

    const headings = document.querySelectorAll('h1');
    headings.forEach((heading) => {
      heading.addEventListener('mouseenter', handleMouseEnter);
      heading.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener('mouseenter', handleMouseEnter);
        heading.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
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
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
