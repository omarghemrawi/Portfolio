import Navbar from "./Navbar";
const LeftSide = () => {
  return (
    <div className=" min-w-80   md:sticky md:top-20 h-50 md:mb-0 mb-10">
      <div>
        <h1 className="text-white mb-2 text-5xl">Omar Ghemrawi</h1>
        <h3 className="text-white mb-5">FullStack Developer</h3>
        <p className="text-gray-200 w-[100%] ">
          I build scalable, high-performance web applications with modern
          technologies.
        </p>
      </div>
      <Navbar />
    </div>
  );
};

export default LeftSide;
