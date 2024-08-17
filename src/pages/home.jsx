import React from 'react'

import img2 from '../public/image 17.png'
import baymax from '../public/baymaxfundo.png'

import Header from '../componentes/heather'


export default function home() {
  return (
  <main className='min-h-svh'>
      
     <div className='bg-fundo'>
     <Header />
      
      <div className='bg-fundo'>
          
          <h1 className='sm:flex text-5xl text-center text-white font-poppins font-bold block lg:hidden '>BAY<span className='text-vermelho'>MAX!</span></h1>
          <p className='sm:text-center text-white font-poppins m-10 text-xl text-wrap block lg:hidden '>Assim como no filme Big hero o personagem Baymax tem o objetivo de auxiliar na sua saúde. o  robo vem com a intenção de tornar seu dia a dia mais pratico e funcional venha conhecer mais sobre.</p>
          <div className='sm:flex sm:justify-center lg:flex lg:justify-end lg:space-x-80 '>
            <img src={baymax} alt="" className='sm:w-96 block lg:hidden' />
          </div>
      </div>
      
      
      <h1 className='lg:text-white lg:font-poppins lg:font-bold lg:text-2x20 lg:flex  lg:mr-12 lg:ml-50 lg:relative lg:mt-36 hidden sm:block'>BAY<span className='text-vermelho'>MAX!</span></h1>
        <div className='flex  space-x-4 '>
          <img src={baymax} alt=""  className='translate-y-4 relative z-10 mt-0 z-20 hidden sm:block'/>
          <p className='text-white font-poppins text-xl relative mt-0 justify-end mr-40 z-10 mt-4 mb-4 hidden sm:block'>Assim como no filme Big hero o personagem Baymax <br/> tem o objetivo de auxiliar na sua saúde. o robo vem <br/> com a intenção de tornar seu dia a dia mais pratico e<br/> funcional venha conhecer mais sobre.<br/>

          <button className='lg:text-white lg:text-xl lg:justify-center lg:mr-50 bg-reed	lg:h-24 lg:w-72	lg:text-white lg:font-poppins lg:font-bold lg:rounded-2xl lg:mt-20 hidden sm:block	'>BAYMAX</button>
          </p>
          
      </div>


      
      <div className='flex items-center w-9/12 bg-fundo '>
        <div className='mt-36 pb-28 text-white space-y-6 font-poppins font-medium ml-36 text-lg float-start hidden sm:block'>
          <p className=''>O primeiro artigo destaca como a tecnologia está beneficiando<br/> a saúde, e explora o <br/> desenvolvimento de novos materiais e novas<br/> ferramentas, transformando e inovando a <br/> área dasaúde.</p>
          <p className=''>O segundo artigo vai falar sobre os avanços<br/> da tecnologia na área da saúde. O instituto<br/> IAM é uma comunidade dedicada a pesquisa<br/> do desenvolvimento de sistemas onde foram<br/> feitos testes que possibilitaram a aplicação<br/> de rôbos na medicina.</p>
          <p >Já o terceiro artigo vai falar sobre como os<br/> rôbos reduzem drasticamente o tempo de<br/> execução das tarefas , impulsionando a<br/> eficiência operacional, não precisam de<br/> férias ou adoecem, garantindo operações<br/> continuas e consistentes e eles também<br/> mantêm precisão constante evitando falhas.</p>
        
        </div>
        <div className='flex items-center '>
          <img src={img2} alt="" className='ml-48 hidden sm:block' />
        </div>
      </div>

    </div>
  </main>
   
  )
}