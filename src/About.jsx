import React from "react";
import arrow from "./assets/images/tilted-arrow.png";
import "./About.css";

function About() {
  const scrollToNextSection = () => {
    const currentScrollPosition = window.scrollY; // Current scroll position
    const nextScrollPosition = currentScrollPosition + window.innerHeight; // Add 100vh
    window.scrollTo({ top: nextScrollPosition, behavior: "smooth" }); // Smooth scroll
  };

  return (
    <div id="About" className="overflow-x-hidden">
      <div className="w-screen min-h-screen bg-[#0A0A0C] text-white flex flex-col items-center justify-center relative">
        <div className="toppp flex items-center justify-between gap-[10vw] w-9/12 ">
          <div className="heading-wrapper">
            <h1 className="txta font-foundersGrotesk-bold font-extrabold tracking-tighter text-8xl leading-[4rem]">
              FRONT{" "}
              <span className="txtt text-8xl font-instrumentSerif italic font-normal">
                end
              </span>
              <br />
              DEVELOPER
            </h1>
          </div>
          <div className="side-heading flex flex-col ">
            <p className="font-FoundersGrotesk-Regular font-light text-xl">
              As a front end developer using modern ideas simplicity design and
              universal visual identification tailored to dedicated and current
              market.
            </p>
            <button
              onClick={scrollToNextSection} // Call the scroll function when clicked
              className="w-[40%] h-10 mt-5 bg-transparent border-white border-2 rounded-full px-5 py-1 font-FoundersGrotesk-Regular font-light text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
            >
              <div className="mt-7 overflow-hidden group-hover:translate-y-[-50%] transition-all duration-500 ease-out">
                <div className="flex items-center justify-center">
                  <span className="ml-1 text-main group-hover: transition-all ease-out">
                    Let's Go
                  </span>
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-7 h-7 ml-0 transform group-hover:filter group-hover:invert transition-all "
                  />
                </div>
                <div className="flex items-center justify-center">
                  <span className="ml-1 text-main group-hover: transition-all  ease-out">
                    Let's Go
                  </span>
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-7 h-7 ml-0 transform group-hover:filter group-hover:invert transition-all "
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="bottommm flex items-center justify-between w-9/12 mt-[6rem]">
          <p className="sideb font-FoundersGrotesk-Regular font-light text-xl">
            By day, I meticulously code seamless user <br /> experiences,
            transforming ideas into digital <br /> realities. By night, I
            channel the same focus <br /> and determination to the track,
            pushing <br /> boundaries as an athlete, proving that <br />{" "}
            precision and passion thrive in both worlds.
          </p>

          <div className="abb h-auto w-[55%] flex flex-col justify-between space-y-6 transition-all duration-300 ">
            <div className="education w-full max-h-10 px-10 border-b-2 hover:max-h-[200px] hover:bg-white hover:text-black transition-all duration-300 overflow-hidden hover:rounded-lg hover:py-5">
              <h2 className="font-foundersGrotesk text-2xl">EDUCATION</h2>
              <p>
                I am currently pursuing a{" "}
                <strong>B.Tech in Electronics and VLSI Engineering</strong> from{" "}
                <strong>IIIT Delhi</strong> and completed my schooling at{" "}
                <strong>Kulachi Hansraj Model School</strong>, laying the
                foundation for my passion for{" "}
                <strong>cutting-edge technology</strong> and{" "}
                <strong>innovation</strong>.
              </p>
            </div>

            <div className="tech w-full max-h-10 px-10 border-b-2 hover:max-h-[250px] hover:bg-white hover:text-black transition-all duration-300 overflow-hidden hover:rounded-lg hover:py-5">
              <h2 className="font-foundersGrotesk text-2xl">TECH STACK</h2>
              <p>
                I am proficient in a wide range of technologies, including
                <strong>
                  Python, C++, Java, HTML, Vanilla CSS, JavaScript, React.js,
                  Tailwind CSS, OpenCV, MySQL, Firebase, Pygame, Matplotlib,
                  MATLAB, JavaFX, Folium, Verilog,
                </strong>{" "}
                and <strong>DSA</strong>. Additionally, I am skilled in using
                tools like{" "}
                <strong>Figma, Canva, IntelliJ, Vivado, KiCad,</strong> and{" "}
                <strong>LTSpice</strong>, reflecting my versatility in both{" "}
                <strong>software development</strong> and{" "}
                <strong>hardware design</strong>.
              </p>
            </div>

            <div className="hobbies w-full max-h-10 px-10 border-b-2 hover:max-h-[200px] hover:bg-white hover:text-black transition-all duration-300 overflow-hidden hover:rounded-lg hover:py-5">
              <h2 className="font-foundersGrotesk text-2xl">HOBBIES</h2>
              <p>
                My hobbies include <strong>playing cricket</strong>,{" "}
                <strong>reading books</strong>, engaging in strategic games like{" "}
                <strong>chess</strong>, <strong>playing the guitar</strong>,{" "}
                <strong>singing</strong> a bit, and{" "}
                <strong>enjoying music</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
