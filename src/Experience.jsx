import React, { useRef } from "react";
import Expdivs from "./Expdivs";
import "./Experience.css";

function Experience() {
  const expdivsssRef = useRef(null);

  const scrollLeft = () => {
    if (expdivsssRef.current) {
      expdivsssRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (expdivsssRef.current) {
      expdivsssRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const experienceData = [
    {
      heading: "Web Developer",
      description: "Web developer skilled in creating responsive, user-friendly websites with modern technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      number: "01"
    },
    {
      heading: "WEB DESIGNER",
      description: "Web designer specializing in crafting modern, visually appealing, and user-friendly interfaces using tools like Figma & Canva.",
      number: "02"
    },
    {
      heading: "PROGRAMMER",
      description: "Programmer proficient in Python, C++, Java, and more, with expertise in building efficient, scalable solutions and solving complex problems.",
      number: "03"
    },
    {
      heading: "LEADERSHIP SKILLS",
      description: "Lead a design team and currently heading two web development teams, overseeing project execution and ensuring high-quality, efficient results.",
      number: "04"
    },
    {
      heading: "DAY SCHOLAR AFFAIRS SECRETARY",
      description: "Day Scholar Affairs Secretary and a proud member of the Student Council, dedicated to representing day scholars and fostering a strong sense of community",
      number: "05"
    },
    {
      heading: "ACTIVE IN COLLEGE EVENTS",
      description: "Active in college events and a key member of the core team for several successful initiatives, contributing to planning, execution, and overall event success.",
      number: "06"
    }
  ];

  return (
    <div id="Experience" className="experience-container">
      <div className="experience-wrapper">
        <div className="main-exp">
          <div className="exptop">
            <h1 className="experience-heading">
              <span className="heading-bold">TAKE A </span>
              look at my
              Work{" "}
              <span className="heading-bold">EXPERIENCE</span>
            </h1>
          </div>
          
          {/* Desktop View - Original Grid Layout */}
          <div className="desktop-exp-grid">
            {experienceData.map((exp, index) => (
              <Expdivs
                key={index}
                heading={exp.heading}
                description={exp.description}
                number={exp.number}
              />
            ))}
          </div>
          
          {/* Tablet/Mobile View - Horizontal Scroll */}
          <div className="mobile-exp-scroll">
            <button 
              className="scroll-arrow left"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              &larr;
            </button>
            
            <div 
              className="expdivsss"
              ref={expdivsssRef}
            >
              {experienceData.map((exp, index) => (
                <div key={index} className="expdiv-item">
                  <Expdivs
                    heading={exp.heading}
                    description={exp.description}
                    number={exp.number}
                  />
                </div>
              ))}
            </div>
            
            <button 
              className="scroll-arrow right"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;