import React from 'react'
import Header from '../componentes/heather'
import Baymax from "../public/baymaxfundo.png"
import Coracao from "../public/coracao.png"
import Coracao2 from "../public/coracao2.png"


export default function App() {
    return (
        <main className="bg-blue h-screen bg-no-repeat min-[300px]:h-[2300px] lg:h-[950px] ">
       
            <Header />

                <section>
                    

                    
                    <div className=" flex flex-col items-center p-12 bg-azulfora outer-container p-12 m-12  border rounded-lg ">

                        <h1 className="text-white font-semibold text-center pt-4 text-4xl py-14"><span className="text-reed font-semibold text-4xl">Funções</span> principais</h1>

                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  ">

                        
                        
                                <div className="bg-bluee  p-6 rounded-lg shadow-lg ">
                                    <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Monitoramento Cardíaco</h2>
                                        <p className="text-white text-sm">O monitoramento cardíaco é essencial para acompanhar a saúde do coração, detectando irregularidades no ritmo, avaliando a eficácia dos tratamentos e prevenindo eventos graves. Ele ajuda a identificar problemas precoces, ajustar tratamentos e melhorar a gestão de condições cardíacas, promovendo uma saúde cardiovascular mais eficaz e segura. E manter o coração no ritmo ideal é importante não apenas para evitar problemas cardiovasculares — como insuficiência cardíaca e infarto —, mas também para manter todo o organismo funcionando corretamente. Afinal, o sistema cardiovascular é o responsável por transportar, através do sangue, oxigênio e nutrientes para todo o corpo.
                                        </p>
                                </div>

                                <div className="bg-bluee p-6 rounded-lg shadow-lg">
                                    <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Medir temperatura</h1>
                                    <p className="text-white text-sm">Medir a temperatura é crucial para monitorar a saúde e o bem-estar. Essa função permite detectar febres, identificar infecções e avaliar a eficácia de tratamentos. Em ambientes clínicos, a medição precisa da temperatura auxilia no diagnóstico de condições médicas, enquanto no cotidiano ajuda a garantir conforto e segurança. Em suma, medir a temperatura fornece informações vitais para a saúde e o ajuste adequado de intervenções. </p>
                                </div>

                                <div className="bg-bluee p-6 rounded-lg shadow-lg ">
                                    <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Boneco interativo </h1>
                                    <p className="text-white text-sm">O boneco interativo foi projetado para ser mais do que um simples brinquedo; ele é uma companhia que visa proporcionar conforto e tranquilidade. Além disso, a interação foi cuidadosamente desenvolvida para distrair a criança de maneira envolvente, criando momentos de diversão e ajudando a aliviar o estresse do dia a dia.</p>
                                </div>

                                <div className="bg-bluee p-6 rounded-lg shadow-lg">
                                    <h1 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Suporte Emocional</h1>
                                    <img className="lg:float-right flex mb-16 min-[400px]:hidden " src={Coracao} alt="" />
                                    <p className="text-white text-sm">O suporte emocional é vital para a saúde e o desenvolvimento de uma criança. Oferecer compreensão, carinho e encorajamento ajuda a construir sua autoestima e resiliência, permitindo que ela enfrente desafios e estresses de forma mais eficaz. Esse apoio promove um ambiente seguro e acolhedor, essencial para o bem-estar emocional e mental, facilitando um crescimento saudável e equilibrado. Em resumo, o suporte emocional fortalece a saúde geral da criança, contribuindo para uma base sólida para seu futuro. Muitas crianças autistas têm dificuldades em lidar com ambientes hospitalares e com exames feitos por desconhecidos. Um robô amigável, que elas podem ver como um "amigo" ou "ajudante," torna o monitoramento menos estressante e evita situações desconfortáveis.
                                    </p>
                                </div>
                        </div>
                    </div>

                    {/* Nova seção "Guia de Utilização" */}
                <div className=" flex flex-col items-center p-12 bg-azulfora outer-container m-12 border rounded-lg mt-24">
                    <h2 className="text-white font-semibold text-center pt-4 text-4xl py-14">
                        <span className="text-reed font-semibold text-4xl">Guia de</span> Utilização
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-bluee p-6 rounded-lg shadow-lg">
                            <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Instrução 1</h2>
                            <p className="text-white text-sm">
                                Conecte a bateria no arduino ide.
                            </p>
                        </div>

                        <div className="bg-bluee p-6 rounded-lg shadow-lg">
                            <h2 className="text-reed text-2xl font-bold mb-4 font-montserrat font-light">Instrução 2</h2>
                            <p className="text-white text-sm">
                               Conecte via bluetooth com o nosso aplicativo, Procure pelo nome HC-06, após conectar já poderá visualizar sua temperatura e seus batimentos cardiacos.
                            </p>
                        </div>
                    </div>

                    

                    <div class="mt-14 max-w-4xl w-full mx-auto">
                        <div class="aspect-video">
                            <iframe class="w-full h-full rounded-lg shadow-lg" 
                                    src="https://www.youtube.com/embed/nSvxVCdj_gU" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                </section>

                
            </main>
    )
}
         