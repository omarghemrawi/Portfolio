import { useMemo } from "react";
import * as TechIcons from "../assets/tech-icons";

const Skills = () => {
  const skills = useMemo(
    () => [
      {
        icon: "HTML5",
        name: "HTML5",
        color: "text-orange-500",
        bg: "hover:bg-orange-500/20",
      },
      {
        icon: "CSS3",
        name: "CSS3",
        color: "text-blue-500",
        bg: "hover:bg-blue-500/20",
      },
      {
        icon: "JavaScript",
        name: "JavaScript",
        color: "text-yellow-400",
        bg: "hover:bg-yellow-400/20",
      },
      {
        icon: "React",
        name: "React",
        color: "text-cyan-400",
        bg: "hover:bg-cyan-400/20",
      },
      {
        icon: "NodeJS",
        name: "Node.js",
        color: "text-green-500",
        bg: "hover:bg-green-500/20",
      },
      {
        icon: "Express",
        name: "Express",
        color: "text-gray-300",
        bg: "hover:bg-gray-300/20",
      },
      {
        icon: "MongoDB",
        name: "MongoDB",
        color: "text-green-400",
        bg: "hover:bg-green-400/20",
      },
      {
        icon: "PHP",
        name: "PHP",
        color: "text-indigo-400",
        bg: "hover:bg-indigo-400/20",
      },
      {
        icon: "Tailwind",
        name: "Tailwind",
        color: "text-teal-400",
        bg: "hover:bg-teal-400/20",
      },
      {
        icon: "C",
        name: "C",
        color: "text-blue-300",
        bg: "hover:bg-blue-300/20",
      },
    ],
    []
  );

  return (
    <section id="skills" className="mb-20">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        Skills & Technologies
      </h2>
      <div className="bg-white/20 text-white rounded-lg border border-white/20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-8">
        {skills.map((skill, index) => {
          const IconComponent = TechIcons[skill.icon];
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-105 ${skill.bg}`}
              title={skill.name}
            >
              <IconComponent />
              <span className="text-sm font-medium text-center mt-2">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
