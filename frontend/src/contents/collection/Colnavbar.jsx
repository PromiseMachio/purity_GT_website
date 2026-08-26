import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAVBAR } from '../../data/collectionConstants'

const Colnavbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const navigate = useNavigate()

    // Using useState in screens scroll effects
    useEffect(()=>{
        // Detects screen scrolling function 
        const handleScroll = () =>{
            setIsScroll(window.scrollY > 50)
        }
        // Add an event litsener
        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    })

  return (
    <nav className={`fixed top-0  right-0 left-0 z-100 py-1 bg-none border-b border-transparent transition-all duration-200 ${isScroll
        ?'bg-amber-100 border-b-white'
        : 'bg-none'
    }`}>
        <div className='max-w-330 mx-auto px-5'>
            <div className='flex items-center justify-between'>
                {/* logo  */}
                <div className='flex items-center gap-1'>
                    <span className='uppercase text-5xl text-amber-900 font-extrabold mask-b-from-neutral-900 '>{NAVBAR.name}</span>
                    <img src={NAVBAR.navLogo} alt="" className='w-15 h-15' />

                </div>

                <div>
                    <button
                    onClick={()=>navigate('/')}
                    className='paragraph-font py-1 px-6 text-2xl p-2 text-black border border-black bg-amber-400 transition-all duration-300 hover:text-amber-700 hover:border-amber-700 hover:bg-transparent'>
                        Back
                    </button>
                </div>

            </div>

        </div>

    </nav>
  )
}

export default Colnavbar