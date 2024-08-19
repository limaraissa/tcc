import React from 'react'
import login from '../public/Vector.png'
import logoimg from '../public/image 3.png'
import menu from '../public/image 21.png'
import {Link} from "react-router-dom"


export default function heather() {
  return (
    <div className=' sm:bg-fundo flex justify-between'>
        <img src={logoimg} alt="" className='justify-start'/>
        <img src={menu} alt="" className=' sm:w-10 h-10 mt-8 block lg:hidden'/> 

        <header className='lg:flex items-start space-y-1 mt-6 justify-center font-poppins text-base font-bold hidden sm:block '>
          <Link to="/" className='text-slate-400 ml-50 pt-1 hover:text-white  hidden sm:block'>HOME</Link>
          <Link to="/equipamentos" className='text-slate-400  ml-24 mr-12 hover:text-white hidden sm:block '>EQUIPAMENTOS</Link>
          <Link to="/sobre" className='text-slate-400 mr-12 ml-12 hover:text-white hidden sm:block'>SOBRE</Link>
          <Link to="/participantes" className='text-slate-400 mr-12 ml-10 hover:text-white hidden sm:block'>PARTICIPANTES</Link>
          <Link to="/funcoes" className='text-slate-400 mr-72 ml-10 hover:text-white hidden sm:block'>FUNÇÕES</Link>
          
          <a href="/login">
            <img src={login} alt="Login" className='sm:block lg:justify-end ml-auto mr-12 sticky hidden'/>
          </a>
        </header>
      </div>
  )
}
