import Coracao from "../assets/batimentos.png";
import Temp from "../assets/temperatura.png";
import Mod from "../assets/modulo.png";
import Dis from "../assets/display.png";
import Boneco from "../assets/boneco.png";
import Arduino from "../assets/arduino.png";
import Header from '../componentes/heather'




export default function App() {
    return (
      <main className=" bg-fundo h-screen bg-no-repeat min-[430px]:h-[2700px] lg:h-[800px]  font-poppins  text-poppins">
        <Header/>
    

        <h1 className="text-whitee font-bold text-center min-[430px]:text-4xl pt-11 lg:text-7xl "><span className="text-red font-bold min-[430px]:text-4xl lg:text-7xl">BAY</span>MAX!</h1>
        <p className=" text-center -ml-[50px] text-gray font-poppins-light text-[20px]  py-190 ">Equipamentos</p>

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