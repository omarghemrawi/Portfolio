import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJsSquare,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiC, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="text-2xl bg-white/20 text-white  rounded-lg border border-white/20 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 place-items-center py-10 mb-20">
        <FaHtml5 className="w-16 h-16 text-orange-700" />
        <FaCss3Alt className="w-16 h-16 text-blue-700" />
        <FaNodeJs className="w-16 h-16 text-green-700" />
        <FaPhp className="w-16 h-16 text-indigo-900" />
        <FaReact className="w-16 h-16 text-cyan-900 animate-spin" />
        <SiC className="w-16 h-16 text-gray-400" />
        <SiExpress className="w-16 h-16 text-white bg-gray-900 p-2 rounded-lg" />
        <SiMongodb className="w-16 h-16 text-green-600" />
        <FaJsSquare className="w-16 h-16 text-green-600" />
        <SiTailwindcss className="w-16 h-16 text-blue-600" />
      </div>
    </div>
  );
};

export default Skills;
