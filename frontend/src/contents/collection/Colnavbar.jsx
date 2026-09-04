import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAVBAR } from '../../data/collectionConstants'
import { MenuIcon,X } from 'lucide-react'
import { NAV_LINKS } from '../../data/constants'


const Colnavbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false) 
    const [isScroll, setIsScroll] = useState(false)
    const navigate = useNavigate()

    // Using useState in screens scroll effects
    useEffect(() => {
        // Detects screen scrolling function 
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }
        // Add an event litsener
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <nav className={`fixed top-0  right-0 left-0 z-100 py-1 bg-none border-b border-transparent transition-all duration-200 ${isScroll
            ? 'bg-amber-100 border-b-white'
            : 'bg-none'
            }`}>
            <div className='max-w-330 mx-auto px-5'>
                <div className='flex items-center justify-between'>
                    {/* logo  */}
                    <div className='flex items-center gap-1'>
                        <span className='uppercase text-5xl text-amber-900 font-extrabold mask-b-from-neutral-900 '>{NAVBAR.name}</span>
                        <img src={isScroll ? NAVBAR.navLogo : NAVBAR.navLogo2} alt="" className='w-15 h-15' />

                    </div>

                    <div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label='menu'
                            aria-expanded={isMenuOpen}
                            className='md:hidden p-4 text-white/50 hover:text-white/60 '
                        >
                            {isMenuOpen ? <X className='w-6 h-6 text-black' /> : <MenuIcon className='w-6 h-6 text-black' />}

                        </button>
                    </div>

                </div>

            </div>
            {/* mobile navbar  */}
                  <div className={`md:hidden transition-all duration-300 overflow-hidden bg-none ${isMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                    }`}>
                      <div className='bg-amber-100 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3'>
                      {NAV_LINKS.map((link)=>(
                        <button
                        key={link.id}
                        onClick={()=>navigate(link.id)}
                        className='block w-full border-b  border-gray-200 text-center text-amber-800 text-2xl font-light px-4 py-3   transition-all duration-300 hover:text-amber-950 hover:border-gray-600'
                        >
                          {link.label}
                        </button>
                      ))}
                      <button
                          onClick={() => navigate('/booking')}
                          className='w-full bg-amber-900 mt-1.5 py-2 px-5 transition-all duration-300 hover:bg-amber-600 '>
                          <span className='text-black font-light transition-all duration-300 hover:text-white'>BOOK A FITTING</span>
                        </button>
                      </div>
            
            
                  </div>

        </nav>
    )
}

export default Colnavbar