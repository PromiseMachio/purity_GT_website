import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../contents/home/Hero'
import About from '../contents/home/About'
import Lookbook from '../contents/home/Lookbook'
import Footer from '../layout/Footer'
import Aboutme from '../contents/home/Aboutme'
import Craft from '../contents/home/Craft'



const Home = () => {
  return (
    <div >
      <Navbar />
      <main className='lg:pb-[1vh] pb-[205vh]' >
        <Hero />
        <About />
        <Aboutme />
        <Lookbook />
      </main>
      <Craft />
      <Footer />
    </div>

  )
}

export default Home
// 