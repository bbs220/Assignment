import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import RoadMap from "./RoadMap";
import homeIcon from "../resources/home.png";
import projectsIcon from "../resources/projects.png";
import roadmapIcon from "../resources/roadmap.png";
import aboutIcon from "../resources/about.png";
import contactIcon from "../resources/contact.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-screen h-10 bg-p01">
      <div className="flex justify-between items-center px-5">
        <div>
          {/* hamburger icon */}
          <button onClick={toggleMenu} className="lg:hidden">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
        {/* desktop viewport */}
        <ul
          className={`hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-5`}
        >
          <li className="flex items-center gap-2  hover:underline hover:cursor-pointer text-center">
            <img src={homeIcon} alt="Home" className="w-5 h-5" />
            <Home />
          </li>
          <li className="flex items-center gap-2  hover:underline hover:cursor-pointer text-center">
            <img src={projectsIcon} alt="Projects" className="w-5 h-5" />
            <Projects />
          </li>
          <li className="flex items-center gap-2  hover:underline hover:cursor-pointer text-center">
            <img src={roadmapIcon} alt="Road Map" className="w-5 h-5" />
            <RoadMap />
          </li>
          <li className="flex items-center gap-2  hover:underline hover:cursor-pointer text-center">
            <img src={aboutIcon} alt="About" className="w-5 h-5" />
            <About />
          </li>
          <li className="flex items-center gap-2  hover:underline hover:cursor-pointer text-center">
            <img src={contactIcon} alt="Contact" className="w-5 h-5" />
            <Contact />
          </li>
        </ul>
        {/* mobile viewport */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden grid grid-cols-5 gap-1 text-[0.7rem] justify-evenly place-content-center p-1 w-fit`}
        >
          <li className="flex items-center gap-1 flex-col hover:underline hover:cursor-pointer text-center">
            <img src={homeIcon} alt="Home" className="w-5 h-5" />
            <Home />
          </li>
          <li className="flex items-center gap-1 flex-col hover:underline hover:cursor-pointer text-center">
            <img src={projectsIcon} alt="Projects" className="w-5 h-5" />
            <Projects />
          </li>
          <li className="flex items-center gap-1 flex-col hover:underline hover:cursor-pointer text-center">
            <img src={roadmapIcon} alt="Road Map" className="w-5 h-5" />
            <RoadMap />
          </li>
          <li className="flex items-center gap-1 flex-col hover:underline hover:cursor-pointer text-center">
            <img src={aboutIcon} alt="About" className="w-5 h-5" />
            <About />
          </li>
          <li className="flex items-center gap-1 flex-col hover:underline hover:cursor-pointer text-center">
            <img src={contactIcon} alt="Contact" className="w-5 h-5" />
            <Contact />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
