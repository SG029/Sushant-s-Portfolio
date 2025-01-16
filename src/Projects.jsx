import React from "react";
import github from "./assets/images/github.png";
import Projectbar from "./Projectbar";
import essenza from "./assets/images/essenza.png";
import ab from "./assets/images/ab.png";
import pong from "./assets/images/pong.png";
import opencv from "./assets/images/opencv.png";
import ochi from "./assets/images/ochi.png";
import wit from "./assets/images/wit.png";
function Projects() {
  return (
    <div id='Projects' className="overflow-x-hidden text-white">
      <div className="w-screen min-h-[100vh] bg-[#0A0A0C] relative flex flex-col items-center justify-center">
        <div className="flex w-9/12 justify-between items-center ">
          <div className="heading">
            <h1 className="text-8xl font-instrumentSerif italic font-normal leading-[5.5rem]">
              Check out my <br />
              <span className="font-foundersGrotesk-bold not-italic tracking-tighter font-extrabold text-8xl">
                PROJECTS
              </span>
            </h1>
          </div>
          <div className="sidetext w-[30rem] ">
            <p className="font-FoundersGrotesk-Regular font-light text-xl">
              These are some of my amazing projects. To explore more of my work,
              feel free to follow the GitHub link, connect for collaboration
              opportunities, and discover innovative ideas, creative designs,
              and cutting-edge solutions.
            </p>
            <button
              onClick={() => window.open("https://github.com/SG029", "_blank")}
              className="w-auto h-9 mt-5 bg-transparent border-white border-2 rounded-full px-5 py-1 font-FoundersGrotesk-Regular font-light text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
            >
              <div className="mt-7 overflow-hidden group-hover:translate-y-[-50%] transition-all duration-500 ease-out">
                <div className="flex items-center justify-center">
                  <img
                    src={github}
                    className="w-7 h-7 mr-2 transform group-hover:filter group-hover:invert transition-all scale-75 "
                  />
                  <span className="mr-1 text-main group-hover: transition-all ease-out">
                    See more
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={github}
                    className="w-7 h-7 mr-2 transform group-hover:filter group-hover:invert transition-all scale-75 "
                  />
                  <span className="mr-1 text-main group-hover: transition-all ease-out">
                    See more
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="projects w-9/12 pt-20 pb-40">
          <Projectbar
            image={essenza}
            heading="ESSENZA"
            description="This is a short description of the project showcasing its features and technologies used."
            githubLink="https://github.com/SG029/ESSENZA"
            number="01"
          />
          <Projectbar
            image={ab}
            heading="ANGRY BIRDS"
            description="A fun game built using Java, JavaFX, and IntelliJ, designed for an engaging and interactive experience."
            githubLink="https://github.com/SG029/ApAB"
            number="02"
          />
          <Projectbar
            image={pong}
            heading="PONG"
            description="A fun game built using Python, Pygame, and MySQL, designed for an engaging and interactive experience."
            githubLink="https://github.com/SG029/Classic-Pong-Game"
            number="03"
          />
          <Projectbar
            image={opencv}
            heading="MOTION MAN"
            description="A fun game built with Python and OpenCV, inspired by Chrome Dino, where a character is controlled by hand gestures for an interactive challenge."
            githubLink="https://github.com/SG029/Motion-Man"
            number="04"
          />
          <Projectbar
            image={ochi}
            heading="OCHI REPLICA"
            description="This is a replica of a website with a modern web design, offering an attractive and visually appealing user experience."
            githubLink="https://github.com/SG029/ochi_web"
            number="05"
          />
          <Projectbar
            image={wit}
            heading="Women in Tech"
            description="Interactive Women in Tech IIITD website built with React, Tailwind CSS, and seamless React Router navigation."
            githubLink="https://github.com/SG029/WIT-web"
            number="06"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
