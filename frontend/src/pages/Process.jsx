import React from 'react'
import Colnavbar from '../contents/collection/Colnavbar'
import Processcontent from '../contents/process/Processcontent'
import Footer from '../layout/Footer'

const Process = () => {
  return (

    <div>
      <Colnavbar />
      <main>
      <Processcontent />
      </main>
      <Footer />
    </div>
  )
}

export default Process