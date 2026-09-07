import React, { useRef, useState } from 'react'
import { process, PROCESS_MAIN_INFO } from '../../data/processConstants'
import Processcard from '../../ui/Processcard'
import { useNavigate } from 'react-router-dom'

const Processcontent = () => {
    const [activeCard, setActiveCard] = useState('consultation')
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null)
    const navigate = useNavigate()

    // 1. Extract only unique categories for the buttons
    const uniqueCategories = Array.from(
        new Set(process.map(item => item.category))
    );

    const cardFiltered = activeCard === 'consultation'
        ? process.filter(process => process.category === 'consultation')
        : process.filter(process => process.category === activeCard)

    // Reset carousel when categories change
    const handleCategoryChange = (category) => {
        setActiveCard(category);
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 2;
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            })
        }
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, cardFiltered.length - 0);
        const newIndex = Math.min(currentIndex + 1, maxIndex)
        scrollToIndex(newIndex)
    }

    const prevSlide = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(newIndex)
    }
    return (
        <section className="relative min-h-screen overflow-hidden bg-amber-100 ">

            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">

                {/* HEADER */}
                <div className="flex flex-col flex-row-1  items-center justify-center pt-20 pb-16">

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

                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6 p-4'>
                        {PROCESS_MAIN_INFO.pro_sess.map((link) => (
                            <div key={link.id} className='w-full lg:w-auto'>
                                <div className='flex items-center gap-0.5'>
                                    <p className='text-amber-400 fashion-font text-2xl'>{link.id}</p>
                                    <div className='border border-amber-500 w-24' />
                                </div>
                                <div className='text-left space-y-2 mt-2'>
                                    <p className='text-gray-950 font-semibold text-2xl'>{link.name}</p>
                                    <p className='text-gray-600 text-sm paragraph-font'>{link.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PROCESS CARDS - FILTER BUTTONS */}


                    <div className='flex flex-wrap justify-center gap-2 mb-16 mt-10'>
                        {/* 2. Map over unique categories string values instead of the entire array */}
                        {uniqueCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCard === category
                                    ? 'text-gray-700'
                                    : 'text-gray-600 hover:text-gray-950'
                                    }`}
                            >
                                {/* Capitalize text if needed, or map a friendly name */}
                                <span className="relative z-10 capitalize">{category}</span>

                                <div className={`absolute inset-0 rounded-full py-2 px-5 transition-all duration-300 ${activeCard === category
                                    ? 'bg-amber-300 opacity-100'
                                    : 'bg-amber-400 border border-white/10 group-hover:bg-amber-500'
                                    }`} />

                                {activeCard === category && (
                                    <div className='absolute inset-0 rounded-full bg-amber-700 blur-2xl opacity-50 -z-10' />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className='relative w-full overflow-hidden flex flex-row items-center justify-center mb-10'>
                        <div
                            ref={scrollContainerRef}
                            className='overflow-x-auto scroll-smooth snap-inline snap-mandatory hide-scrollbar w-full'
                        >
                            {/* Added px-[10%] or px-[25%] to pad out edges so a single card can rest exactly in the middle */}
                            <div className='flex flex-row items-center justify-start  py-4'>
                                {cardFiltered.map((project, index) => (
                                    <div
                                        key={project.id || index}
                                        className='h-120 w-full object-cover'
                                    >
                                        <Processcard process={project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/booking')}
                        className='w-full lg:w-auto uppercase text-lg bg-transparent px-8 py-3 text-black border border-black transition-all duration-300 hover:border-amber-500 hover:text-amber-500 '>
                        Book A fitting
                    </button>

                </div>
            </div>

        </section>
    )
}

export default Processcontent
