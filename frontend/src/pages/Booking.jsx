import React from 'react'
import Booking_hero from '../contents/booking/Booking_hero'
import Booking_fitting from '../contents/booking/Booking_fitting'
import Booking_course from '../contents/booking/Booking_course'
import Booking_collaboration from '../contents/booking/Booking_collaboration'
import Navbar_booking from '../contents/booking/Navbar_booking'
import About_fitting from '../contents/booking/About_fitting'
import About_course from '../contents/booking/About_course'

const Booking = () => {
  return (
    <div>
      <Navbar_booking />
      <main>
        <Booking_hero />
        <About_fitting />
        <Booking_fitting />
        <About_course />
        <Booking_course />
        <Booking_collaboration />
      </main>
    </div>
  )
}

export default Booking