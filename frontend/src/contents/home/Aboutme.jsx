import React from 'react'
import { ABOUTME } from '../../data/constants'
import { Quote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Aboutme = () => {
    const navigate = useNavigate()
    return (
        <section className='relative min-h-[90vh] overflow-hidden bg-yellow-50 flex items-center'>
            <div className='max-w-7xl z-10 w-full px-4 sm:px-6 lg:px-8 py-10 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>

                    {/* Left Side: Image Container */}
                    <div className='relative w-auto max-w-md mx-auto lg:max-w-none'>
                        <div className='absolute top-1/4 left-1/4 border border-amber-300 w-20 h-20' />
                        <div className='absolute bottom-1/4 right-1/4 border border-amber-300 w-20 h-20' />
                        <img
                            className='w-auto h-auto max-h-[900px] object-cover transition-transform duration-700 hover:scale-110'
                            src={ABOUTME.image2}
                            alt="about-image"
                        />
                    </div>


                    {/* Right Side: Text Content */}
                    <div className='text-left space-y-4'>
                        <p className='text-sm text-amber-500 paragraph-font uppercase tracking-wide font-light '>
                            {ABOUTME.intro}
                        </p>
                        <h2 className='text-4xl sm:text-6xl uppercase tracking-tight text-gray-900 font-medium mb-5'>
                            {ABOUTME.name[0]}
                        </h2>
                        <h2 className='text-4xl sm:text-6xl uppercase tracking-tight text-gray-900 font-medium mb-5'>
                            {ABOUTME.name[1]}
                        </h2>
                        <div className='border w-25 border-amber-500 mb-10' />
                        <div className='text-lg leading-relaxed text-gray-600 tracking-normal font-normal space-y-4'>
                            <p className='fashion-font text-cyan-300 text-4xl font-light tracking-wide flex space-y-4'>
                               <Quote className='w-4 h-4'/> {ABOUTME.description} <Quote className='w-4 h-4'/></p>
                            <p>{ABOUTME.paragraph[0]}</p>
                            <p>{ABOUTME.paragraph[1]}</p>
                        </div>

                        <div className='flex flex-col lg:flex-row w-full items-center gap-12 mt-10 '>
                            <button 
                            onClick={()=>navigate('/services')}
                            className='w-full lg:w-auto uppercase text-lg px-8 py-3 border border-black text-white bg-amber-300 transition-all duration-300 hover:text-black hover:bg-amber-500 hover:border-white '>
                                Get In Touch
                            </button>
                            <button
                            onClick={()=>navigate('/booking')}
                            className='w-full lg:w-auto uppercase text-lg bg-transparent px-8 py-3 text-black border border-black transition-all duration-300 hover:border-amber-500 hover:text-amber-500 '>
                                Book A fitting
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Aboutme
