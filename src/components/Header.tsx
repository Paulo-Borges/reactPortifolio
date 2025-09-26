import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="flex justify-around lg:justify-between items-center  bg-gray-800 text-white gap-5 w-[1280px] lg:w-[1000px] h-[100px] ">
      <div>
        <Link to="https://github.com/Paulo-Borges" target="_blank">
          Dev<span className="text-amber-300">Borges</span>
        </Link>
      </div>
      <nav className="flex gap-10">
        <HashLink to="#inicio">Inicio</HashLink>
        <HashLink to="#especialidades">Especialidades</HashLink>
        <HashLink to="#sobre">Sobre</HashLink>
        <HashLink to="#projetos">Projetos</HashLink>
      </nav>
      <div className="">
        <button className="bg-amber-300/60  rounded-3xl hover:bg-amber-300 flex w-[100px] h-[40px] justify-center items-center">
          <HashLink to="#contato" className="text-sm font-medium">
            Contato
          </HashLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
