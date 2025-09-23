import { Link } from "react-router-dom";

const Inithial = () => {
  return (
    <main
      id="inicio"
      className="flex flex-col w-[780px] mt-20 justify-start items-start text-center gap-10 p-10 "
    >
      <h1 className="flex capitalize text-4xl font-bold my-10 text-white pl-30">
        Transformando ideias em realidade digital.
      </h1>
      <p className="flex items-start text-start text-white pl-30">
        Olá! Sou um desenvolvedor front-end apaixonado por criar experiências
        digitais envolventes e funcionais. Com habilidades em HTML, CSS e
        JavaScript, transformo designs em sites responsivos e interativos. Adoro
        colaborar com equipes criativas para trazer à vida projetos que encantam
        os usuários. Vamos construir algo incrível juntos!
      </p>
      <div className="">
        <button className="bg-amber-300/60 rounded-3xl hover:bg-amber-300 flex w-[200px] h-[60px] justify-center items-center">
          <Link
            to={"https://localhost:5173/#projetos"}
            className="text-sm text-amber-50 font-semibold"
          >
            Veja meus projetos
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Inithial;
