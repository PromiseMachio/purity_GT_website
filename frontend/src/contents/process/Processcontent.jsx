import React from 'react'
import { process, PROCESS_MAIN_INFO } from '../../data/processConstants'
import Processcard from '../../ui/Processcard'

const Processcontent = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-amber-100">

            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">

                {/* HEADER */}
                <div className="flex items-center justify-center pt-20 pb-16">

                    <div className="text-center max-w-4xl">

                        <p className="text-sm paragraph-font font-light text-amber-500 uppercase tracking-widest">
                            {PROCESS_MAIN_INFO.intro}
                        </p>

                        <div className="font-extrabold text-6xl lg:text-7xl text-black mt-6 mb-6 tracking-normal">
                            <p>{PROCESS_MAIN_INFO.name[0]}</p>
                            <p>{PROCESS_MAIN_INFO.name[1]}</p>
                        </div>

                        <p className="text-3xl lg:text-5xl font-medium fashion-font text-cyan-500">
                            {PROCESS_MAIN_INFO.tagline}
                        </p>

                    </div>

                </div>


                {/* PROCESS CARDS */}
                <div className="flex flex-col gap-16 pb-20">

                    {process.map((step) => (
                        <Processcard
                            key={step.id}
                            process={step}
                        />
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Processcontent