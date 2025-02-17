import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";
const RightSide = () => {
  return (
    <div className=" w-[100%] md:w-[50%] ">
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default RightSide;
