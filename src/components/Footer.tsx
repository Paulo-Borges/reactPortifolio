import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-around lg:justify-between items-center  bg-gray-800 text-white gap-5 w-[1280px] lg:w-[1000px]  border-t border-amber-300/60 ">
      <div className="flex gap-5 ">
        <Link to="https://github.com/Paulo-Borges" target="_blank">
          <FaGithub className="text-amber-300/60 hover:text-amber-300" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/"
          target="_blank"
        >
          <FaLinkedin className="text-amber-300/60 hover:text-amber-300" />
        </Link>
        <Link to="https://www.instagram.com/devborges8/" target="_blank">
          <FaInstagram className="text-amber-300/60 hover:text-amber-300" />
        </Link>
      </div>
      <div>
        <Link
          to="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/"
          target="_blank"
        >
          Dev<span className="text-amber-300/60">Borges</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
