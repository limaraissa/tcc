import React from 'react';
import Relogio1 from "../public/relogio.png";
import Coracao from "../public/coracao.png";
import Mini from "../public/baymaxgih.png";
import Cerebro1 from "../public/cerebro.png";
import Header from '../componentes/heather';
import Baymax from "../public/baymaxfundo.png";
import coracao2 from "../public/coracao2.png";

export default function App() {
  return (
    <main className="bg-blue h-screen bg-no-repeat min-[428px]:h-[1500px] lg:h-[950px]">

      <Header />

      <h1 className="text-white font-bold text-center pt-11 text-7xl">BAY<span className="text-vermelho font-bold lg:text-7xl">MAX!</span></h1>
      <p className="text-center text-white pt-4">sobre o dispositivo</p>

      <div className="relative lg:hidden">
        <img className="absolute top-0 left-0" src={Baymax} alt="" />
      </div>

      {/* Seção visível apenas em telas pequenas (sm até lg) */}
      <section className="block  lg:hidden ">
        <div className="bg-mobile m-10 p-8 rounded shadow-2xl">
          <h2 className="text-azul-claro m-4 font-semibold font-poppins text-lg">Monitoramento Pessoal</h2>
          <p className="text-white m-2 font-poppins font-light text-base">O monitoramento pessoal é essencial para melhorar o bem-estar e a produtividade. Ele permite acompanhar hábitos e progresso, identificar problemas precoces e ajustar comportamentos de forma proativa.</p>
          <img className="float-right  pl-6 flex" src={Mini} alt="mini personagem" />
        </div>

        <br />

        <div className="bg-mobile m-10 p-8 rounded shadow-2xl">
          <img className="float-right" src={coracao2} alt="imagem do coração" />
          <h2 className="text-azul-claro mx-4 font-semibold font-poppins text-lg">Suporte emocional</h2>
          <p className="text-white m-4 font-poppins font-normal text-base">Os bichinhos de pelúcia desempenham um papel significativo no desenvolvimento emocional das crianças. Esses brinquedos proporcionam conforto, segurança e apoio emocional.</p>
        </div>
      </section>

      {/* Seção visível apenas em telas grandes (lg e acima) */}
      <section className="hidden lg:flex justify-center px-14">
        <div className="bg-bluee m-10 max-w-98 px-8 flex-1 rounded shadow-2xl ps-8">
          <img className="mt-9 ml-4" src={Relogio1} alt="icone do relógio" />
          <h2 className="text-azul-claro m-4 font-semibold font-poppins text-lg">Monitoramento Pessoal</h2>
          <p className="text-white m-4 font-poppins font-light text-base">O monitoramento pessoal é essencial para melhorar o bem-estar e a produtividade. Ele permite acompanhar hábitos e progresso, identificar problemas precoces e ajustar comportamentos de forma proativa.</p>
          <img className="float-right top-[-100px] flex" src={Mini} alt="mini personagem" />
        </div>

        <div className="bg-bluee m-10 max-w-98 px-8 flex-1 rounded box-border shadow-2xl">
          <img className="mt-9 ml-4" src={Cerebro1} alt="cerebro" />
          <h2 className="text-azul-claro m-4 font-semibold font-poppins text-lg">Suporte emocional</h2>
          <p className="text-white m-4 font-poppins font-normal text-base">O suporte emocional é crucial para o bem-estar mental, oferecendo compreensão, empatia e encorajamento para enfrentar desafios e estresses.</p>
        </div>
      </section>

    </main>
  );
}
