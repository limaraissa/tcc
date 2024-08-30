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
    <header>
      <div className={`sm:bg-fundo sm:flex sm:justify-between relative ${abrirMenu ? "overflow-hidden" : "overflow-visible"}`}>
        
        {/* Menu que aparece/desaparece */}
        <div className={`bg-red-200 flex flex-col w-60 p-5 absolute top-0 right-0 gap-4 transition-all transform ${abrirMenu ? "translate-x-0" : "translate-x-full"} duration-300`}>
          <Link to="/" className='text-slate-200 pt-1 hover:text-white lg:hidden'>HOME</Link>
          <Link to="/equipamentos" className='text-slate-400 hover:text-white lg:hidden'>EQUIPAMENTOS</Link>
          <Link to="/sobre" className='text-slate-400 hover:text-white lg:hidden'>SOBRE</Link>
          <Link to="/participantes" className='text-slate-400 hover:text-white lg:hidden'>PARTICIPANTES</Link>
          <Link to="/funcoes" className='text-slate-400 hover:text-white lg:hidden'>FUNÇÕES</Link>
        </div>

        {/* Logo e Ícone do Menu */}
        <img src={logoimg} alt="Logo" className='justify-start'/>
        <img src={menu} onClick={handleAbrir} alt="Menu" className='sm:w-10 h-10 mt-8 block lg:hidden cursor-pointer'/>
        
        {/* Links visíveis em telas grandes */}
        <div className='lg:flex items-start space-y-1 mt-6 justify-center font-poppins text-base font-bold hidden sm:block'>
          <Link to="/" className='text-slate-400 pt-1 hover:text-white hidden sm:block'>HOME</Link>
          <Link to="/equipamentos" className='text-slate-400 ml-24 mr-12 hover:text-white hidden sm:block'>EQUIPAMENTOS</Link>
          <Link to="/sobre" className='text-slate-400 mr-12 ml-12 hover:text-white hidden sm:block'>SOBRE</Link>
          <Link to="/participantes" className='text-slate-400 mr-12 ml-10 hover:text-white hidden sm:block'>PARTICIPANTES</Link>
          <Link to="/funcoes" className='text-slate-400 mr-72 ml-10 hover:text-white hidden sm:block'>FUNÇÕES</Link>
          <a href="/login">
            <img src={login} alt="Login" className='sm:block lg:justify-end ml-auto mr-12 hidden'/>
          </a>
        </div>
      </div>
    </header>
  );
}
