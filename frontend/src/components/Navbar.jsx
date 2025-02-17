import { useState } from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Navbar = () => {
  const [hash, setHash] = useState("about");

  return (
    <div className="md:block hidden">
      <nav className="text-white pt-20 mb-20 ">
        <ul className="w-fit flex flex-col gap-7">
          {["about", "projects", "contact"].map((text, index) =>
            hash === text ? (
              <li
                onClick={() => setHash(text)}
                key={index}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <p className="h-0.5 w-15 bg-white"></p>
                <a href={`#${text}`} className="text-white font-bold">
                  {text.toUpperCase()}
                </a>
              </li>
            ) : (
              <li
                onClick={() => setHash(text)}
                key={index}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <p className="bg-gray-300 h-0.5 w-5 group-hover:w-15 group-hover:bg-white transition-all ease-in-out duration-300"></p>
                <a
                  href={`#${text}`}
                  className="text-gray-300 group-hover:text-white font-bold"
                >
                  {text.toUpperCase()}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <nav className="flex gap-3 text-white my-0">
        <a href="https://github.com/omarghemrawi">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/omargh16?igsh=OWpqY2lkeWFvOWo2">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100027571632317">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="">
          <FaLinkedin className="text-2xl" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
