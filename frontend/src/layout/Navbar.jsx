import React, { useEffect, useState } from 'react'
import { NAV_LINKS, MAIN_INFO } from '../data/constants';
import { useNavigate } from 'react-router-dom';
import { X, MenuIcon, RoseIcon } from 'lucide-react';

const Navbar = () => {
  // Javascript code
  // state hooks declaration
  const [isScroll, setIsScroll] = useState(false);
  // For toggling mobile menu 
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Using navigate to switch to pages
  const navigate = useNavigate()

  // Using useEffect for scroll effects
  useEffect(() => {
    // Creating a function inside to hancdel scroll 
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    // Add an event listiner to the called function using DOM
    window.addEventListener('scroll', handleScroll) // The event listener calls the function which detects windows screen scrolled half vertically
    return () => window.removeEventListener('scroll', handleScroll) // when the scroll is stopped the function is removed

    /**
     * The question is whre is the useEffect used probably in our code
     * For instance we scroll downwords we can change the color of the navbar from lets say transparent to a more colored background using the ternary condition
     */
  })
  return (
    <nav className={`fixed top-0 right-0 left-0 z-100 py-1 bg-none border-b border-transparent transition-all duration-200 ${isScroll
      ? 'bg-black border-b-white '
      :  `bg-black`
      }`}>
      <div className='max-w-330 mx-auto px-5'>
        <div className='flex items-center justify-between'>
          {/* logo  */}
          <div className='flex items-center gap-1'>
            <span className='uppercase text-4xl text-white font-extrabold mask-b-from-neutral-800'>purity</span>
            <img src={MAIN_INFO.logo} alt="logo_image" className={`w-15 h-15 rounded-2xl ${isScroll
              ?`src={MAIN_INFO.logo2} w-15 h-15 `
              : ''}` }/>
            {/* <RoseIcon className='w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text ' /> */}
          </div>
          {/* Nav links  */}
          <nav className='hidden md:flex items-center gap-5'>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => navigate(link.id)}
                className={`text-base uppercase font-thin border-b border-transparent text-white/65 transition-all duration-300 hover:text-white/80 hover:border-white/80 `}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div>
            <button
              onClick={() => navigate('/booking')}
              className='hidden md:flex bg-amber-900 py-2 px-5 transition-all duration-300 hover:bg-amber-600 '>
              <span className='text-black font-light transition-all duration-300 hover:text-white'>BOOK A FITTING</span>
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='menu'
            aria-expanded={isMenuOpen}
            className='md:hidden p-4 text-white/50 hover:text-white/60 '
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}

          </button>
        </div>
      </div>
      {/* Toggle menu button  */}


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

export default Navbar