import React, { useRef } from "react";
import { FaInstagram } from "react-icons/fa"; // Instagram icon
import { FaLinkedinIn } from "react-icons/fa"; // LinkedIn icon
import { HiOutlineMail } from "react-icons/hi"; // Gmail icon
import { FaGithub } from "react-icons/fa"; // GitHub icon
import mail from "./assets/images/mail.png";
import Footerlinks from "./Footerlinks";
import Footersocials from "./Footersocials";

function Footer() {
  const mailboxRef = useRef(null);

  const handleMouseMove = (e) => {
    const mailbox = mailboxRef.current;

    if (mailbox) {
      const rect = mailbox.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      const x = offsetX * 0.1;
      const y = offsetY * 0.1;

      requestAnimationFrame(() => {
        mailbox.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  };

  const handleClick = (page) => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMouseLeave = () => {
    if (mailboxRef.current) {
      mailboxRef.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <div id="Contact" className="overflow-x-hidden">
      <div className="w-screen h-auto bg-[#0A0A0C] text-white flex flex-col items-center justify-center relative">
        <div className="w-9/12 border-t-2 border-b-2 border-white mb-3 flex items-center justify-between">
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
          <div className="rightside flex items-center justify-between px-20 w-[40%]">
            <div className="navlinks flex flex-col gap-2">
              {["About", "Projects", "Experience", "Contact", "Resume"].map(
                (page) => (
                  <Footerlinks
                    key={page}
                    text={page}
                    onClick={() => handleClick(page)}
                  />
                )
              )}
            </div>
            <div className="socials flex flex-col gap-2">
              <Footersocials text="LinkedIn" icon={FaLinkedinIn} onClick={() => window.open("https://www.linkedin.com/in/sushant-gola/", "_blank")}/>
              <Footersocials text="Instagram" icon={FaInstagram} onClick={() => window.open("https://www.instagram.com/sushant_since2004/", "_blank")}/>
              <Footersocials text="GitHub" icon={FaGithub} onClick={() => window.open("https://github.com/SG029", "_blank")}/>
            </div>
          </div>
        </div>
        <h2 className="text-xl mb-5 font-FoundersGrotesk-Regular font-light text-[#8f8f8f]">
          Copyright © 2024 | Designed and developed by{" "}
          <a
            className="text-white font-instrumentSerif italic cursor-pointer hover:underline  hover:text-[#8f8f8f]"   
            href="https://github.com/SG029"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sushant Gola
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
