import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-around items-center pt-28 w-[1280px] h-[500px] gap-9 border border-white">
        <main className="flex flex-col w-[780px] mt-20 justify-start items-start text-center gap-10">
          <h1 className="flex capitalize text-4xl font-bold my-10 ">
            Transformando ideias em realidade digital.
          </h1>
          <p className="flex items-start text-start">
            Olá! Sou um desenvolvedor front-end apaixonado por criar
            experiências digitais envolventes e funcionais. Com habilidades em
            HTML, CSS e JavaScript, transformo designs em sites responsivos e
            interativos. Adoro colaborar com equipes criativas para trazer à
            vida projetos que encantam os usuários. Vamos construir algo
            incrível juntos!
          </p>
          <div>
            <button className="bg-amber-300/60  rounded-3xl hover:bg-amber-300 flex w-[200px] h-[60px] justify-center items-center">
              <a
                href="/contato"
                className="text-sm text-amber-50 font-semibold"
              >
                Veja meus projetos
              </a>
            </button>
          </div>
        </main>
        <div className="w-[400px] h-[300px] rounded-3xl overflow-hidden border-1 border-amber-300">
          <img src="../public/Borges.jpg" alt="Desenvolvedor" />
        </div>
      </div>
    </>
  );
}

export default App;
