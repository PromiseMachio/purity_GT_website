import React, { useState } from 'react'
import { Aboutcard, Garmentcard, Measumentcard } from '../../ui/Bookingcards'
import { HERO_BOOKING } from '../../data/bookingConstants'
import emailjs from '@emailjs/browser'

const Booking_fitting = () => {
    // hooks and states 
    const [currentStep, setCurrentStep] = useState(0)
    const initialFormData = {
        names: '',
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
        image: null
    }
    const [formData, setFormData] = useState(initialFormData)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    // Handling change function
    const handleChange = (e) => {

        const { name, value, file } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]:file ? file[0] : value
        }))
    }
    // Handling submit function 
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            !formData.names ||
            !formData.phone ||
            !formData.gender ||
            !formData.garmentType ||
            !formData.occasion
        ) {
            setStatus({
                type: "error",
                message: "Please complete the required fields."
            })

            return
        }

        try {

            await emailjs.send(
                "service_z5vsrro",
                "template_7i6fzej",
                formData,
                "SXJcxZeUL5TBtPUpg" 
            )

            setTimeout((
                setStatus({
                    type: "success",
                    message: `Thank you ${formData.names}. Your fitting request has been received.`
                })
            ), 3000)


            console.log("FORM DATA:", formData)

        } catch (error) {

            console.error("EMAIL ERROR:", error)

            setTimeout((
                setStatus({
                type: "error",
                message: "Something went wrong while sending your request. Please try again."
            })
        ),3000)
        }
        return
    }
    // cards imported from Bookingcards
    const cards = [
        {
            id: "01",
            title: "About You",
            component: Aboutcard
        },
        {
            id: "02",
            title: "Your Garment",
            component: Garmentcard
        },
        {
            id: "03",
            title: "Measurements",
            component: Measumentcard
        }
    ]
    // Next and prev functions
    const nextStep = () => {

        if (currentStep < cards.length - 1) {
            setCurrentStep((prev) => prev + 1)
        }
    }

    const previousStep = () => {

        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1)
        }
    }
    // current cards calling and re
    const CurrentCard = cards[currentStep].component


    return (

        <form
            onSubmit={handleSubmit}
            className='max-w-7xl p-8 mx-auto  w-full bg-cover bg-center bg-no-repeat overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${HERO_BOOKING.image2})` }}
        >
            <div className='text-center space-y-4'>
                <p className='text-sm uppercase text-amber-500 font-normal'>BOOK A FITTING</p>
                <p className='fashion-font text-4xl text-cyan-500'>Made for you. Measured with intention.</p>
            </div>
            {/* // Progress  */}
            <div className="flex items-center justify-center gap-6 mb-10">

                {cards.map((card, index) => (

                    <button
                        type="button"
                        key={card.id}
                        onClick={() => setCurrentStep(index)}
                        className={`
                            flex items-center gap-2
                            transition-all duration-300

                            ${currentStep === index
                                ? "text-amber-500"
                                : "text-white/30"
                            }
                        `}
                    >

                        <span className="fashion-font text-lg">
                            {card.id}
                        </span>

                        <span className="hidden md:block paragraph-font text-sm">
                            {card.title}
                        </span>

                    </button>

                ))}

            </div>

            <CurrentCard
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {/* navigation next and prev  */}

            <div className="flex items-center justify-between mt-8">

                {/* PREVIOUS */}

                <button
                    type="button"
                    onClick={previousStep}
                    disabled={currentStep === 0}
                    className="
                        px-6 py-3
                        border border-white/20
                        rounded-full
                        text-white
                        disabled:opacity-30
                        disabled:cursor-not-allowed
                        transition
                    "
                >
                    ← Previous
                </button>


                {/* STEP COUNTER */}

                <span className="text-white/50 paragraph-font">

                    {String(currentStep + 1).padStart(2, "0")}

                    {" / "}

                    {String(cards.length).padStart(2, "0")}

                </span>


                {/* NEXT / SUBMIT */}

                {currentStep === cards.length - 1 ? (

                    <button
                        type="submit"
                        disabled={status.type === 'success'}
                        className={`
                        px-8 py-3
                        bg-amber-500
                        text-black
                        rounded-full
                        font-medium
                        hover:bg-amber-400
                        transition

                        disabled:opacity-30
                        disabled:cursor-not-allowed
                        disabled:hover:bg-amber-500
                    `}
                    >
                        {status.type === 'success' ? 'Request Sent ✓' : 'Submit Request →'}
                    </button>

                ) : (

                    <button
                        type="button"
                        onClick={nextStep}
                        className="
                            px-6 py-3
                            border border-amber-500
                            text-amber-500
                            rounded-full
                            hover:bg-amber-500
                            hover:text-black
                            transition
                        "
                    >
                        Next →
                    </button>

                )}

            </div>


            {/* status  */}

            {status.message && (

                <div className="mt-6 text-center">

                    <p
                        className={
                            status.type === "error"
                                ? "text-red-400"
                                : "text-green-400"
                                

                        }
                    >
                        {status.message}
                    </p>

                </div>

            )}

        </form>
    )
}

export default Booking_fitting