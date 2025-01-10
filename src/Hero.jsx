import React from 'react';
import bgImage from './assets/images/bg.png';
import pfp from './assets/images/pfp2.png';

function Hero() {
  // Function to handle scroll
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down 100vh
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <div className="overflow-x-hidden">
      <div
        className="w-screen h-screen bg-[#0A0A0C] text-white flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '70%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container w-9/12 flex items-center justify-between gap-48 mx-auto">
          <div className="flex flex-col items-start justify-center">
            {/* <h1 ><span className="text-8xl font-instrumentSerif italic pl-2">Hello, it's</span><br /><span className="text-8xl font-foundersGrotesk-bold font-extrabold tracking-tighter"> SUSHANT</span></h1> */}
            <h1 className="text-8xl font-instrumentSerif italic pl-2">Hello, it's</h1>
            <h1 className="text-8xl font-foundersGrotesk-bold -mt-2 font-extrabold tracking-tighter">
              SUSHANT
            </h1>
          </div>

          <img src={pfp} alt="Profile Picture" className="w-[28.875rem] h-auto" />
        </div>

        {/* Hover Wrapper */}
        <div 
        onClick={handleScroll} // Attach the scroll handler
        className="cursor-pointer absolute left-[12rem] bottom-12 flex items-center justify-center group">
          {/* Circle scales and fills white on hover */}
          <div
            className="scrollclick cursor-pointer h-28 w-28 rounded-full border-2 border-white bg-transparent group-hover:bg-white group-hover:scale-50 transition-all duration-500 ease-in-out flex items-center justify-center"
          >
            {/* Down Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white group-hover:text-black transition-all duration-500 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
