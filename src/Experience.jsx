import React from "react";
import Expdivs from "./Expdivs";

function Experience() {
  return (
    <div id="Experience" className="overflow-x-hidden">
      <div className="w-screen min-h-[100vh] bg-[#0A0A0C] text-white flex flex-col items-center justify-center relative">
        <div className="w-9/12 ">
          <div className="flex heading items-center justify-between">
            <h1 className="text-8xl font-instrumentSerif italic font-normal leading-[5.5rem]">
              <span className="font-foundersGrotesk-bold not-italic font-extrabold tracking-tighter text-8xl">
                TAKE A{" "}
              </span>
              look at my
              <br />
              Work{" "}
              <span className="font-foundersGrotesk-bold not-italic font-extrabold tracking-tighter text-8xl">
                EXPERIENCE
              </span>
            </h1>
          </div>
          <div className="w-full h-auto mt-5 mb-20 flex flex-wrap justify-center"> 
            <Expdivs
              heading={"Web Developer"}
              description={
                "Web developer skilled in creating responsive, user-friendly websites with modern technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS."
              }
              number={"01"}
            />
            <Expdivs
              heading={"WEB DESIGNER"}
              description={
                "Web designer specializing in crafting modern, visually appealing, and user-friendly interfaces using tools like Figma & Canva."
              }
              number={"02"}
            />
            <Expdivs
              heading={"PROGRAMMER"}
              description={
                "Programmer proficient in Python, C++, Java, and more, with expertise in building efficient, scalable solutions and solving complex problems."
              }
              number={"03"}
            />
            <Expdivs
              heading={"LEADERSHIP SKILLS"}
              description={
                "Lead a design team and currently heading two web development teams, overseeing project execution and ensuring high-quality, efficient results."
              }
              number={"04"}
            />
            <Expdivs
              heading={"DAY SCHOLAR AFFAIRS SECRETARY"}
              description={
                "Day Scholar Affairs Secretary and a proud member of the Student Council, dedicated to representing day scholars and fostering a strong sense of community"
              }
              number={"05"}
            />
            <Expdivs
              heading={"ACTIVE IN COLLEGE EVENTS"}
              description={
                "Active in college events and a key member of the core team for several successful initiatives, contributing to planning, execution, and overall event success."
              }
              number={"06"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;