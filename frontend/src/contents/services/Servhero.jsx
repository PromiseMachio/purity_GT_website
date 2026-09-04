import React from 'react'
import { SERVICES } from '../../data/constants'

const Servhero = () => {
    return (
        <section className='relative bg-amber-100 min-h-[90vh] overflow-hidden'>
            <div className='max-w-7xl w-full items-center sm:px-6 lg:py-10'>
                <div className='flex items-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-20 gap-16 mb-20'>
                        {/* left side  */}
                        <div className='text-left'>
                            <div className='border border-amber-500 w-25' />
                            <p className=' uppercase text-amber-500 text-sm paragraph-font'>our craft</p>
                            <div className='uppercase text-6xl text-gray-950 font-semibold tracking-normal leading-normal'>
                                <p>What we </p>
                                <p>create</p>
                            </div>
                            <div className='relative'>
                                {SERVICES.clothes.map((link) => (
                                    <div className='text-left'>
                                        <div className='flex items-center gap-4'>
                                            <p className=' text-amber-500 fashion-font text-2xl'>{link.id}</p>
                                            <div className=' border w-full border-amber-400' />
                                        </div>
                                        <div className='space-y-4'>
                                            <p className='text-lg text-gray-950 font-normal tracking-normal'>
                                                {link.name}
                                            </p>
                                            <p className='text-xs text-gray-700 '>
                                                {link.paragraph}
                                            </p>
                                        </div>


                                    </div>
                                ))}

                            </div>

                        </div>
                        {/* right side  */}
                        <div className="relative w-full max-w-[500px] mx-auto">
                            <img
                                className="w-full h-auto  shadow-md transition-transform duration-300 hover:scale-105"
                                src={SERVICES.heroImage1}
                                alt="Hero primary"
                            />
                            <img
                                className="absolute bottom-[-10%] left-[-5%] w-1/2 aspect-[4/5] object-cover  border-4 border-amber-50 shadow-xl transition-transform duration-300 hover:scale-105"
                                src={SERVICES.heroImage2}
                                alt="Hero secondary"
                            />
                        </div>

                    </div>
                    

                </div>
            </div>
        </section>
    )
}

export default Servhero