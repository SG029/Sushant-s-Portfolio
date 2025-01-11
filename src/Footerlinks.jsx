import React from "react";

function Footerlinks({ text, onClick }) {
  return (
    <div
      className="h-7 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="hover:translate-y-[-50%] transition-all duration-300 ease-out hover:text-[#8B8B8B] flex flex-col">
        <p className="text-xl pb-1">{text}</p>
        <p className="text-xl pb-1">{text}</p>
      </div>
    </div>
  );
}

export default Footerlinks;
