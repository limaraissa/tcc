import isabella from "../public/isabella.png";
import raissa from "../public/raissa.png";
import jovana from "../public/jovana.png";
import Header from '../componentes/heather'

export default function participantes() {
  return(
    <body className="bg-fundo font-poppins sm:h-[2000px] lg:h-[1090px]">
      <main>
      <Header />
        
      <section className=" font-bold flex justify-center items-center sm:h-[45px] text-[36px] lg:h-[200px]">
      <h1 className="text-whitee font-bold text-center min-[430px]:text-4xl pt-11 lg:text-7xl "><span className="text-red font-bold min-[430px]:text-4xl lg:text-7xl">BAY</span>MAX!</h1>
      </section>

      <section className="text-gray font-light text-[20px] flex justify-center items-center h-[31px] lg:hidden">
        <h1>Participantes</h1>
      </section>


      <section className="lg:flex lg:justify-between ">
      <section className="bg-white mx-auto  sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center flex rounded-[8px] ">
        <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
          <img src={isabella} alt="isabella" /></div>
        <div>
          <h1 className="text-red font-semibold text-[24px] text-center sm:w-[345px] sm:h-[488px] sm:mt-[49px]">Isabella Genuino</h1>
          </div>

        <div className="text-center sm:-mt-[750px] ">
          <p><span className="font-bold">Idade:</span> 16 anos.</p>
          <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
        </div>
          
      </section>
      
      <section class="bg-white mx-auto  sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center flex rounded-[8px] ">
        <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
            <img src={jovana} alt="Giovana" /></div>

        <div>

          <h1 className="text-red font-semibold text-[24px] text-center sm:w-[345px] sm:h-[488px] sm:mt-[49px]">
            Giovana Rodrigues</h1>
        </div>

        <div className="text-center sm:-mt-[750px] ">
        <p><span className="font-bold">Idade:</span> 16 anos.</p>
        <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
        </div>

      </section>
    
      <section class="bg-white mx-auto  sm:w-[345px] sm:h-[488px] mt-[40px] grid place-items-center flex rounded-[8px] ">
        <div className="sm:w-[201px] sm:h-[194px] mt-[41px]">
            <img src={raissa} alt="Raissa" /></div>

        <div>
          <h1 className="text-red font-semibold text-[24px] text-center sm:w-[345px] sm:h-[488px] sm:mt-[49px]">Raissa Fabricio</h1>
          </div>

        <div className="text-center sm:-mt-[750px] ">
          <p><span className="font-bold">Idade:</span> 16 anos.</p>
          <p><span className="font-bold">Formação:</span> Unasp - Técnico de informática.</p>
        </div>
      </section>
      </section>
      </main>
    </body>
  )
}