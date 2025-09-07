import Header from "./components/Header";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-around items-center pt-28 w-[1280px] lg:w-[1000px] h-[500px] gap-9">
        <main
          id="inicio"
          className="flex flex-col w-[780px] mt-20 justify-start items-start text-center gap-10 p-10 "
        >
          <h1 className="flex capitalize text-4xl font-bold my-10 text-white pl-30">
            Transformando ideias em realidade digital.
          </h1>
          <p className="flex items-start text-start text-white pl-30">
            Olá! Sou um desenvolvedor front-end apaixonado por criar
            experiências digitais envolventes e funcionais. Com habilidades em
            HTML, CSS e JavaScript, transformo designs em sites responsivos e
            interativos. Adoro colaborar com equipes criativas para trazer à
            vida projetos que encantam os usuários. Vamos construir algo
            incrível juntos!
          </p>
          <div className="">
            <button className="bg-amber-300/60 rounded-3xl hover:bg-amber-300 flex w-[200px] h-[60px] justify-center items-center">
              <a
                href="#projetos"
                className="text-sm text-amber-50 font-semibold"
              >
                Veja meus projetos
              </a>
            </button>
          </div>
        </main>
        <div className="w-[400px] h-[300px] rounded-3xl overflow-hidden ">
          <img
            src="./Borges.jpg"
            alt="Desenvolvedor"
            className="animate-flutuar relative"
          />
        </div>
      </div>
      <section id="especialidades" className="flex flex-col justify-around items-center pt-28 w-[1280px] lg:w-[1000px] h-[500px] gap-9 ">
        <h1 className="flex capitalize text-4xl font-bold my-10 text-white ">
          Minhas Especialidades
        </h1>
        <div className="grid grid-cols-4 gap-9  text-white">
          <div className="flex flex-col justify-center items-center gap-4 max-w-3xs border border-transparent hover:border-amber-300/30 rounded ">
            <FaReact className="text-amber-300/60 " />
            <h2>React</h2>
            <p className="overflow-hidden text-ellipsis">
              React JS é uma biblioteca de JavaScript que ajuda a construir
              interfaces de usuário (UI) interativas e eficientes para sites e
              aplicações web. Isso torna as aplicações mais rápidas, dinâmicas e
              fáceis de gerenciar, especialmente as que precisam de muita
              interatividade.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 max-w-3xs border border-transparent hover:border-amber-300/30 rounded">
            <FaNodeJs className="text-amber-300/60 " />
            <h2>NodeJS</h2>
            <p className="overflow-hidden text-ellipsis">
              Node.js é um ambiente de execução que permite usar JavaScript fora
              do navegador web. Ele é leve, rápido e ideal para aplicações que
              precisam lidar com muitas conexões simultâneas, como serviços de
              chat ou streaming.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 max-w-3xs border border-transparent hover:border-amber-300/30 rounded">
            <RiTailwindCssFill className="text-amber-300/60 " />
            <h2>tailwindcss</h2>
            <p>
              Tailwind CSS é um framework de CSS que permite estilizar sites e
              aplicações web de forma rápida, usando classes utilitárias
              pré-prontas diretamente no código HTML.O resultado é um fluxo de
              trabalho de desenvolvimento muito mais ágil.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 max-w-3xs border border-transparent hover:border-amber-300/30 rounded">
            <SiTypescript className="text-amber-300/60 " />
            <h2>typescript</h2>
            <p>
              TypeScript é uma extensão do JavaScript que adiciona um sistema de
              tipos de dados estático. Isso significa que você pode definir e
              verificar o tipo das suas variáveis (como string, number, boolean)
              antes de o código ser executado.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
