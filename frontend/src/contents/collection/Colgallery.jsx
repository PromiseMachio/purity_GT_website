import React, { useState } from 'react'
import { categories, GALLERY } from '../../data/collectionConstants'
import Gallerycard from '../../ui/Gallerycard'

const Colgallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedGallery, setSelectedGallery] = useState(null)
  const filterImage = activeFilter === 'All'
    ? GALLERY
    : GALLERY.filter(GALLERY => GALLERY.category === activeFilter)

  const handleCategory = (category) => {
    setActiveFilter(category)
  }
  // opening image on a different page


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
          <div className='flex gap-2 items-center lg:inline-flex mb-10'>
            {categories.map((link) => (
              <button
                key={link}
                onClick={() => handleCategory(link)}
                className={`text-sm uppercase backdrop-blur-2xl bg-gray-300 border border-black  rounded-xl px-2 py-1 text-gray-700 font-normal paragraph-font   lg:text-xs lg:py-1.5 lg:px-3 transition-all duration-300 hover:text-amber-500 hover:border-amber-500 ${activeFilter
                  ? 'backdrop-blur-2xl bg-amber-100 text-red-500'
                  : 'bg-gray-300'
                  }`}
              >
                {link}
              </button>
            ))}
          </div>
          <div className='flex flex-wrap object-cover w-full h-full mx-auto '>
            <div
              className='flex flex-wrap flex-col-0 flex-row-3 gap-2'
            >
              {filterImage.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedGallery(image)}
                  className='w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start'
                >
                  <Gallerycard gallery={image} />

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* FULL-SCREEN DETAILED MODAL OVERLAY */}
      {selectedGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedGallery(null)} // Close when clicking backdrop
        >
          <div
            className="relative bg-amber-50 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card contents
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 bg-black/60 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center font-bold text-lg hover:bg-black transition-colors"
              onClick={() => setSelectedGallery(null)}
            >
              ✕
            </button>

            {/* Left Column: Huge Image View */}
            <div className="h-64 md:h-[450px] w-full bg-black">
              <img
                src={selectedGallery.image}
                alt={selectedGallery.title}
                className="w-full h-full object-contain md:object-cover"
              />
            </div>

            {/* Right Column: Detailed Context Text */}
            <div className="p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-block text-xs uppercase tracking-wider font-semibold text-amber-600 bg-amber-100 rounded-full px-3 py-1 mb-3">
                  {selectedGallery.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                  {selectedGallery.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed max-h-60 overflow-y-auto pr-2">
                  {selectedGallery.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-colors shadow-sm"
                  onClick={() => setSelectedGallery(null)}
                >
                  Close View
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}

export default Colgallery