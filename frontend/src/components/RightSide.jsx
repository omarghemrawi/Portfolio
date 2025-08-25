import About from "./About";
import Projects from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

const RightSide = () => (
  <main className="w-full md:w-1/2">
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
);

export default RightSide;
