import React from 'react';
import arrow from './assets/images/tilted-arrow.png'; // Import your custom image

function About() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-screen min-h-screen bg-[#0A0A0C] text-white flex flex-col items-center justify-center relative">
        <div className="flex items-center justify-between w-9/12">
          <div className="heading-wrapper">
            <h1 className="font-foundersGrotesk-bold font-extrabold tracking-tighter text-8xl leading-[4rem]">
              FRONT <span className="text-8xl font-instrumentSerif italic font-normal">end</span>
              <br />
              DEVELOPER
            </h1>
          </div>
          <div className="side-heading">
            <p className="font-FoundersGrotesk-Regular font-light text-xl">
              As a front end developer using modern ideas <br />simplicity design and universal visual
              identification <br /> tailored to dedicated and current market.
            </p>
            <button className="w-auto h-10 mt-5 bg-transparent border-white border-2 rounded-full px-5 py-1 font-FoundersGrotesk-Regular font-light text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
              {/* Wrapper for the sliding effect */}
              <div className="mt-7 overflow-hidden group-hover:translate-y-[-50%] transition-all duration-500 ease-out">
                {/* First "Let's Go" with the arrow */}
                <div className="flex items-center justify-center">
                  <span className="ml-1 text-main group-hover: transition-all duration-500 ease-out">
                    Let's Go
                  </span>
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-7 h-7 ml-0 transform group-hover:filter group-hover:invert transition-all duration-500"
                  />
                </div>
                {/* Second "Let's Go" that appears on hover */}
                <div className="flex items-center justify-center">
                  <span className="ml-1 text-main group-hover: transition-all duration-500 ease-out">
                    Let's Go
                  </span>
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-7 h-7 ml-0 transform group-hover:filter group-hover:invert transition-all duration-500"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
