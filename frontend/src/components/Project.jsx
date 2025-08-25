import { useMemo } from "react";
import { Code2 } from "lucide-react";
import IssosImage from "../assets/images/issos.png";
import ZiaraImage from "../assets/images/ziara.jpg";
import game from "../assets/images/game.jpg";

const Projects = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Ziara Guide App",
        description:
          "A multi-part platform for exploring and managing touristic and religious places. It includes: a mobile app for users to view, review, and report places; a client website for business owners to list their places; and an admin dashboard to monitor reports, manage content, and ensure platform quality. Features real-time notifications and interactive user-client-admin workflows.",
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        image: ZiaraImage,
        codeLink: "https://github.com/omarghemrawi/ziara",
      },
      {
        id: 2,
        title: "Issos Store",
        description:
          "A full-featured clothing e-commerce platform built with the MERN stack. Features secure payment processing, user authentication, inventory management, and a modern responsive design for optimal shopping experience.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        image: IssosImage,
        codeLink: "https://github.com/omarghemrawi/Issos-Store",
      },
      {
        id: 3,
        title: "Real-Time X-O Game",
        description:
          "An interactive multiplayer Tic-Tac-Toe application with real-time gameplay using Socket.io. Includes live chat, game rooms, player statistics, and seamless synchronization across all connected players.",
        technologies: ["React", "Socket.io", "Node.js", "Express"],
        image: game,
        codeLink: "https://github.com/omarghemrawi/X-O-Game",
      },
    ],
    []
  );

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        Featured Projects
      </h2>
      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-white/20 rounded-lg border border-white/20 p-6 hover:bg-white/25 transition-all duration-300 group"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover rounded-lg bg-gray-700"
                  loading="lazy"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-cyan-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
