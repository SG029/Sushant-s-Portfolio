import React from "react";

function Footersocials({ text, icon: Icon ,onClick}) {
  return (
    <div className="h-7 overflow-hidden" onClick={onClick}>
      <div className="hover:translate-y-[-50%] transition-all duration-300 ease-out hover:text-[#8B8B8B] flex flex-col">
        <a href="#" className="text-xl pb-1 flex items-center gap-2">
          {Icon && <Icon className="text-2xl" />} {/* Display the icon */}
          {text}
        </a>
        <a href="#" className="text-xl pb-1 flex items-center gap-2">
          {Icon && <Icon className="text-2xl" />} {/* Display the icon */}
          {text}
        </a>
      </div>
    </div>
  );
}

export default Footersocials;
