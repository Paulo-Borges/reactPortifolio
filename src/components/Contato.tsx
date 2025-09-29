import Input from "./Input";
import { HashLink } from "react-router-hash-link";

const Contato = () => {
  return (
    <section
      id="contato"
      className="flex flex-col items-center h-[500px] w-[1280px] lg:w-[1000px]  gap-9"
    >
      <h1 className="flex justify-center text-4xl font-bold  text-amber-300/60 ">
        FALA COMIGO
      </h1>
      <form className=" flex flex-col gap-2">
        <Input type="text" placeholder="Seu nome" />
        <Input type="email" placeholder="Seu email" />
        <Input type="tel" placeholder="Seu celular" />
        <Input
          type="text"
          placeholder="Sua mensagem"
          className="bg-amber-300/10 rounded-xl  h-[140px] w-[300px]  text-amber-50 placeholder:text-amber-50/50 placeholder:pl-2"
        />
      </form>
      <div className="mb-10">
        <button className="bg-amber-300/60  rounded-3xl hover:bg-amber-300 flex w-[100px] h-[40px] justify-center items-center ">
          <HashLink to="/#inicio" className="text-sm text-amber-50 font-medium">
            Enviar
          </HashLink>
        </button>
      </div>
    </section>
  );
};

export default Contato;
