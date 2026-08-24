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
      <main className='lg:pb-[1vh] pb-[150vh]' >
        <Hero />
        <About />
        <Lookbook />
      </main>
      <Footer />
    </div>

  )
}

export default Home
// 