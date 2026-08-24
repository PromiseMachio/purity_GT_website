import React from 'react'
import { MAIN_INFO } from '../../data/constants'
import { Quote } from 'lucide-react'

const About = () => {
  return (
    <section className='relative min-h-[90vh] w-full bg-amber-200 flex items-center justify-center'>
      <div className='max-w-7xl w-full items-center'>
        <div className='grid grid-cols-1'>
          <div className='flex flex-col items-center' >
            <div className='border border-amber-500 w-30' />
            <div className='flex items-center gap-1 p-20'>
              <Quote className='w-10 h-10 text-gray-900 mb-20' />
              <div className='leading-relaxed '>
                <p className='fashion-font text-7xl text-gray-900 font-light'>{MAIN_INFO.paragraph2[0]}</p>
                <p className='fashion-font text-7xl text-gray-900 font-light'>{MAIN_INFO.paragraph2[1]}</p>
              </div>
              <Quote className='w-10 h-10 text-gray-900 mt-20' />
            </div>

            <div className='border border-amber-500 w-30' />
            <div className='text-center leading-loose mt-10'>
              <p className='text-gray-600 paragraph-font text-sm '>{MAIN_INFO.paragraph3[0]}</p>
              <p className='text-gray-600 paragraph-font text-sm '>{MAIN_INFO.paragraph3[1]}</p>
            </div>


          </div>

        </div>

      </div>

    </section>
  )
}

export default About