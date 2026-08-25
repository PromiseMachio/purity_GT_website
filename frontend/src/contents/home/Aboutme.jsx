import React from 'react'
import { ABOUTME } from '../../data/constants'
import { Quote } from 'lucide-react'

const Aboutme = () => {
    return (
        <section className='relative min-h-[90vh] overflow-hidden bg-yellow-50 flex items-center'>
            <div className='max-w-7xl z-10 w-full px-4 sm:px-6 lg:px-8 py-10 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>

                    {/* Left Side: Image Container */}
                    <div className='w-auto max-w-md mx-auto lg:max-w-none'>
                        <img
                            className='w-auto h-auto max-h-[900px] object-cover'
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

                        <div className=''>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Aboutme
