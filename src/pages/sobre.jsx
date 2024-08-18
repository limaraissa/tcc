import React from 'react'
import Relogio1 from "../public/relogio.png"
import Coracao from "../public/coracao.png"
import Mini from "../public/baymaxgih.png"
import Cerebro1 from "../public/cerebro.png"
import Header from '../componentes/heather'
import Baymax from "../public/baymaxfundo.png"





export default function App() {
  return (
    <main className="bg-blue h-screen bg-no-repeat min-[400px]:h-[2700px] lg:h-[990px] ">

      <Header/>
      
       <h1 className="text-whitee font-bold text-center min-[400px]:text-4xl pt-11 lg:text-7xl "><span className="text-red font-bold min-[430px]:text-4xl lg:text-7xl">BAY</span>MAX!</h1>
       <p className=" text-center text-gray pt-4 ">sobre o dispositivo</p>
       

       <br className="min-[400px]:hidden"/>
       <br className="min-[400px]:hidden"/>
       <br className="min-[400px]:hidden"/>

       <div className="absolute z-0 relative">
        <img className="absolute top-[-110px] left-0" src={Baymax} alt="" />
       </div>


       <section className="absolute z-10 lg:flex justify-center min-[400px]:hidden">

        <div className="bg-bluee m-10  p-8  rounded shadow-2xl ">
        <img className="m-3" src={Relogio1} alt="icone do relógio" />
        <h2 className=" text-azul-claro m-4 font-semibold font-poppins text-lg">Monitoramento Pessoal</h2>      
        <p className="text-white m-4 mx-8  font-poppins font-light text-base ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation m dolore eu fugiat nulla pariatur."" </p>
        <img className="float-right pt-1  flex "src={Mini} alt="mini personagem" />
        

        </div>

        <div className="bg-bluee m-10 p-8 rounded box-border shadow-2xl ">
        <img className="m-3 " src={Cerebro1} alt="cerebro" />
        <h2 className="text-azul-claro m-4 font-semibold font-poppins text-lg">Suporte emocional</h2>
        <p className="text-white m-4 font-poppins font-normal  text-base ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation m dolore eu fugiat nulla pariatur. "</p>
        
          
        </div>
      </section>

       <section className="lg:hidden">
       <div className="bg-bluee m-10 p-8 rounded shadow-2xl  ">        
        <h2 className=" text-azul-claro m-4 font-semibold font-poppins text-lg ">Monitoramento Pessoal</h2>
        <img className="float-right pt-12 mt-12 pl-6 flex lg:hidden"src={Mini} alt="mini personagem" />
        <p className="text-white m-2  font-poppins font-light text-base  ">O Baymax é voltado à praticidade dia a dia dos pais que buscam praticidade.</p>            
      </div>

      <br />

      <div className="bg-bluee m-10 p-8 rounded shadow-2xl ">
        <img className="float-right " src={Coracao} alt="imagem do coração" />
        <h2 className="text-azul-claro mx-4 font-semibold font-poppins text-lg ">Suporte</h2>
        <h2 className="text-azul-claro mx-4 font-semibold font-poppins text-lg ">emocional</h2>
        <p className="text-white m-4 font-poppins m:font-normal  text-base lg:hidden">Os bichinhos de pelúcia desempenham um papel significativo no desenvolvimento emocional das crianças. Esses brinquedos, muitas vezes subestimados, são mais do que simples objetos; eles são companheiros fiéis que proporcionam conforto, segurança e apoio emocional em diversas fases da infância.</p>
      </div>
      </section>

      <h1 className="text-reed font-bold text-center text-4xl py-11 lg:hidden">Funções<span className="text-white font-bold text-4xl py-11 lg:hidden"> principais</span></h1>

      
      <div className="bg-bluee m-10  p-8 rounded-lg  shadow-2xl lg:hidden">
        <h2 className="text-reed m-4 font-semibold font-montserrat font-light text-lg">Monitoramento Cardíaco</h2>
        <p className="text-white m-4 font-normal font-poppins text-base">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation m dolore eu fugiat nulla pariatur.  </p>
      </div>
      
      
      <div className="bg-bluee m-10 p-8 rounded-lg  shadow-2xl lg:hidden">
        <h2 className="text-reed m-4 font-semibold font-montserrat font-light text-lg">Medir temperatura</h2>
        <p className="text-white m-4 font-normal font-poppins text-base">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation m dolore eu fugiat nulla pariatur.  </p>
      </div>
      
  </main>
  )
}
