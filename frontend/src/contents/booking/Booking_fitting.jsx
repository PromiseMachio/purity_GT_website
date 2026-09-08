import React, { useState } from 'react'
import { HERO_BOOKING } from '../../data/bookingConstants'

const Booking_fitting = () => {
    const initialFormData = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',

        garmentType: '',
        occasion: '',
        fabric: '',
        colour: '',
        description: '',

        bust: '',
        waist: '',
        hips: '',
        shoulder: '',
        sleeveLength: '',
        armhole: '',
        dressLength: '',
        trouserLength: '',
    }

    const [formData, setFormData] = useState(initialFormData)

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    setFormData(prev => ({
        ...prev,
        [name]: value
    }))
    const handleSubmit = (e) => {
        e.preventDefault()

        // Required fields
        if (
            !formData.firstname ||
            !formData.phone ||
            !formData.gender ||
            !formData.garmentType ||
            !formData.occasion ||
            !formData.description
        ) {
            setStatus({
                type: 'error',
                message: 'Please fill in all the required fields.'
            })

            return
        }

        // Email validation - only if provided
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (formData.email && !emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            })

            return
        }

        // Success
        setStatus({
            type: 'success',
            message: `Dear ${formData.firstname} 😇, thank you for contacting me. I will reach back to you as soon as possible.`
        })

        // Reset form
        setFormData(initialFormData)

        // Remove message after 5 seconds
        setTimeout(() => {
            setStatus({
                type: '',
                message: ''
            })
        }, 5000)
    }
    return (
        <section className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${HERO_BOOKING.image2})` }}>
            <div className='relative max-w-7xl w-full items-center sm:px-6 lg:py-10'>
                <div className='flex flex-col lg:flex-row items-center justify-center '>
                    <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-3 lg:gap-6'>
                        {/* left  */}
                        <div>


                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Booking_fitting