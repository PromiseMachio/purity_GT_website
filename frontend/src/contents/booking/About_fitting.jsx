import React from 'react'
import { HERO_BOOKING } from '../../data/bookingConstants'
import { Quote } from 'lucide-react'

const About_fitting = () => {
  return (
   <section className='relative min-h-[90vh] bg-amber-200 overflow-hidden '>
    <div className='max-w-7xl w-full lg:py-10 sm:px-4'>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='text-center pt-40 lg:pt-0'>
          <div className='border border-amber-500 w-25'/>
          <Quote className='w-12 h-12 text-amber-600 fill-black mb-12' />
          <p className='text-5xl text-amber-700 fashion-font lowercase'>{HERO_BOOKING.bottomText[0]}</p>
          <p className='text-6xl text-amber-700 fashion-font lowercase'>{HERO_BOOKING.bottomText[1]}</p>
          <p className='text-7xl text-amber-700 fashion-font lowercase'>{HERO_BOOKING.bottomText[2]}</p>

          <Quote className='w-12 h-12 text-amber-600 fill-black mt-12 ml-50' />

        </div>
          <div className='border border-amber-500 w-25'/>


      </div>

    </div>

   </section>
  )
}

export default About_fitting