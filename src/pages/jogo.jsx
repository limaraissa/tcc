import React from 'react'
import Header from '../componentes/heather'



export default function App() {
    return (
        <main className="bg-blue h-screen bg-no-repeat min-[300px]:h-[2300px] lg:h-[950px] ">
       
            <Header />

                <section>
                    {/* Nova seção "Guia de Utilização" */}
                <div className=" flex flex-col items-center p-12 bg-azulfora outer-container m-12 border rounded-lg mt-24">
                    <h2 className="text-white font-semibold text-center pt-4 text-7xl py-14">
                        <span className="text-reed font-semibold text-7xl">Jo</span>go
                    </h2>

                    <div class="mt-14 max-w-4xl w-full mx-auto">
                        <div class="aspect-video">
                            <iframe class="w-full h-full rounded-lg shadow-lg" 
                                    src="https://www.youtube.com/embed/-iR0H5FqaAw" 
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
         
