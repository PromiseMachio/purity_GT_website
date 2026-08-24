import React from 'react'
import { FOOTER_CONTENT, NAV_LINKS } from '../data/constants'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='relative bg-black w-full text-white/70 paragraph-font text-sm'>
            {/* Centered inner container */}
            <div className='max-w-7xl w-full mx-auto px-6 py-12 md:px-10'>
                {/* Fixed responsive grid spacing */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 lg:gap-20'>
                    
                    {/* Left side */}
                    <div className='flex flex-col gap-2'>
                        <p className='text-2xl font-medium uppercase text-white tracking-wider'>
                            Touch <span className='fashion-font lowercase text-2xl'>of</span> Purity
                        </p>
                        <p className='text-sm leading-relaxed tracking-wider'>
                            Bespoke fashion, thoughtfully designed and beautifully tailored.
                        </p>
                        {/* Responsive wrapping wrap for buttons */}
                        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 mt-2'>
                            {FOOTER_CONTENT.map((link) => (
                                <button
                                    key={link.url}
                                    onClick={() => navigate(link.url)}
                                    className='border-b border-transparent text-xs transition-all duration-300 hover:text-white hover:border-white'
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Center of page */}
                    <div className='flex flex-col gap-3'>
                        <p className='text-white uppercase font-medium tracking-wider text-xs'>Navigate</p>
                        {/* Grid-based link layout for easy tapping on mobile */}
                        <div className='grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4'>
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => navigate(link.id)}
                                    className='text-left border-b border-transparent text-sm transition-all duration-300 hover:text-white hover:border-white w-fit'
                                >
                                    {link.label}
                                </button>
                            ))}  
                        </div>
                    </div>

                    {/* Right side */}
                    <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-1'>
                        <p className='text-white uppercase font-medium tracking-wider text-xs'>Contacts</p>
                        <p className='hover:text-white transition-colors'>+254 700 000 000</p>
                        <p>Kakamega, Kenya</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
