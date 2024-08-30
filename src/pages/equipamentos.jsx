import Coracao from "../assets/batimentos.png";
import Temp from "../assets/temperatura.png";
import Mod from "../assets/modulo.png";
import Dis from "../assets/display.png";
import Boneco from "../assets/boneco.png";
import Arduino from "../assets/arduino.png";


import Header from '../componentes/heather'




export default function App() {
    return (

    
      <main className=" bg-fundo bg-no-repeat min-[430px]:h-[2700px] lg:h-[800px]  font-poppins  text-poppins ">
        <div className="z-50">
          <Header/>
        </div>
        
    
      
        <h1 className='lg:text-white lg:font-poppins lg:font-bold lg:text-9xl lg:flex  lg:mr-12 lg:ml-100 lg:relative lg:mt-36 hidden sm:block md:block'>BAY<span className='text-vermelho'>MAX!</span></h1>
        <h1 className='sm:flex text-5xl text-center text-white font-poppins font-bold block mt-4 lg:hidden '>BAY<span className='text-vermelho'>MAX!</span></h1>
        <section className="text-white opacity-70 font-light text-[20px] flex justify-center items-center h-[31px] ">
            <h1>Equipamentos</h1>
        </section>

        <div className="lg:flex text-center items-center bg-fundo lg:ml-96 lg:mr-[30px]">

          <div className="w-[300px] h-[500px] mt-[40px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
            <div className=""><img src={Coracao} alt="sensor" className="items-center"/></div>
            <h1 className="font-semibold text-[32px] w-[287px] text-center h-[36px] ml-2">Sensor de Pulso e Frequência 
            Cardíaca</h1>
          </div>

          <div className="w-[300px] h-[500px] mt-[40px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
            <div className="items-center ml-3"><img src={Temp} alt="sensor"className="items-center"/></div>
            <h1 className="font-semibold text-[32px] w-[287px] h-[36px] text-center mt-[20px]">DS1820 temperatura</h1>
          </div>

          <div className="w-[300px] h-[500px] mt-[40px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
            <img src={Arduino} alt="placa" className="items-center ml-2 lg:ml-4"/>
            <h1 className="font-semibold text-[32px] w-[287px] h-[36px] mt-[20px] text-center">Arduino Uno</h1>
          </div>
        </div>

          <div className="lg:flex  lg:mr-[30px] lg:lg:ml-96 bg-fundo">
            <div className="w-[300px] h-[500px] mt-[100px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
              <img src={Mod} alt="modulo" className="items-center ml-2 lg:ml-4" />
              <h1 className="font-semibold text-[32px] w-[287px] h-[36px] text-center mt-[20px]">Módulo WiFi + Bluetooth ESP32</h1>
            </div>

            <div className="w-[300px] h-[500px] mt-[100px] ml-[35px] bg-white rounded-[10px]  lg:w-[325px]">
              <img src={Dis} alt="display"className="items-center ml-2 lg:ml-4"/>
              <h1 className="font-semibold text-[32px] w-[287px] h-[36px] ml-3 text-center mt-[20px]">Display LCD 16x2</h1>
            </div>

            <div className="w-[300px] h-[500px] mt-[100px] ml-[35px]  bg-white rounded-[10px] lg:w-[325px]">
              <img src={Boneco} alt="boneco" className="items-center ml-2 lg:ml-4"/>
              <h1 className="font-semibold text-[32px] w-[287px] h-[36px] text-center mt-[20px]">Módulo RTC DS1302</h1>
            </div>
          </div>

  </main>


  )
}