import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../contents/home/Hero'
import About from '../contents/home/About'
import Lookbook from '../contents/home/Lookbook'
import Footer from '../layout/Footer'



const Home = () => {
  return (
    <div >
      <Navbar />
      <main  >
        <Hero />
        <About />
        <Lookbook />
        
      </main>
      <Footer />
    </div>

  )
}

export default Home
// className='pb-[0vh]'