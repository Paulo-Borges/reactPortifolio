import { useState } from "react";
import { Link } from "react-router-dom";

const Projetos = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      id="projetos"
      className="flex flex-col items-center h-[600px] pt-28 w-[1280px] lg:w-[1000px] gap-13 m-10"
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

      <button
        onClick={handleOpen}
        className=" text-amber-300/30 hover:text-amber-300 mb-10"
      >
        Mais projetos...
      </button>

      {isOpen && (
        <div className="flex w-[1200] gap-4 h-[300px]">
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
      )}
    </div>
  );
};

export default Projetos;
