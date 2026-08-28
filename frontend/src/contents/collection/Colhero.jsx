import React from 'react'
import { COLLECTION_MAIN_INFO } from '../../data/collectionConstants'
import { ArrowBigDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Colhero = () => {
    const navigate = useNavigate()
    return (
        <section className='relative min-h-[90vh] overflow-hidden z-10 bg-white flex gap-12 items-center justify-center pt-20'>
            <div className='relative max-w-7xl w-full items-center sm:px-6 lg:py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-15 items-center '>
                    {/* left side  */}
                    <div className='text-left space-y-4 mx-2'>
                        <div className='border border-amber-500 w-25 ' />
                        <p className='uppercase text-amber-300 text-sm font-normal paragraph-font' >{COLLECTION_MAIN_INFO.into}</p>
                        <div className='text-6xl lg:text-5xl text-gray-900  tracking-wide mb-6'>
                            <p>{COLLECTION_MAIN_INFO.name[0]}</p>
                            <p>{COLLECTION_MAIN_INFO.name[1]}</p>
                            <p>{COLLECTION_MAIN_INFO.name[2]}</p>

                        </div>
                        <p className='text-4xl fashion-font foont-normal text-cyan-400'>{COLLECTION_MAIN_INFO.tagline}</p>
                        <div className='text-lg lg:text-lg paragraph-font text-gray-700 leading-relaxed tracking-tight font-normal mb-7'>
                            <p>{COLLECTION_MAIN_INFO.description[0]}</p>
                            <p>{COLLECTION_MAIN_INFO.description[1]}</p>

                        </div>

                        <button 
                        
                        className='flex items-center justify-center gap-4 lg:gap6 w-full lg:w-auto sm:text-center text-black text-lg paragraph-font border border-black bg-amber-400 py-2 px-8 transition-all duration-300 hover:text-amber-500 hover:bg-amber-100 hover:border-amber-500'>
                            Explore Collection <ArrowBigDown className='w-8 h-8 animate-bounce fill-black' />
                        </button>

                    </div>
                    {/* right side  */}
                    <div className='relative w-full h-full items-center object-cover   '>
                        <img className='w-[450px] h-[650px] lg:w-[500px] lg:h-[750px] transition-transform duration-300 hover:scale-105' src={COLLECTION_MAIN_INFO.img1} alt="" />
                        <img className='absolute bottom-5 left-5 w-[200px] h-[250px]  lg:w-[300px] lg:h-[350px] border-5 border-amber-50 transition-transform duration-300 hover:scale-105' src={COLLECTION_MAIN_INFO.img2} alt="" />

                    </div>
                </div>
                


            </div>
        </section>
    )
}

export default Colhero