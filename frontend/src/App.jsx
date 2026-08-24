import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import Process from './pages/Process'
import Services from './pages/Services'
import Booking from './pages/Booking'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/process' element={<Process />} />
        <Route path='/services' element={<Services />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App
