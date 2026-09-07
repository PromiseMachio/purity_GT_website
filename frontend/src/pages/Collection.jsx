import React from 'react'
import Colhero from '../contents/collection/Colhero'
import Colnavbar from '../contents/collection/Colnavbar'
import Colgallery from '../contents/collection/Colgallery'
import Footer from '../layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Process from '../pages/Process'
import Services from '../pages/Services'
import Home from '../pages/Home'
import Booking from '../pages/Booking'
import Footer_collection from '../layout/Footer_collection'

const Collection = () => {
  return (
    <div>
      <Colnavbar />
      <main className='pb-[10vh] lg:pb-[1vh]'>
        <Colhero />
        <Colgallery />
      </main>
      <Footer_collection />

    </div>
  )
}

export default Collection