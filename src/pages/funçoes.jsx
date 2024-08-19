import Coracao from "../public/coracao.png"
import Baymax from "../public/baymaxfundo.png"

import Header from '../componentes/heather'


export default function App() {
  return (
    <main className="bg-blue h-screen bg-no-repeat min-[400px]:h-[2700px] lg:h-[950px] ">

        <Header />

        <div className="absolute z-0">
            <img  src={Baymax} alt="" />
        </div>

        <div className="absolute z-10 flex flex-col items-center p-12 bg-dark-bluee outer-container p-12 m-12 border rounded-lg ">

            <h1 className="text-white font-semibold text-center pt-4 text-4xl py-14"><span className="text-reed font-semibold text-4xl">Funções</span> principais</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  ">

        
        
                <div className="bg-blue p-6 rounded-lg shadow-lg ">
                    <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Monitoramento Cardíaco</h2>
                    <p className="text-white text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ie velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>

                <div className="bg-blue p-6 rounded-lg shadow-lg">
                    <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Medir temperatura</h1>
                    <p className="text-white text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ie velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>

                <div className="bg-blue p-6 rounded-lg shadow-lg ">
                    <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Caixa de remedio digital </h1>
                    <p className="text-white text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ie velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>

                <div className="bg-blue p-6 rounded-lg shadow-lg ">
                    <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Suporte Emocional</h1>
                    <img className="float-right flex mb-16 " src={Coracao} alt="" />
                    <p className="text-white text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ie velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    
                </div>
            </div>
        </div>
    </main>
  )
}