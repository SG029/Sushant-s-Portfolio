import React, { useRef } from "react";
import mail from "./assets/images/mail.png";

function Footer() {
  const mailboxRef = useRef(null);

  const handleMouseMove = (e) => {
    const mailbox = mailboxRef.current;

    if (mailbox) {
      const rect = mailbox.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      // Subtle transformation with reduced movement
      const x = offsetX * 0.1; // Reduced multiplier for smoothness
      const y = offsetY * 0.1;

      // Apply the transform using requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        mailbox.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  };

  const handleMouseLeave = () => {
    if (mailboxRef.current) {
      // Smoothly reset the transform
      mailboxRef.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <div id='Contact' className="overflow-x-hidden">
      <div className="w-screen h-auto bg-[#0A0A0C] text-white flex flex-col items-center justify-center relative">
        <div className="w-9/12 border-t-2 border-b-2 border-white mb-10 flex items-center justify-between">
          <div className="leftside w-[60%] pr-10">
            <h1 className="text-8xl font-instrumentSerif italic font-normal leading-[5.5rem] my-6">
              Let's{" "}
              <span className="font-foundersGrotesk-bold not-italic font-extrabold tracking-tighter text-8xl">
                TALK
              </span>
            </h1>
            <p className="font-FoundersGrotesk-Regular font-light text-xl">
              Feel free to reach out anytime! I’m open to connecting, chatting,
              and exploring opportunities together.
            </p>
            <a href="mailto:sushant23538@iiitd.ac.in">
              <div
                ref={mailboxRef}
                className="mailbox inline-flex items-center hover:cursor-pointer justify-center my-5 p-3 border-white border-2 rounded-md bg-transparent 
                        transition-colors duration-500 ease-in-out group hover:bg-white hover:text-black" 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={mail}
                  alt="Mail Icon"
                  className="w-7 transition-all duration-300 group-hover:filter group-hover:brightness-0"
                />
                <h2 className="text-xl pl-2">sushant23538@iiitd.ac.in</h2>
              </div>
            </a>
          </div>
          <div className="rightside"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;