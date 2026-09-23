import React from 'react'
import Colnavbar from '../contents/collection/Colnavbar'
import Processcontent from '../contents/process/Processcontent'
import Footer from '../layout/Footer'
import Footer_process from '../layout/Footer_process'
import Navbar_process from '../layout/Navbar_process'

const Process = () => {
  return (

    <div id='process'>
      <Navbar_process />
      <main>
      <Processcontent />
      </main>
      <Footer_process />
    </div>
  )
}

export default Process