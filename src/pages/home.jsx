import React, { useRef } from 'react';

import img2 from '../public/image 17.png';
import baymax from '../public/baymaxfundo.png';
import Header from '../componentes/heather';

export default function Home() {
  // Cria uma referência para a div de destino
  const targetDivRef = useRef(null);

  // Função que rola para a div de destino
  const scrollToTargetDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className='z-0'>
      <div className='bg-fundo'>
        <Header />
        
        <div className='bg-fundo z-0'>
          <h1 className='sm:flex text-5xl text-center text-white font-poppins font-bold block mt-4 lg:hidden'>BAY<span className='text-vermelho'>MAX!</span></h1>
          <p className='sm:text-center text-white font-poppins m-10 text-xl text-wrap block lg:hidden'>Assim como no filme Big hero o personagem Baymax tem o objetivo de auxiliar na sua saúde. O robo vem com a intenção de tornar seu dia a dia mais prático e funcional venha conhecer mais.</p>
          <div className='sm:flex sm:justify-center lg:flex lg:justify-end lg:space-x-80'>
            <img src={baymax} alt="" className='sm:w-96 block lg:hidden' />
          </div>
        </div>
        
        <h1 className='lg:text-white lg:font-poppins lg:font-bold lg:text-9xl lg:flex lg:mr-12 lg:ml-100 lg:relative lg:mt-36 hidden sm:block md:block'>BAY<span className='text-vermelho'>MAX!</span></h1>
        <div className='flex gab-96'>
          <img src={baymax} alt="" className='flex translate-y-4 relative z-10 mt-0 z-20 ml-20 hidden sm:block md:block' />
          <p className='flex text-white font-poppins font-light text-2xl relative mr-20 ml-52 z-10 mt-4 mb-4 hidden sm:block md:block'>
            Assim como no filme Big hero o personagem Baymax <br /> tem o objetivo de auxiliar na sua saúde. O robô vem <br /> com a intenção de tornar seu dia a dia mais prático e<br/> funcional venha conhecer mais.<br />
          <button 
          className='bg-vermelho flex lg:text-white lg:text-xl lg:justify-center lg:mr-50 bg-reed lg:h-24 lg:w-72 lg:text-white lg:font-poppins lg:font-bold lg:rounded-2xl lg:mt-20 hover:bg-blue border-transparent border-2 hover:border-white hidden sm:block' 
          onClick={scrollToTargetDiv}
          >
            REFERENCIAS
          </button>

          </p>
        </div>

        {/* A div de destino que queremos rolar até ela */}
        <div ref={targetDivRef} className='flex items-center justify-center w-9/12 mx-auto bg-fundo space-x-44 mt-36 pb-28'>
          
          <div className='text-slate-50 space-y-6 font-poppins font-medium text-lg hidden sm:block'>
            <h2 className=' lg:text-white lg:text-2xl lg:bg-vermelho lg:rounded-lg'>Referencias para a criação do projeto</h2>
            <p>    De acordo com as vastas pesquisas que fizemos,<br/> observamos que a tecnologia tem gerado <br/>impactos positivos significativos na área <br/> da saúde. O desenvolvimento de novos <br/> materiais e ferramentas está transformando o setor ao <br/> proporcionar soluções que melhoram tanto a qualidade <br/> quanto a eficiência dos cuidados médicos,<br/> impulsionando avanços notáveis. </p>
            <p>As pesquisas também destacam o trabalho do instituto ,<br/> IAM, uma comunidade dedicada à <br/>pesquisa e desenvolvimento de sistemas <br/> tecnológicos aplicados à medicina. Através<br/> de testes pioneiros, o instituto<br/> possibilitou a inserção de robô0s <br/>em procedimentos médicos, representando <br/>um marco importante na prática médica moderna.</p>
            <p>Além disso, identificamos que a introdução<br/> de robôs na saúde tem revolucionado a eficiência<br/> operacional. Com precisão constante,<br/> esses robôs executam tarefas de forma <br/>rápida e sem interrupções, uma vez <br/>que não necessitam de pausas ou são<br/> sujeitos a doenças. Essa capacidade de<br/> operar continuamente, aliada à redução<br/> de falhas, proporciona ganhos substanciais para<br/> o setor de saúde.</p>
          </div>
          <div className='ml-12 flex items-center justify-center'>
            <img src={img2} alt="" className='hidden sm:block' />
          </div>
        </div>
      </div>
    </main>
  );
}
