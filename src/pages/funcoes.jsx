import React from 'react'
import Header from '../componentes/heather'
import Baymax from "../public/baymaxfundo.png"
import Coracao from "../public/coracao.png"
import Coracao2 from "../public/coracao2.png"


export default function App() {
    return (
        <main className="bg-blue h-screen bg-no-repeat min-[300px]:h-[2300px] lg:h-[950px] ">
       
            <Header />
            
            
        


                    <div className="absolute z-0">
                    <img  src={Baymax} alt="" />
                    </div>

                    
                    <div className="absolute z-10 flex flex-col items-center p-12 bg-dark-bluee outer-container p-12 m-12 border rounded-lg ">

                    <h1 className="text-white font-semibold text-center pt-4 text-4xl py-14"><span className="text-reed font-semibold text-4xl">Funções</span> principais</h1>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  ">

                    
                    
                    <div className="bg-bluee p-6 rounded-lg shadow-lg ">
                            <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Monitoramento Cardíaco</h2>
                                <p className="text-white text-sm">O monitoramento cardíaco é essencial para acompanhar a saúde do coração, detectando irregularidades no ritmo, avaliando a eficácia dos tratamentos e prevenindo eventos graves. Ele ajuda a identificar problemas precoces, ajustar tratamentos e melhorar a gestão de condições cardíacas, promovendo uma saúde cardiovascular mais eficaz e segura. </p>
                            </div>

                            <div className="bg-bluee p-6 rounded-lg shadow-lg">
                                <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Medir temperatura</h1>
                                <p className="text-white text-sm">Medir a temperatura é crucial para monitorar a saúde e o bem-estar. Essa função permite detectar febres, identificar infecções e avaliar a eficácia de tratamentos. Em ambientes clínicos, a medição precisa da temperatura auxilia no diagnóstico de condições médicas, enquanto no cotidiano ajuda a garantir conforto e segurança. Em suma, medir a temperatura fornece informações vitais para a saúde e o ajuste adequado de intervenções. </p>
                            </div>

                            <div className="bg-bluee p-6 rounded-lg shadow-lg ">
                                <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Boneco interativo </h1>
                                <p className="text-white text-sm">O boneco interativo foi projetado para ser mais do que um simples brinquedo; ele é uma companhia que visa proporcionar conforto e engajamento. Com funcionalidades que permitem conversas, respostas a comandos e até mesmo reações emocionais, o boneco cria uma experiência personalizada e acolhedora. Seja para aliviar o estresse, oferecer companhia ou estimular interações lúdicas, ele se adapta às necessidades do usuário, promovendo um sentimento de bem-estar e conexão. </p>
                            </div>

                            <div className="bg-bluee p-6 rounded-lg shadow-lg ">
                                <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Suporte Emocional</h1>
                                <img className="lg:float-right flex mb-16 min-[400px]:hidden " src={Coracao} alt="" />
                                <p className="text-white text-sm">O suporte emocional é vital para a saúde e o desenvolvimento de uma criança. Oferecer compreensão, carinho e encorajamento ajuda a construir sua autoestima e resiliência, permitindo que ela enfrente desafios e estresses de forma mais eficaz. Esse apoio promove um ambiente seguro e acolhedor, essencial para o bem-estar emocional e mental, facilitando um crescimento saudável e equilibrado. Em resumo, o suporte emocional fortalece a saúde geral da criança, contribuindo para uma base sólida para seu futuro.</p>
                            </div>
                        </div>
                    </div>
           </main>
  )
}
         