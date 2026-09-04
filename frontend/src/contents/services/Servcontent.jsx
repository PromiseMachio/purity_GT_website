import React from 'react'
import { Dot } from 'lucide-react'
import { SERVICE_SECTION1, SERVICE_SECTION2, SERVICES } from '../../data/constants'

const Servcontent = () => {
    return (
        <section className='relative overflow-hidden bg-amber-50 min-h-[90vh]'>
            <div className='max-w-7xl w-full items-center'>
                <div className='flex flex-col flex-row-1 items-center justify-center mt-10 space-y-3'>
                    <div className='flex uppercase text-lg lg:text-3xl text-gray-900'>
                        <p>Learn</p>
                        <Dot className='w-12 h-12 pb-4 lg:pb-2' />
                        <p>create</p>
                        <Dot className='w-12 h-12 pb-4 lg:pb-2' />
                        <p>collaborate</p>
                    </div>
                    <p className='text-4xl text-cyan-500 fashion-font'>Fashion is a craft worth sharing</p>
                    <div className='border border-amber-500 w-100 lg:w-180' />

                </div>
                <div className='flex items-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 sm:px-2 lg:py-10 mt-10 gap-10'>
                        {/* left side  */}
                        <div className='group relative overflow-hidden border border-gray-600  bg-amber-300 '>
                            <div className='relative overflow-hidden h-100'>
                                <img src={SERVICES.courseImage} alt='image of course'
                                    className='w-full h-full object-cover'
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                <div className="absolute bottom-4  right-4 flex items-center gap-3 mr-6">
                                    <p className='border rounded-2xl px-3 py-1 font-medium bg-gray-400 text-amber-800 tracking-wide text-sm fashion-font group-hover:bg-gray-500 group-hover:text-amber-900 duration-300 transition-all'>Short Course</p>
                                </div>

                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-3xl font-semibold text-gray-900 mb-2  group-hover:text-amber-800 transition-colors duration-300">
                                    {SERVICE_SECTION1.name}
                                </h3>
                                <p className="text-gray-700 tracking-normal text-sm leading-relaxed line-clamp-2 paragraph-font">
                                    {SERVICE_SECTION1.description}
                                </p>
                                 <button className='border border-black text-black py-2 px-8 transition-all duration-300 hover:text-amber-600 hover:border-amber-500 '>
                                    Enquire More
                                </button>
                            </div>
                        </div>
                        {/* right side  */}
                        <div className='group relative overflow-hidden border border-gray-600  bg-amber-100 '>
                            <div className='relative overflow-hidden h-100'>
                                <img src={SERVICES.collaborationImg} alt='image of course'
                                    className='w-full h-full object-cover'
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                <div className="absolute bottom-4  right-4 flex items-center gap-3 mr-6">
                                    <p className='border rounded-2xl px-3 py-1 font-medium bg-gray-400 text-amber-800 tracking-wide text-sm fashion-font group-hover:bg-gray-500 group-hover:text-amber-900 duration-300 transition-all'>Collaboration</p>
                                </div>

                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-3xl  font-semibold text-gray-900 mb-2  group-hover:text-amber-800 transition-colors duration-300">
                                    {SERVICE_SECTION2.name}
                                </h3>
                                <p className="text-gray-700 tracking-normal text-sm leading-relaxed line-clamp-2 paragraph-font">
                                    {SERVICE_SECTION2.description}
                                </p>
                                 <button className='border border-black text-white bg-amber-400 py-2 px-8 transition-all duration-300 hover:text-amber-600 hover:border-amber-500 hover:bg-transparent '>
                                    Let us collabrate
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Servcontent