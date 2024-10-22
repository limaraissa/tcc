import React, { useState } from 'react';
import Coracao from "../assets/batimentos.png";
import Temp from "../assets/temperatura.png";
import Mod from "../assets/modulo.png";
import Dis from "../assets/display.png";
import Boneco from "../assets/boneco.png";
import Arduino from "../assets/arduino.png";
import Header from '../componentes/heather';
import df from "../assets/image.png";
import auto from "../assets/autofalante.png";
import hc from "../assets/hc-05.png";
import bz from "../assets/buzzer.png";

export default function App() {
  const [isRotated, setIsRotated] = useState({
    coracao: false,
    temp: false,
    arduino: false,
    mod: false,
    dis: false,
    boneco: false,
  });

  const handleRotate = (item) => {
    setIsRotated((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <main className="bg-fundo bg-no-repeat min-[430px]:h-[2700px] lg:h-[800px] font-poppins text-poppins">
      <div className="z-50">
        <Header />
      </div>
      
      <h1 className="text-white font-bold text-center pt-11 text-7xl">
        BAY<span className="text-vermelho font-bold lg:text-7xl">MAX!</span>
      </h1>

      <section className="text-white opacity-70 font-light text-[20px] flex justify-center items-center h-[31px]">
        <h2>Equipamentos</h2>
      </section>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap lg:justify-center lg:px-8 bg-fundo">
        
        <div className="w-[300px] h-[500px] mt-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={Coracao} 
            alt="sensor" 
            className={`w-[200px] h-[300px] transition-transform duration-1000 ease-in-out ${isRotated.coracao ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('coracao')}
          />
          <h1 className="font-semibold text-[29px] w-[287px] text-center mt-4">
            Sensor de Pulso e Frequência Cardíaca
          </h1>
          <p className="text-center mt-2">R$23,67</p>
        </div>

        <div className="w-[300px] h-[500px] mt-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={Temp} 
            alt="sensor" 
            className={`w-[200px] h-[300px] transition-transform duration-1000 ease-in-out ${isRotated.temp ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('temp')}
          />
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">
            DS1820 temperatura
          </h1>
          <p className="text-center mt-2">R$13,20</p>
        </div>

        <div className="w-[300px] h-[500px] mt-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={Arduino} 
            alt="placa" 
            className={`w-[200px] h-[300px] transition-transform duration-1000 ease-in-out ${isRotated.arduino ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('arduino')}
          />
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">
            Arduino Uno
          </h1>
          <p className="text-center mt-2">$100</p>
        </div>

        <div className="w-[300px] h-[500px] mt-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={bz} 
            alt="placa" 
            className={`w-[200px] h-[200px] transition-transform duration-1000 ease-in-out ${isRotated.arduino ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('arduino')}
          />
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-20">
            Buzzer
          </h1>
          <p className="text-center mt-2">R$1,88</p>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:mb-8 lg:flex-wrap lg:justify-center lg:px-8 bg-fundo">
        
        <div className="w-[300px] h-[500px] mt-[50px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={df} 
            alt="modulo" 
            className={`w-[200px] h-[300px] transition-transform duration-1000 ease-in-out ${isRotated.mod ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('mod')}
          />
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">
           DFplayer mini
          </h1>
          <p className="text-center mt-2">R$24,48</p>
        </div>

        

        <div className="w-[300px] h-[500px] mt-[50px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={hc} 
            alt="display" 
            className={`w-[200px] h-[300px] transition-transform duration-1000 ease-in-out ${isRotated.dis ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('dis')}
          />
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">
            Módulo HC-05
          </h1>
          <p className="text-center mt-2">R$40,76</p>
        </div>

        <div className="w-[300px] h-[500px] mt-[50px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={Boneco} 
            alt="boneco" 
            className={`transition-transform duration-1000 ease-in-out ${isRotated.boneco ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('boneco')}
          />
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">
            Pelucia Baymax
          </h1>
          <p className="text-center mt-2">$150</p>
        </div>

        <div className="w-[300px] h-[500px] mt-[50px] bg-white rounded-[10px] flex flex-col items-center justify-center lg:w-[325px] lg:mx-4 lg:mt-[20px]">
          <img 
            src={auto} 
            alt="autofalante" 
            className={`transition-transform duration-1000 ease-in-out ${isRotated.boneco ? 'rotate-360' : ''}`}
            onClick={() => handleRotate('boneco')}
          />
          <h1 className="font-semibold text-[32px] w-[287px] text-center mt-4">
            Auto falante
          </h1>
          <p className="text-center mt-2">R$12,90</p>
        </div>

        
      </div>
    </main>
  );
}
