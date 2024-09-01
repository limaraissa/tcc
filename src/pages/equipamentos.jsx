import React from 'react';
import Coracao from "../assets/batimentos.png";
import Temp from "../assets/temperatura.png";
import Mod from "../assets/modulo.png";
import Dis from "../assets/display.png";
import Boneco from "../assets/boneco.png";
import Arduino from "../assets/arduino.png";

import Header from '../componentes/heather';

export default function App() {
  return (
    <main className="bg-fundo bg-no-repeat min-[430px]:h-[2700px] lg:h-[800px] font-poppins text-poppins">
      <div className="z-50">
        <Header/>
      </div>
      
      <h1 className="text-white font-bold text-center pt-11 text-7xl">BAY<span className="text-vermelho font-bold lg:text-7xl">MAX!</span></h1>

      <section className="text-white opacity-70 font-light text-[20px] flex justify-center items-center h-[31px]">
        <h2>Equipamentos</h2>
      </section>

      {/* Container principal para centralizar em telas pequenas e grandes */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap lg:justify-center lg:px-8 bg-fundo">
        
        <div className="w-[300px] h-[500px] mt-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img src={Coracao} alt="sensor" className=""/>
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">Sensor de Pulso e Frequência Cardíaca</h1>
        </div>

        <div className="w-[300px] h-[500px] mt-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img src={Temp} alt="sensor" className=""/>
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">DS1820 temperatura</h1>
        </div>

        <div className="w-[300px] h-[500px] mt-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img src={Arduino} alt="placa" className=""/>
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">Arduino Uno</h1>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:mb-8 lg:flex-wrap lg:justify-center lg:px-8 bg-fundo">
        
        <div className="w-[300px] h-[500px] mt-[50px] bg-white  rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img src={Mod} alt="modulo" className=""/>
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">Módulo WiFi + Bluetooth ESP32</h1>
        </div>

        <div className="w-[300px] h-[500px] mt-[50px] bg-white rounded-[10px]  flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img src={Dis} alt="display" className=""/>
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">Display LCD 16x2</h1>
        </div>

        <div className="w-[300px] h-[500px] mt-[50px]  bg-white rounded-[10px]  flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img src={Boneco} alt="boneco" className=""/>
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">Módulo RTC DS1302</h1>
        </div>

      </div>
    </main>
  )
}
