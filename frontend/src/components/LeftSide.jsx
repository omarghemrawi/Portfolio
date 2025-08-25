import Navbar from "./Navbar";

const LeftSide = () => (
  <aside className="min-w-80 md:sticky md:top-20 h-fit md:mb-0 mb-10">
    <header className="mb-8">
      <h1 className="text-white mb-3 text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
        Omar Ghemrawi
      </h1>
      <h2 className="text-cyan-300 mb-6 text-xl font-semibold">
        Software Developer
      </h2>
      <p className="text-gray-200 leading-relaxed">
        Building efficient, reliable software with clean code and modern tools.
      </p>
    </header>
    <Navbar />
  </aside>
);

export default LeftSide;
