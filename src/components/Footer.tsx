import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {


  return (
    <footer className="flex justify-around lg:justify-between items-center  bg-gray-800 text-white gap-5 w-[1280px] lg:w-[1000px] h-[100px] ">
      <div>
        <Link to="https://github.com/Paulo-Borges" target="_blank">
         <FaGithub className="" />
        </Link>
        <Link to="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/" target="_blank">
         <FaLinkedin />
        </Link>
        <Link to="https://www.instagram.com/devborges8/" target="_blank">
        <FaInstagram />
        </Link>
      </div>
   
    
    </footer>
  );
} 

export default Footer;
