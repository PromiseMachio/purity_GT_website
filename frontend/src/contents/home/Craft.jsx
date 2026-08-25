import React from 'react'
import { CRAFTING_CONTENT } from '../../data/constants'

const Craft = () => {
    return (
        <section className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${CRAFTING_CONTENT.backgroundImg})` }}>
            <div className='relative z-10 max-w-7xl sm:px-6 lg:py-10 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center pl-3 '>
                    {/* left side  */}
                    <div className='text-left space-y-4'>
                        <div className='border border-amber-500 w-25' />
                        <div className=' text-7xl font-semibold text-white space-y-2' >
                            <p>{CRAFTING_CONTENT.name[0]}</p>
                            <p>{CRAFTING_CONTENT.name[1]}</p>
                            <p>{CRAFTING_CONTENT.name[2]}</p>
                        </div>

                        <div className='text-lg paragraph-font text-gray-600 text-based leading-relaxed tracking-normal'>
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
                     <div className='relative w-100 h-120  p-5 overflow-hidden mb-5 mt-2  max-w-md transition-transform duration-300 hover:scale-100 '>
                        <img 
                        className=' absolute inset-0  bg-gradient-to-t from-black/80 via-black/30 to-transparent  w-100 h-120  object-cover  transition-transform duration-300 hover:scale-100'
                        src={CRAFTING_CONTENT.image} alt="" />
                        
                     </div>
                     

                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Craft