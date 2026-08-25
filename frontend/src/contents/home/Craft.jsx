import React from 'react'
import { CRAFTING_CONTENT } from '../../data/constants'

const Craft = () => {
    return (
        <section className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${CRAFTING_CONTENT.backgroundImg})` }}>
            <div className='relative z-10 max-w-7xl sm:px-6 lg:py-10 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center pl-3 '>
                </div>
            </div>
        </section>
    )
}

export default Craft