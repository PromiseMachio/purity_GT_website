import React from 'react'
import Colnavbar from '../contents/collection/Colnavbar'
import Processcontent from '../contents/process/Processcontent'
import Footer from '../layout/Footer'
import Footer_process from '../layout/Footer_process'

const Process = () => {
  return (

    <div>
      <Colnavbar />
      <main>
      <Processcontent />
      </main>
      <Footer_process />
    </div>
  )
}

export default Process