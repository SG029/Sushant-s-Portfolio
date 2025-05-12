import React from 'react';
import bgImage from './assets/images/bg.png';
import pfp from './assets/images/pfpp.png';
import './Hero.css';

function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="overflow-x-hidden">
      <div
        className="bg-section w-screen h-screen bg-[#0A0A0C] text-white flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '70%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container w-9/12 flex items-center justify-between gap-48 mx-auto ">
          <div className="txt-container flex flex-col items-start justify-center">
            <h1 className="txt text-8xl font-instrumentSerif italic pl-2">Hello, it's</h1>
            <h1 className="txt text-8xl font-foundersGrotesk-bold -mt-2 font-extrabold tracking-tighter">
              SUSHANT
            </h1>
          </div>
          <img src={pfp} alt="Profile Picture" className="pfpp h-auto w-[28.875rem]" />
        </div>
        <div
          onClick={handleScroll}
          className="cursor-pointer absolute left-1/2 transform -translate-x-1/2 bottom-12 flex items-center justify-center group"
        >
          <div className="scrollclick cursor-pointer h-20 w-20 rounded-full border-2 border-white bg-transparent group-hover:bg-white group-hover:scale-50 transition-all duration-500 ease-in-out flex items-center justify-center">
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
