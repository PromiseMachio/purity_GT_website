import React from 'react'
import { CRAFTING_CONTENT } from '../../data/constants'
import { Sparkles, Shirt, ScissorsIcon } from 'lucide-react'

const Craft = () => {
    return (
        <section className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${CRAFTING_CONTENT.backgroundImg})` }}>
            <div className='relative z-10 max-w-7xl sm:px-6 lg:py-10 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center pl-3 '>
                    {/* left side  */}
                    <div className='text-left space-y-4 mt-5'>
                        <div className='border border-amber-500 w-25' />
                        <div className=' sm:text-7xl text-5xl font-semibold text-white space-y-2' >
                            <p>{CRAFTING_CONTENT.name[0]}</p>
                            <p>{CRAFTING_CONTENT.name[1]}</p>
                            <p>{CRAFTING_CONTENT.name[2]}</p>
                        </div>

                        <div className='sm:text-lg text-2xl paragraph-font sm:text-gray-800 text-gray-800  font-normal leading-relaxed tracking-normal'>
                            <p >{CRAFTING_CONTENT.paragraph[0]}</p>
                            <p >{CRAFTING_CONTENT.paragraph[1]}</p>
                            <p >{CRAFTING_CONTENT.paragraph[2]}</p>
                        </div>
                        <div className="relative border border-amber-500 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-2">
                            {/* Decorative Inner Ring */}
                            <div className="absolute inset-2 border border-amber-500 rounded-full pointer-events-none" />

                            {/* Centered Typography */}
                            <p className=" paragraph-font text-[10px] font-light text-amber-400 uppercase tracking-wider leading-none">Bespoke</p>
                            <p className=" paragraph-font text-[10px] font-light text-amber-400 uppercase tracking-widest leading-none mt-1">Craftsmanship</p>
                        </div>

                    </div>
                    {/* right side  */}
                    <div className='relative'>
                        <div className='relative overflow-hidden rounded-2xl aspect-4.5 max-w-125 ml-auto group'>
                            <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                               <div className='absolute inset-0.5 bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 animate-spin-slow rounded-2xl'>
                            </div> 
                            </div>
                            
                            <div className='relative rounded-2xl overflow-hidden m-px h-[calc(1005-2px)] transition-transform duration-300 hover:scale-105'>
                                <img
                                    className='w-[750px] h-[600px] object-cover'
                                    src={CRAFTING_CONTENT.image} alt="" />
                                <div className="absolute bottom-5 left-5 flex h-12 w-30 items-center justify-center rounded-2xl py-4 gap-3 bg-white/20 backdrop-blur-md">
                                    <div className=''>
                                        <Sparkles className="h-5 w-5 text-white transition-all duration-300 hover:text-amber-300 hover:fill-amber-300 " />
                                    </div>
                                    <div>
                                        <Shirt className='h-5 w-5 text-blue-500 transition-all duration-300 hover:fill-blue-500' />
                                    </div>
                                    <div>
                                        <ScissorsIcon className='h-5 w-5 text-black transition-all duration-300 hover:text-red-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Craft