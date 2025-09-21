import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import eu from "/Borges.jpg";


const Sobre = () => {
  return (
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
  );
};

export default Sobre;
