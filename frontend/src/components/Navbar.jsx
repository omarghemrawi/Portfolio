import { useState, useCallback, useMemo } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = useMemo(
    () => [
      { id: "about", label: "ABOUT" },
      { id: "projects", label: "PROJECTS" },
      { id: "skills", label: "SKILLS" },
      { id: "contact", label: "CONTACT" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        href: "https://github.com/omarghemrawi",
        icon: Github,
        label: "GitHub",
      },
      {
        href: "https://www.instagram.com/omargh16?igsh=OWpqY2lkeWFvOWo2",
        icon: Instagram,
        label: "Instagram",
      },

      {
        href: "https://www.linkedin.com/in/omar-ghemrawi-993411276/",
        icon: Linkedin,
        label: "LinkedIn",
      },
    ],
    []
  );

  const handleNavClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="md:block hidden">
      <nav
        className="text-white pt-20 mb-20"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="w-fit flex flex-col gap-7">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div
                className={`h-0.5 transition-all ease-in-out duration-300 ${
                  activeSection === item.id
                    ? "w-16 bg-white"
                    : "bg-gray-300 w-5 group-hover:w-16 group-hover:bg-white"
                }`}
              />
              <button
                onClick={() => handleNavClick(item.id)}
                className={`font-bold transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 group-hover:text-white"
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="flex gap-4 text-white"
        role="navigation"
        aria-label="Social media links"
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition-colors duration-300"
            aria-label={social.label}
          >
            <social.icon />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
