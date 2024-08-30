import React from 'react'
import baymax from '../public/baymaxfundo.png'
import bemvindo from '../public/Frame 56.png'
import Header from '../componentes/heather'

export default function App() {
    return(
    <main className='bg-fundo'>
            <Header />
            <div className='bg-fundo '>
                
                <h1 className='sm:flex text-5xl text-center text-white font-poppins font-bold block lg:hidden'>BAY<span className='text-vermelho'>MAX!</span></h1>
            </div>

            <div className='max-h-max bg-white max-w-sm flex flex-col items-center justify-center mx-auto rounded-md mt-12 '>
            <form className='sm:mt-8 lg:hidden'>
                <label htmlFor="nome"className='  text-lg mt-10 ml-12 font-bold font-montserrat'>Como podemos te chamar?</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome..." className='mt-4 bg-transparent border-b-2 border-vermelho ml-12 w-9/12'></input>
            </form>
            <form className='sm::mt-4 sm::mr-12 lg:hidden'>
                <label for="email"  className='  text-lg mt-4 mr-12 ml-12 font-bold font-montserrat'>E-mail</label>
                <input type="email" name="email" placeholder="Digite seu e-mail..." className='mt-4 bg-transparent border-b-2 border-vermelho ml-12 w-9/12'/>
            </form>
            <form className='sm:mt-4 sm:mr-12 lg:hidden'>
                <label for="pass" className='  text-lg mt-4 ml-12 mr-12 font-bold font-montserrat'>Senha </label>
                <input type="password"  name="password" placeholder="Digite sua senha..." className='mt-4 bg-transparent border-b-2 border-vermelho ml-12 w-9/12' />
            </form>
            <form className='sm:mt-8 lg:hidden'>
                <label for="pass" className='  text-lg mt-4 ml-12 font-bold font-montserrat'>Confirme sua senha </label>
                <input type="password"  name="password" placeholder="Digite sua senha..." className='mt-4 bg-transparent border-b-2 border-vermelho ml-12 w-9/12' />
            </form>
            <form>
                <div className="sm:flex sm:items-center lg:hidden">
                <input type="checkbox" id="termos" name="termos" className="mr-2 ml-5"/>
                <label for="termos" class="text-gray-700">Concordo com os <a href="#" class="text-blue-500 underline">termos e condições</a>.</label>
                </div>
            </form>

            <button className='bg-reed text-white text-xl font-bold rounded-2xl h-12 w-60 mt-4 mb-4 ml-14 mr-14 lg:hidden '>
                Entrar
            </button>
            
            </div>
            <img src={baymax} alt="" className='lg:hidden'/>

            
            <div className='hidden lg:flex flex-col items-center justify-center h-screen  bg-fundo'>
            <div className='relative'>
                <img src={bemvindo} alt="Bem-vindo" className='lg:w-4/5 lg:max-w-full lg:h-auto lg:object-scale-down lg:ml-20' />
                <div className='absolute top-0 left-0 m-4 font-poppins text-black'>
            
                <form className='mt-8'>
                <label htmlFor="nome" className='text-lg mt-96 ml-28 font-bold font-montserrat'>Como podemos te chamar?</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome..." className='mt-4 bg-transparent border-b-2 border-vermelho ml-28 w-9/12' />
                </form>
            
                <form className='mt-8'>
                <label htmlFor="email" className='text-lg mt-20 ml-28 font-bold font-montserrat'>E-mail</label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail..." pattern=".+@example\.com" className='mt-4 bg-transparent border-b-2 border-vermelho ml-28 w-9/12' />
                </form>
            
                <form className='mt-8'>
                <label htmlFor="pass" className='text-lg mt-96 ml-28 font-bold font-montserrat'>Senha</label>
                <input type="password" name="password" placeholder="Digite sua senha..." className='mt-4 bg-transparent border-b-2 border-vermelho ml-28 w-9/12' />
                </form>
            
                <form className='mt-8'>
                <label htmlFor="pass" className='text-lg mt-96 ml-28 font-bold font-montserrat'>Confirme sua senha</label>
                <input type="password" name="password" placeholder="Digite sua senha..." className='mt-4 bg-transparent border-b-2 border-vermelho ml-28 w-9/12' />
                </form>
            
                <form>
                <div className="flex items-center">
                    <input type="checkbox" id="termos" name="termos" className="mr-2 ml-72" />
                    <label htmlFor="termos" className="text-gray-700">Concordo com os <a href="#" className="text-blue-500 underline">termos e condições</a>.</label>
                </div>
                </form>
                
                <button className='bg-reed	 text-white text-xl font-bold rounded-2xl h-12 w-60 mt-12 ml-28 sm:bg-reed	 sm:text-white sm:text-xl sm:font-bold sm:rounded-2xl sm:h-12 sm:w-60 mt-12 ml-28'>
                Entrar
                </button>
            
            </div>
            </div>
        </div>

        </main>
  )
}
