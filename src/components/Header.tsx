const Header = () => {
  return (
    <header className="flex justify-around items-center  bg-gray-800 text-white gap-5 w-[1280px] h-[100px] border border-white">
      <div>
        <a href="https://github.com/Paulo-Borges" target="_blank">
          Dev<span className="text-amber-300">Borges</span>
        </a>
      </div>
      <nav className="flex gap-10">
        <a
          href="/"
          className="border-b hover:border-amber-300/80 border-transparent transition-all duration-300"
        >
          Inicio
        </a>
        <a
          href="/especilidades"
          className="border-b hover:border-amber-300/80 border-transparent transition-all duration-300"
        >
          Especialidades
        </a>
        <a
          href="/sobre"
          className="border-b hover:border-amber-300/80 border-transparent transition-all duration-300"
        >
          Sobre
        </a>
        <a
          href="/projetos"
          className="border-b hover:border-amber-300/80 border-transparent transition-all duration-300"
        >
          Projetos
        </a>
      </nav>
      <div className="">
        <button className="bg-amber-300/60  rounded-3xl hover:bg-amber-300 flex w-[100px] h-[40px] justify-center items-center">
          <a href="/contato" className="text-sm font-semibold">
            Contato
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
