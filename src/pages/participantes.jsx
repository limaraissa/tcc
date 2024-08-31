import isabella from "../public/isabella.png";
import raissa from "../public/raissa.png";
import jovana from "../public/jovana.png";
import Header from '../componentes/heather';

export default function Participantes() {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-center pt-11 text-7xl min-[hidden]">
          BAY<span className="text-vermelho font-bold lg:text-7xl">MAX!</span>
        </h1>

        <section className="text-white opacity-70 font-light text-[20px] flex justify-center items-center h-[31px]">
          <h2>Participantes</h2>
        </section>

        <section className="lg:flex lg:justify-between sm:items-center w-full max-w-[1200px] px-4 sm:px-8"> 
          <section className="bg-white mx-auto sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center rounded-[8px]">
            <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
              <img src={isabella} alt="isabella" />
            </div>
            <div>
              <h3 className="text-red font-semibold text-[24px] text-center">Isabella Genuino</h3>
            </div>
            <div className="text-center sm:mt-[10px]">
              <p><span className="font-bold">Idade:</span> 17 anos.</p>
              <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
            </div>
          </section>

          <section className="bg-white mx-auto sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center rounded-[8px]">
            <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
              <img src={jovana} alt="Giovana" />
            </div>
            <div>
              <h4 className="text-red font-semibold text-[24px] text-center">Giovana Rodrigues</h4>
            </div>
            <div className="text-center sm:mt-[10px]">
              <p><span className="font-bold">Idade:</span> 18 anos.</p>
              <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
            </div>
          </section>

          <div className="bg-white mx-auto sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center rounded-[8px]">
            <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
              <img src={raissa} alt="Raissa" />
            </div>
            <div>
              <h5 className="text-red font-semibold text-[24px] text-center">Raissa Fabricio</h5>
            </div>
            <div className="text-center sm:mt-[10px]">
              <p><span className="font-bold">Idade:</span> 17 anos.</p>
              <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
