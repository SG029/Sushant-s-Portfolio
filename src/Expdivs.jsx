import React, { useRef, useState } from "react";

function Expdivs({ heading, description, number }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Reduced effect strength for smoother movement
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 }); 
  }; 

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform 0.2s ease-out, background-color 0.3s ease-in-out", // Transition for background
      }}
      className="group flex flex-col items-start justify-start text-white p-6 pt-3 w-[22rem] mx-4 h-auto rounded-xl transition-all duration-500 ease-in-out 
                 bg-transparent hover:bg-white hover:text-black mt-10" 
    >
      <h2 className="text-[2rem] uppercase pb-3 font-FoundersGrotesk-Regular font-light transition-colors ease-in-out">
        ({number})
      </h2>
      <div className="w-full h-auto border-t-[2px] border-white group-hover:border-black">
      <h2 className="heading text-[2rem] pb-6 uppercase pt-5  leading-8 font-FoundersGrotesk-Regular font-medium transition-colors  ease-in-out">
        {heading}
      </h2>
      </div>
      
      <p className="text-[1.1rem] leading-5 font-FoundersGrotesk-Regular font-light transition-colors  ease-in-out">
        {description}
      </p>
    </div>
  );
}

export default Expdivs;