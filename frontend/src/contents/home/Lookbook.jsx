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
                       className=' border-b border-gray-900 text-sm text-black uppercase py-0 hover:text-amber-500 hover:border-amber-500'>
                        View All
                    </button> 
                    </div>
                    
                    </div>
                    
                    <div className="full-page-gallery">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className={`gallery-item ${image.orientation || 'loading'}`}
                            >
                                <img
                                    src={image.image}
                                    alt="Gallery item"
                                    onLoad={(e) => handleImageLoad(image.id, e)}
                                />

                                <span className="orientation-badge">{image.orientation}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lookbook



{/* Optional metadata overlay showing the captured state */ }