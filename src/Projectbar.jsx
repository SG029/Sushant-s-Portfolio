import React from "react";
import pfp from "./assets/images/pfp.png";
import arrow from "./assets/images/tilted-arrow.png";

function Projectbar({ image, heading, description, githubLink, number }) {
  return (
    <div className="flex items-center justify-between  text-white p-6 border-b-2 border-white pt-10">
      <div className="leftside font-FoundersGrotesk-Regular w-[30rem]">
        <h2 className="text-[3rem] pb-1">
          {heading}
          <span className="pl-[5rem]  text-[2rem]">({number})</span>
        </h2>
        <p className="text-[#8B8B8B] text-[1.1rem] font-light pb-4">
          {description}
        </p>
      </div>
      <div className="middle">
        <img src={image} alt="" className="w-[15rem] h-auto" />
      </div>
      <div
        className="rightside hover:cursor-pointer h-7 overflow-hidden "
        onClick={() => window.open(githubLink, "_blank")}
      >
        <div className="hover:translate-y-[-50%] transition-all duration-300 ease-out">
          <div className="font-FoundersGrotesk-Regular text-[1.1rem] font-light flex items-center justify-center group relative overflow-hidden">
            Read more
            <img src={arrow} alt="" className="w-7 h-7 ml" />
          </div>
          <div className="font-FoundersGrotesk-Regular text-[1.1rem] font-light flex items-center justify-center group relative overflow-hidden ">
            Read more
            <img src={arrow} alt="" className="w-7 h-7 ml" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectbar;