import React from 'react'
import Relogio1 from "../public/relogio.png"
import Coracao from "../public/coracao.png"
import Mini from "../public/baymaxgih.png"
import Cerebro1 from "../public/cerebro.png"
import Header from '../componentes/heather'
import Baymax from "../public/baymaxfundo.png"







export default function App() {
  return (
    <main className="bg-blue h-screen bg-no-repeat min-[428px]:h-[1500px] lg:h-[950px] ">

      <Header />
      
      
      <h1 className="text-white font-bold text-center  pt-11 text-7xl min-[hidden]">BAY<span className="text-vermelho font-bold  lg:text-7xl">MAX!</span></h1>
       <p className=" text-center text-gray pt-4 ">sobre o dispositivo</p>
       

       <br className="min-[400px]:hidden"/>
       <br className="min-[400px]:hidden"/>
       <br className="min-[400px]:hidden"/>

       
       <div className="absolute z-0 relative min-[400px]:hidden">
        <img className="absolute top-[-110px] left-0 " src={Baymax} alt="" />
       </div>

       <section className="absolute z-10 lg:flex justify-center min-[428px]:hidden">

       

        <div className="bg-bluee m-10  max-w-98 px-8 flex-1 rounded shadow-2xl ps-8">
        <img className="mt-9 ml-4" src={Relogio1} alt="icone do relógio" />
        <h2 className=" text-azul-claro m-4  font-semibold font-poppins text-lg">Monitoramento Pessoal</h2>      
        <p className="text-white m-4 font-poppins font-light text-base ">O monitoramento pessoal é essencial para melhorar o bem-estar e a produtividade. Ele permite acompanhar hábitos e progresso, identificar problemas precoces e ajustar comportamentos de forma proativa. Com isso, é possível tomar decisões informadas, promover o autocontrole e alcançar um equilíbrio saudável entre vida pessoal e profissional. </p>
        <img className="float-right top-[-100px]  flex "src={Mini} alt="mini personagem" />
        

        </div>

        <div className="bg-bluee m-10 max-w-98 px-8 flex-1 rounded box-border shadow-2xl ">
        <img className="mt-9 ml-4 " src={Cerebro1} alt="cerebro" />
        <h2 className="text-azul-claro m-4 font-semibold font-poppins text-lg">Suporte emocional</h2>
        <p className="text-white m-4 font-poppins font-normal  text-base ">O suporte emocional é crucial para o bem-estar mental, oferecendo compreensão, empatia e encorajamento para enfrentar desafios e estresses. Ter alguém que ouça e ofereça apoio alivia a carga emocional, fortalece a resiliência e promove a conexão e segurança. Em momentos difíceis, esse suporte ajuda a superar adversidades e melhora a saúde mental e o bem-estar.</p>
        
        
          
        </div>
      </section>

      

       <section className="lg:hidden ">
       <div className="bg-bluee m-10 p-8 rounded shadow-2xl z-10  ">        
        <h2 className=" text-azul-claro m-4 font-semibold font-poppins text-lg ">Monitoramento Pessoal</h2>  
        <p className="text-white m-2  font-poppins font-light text-base  ">O monitoramento pessoal é essencial para melhorar o bem-estar e a produtividade. Ele permite acompanhar hábitos e progresso, identificar problemas precoces e ajustar comportamentos de forma proativa. Com isso, é possível tomar decisões informadas, promover o autocontrole e alcançar um equilíbrio saudável entre vida pessoal e profissional.</p>   
        <img className="float-right pt-12 mt-12 pl-6 flex lg:hidden"src={Mini} alt="mini personagem" />         
      </div>

      <br />

      <div className="bg-bluee m-10 p-8 rounded shadow-2xl ">
        <img className="float-right " src={Coracao} alt="imagem do coração" />
        <h2 className="text-azul-claro mx-4 font-semibold font-poppins text-lg ">Suporte</h2>
        <h2 className="text-azul-claro mx-4 font-semibold font-poppins text-lg ">emocional</h2>
        <p className="text-white m-4 font-poppins m:font-normal  text-base lg:hidden">Os bichinhos de pelúcia desempenham um papel significativo no desenvolvimento emocional das crianças. Esses brinquedos, muitas vezes subestimados, são mais do que simples objetos; eles são companheiros fiéis que proporcionam conforto, segurança e apoio emocional em diversas fases da infância.</p>
      </div>
      
      </section>
  
    </main>
    
  )
}