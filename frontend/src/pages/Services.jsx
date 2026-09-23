import React from 'react'
import Servhero from '../contents/services/Servhero'
import Colnavbar from '../contents/collection/Colnavbar'
import Servcontent from '../contents/services/Servcontent'
import Footer from '../layout/Footer'
import Footer_services from '../layout/Footer_services'
import Navbar_services from '../layout/Navbar_services'
const Services = () => {
  return (
    <div id='services'>
      <Navbar_services/>
      <main>
        <Servhero />
        <Servcontent />
      </main>
      <Footer_services />
    </div>
  )
}

export default Services