import Header from "./components/Header";
import Footer from "./components/Footer";
import Inithial from "./components/Inithial";
import Specialties from "./components/Specialties";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import eu from "/Borges.jpg";
import Contato from "./components/Contato";


function App() {


  return (
    <>
      <Header />
      <div className="flex justify-around items-center pt-28 w-[1280px] lg:w-[1000px] h-[500px] gap-9">
        <Inithial />
        <div className="w-[400px] h-[300px] rounded-3xl overflow-hidden ">
          <img
            src={eu}
            alt="Desenvolvedor"
            className="animate-flutuar relative"
          />
        </div>
      </div>
    <Specialties />
     <Sobre />
      <Projetos />
        <div className="flex justify-end m-6 text-amber-300/30 hover:text-amber-300">
        <button className="m-6"> Mais projetos...</button>
      </div>
      <Contato />
     
      <Footer />
    </>
  );
}

export default App;
