import React from 'react'
import Relogio1 from "../public/relogio.png"
import Coracao from "../public/coracao.png"
import Mini from "../public/baymaxgih.png"
import Cerebro1 from "../public/cerebro.png"
import Header from '../componentes/heather'
import Baymax from "../public/baymaxfundo.png"






export default function App() {
  return (
    <main className="bg-blue h-screen bg-no-repeat min-[400px]:h-[2500px] lg:h-[1650px] ">

      <Header/>

      <h1 className='sm:flex text-5xl text-center text-white font-poppins font-bold block mt-4  lg:text-white lg:font-poppins lg:font-bold lg:text-9xl lg:flex lg:text-center  lg:mr-12 lg:ml-100 lg:relative lg:mt-36'>BAY<span className='text-vermelho'>MAX!</span></h1>
      <h1 className="text-white font-bold text-center text-xl pt-11 lg:text-7xl "><span className="text-vermelho font-bold min-[430px]:text-4xl lg:text-7xl">BAY</span>MAX!</h1>
       <p className=" text-center text-gray pt-4 ">sobre o dispositivo</p>
       

       <br className="min-[400px]:hidden"/>
       <br className="min-[400px]:hidden"/>
       <br className="min-[400px]:hidden"/>

       
       <div className="absolute z-0 relative">
        <img className="absolute top-[-110px] left-0 " src={Baymax} alt="" />
       </div>

       <section className="absolute z-10 lg:flex justify-center min-[400px]:hidden">

       

        <div className="bg-bluee m-10  max-w-98 px-8 flex-1 rounded shadow-2xl ">
        <img className="mt-9 ml-4" src={Relogio1} alt="icone do relógio" />
        <h2 className=" text-azul-claro m-4  font-semibold font-poppins text-lg">Monitoramento Pessoal</h2>      
        <p className="text-white m-4 font-poppins font-light text-base ">O monitoramento pessoal é essencial para melhorar o bem-estar e a produtividade. Ele permite acompanhar hábitos e progresso, identificar problemas precoces e ajustar comportamentos de forma proativa. Com isso, é possível tomar decisões informadas, promover o autocontrole e alcançar um equilíbrio saudável entre vida pessoal e profissional. </p>
        <img className="float-right pt-1  flex "src={Mini} alt="mini personagem" />
        

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
      

      <h1 className="text-reed font-bold text-center text-4xl py-11 lg:hidden">Funções<span className="text-white font-bold text-4xl py-11 lg:hidden"> principais</span></h1>

      
      <div className="bg-bluee m-10  p-8 rounded-lg  shadow-2xl lg:hidden">
        <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Monitoramento Cardíaco</h2>
        <p className="text-white m-4 font-normal font-poppins text-base">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation m dolore eu fugiat nulla pariatur.  </p>
      </div>
      
      
      <div className="bg-bluee m-10 p-8 rounded-lg  shadow-2xl lg:hidden">
        <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Medir temperatura</h2>
        <p className="text-white m-4 font-normal font-poppins text-base">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation m dolore eu fugiat nulla pariatur.  </p>
      </div>     

      <div className="bg-bluee m-10 p-8 rounded-lg  shadow-2xl lg:hidden">
        <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Caixa de remédio digital</h2>
        <p className="text-white m-4 font-normal font-poppins text-base">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation m dolore eu fugiat nulla pariatur.  </p>
      </div>      
      </section>
      <section className=" pt-[500px] sm:hidden">
          <div className="absolute z-10 flex flex-col items-center p-12 bg-dark-bluee outer-container p-12 m-12 mt-14 border rounded-lg ">

          <h1 className="text-white font-semibold text-center pt-4 text-4xl py-14"><span className="text-reed font-semibold text-4xl">Funções</span> principais</h1>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  ">



          <div className="bg-bluee p-6 rounded-lg shadow-lg ">
          <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Monitoramento Cardíaco</h2>
          <p className="text-white text-sm">O monitoramento cardíaco é essencial para acompanhar a saúde do coração, detectando irregularidades no ritmo, avaliando a eficácia dos tratamentos e prevenindo eventos graves. Ele ajuda a identificar problemas precoces, ajustar tratamentos e melhorar a gestão de condições cardíacas, promovendo uma saúde cardiovascular mais eficaz e segura. </p>
          </div>

          <div className="bg-bluee p-6 rounded-lg shadow-lg">
          <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Medir temperatura</h1>
          <p className="text-white text-sm">Medir a temperatura é crucial para monitorar a saúde e o bem-estar. Essa função permite detectar febres, identificar infecções e avaliar a eficácia de tratamentos. Em ambientes clínicos, a medição precisa da temperatura auxilia no diagnóstico de condições médicas, enquanto no cotidiano ajuda a garantir conforto e segurança. Em suma, medir a temperatura fornece informações vitais para a saúde e o ajuste adequado de intervenções. </p>
          </div>

          <div className="bg-bluee p-6 rounded-lg shadow-lg ">
            <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Boneco interativo </h1>
            <p className="text-white text-sm">O boneco interativo foi projetado para ser mais do que um simples brinquedo; ele é uma companhia que visa proporcionar conforto e engajamento. Com funcionalidades que permitem conversas, respostas a comandos e até mesmo reações emocionais, o boneco cria uma experiência personalizada e acolhedora. Seja para aliviar o estresse, oferecer companhia ou estimular interações lúdicas, ele se adapta às necessidades do usuário, promovendo um sentimento de bem-estar e conexão. </p>
          </div>

          <div className="bg-bluee p-6 rounded-lg shadow-lg ">
            <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Suporte Emocional</h1>
            <img className="float-right flex mb-16 " src={Coracao} alt="" />
            <p className="text-white text-sm">O suporte emocional é vital para a saúde e o desenvolvimento de uma criança. Oferecer compreensão, carinho e encorajamento ajuda a construir sua autoestima e resiliência, permitindo que ela enfrente desafios e estresses de forma mais eficaz. Esse apoio promove um ambiente seguro e acolhedor, essencial para o bem-estar emocional e mental, facilitando um crescimento saudável e equilibrado. Em resumo, o suporte emocional fortalece a saúde geral da criança, contribuindo para uma base sólida para seu futuro.</p>
            
          </div>
          </div>
          </div>
      </section>

      



  
      
    </main>
  )
}