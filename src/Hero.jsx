import React from 'react';
import bgImage from './assets/images/bg.png';
import pfp from './assets/images/pfp.png';

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
  className="w-screen h-screen bg-[#0A0A0C] text-white flex items-center justify-center text-center relative"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: window.innerWidth >= 768 ? '70%' : '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
        <div className="container w-11/12 md:w-9/12 flex flex-col sm:flex-row items-center justify-between gap-12 md:gap-48 mx-auto">
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
  <h1 className="text-5xl md:text-8xl font-instrumentSerif italic pl-0 md:pl-2 mb-2 ">Hello, it's</h1>
  <h1 className="text-5xl md:text-8xl font-foundersGrotesk-bold -mt-2 md:-mt-4 font-extrabold tracking-tighter">
    SUSHANT
  </h1>
</div>


<img src={pfp} alt="Profile Picture" className="w-40 md:w-[28.875rem] h-auto sm:w-[15rem]" />
        </div>

        <div
          onClick={handleScroll}
          className="cursor-pointer absolute left-1/2 transform -translate-x-1/2 bottom-12 flex items-center justify-center group"
        >
          <div className="scrollclick cursor-pointer h-16 w-16 md:h-28 md:w-28 rounded-full border-2 border-white bg-transparent group-hover:bg-white group-hover:scale-50 transition-all duration-500 ease-in-out flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:text-black transition-all duration-500 ease-in-out"
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
