import Header from "./components/Header";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import eu from "/Borges.jpg";
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "./components/Footer";

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
            src={eu}
            alt="Desenvolvedor"
            className="animate-flutuar relative"
          />
        </div>
      </div>
      <section
        id="especialidades"
        className="flex flex-col justify-around items-center pt-28 w-[1280px] lg:w-[1000px] h-[500px] gap-9 "
      >
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
      <section
        id="sobre"
        className="flex justify-around items-center pt-28 w-[1280px] lg:w-[1000px] h-[500px] gap-9 "
      >
        <div className="flex flex-col gap-5 w-screen">
          <div className="">
            <img
              src={eu}
              alt="desenvolvedor"
              className="rounded-full border-4 border-amber-300/10 hover:border-amber-300/50"
            />
          </div>
          <div className="flex justify-center gap-7">
            <Link
              to="https://github.com/Paulo-Borges"
              target="_blank"
              className="rounded-full border-2 border-amber-300/10 hover:border-amber-300/50 text-amber-300/60"
            >
              <FaGithub className="" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/"
              target="_blank"
              className="rounded-full border-2 border-amber-300/10 hover:border-amber-300/50 text-amber-300/60"
            >
              <FaLinkedin />
            </Link>

            <Link
              to="https://www.instagram.com/devborges8/"
              target="_blank"
              className="rounded-full border-2 border-amber-300/10 hover:border-amber-300/50 text-amber-300/60"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="flex uppercase text-2xl font-bold my-10 text-white ">
            muito prazer,
          </h2>
          <h3 className="flex uppercase text-2xl font-bold my-10 text-amber-300/60">
            sou Desenvolvedor Borges.
          </h3>
          <p className="text-white ">
            Minha jornada como desenvolvedor é guiada pela paixão em transformar
            ideias em realidade digital. Com uma base sólida em HTML, CSS e
            JavaScript, eu me especializei na criação de experiências de usuário
            dinâmicas e responsivas, utilizando o poder do React no front-end.
            No back-end, utilizo Node.js e Express para construir APIs robustas
            e escaláveis, gerenciando dados de forma eficiente com o MongoDB.
            Meu conhecimento em TypeScript garante que o código seja não apenas
            funcional, mas também mais seguro e fácil de manter em projetos de
            grande escala.
          </p>
          <p className="text-white ">
            Além disso, tenho domínio em Tailwind CSS, o que me permite criar
            interfaces modernas e personalizadas com agilidade, mantendo um
            design consistente e de alta qualidade. O que me motiva é a busca
            constante por desafios e a oportunidade de criar soluções completas,
            que unem um design elegante no front-end a uma arquitetura sólida no
            back-end. Estou sempre pronto para colaborar em projetos inovadores
            e que buscam resolver problemas de forma criativa e eficaz.
          </p>
        </div>
      </section>
      <section
        id="projetos"
        className="flex flex-col items-center pt-28 w-[1280px] lg:w-[1000px] h-[500px] gap-9"
      >
        <h1 className="flex justify-center text-4xl font-bold my-10 text-amber-300/60 pl-30">
          MEU PORTFÓLIO.
        </h1>
        <div className="flex w-[1200] gap-4">
          <div className="bg-custom-image w-[300px] h-[400px] relative rounded-2xl ">
            <div className="absolute top-0 left-0 w-full h-full bg-amber-300/30 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition 3s rounded-2xl">
              <Link
                to="https://paulo-borges.github.io/fylo/"
                target="_blank"
                className=" hover:text-amber-800"
              >
                fylo
              </Link>
            </div>
          </div>
          <div className="bg-custom-image1 w-[300px] h-[400px] relative rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-amber-300/30 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition 3s rounded-2xl">
              <Link
                to="https://paulo-borges.github.io/extensionBrowser/"
                target="_blank"
                className=" hover:text-amber-800"
              >
                extension
              </Link>
            </div>
          </div>
          <div className="bg-custom-image2 w-[300px] h-[400px] relative rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-amber-300/30 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition 3s rounded-2xl">
              <Link
                to="https://paulo-borges.github.io/inwood/"
                target="_blank"
                className=" hover:text-amber-800"
              >
                inwood
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="flex flex-col items-center pt-28 w-[1280px] lg:w-[1000px] h-[500px] gap-9"
      >
        <h1 className="flex justify-center text-4xl font-bold my-10 text-amber-300/60 pl-30">
          FALA COMIGO
        </h1>
        <form className=" flex flex-col gap-2">
          <input
            type="text"
            placeholder="Seu nome"
            className="bg-amber-300/10 rounded-md h-[40px] w-[300px] text-amber-50 placeholder:text-amber-50/50 placeholder:pl-2"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="bg-amber-300/10 rounded-md h-[40px] w-[300px]  text-amber-50 placeholder:text-amber-50/50 placeholder:pl-2"
          />
          <input
            type="tel"
            placeholder="Seu celular"
            className="bg-amber-300/10 rounded-md h-[40px] w-[300px]  text-amber-50 placeholder:text-amber-50/50 placeholder:pl-2"
          />
          <input
            type="text"
            placeholder="Sua mensagem"
            className="bg-amber-300/10 rounded-md h-[140px] w-[300px]  text-amber-50 placeholder:text-amber-50/50 placeholder:pl-2"
          />
        </form>
        <div>
          <button className="bg-amber-300/60  rounded-3xl hover:bg-amber-300 flex w-[100px] h-[40px] justify-center items-center">
            <a href="#contato" className="text-sm text-amber-50 font-medium">
              Enviar
            </a>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
