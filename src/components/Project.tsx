import { Link } from "react-router-dom";

type projectsProps = {
  name: string;
  imageClass: string;
  link: string;
};

const Project = () => {
  // Atribui o tipo correto ao Array
  const projects: projectsProps[] = [
    {
      name: "fylo",
      imageClass: "bg-custom-image",
      link: "https://paulo-borges.github.io/fylo/",
    },
    {
      name: "extension",
      imageClass: "bg-custom-image1",
      link: "https://paulo-borges.github.io/extensionBrowser/",
    },
    {
      name: "inwood",
      imageClass: "bg-custom-image2",
      link: "https://paulo-borges.github.io/inwood/",
    },
  ];

  return (
    <div
      id="projetos"
      className="flex flex-col items-center h-[650px] pt-28 w-[1280px] lg:w-[1000px] gap-13 m-10"
    >
      <h1 className="flex justify-center text-4xl font-bold my-10 text-amber-300/60 pl-30">
        Meus Projetos
      </h1>
      <div className="flex w-[1200] gap-4">
        {/* Usar o map() pra interagir e renderizar cada projeto  */}
        {projects.map((project, index) => (
          <div
            className="flex flex-col gap-y-6 hover:bg-amber-300/10 "
            key={index}
          >
            <div className="flex justify-between ">
              <h2 className=" text-amber-300/30 ">{project.name}</h2>
              <Link
                to={project.link}
                className="text-amber-300/30 hover:text-amber-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto
              </Link>
            </div>
            <div className={project.imageClass}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project;
