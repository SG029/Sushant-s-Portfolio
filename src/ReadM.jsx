import React from "react";
import arrow from "./assets/images/tilted-arrow.png"; // Import your custom image


function ReadM() {
  return (
    <div className="overflow-hidden bg-red-500 ">
      <div className=" overflow-hidden group-hover:translate-y-[-50%] transition-all duration-500 ease-out">
        {/* First "Let's Go" with the arrow */}
        <div className="flex items-center justify-center">
          <span className="ml-1 text-main group-hover: transition-all ease-out">
            Read More
          </span>
          <img
            src={arrow}
            alt="Arrow"
            className="w-7 h-7 ml-0 transform group-hover:filter group-hover:invert transition-all "
          />
        </div>
        {/* Second "Let's Go" that appears on hover */}
        <div className="flex items-center justify-center">
          <span className="ml-1 text-main group-hover: transition-all  ease-out">
            Read More
          </span>
          <img
            src={arrow}
            alt="Arrow"
            className="w-7 h-7 ml-0 transform group-hover:filter group-hover:invert transition-all "
          />
        </div>
      </div>
    </div>
  );
}

export default ReadM;
