import React from 'react'
import { FOOTER_CONTENT, NAV_LINKS } from '../data/constants'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate()
  return (
    <footer className='relative flex items-center bg-black'>
        <div className='max-w-7xl w-full items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-between p-10 gap-20'>
                {/* left side  */}
                <div>
                    <p className='text-2xl font-medium uppercase text-white'>Touch <span className='fashion-font lowercase text-2xl' >of</span> Purity</p>
                    <p className='text-sm text-white/70 paragraph-font leading-relaxed tracking-wider mt-2'>Bespoke fashion, thoughtfully designed and beautifully tailored.</p>
                    <div className='flex items-center gap-6 mt-3'>
                        {FOOTER_CONTENT.map((link)=>(
                            <button
                            key={link.url}
                            onClick={()=>navigate(link.url)}
                            className='text-white/70 border-b border-transparent text-xs paragraph-font transition-all duration-300 hover:text-white/90 hover:border-white/90'
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                </div>

                {/* center of page  */}
                <div className=''>
                    <p>Navigate</p>
                    <div className='flex items-center gap-3 sm:inline-block'>
                      {NAV_LINKS.map((link)=>(
                        <button
                        key={link.id}
                        onClick={()=>navigate(link.id)}
                        className=''
                        >
                            {link.label}
                        </button>
                      ))}  
                    </div>
                    
                </div>

                {/* right side */}
                <div >
                    <p>contacts</p>
                    <p>+254 7000000</p>
                    <p>Kakamega, Kenya</p>
                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer