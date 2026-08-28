import React from 'react'

const Gallerycard = ({ GALLERY }) => {
    const { title, image, description } = GALLERY
    return (
        <div className='group relative overflow-hidden border border-gray-600 rounded-xl bg-amber-300 '>
            <div className='relative overflow-hidden h-64'>
                <img src={image} alt={title}
                    className='w-full h-full object-cover '
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-4  right-4 flex items-center gap-3 mr-6">
                    <p className='border bg-gray-400 text-amber-500 text-sm fashion-font'>{GALLERY.category}</p>
                </div>

            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white mb-2  group-hover:text-[#A8FF8D] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 paragraph-font">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default Gallerycard