import React from 'react'
import { COLLECTION_MAIN_INFO } from '../../data/collectionConstants'
import { ArrowBigDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Colhero = () => {
    const navigate = useNavigate()
    return (
        <section className='relative min-h-[90vh] overflow-hidden z-10 bg-white flex gap-12 items-center justify-center pt-20'>
            <div className='relative max-w-7xl w-full items-center sm:px-6 lg:py-10'>
                <div className='flex flex-col lg:flex-row items-center justify-center '>
                    {/* left side  */}
                    <div className='text-center space-y-2 items-center justify-center mx-2'>
                        {/* <div className='border border-amber-500 w-25 ' /> */}
                        <p className='uppercase text-amber-300 text-sm font-normal paragraph-font' >{COLLECTION_MAIN_INFO.into}</p>
                        <div className='text-5xl lg:text-7xl text-gray-900 font-extrabold tracking-wide leading-relaxed mb-6'>
                            <p>{COLLECTION_MAIN_INFO.name[0]}</p>
                            <p>{COLLECTION_MAIN_INFO.name[1]}</p>
                            <p>{COLLECTION_MAIN_INFO.name[2]}</p>

                        </div>
                        <p className='text-5xl fashion-font foont-normal text-cyan-400'>{COLLECTION_MAIN_INFO.tagline}</p>
                        <div className='text-lg lg:text-lg paragraph-font text-gray-700 leading-relaxed tracking-tight font-normal mb-7'>
                            <p>{COLLECTION_MAIN_INFO.description[0]}</p>
                            <p>{COLLECTION_MAIN_INFO.description[1]}</p>

                        </div>

                        {/* <button 
                        
                        className='flex items-center justify-center gap-4 lg:gap6 w-full lg:w-auto sm:text-center text-black text-lg paragraph-font border border-black bg-amber-400 py-2 px-8 transition-all duration-300 hover:text-amber-500 hover:bg-amber-100 hover:border-amber-500'>
                            Explore Collection <ArrowBigDown className='w-8 h-8' />
                        </button> */}

                    </div>
                    {/* right side  */}
                  
                </div>
                


            </div>
        </section>
    )
}

export default Colhero