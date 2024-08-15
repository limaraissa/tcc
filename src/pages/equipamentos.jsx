import Coracao from "../assets/batimentos.png";
import Temp from "../assets/temperatura.png";
import Mod from "../assets/modulo.png";
import Dis from "../assets/display.png";
import Boneco from "../assets/boneco.png";
import Arduino from "../assets/arduino.png";
import Header from '../componentes/heather'




export default function App() {
    return (
      <body className="bg-fundo lg:w-[1440px] lg:h-[1144px] font-poppins h-[1300px] w-[430px] text-poppins">
        <Header/>
    

    <h1 className="text-white font-bold -ml-[50px] flex justify-center items-center lg:mt-[50px] text-[36px]"><span className="text-red">BAY</span>MAX!</h1>
    <p className=" text-center -ml-[50px] text-gray font-poppins-light text-[20px]  py-190 ">Equipamentos</p>

  <section className="lg:flex lg:justify-between text-center bg-fundo lg:mr-[30px]">

    <div className="w-[300px] h-[500px] mt-[40px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
      <div className=""><img src={Coracao} alt="sensor"/></div>
      <h1 className="font-semibold text-[32px] w-[287px] text-center h-[36px]">Sensor de Pulso e Frequência 
      Cardíaca</h1>
    </div>

    <div className="w-[300x] h-[500px] mt-[40px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
      <div><img src={Temp} alt="sensor"/></div>
      <h1 className="font-semibold text-[32px] w-[287px] h-[36px] text-center mt-[20px]">DS1820 temperatura</h1>
    </div>

    <div className="w-[300px] h-[500px] mt-[40px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
      <img src={Arduino} alt="placa"/>
      <h1 className="font-semibold text-[32px] w-[287px] h-[36px] mt-[20px] text-center">Arduino Uno</h1>
    </div>
  </section>

    <section className="lg:flex lg:justify-between lg:mr-[30px] bg-fundo">
    <div className="w-[300px] h-[500px] mt-[100px] ml-[35px] bg-white rounded-[10px] lg:w-[325px]">
      <img src={Mod} alt="modulo"/>
      <h1 className="font-semibold text-[32px] w-[287px] h-[36px] text-center mt-[20px]">Módulo WiFi + Bluetooth ESP32</h1>
    </div>

    <div className="w-[300px] h-[500px] mt-[100px] ml-[35px] bg-white rounded-[10px]  lg:w-[325px]">
      <img src={Dis} alt="display"/>
      <h1 className="font-semibold text-[32px] w-[287px] h-[36px] text-center mt-[20px]">Display LCD 16x2</h1>
    </div>

    <div className="w-[300px] h-[500px] mt-[100px] ml-[35px]  bg-white rounded-[10px] lg:w-[325px]">
      <img src={Boneco} alt="boneco"/>
      <h1 className="font-semibold text-[32px] w-[287px] h-[36px] text-center mt-[20px]">Módulo RTC DS1302</h1>
    </div>
    </section>

  </body>


  )
}