import React from 'react'


const Gallerycard = ({ gallery }) => {
    const { title, image, description } = gallery
    return (
        <div className='group relative overflow-hidden border border-gray-600 rounded-xl bg-amber-300 '>
            <div className='relative overflow-hidden h-64'>
                <img src={image} alt={title}
                    className='w-full h-full object-cover '
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-4  right-4 flex items-center gap-3 mr-6">
                    <p className='border rounded-2xl px-3 py-1 font-medium bg-gray-400 text-amber-800 tracking-wide text-sm fashion-font group-hover:bg-gray-500 group-hover:text-amber-900 duration-300 transition-all'>{gallery.category}</p>
                </div>

            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white mb-2  group-hover:text-amber-800 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-700 tracking-normal text-sm leading-relaxed line-clamp-2 paragraph-font">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default Gallerycard