import React from 'react'
import { HERO_BOOKING } from '../../data/bookingConstants'
import { Quote } from 'lucide-react'

const About_collaboration= () => {
  return (
   <section className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${HERO_BOOKING.image6})` }}>
    <div className='max-w-7xl w-full lg:py-20 sm:px-4'>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='text-center pt-40 lg:pt-0'>
          <div className='border border-amber-500 w-25'/>
          <Quote className='w-12 h-12 text-amber-600 fill-black mb-12' />
          <p className='text-5xl text-amber-700 fashion-font lowercase'>YOUR VISION.</p>
          <p className='text-6xl text-amber-700 fashion-font lowercase'>OUR CRAFT.</p>
          <p className='text-7xl text-amber-700 fashion-font lowercase'>ONE CREATION.</p>

          <Quote className='w-12 h-12 text-amber-600 fill-black mt-12 ml-50' />

        </div>
          <div className='border border-amber-500 w-25'/>


      </div>

    </div>

   </section>
  )
}

export default About_collaboration

