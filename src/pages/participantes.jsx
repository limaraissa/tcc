import isabella from "../public/isabella.png";
import raissa from "../public/raissa.png";
import jovana from "../public/jovana.png";
import Header from '../componentes/heather'

export default function participantes() {
  return(
      
      
      <main>
        <Header />
        <div className=" flex flex-col justify-center items-center">
          
      
        <h1 className="text-whitee font-bold text-center min-[430px]:text-4xl pt-11 lg:text-7xl "><span className="text-red font-bold min-[430px]:text-4xl lg:text-7xl">BAY</span>MAX!</h1>
      
          <section className="text-white opacity-70 font-light text-[20px] flex justify-center items-center h-[31px] ">
            <h2>Participantes</h2>
          </section>
      
          <section className="lg:flex lg:justify-between sm:items-center  sm:p-8 w-full max-w-[1200px]">
            <section className="bg-white mx-auto sm:px-[5px] sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center rounded-[8px]">
              <div className="sm:w-[201px]  sm:h-[194px] mt-[41px]">
                <img src={isabella} alt="isabella" />
              </div>
              <div>
                <h1 className="text-red font-semibold text-[24px] text-center">Isabella Genuino</h1>
              </div>
              <div className="text-center sm:mt-[10px]">
                <p><span className="font-bold">Idade:</span> 17 anos.</p>
                <p><span className="font-bold ">Formação:</span> Unasp - Técnico de informática.</p>
              </div>
            </section>
      
            <section className="bg-white mx-auto sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center rounded-[8px]">
              <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
                <img src={jovana} alt="Giovana" />
              </div>
              <div>
                <h1 className="text-red font-semibold text-[24px] text-center">Giovana Rodrigues</h1>
              </div>
              <div className="text-center sm:mt-[10px]">
                <p><span className="font-bold">Idade:</span> 18 anos.</p>
                <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
              </div>
            </section>
      
            <section className="bg-white mx-auto sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center rounded-[8px]">
              <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
                <img src={raissa} alt="Raissa" />
              </div>
              <div>
                <h1 className="text-red font-semibold text-[24px] text-center">Raissa Fabricio</h1>
              </div>
              <div className="text-center sm:mt-[10px]">
                <p><span className="font-bold">Idade:</span> 17 anos.</p>
                <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
              </div>
            </section>
          </section>
        </div>
      </main> 
    
  

  )
}