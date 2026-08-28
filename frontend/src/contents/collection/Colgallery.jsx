import React from 'react'
import { categories } from '../../data/collectionConstants'

const Colgallery = () => {
  return (
    <section id='/gallery' className='relative min-h-[90vh] grid items-center overflow-hidden bg-amber-50'>
      <div className='relative max-w-7xl items-center w-full m-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-6 ml-3'>
          <div>
            <p className='text-sm text-amber-500 uppercase'>Gallery</p>
          <div className='border border-amber-500 w-25 ' />
          </div>
          

        </div>
        <div className='flex flex-col flex-row-1 items-center justify-center '>
          <div className='flex gap-2 items-center lg:inline-flex'>
            {categories.map((link) => (
              <button
                className='text-sm uppercase backdrop-blur-2xl bg-gray-300 border border-black  rounded-xl px-2 py-1 text-gray-700 font-normal paragraph-font   lg:text-xs lg:py-1.5 lg:px-3 transition-all duration-300 hover:text-amber-500 hover:border-amber-500'
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Colgallery