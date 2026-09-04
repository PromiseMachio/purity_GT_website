import React from 'react'
import Servhero from '../contents/services/Servhero'
import Colnavbar from '../contents/collection/Colnavbar'
import Servcontent from '../contents/services/Servcontent'
import Footer from '../layout/Footer'
const Services = () => {
  return (
    <div>
      <Colnavbar />
      <main>
        <Servhero />
        <Servcontent />
      </main>
      <Footer />
    </div>
  )
}

export default Services