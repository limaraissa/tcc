import login from '../public/Vector.png';
import logoimg from '../public/image 3.png';
import menu from '../public/image 21.png';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false);

  function handleAbrir() {
    setAbrirMenu(!abrirMenu); // Alterna entre abrir e fechar o menu
  }

  return (
    <header className="top-0 left-0 w-full z-50 overflow-hidden">
    <div className={`sm:bg-fundo sm:flex sm:justify-between relative ${abrirMenu ? "overflow-visible" : "overflow-hidden"}`}>
      
      {/* Menu que aparece/desaparece */}
      <div className={`bg-blue flex flex-col w-58 p-2 absolute top-0 right-0 gap-0.5 transition-all transform ${abrirMenu ? "translate-x-0 h-screen" : "translate-x-full h-0"} `}>
        <Link to="/" className='text-slate-400  hover:text-cyan-400 text-xs lg:hidden'>HOME</Link>
        <Link to="/equipamentos" className='text-slate-400 hover:text-cyan-400 text-xs lg:hidden'>EQUIPAMENTOS</Link>
        <Link to="/sobre" className='text-slate-400 hover:text-cyan-400 text-xs lg:hidden'>SOBRE</Link>
        <Link to="/funcoes" className='text-slate-400 hover:text-cyan-400 text-xs lg:hidden'>FUNÇÕES</Link>
        <Link to="/participantes" className='text-slate-400 hover:text-cyan-400 text-xs lg:hidden'>PARTICIPANTES</Link>
        
      </div>

      <div className='flex items-center justify-between px-4'>
        {/* Logo */}
        <img src={logoimg} alt="Logo" className='w-auto h-auto' />
        {/* Ícone do Menu */}
        <img src={menu} onClick={handleAbrir} alt="Menu" className='sm:w-10 h-10 cursor-pointer lg:hidden' />
      </div>

          
        
        {/* Links visíveis em telas grandes */}
        <div className='lg:flex items-start space-y-1 mt-6 justify-center font-poppins text-base font-bold hidden sm:block'>
          <Link to="/" className='text-slate-400 pt-1 hover:text-white hidden sm:block'>HOME</Link>
          <Link to="/equipamentos" className='text-slate-400 ml-24 mr-12 hover:text-white hidden sm:block'>EQUIPAMENTOS</Link>
          <Link to="/sobre" className='text-slate-400 mr-12 ml-12 hover:text-white hidden sm:block'>SOBRE</Link>
          <Link to="/funcoes" className='text-slate-400 mr-12 ml-10 hover:text-white hidden sm:block'>FUNÇÕES</Link>
          <Link to="/participantes" className='text-slate-400 mr-72 ml-10 hover:text-white hidden sm:block'>PARTICIPANTES</Link>
          
          
          <a href="/login">
            <img src={login} alt="Login" className='sm:block lg:justify-end ml-auto mr-12 hidden'/>
          </a>
        </div>
      </div>
    </header>
  );
}
