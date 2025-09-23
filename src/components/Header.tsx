import { Link } from "react-router-dom";
import Linkar from "./Linkar";

const Header = () => {
  return (
    <header className="flex justify-around lg:justify-between items-center  bg-gray-800 text-white gap-5 w-[1280px] lg:w-[1000px] h-[100px] ">
      <div>
        <Link to="https://github.com/Paulo-Borges" target="_blank">
          Dev<span className="text-amber-300">Borges</span>
        </Link>
      </div>
      <nav className="flex gap-10">
        <Linkar to="#inicio">Inicio</Linkar>
        <Linkar to="#especialidades">Especialidades</Linkar>
        <Linkar to="#sobre">Sobre</Linkar>
        <Linkar to="#projetos">Projetos</Linkar>
      </nav>
      <div className="">
        <button className="bg-amber-300/60  rounded-3xl hover:bg-amber-300 flex w-[100px] h-[40px] justify-center items-center">
          <Link to="#contato" className="text-sm font-medium">
            Contato
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
