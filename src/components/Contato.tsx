

const Contato = () => {
  return (
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
  );
};

export default Contato;
