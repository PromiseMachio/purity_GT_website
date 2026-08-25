import React, { useState } from 'react'
import { LOOKBOOK_CONTENT } from '../../data/constants'
import { useNavigate } from 'react-router-dom'

const Lookbook = () => {


    // Function to hold images alongside their detected orientation
    const [images, setImages] = useState(LOOKBOOK_CONTENT)

    // navigate
    const navigate = useNavigate()

    // Function to detect orientation once the browser loads the image
    const handleImageLoad = (id, event) => {
        const { naturalWidth, naturalHeight } = event.target;
        const orientation = naturalWidth > naturalHeight ? 'landscape' : 'portrait'

        setImages(prevImages =>
            prevImages.map(img =>
                img.id === id ? { ...img, orientation } : img
            )
        );
    }



    return (
        <section className='relative bg-amber-50 min-h-[90vh] justify-center'>
            <div className='relative max-w-7xl w-fill '>
                <div className='grid grid-cols-1 items-center'>
                    <div className='flex justify-between '>
                        <div className='text-left mt-20 mb-20 ml-5'>
                        <p className='paragraph-font   uppercase text-xs text-amber-500 '>Visual story</p>
                        <p className='  mt-2 uppercase text-5xl text-gray-900 font-normal'>Lookbook</p>
                    </div>
                    <div className='text-base mt-20 mb-20 pr-10'>
                       <button
                       onClick={()=>navigate('/collection')}
                       className='hidden sm:block border-b border-gray-900 text-black uppercase py-0 hover:text-amber-500 hover:border-amber-500'>
                        View All
                    </button> 
                    </div>
                    
                    </div>
                    
                    <div className="relative full-page-gallery">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className={`gallery-item ${image.orientation || 'loading'}`}
                            >
                                <img
                                    src={image.image}
                                    alt="Gallery item"
                                    onLoad={(e) => handleImageLoad(image.id, e)}
                                    className='w-full h-full object-cover'
                                />

                                <span className="orientation-badge">{image.orientation}</span>
                            </div>
                        ))}

                        {/* <button
                        onClick={()=> navigate('/collection')}
                        className='md:hidden absolute  right-1.5 bottom-1.5 mr-4 w-15 h-15 rounded-4xl bg-white/60 text-black animate-bounce transition-all duration-300  hover:animate-none hover:bg-amber-300  '>
                            More 👇
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lookbook



{/*top-3/4 left-3/4 Optional metadata overlay showing the captured state */ }