import React from 'react'
import { MAIN_INFO } from '../../data/constants'
import { Quote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <section className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${MAIN_INFO.backgroundImg})` }}>
            <div className='relative max-w-7xl w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center pl-3 '>
                    {/* left container  */}
                    <div className='text-center'>

                    </div>
                    {/* Right container  */}
                    <div className='text-left flex flex-col items-start '>
                        <div className='border border-amber-700 w-25 px-5 items-start ' />
                        <p className='uppercase text-sm text-amber-500 tracking-widest font-bold  pt-3' >{MAIN_INFO.description}</p>
                        <div className='text-center mb-3'>
                            <p className='text-6xl font-medium leading-none pt-4' >{MAIN_INFO.name[0]}</p>
                            <p className='lowercase italic text-4xl tracking-tighter font-thin '>{MAIN_INFO.name[1]}</p>
                            <p className='text-6xl font-medium leading-none'>{MAIN_INFO.name[2]}</p>
                        </div>
                        <div className='flex gap-1 items-center mb-4'>
                            <Quote className='w-4 h-4 text-white/70 mb-4' />
                            <p className='fashion-font text-4xl text-white/70 '>
                                {MAIN_INFO.design}
                            </p>
                            <Quote className='w-4 h-4 text-white/70 mb-4' />
                        </div>
                        <div className='paragraph-font text-base leading-relaxed text-white/70'>
                            <p>{MAIN_INFO.paragraph[0]}</p>
                            <p>{MAIN_INFO.paragraph[1]}</p>
                        </div>

                        {/* buttons  */}
                        <div className='flex flex-col lg:flex-row gap-4 items-center mt-6 w-full'>
                            <button
                                onClick={() => navigate('/collection')}
                                className='w-full lg:w-auto uppercase paragraph-font py-3 px-8 border border-black text-sm bg-white/90 text-black transition-all duration-300 hover:bg-amber-500 hover:text-white hover:border-white'
                            >
                                Explore collections
                            </button>
                            <button
                                onClick={() => navigate('/booking')}
                                className='w-full lg:w-auto uppercase paragraph-font py-3 px-8 border border-white text-sm bg-transparent text-white transition-all duration-300 hover:text-amber-500 hover:border-amber-500'
                            >
                                Book a fitting
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Hero