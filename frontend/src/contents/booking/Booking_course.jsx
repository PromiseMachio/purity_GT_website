import React, { useState } from 'react'
import { About_youcourse, Intrest, Learning } from '../../ui/Coursecards'
import { HERO_BOOKING } from '../../data/bookingConstants'
import emailjs from '@emailjs/browser'

const Booking_course = () => {
    // hooks and states 
    const [currentStep, setCurrentStep] = useState(0)
    const initialFormData = {
        namess: '',
        emaill: '',
        phonee: '',
        ageGroup: '',
        genderr: '',

        interests: [],
        courseLevel: '',
        sewingMachine: '',
        fashionExperience: '',
        experienceDescription: '',

        learningGoal: '',
        futureGoal: '',
        learningFormat: '',
        schedule: '',
        preferredTime: '',
        additionalNotes: '',



    }
    const [formData, setFormData] = useState(initialFormData)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    // Handling change function
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === "checkbox" && name === "interests") {
            setFormData((prev) => {
                const currentInterests = prev.interests || []

                if (checked) {
                    // Maximum of 2 interests
                    if (currentInterests.length >= 3) {
                        return prev
                    }

                    return {
                        ...prev,
                        interests: [...currentInterests, value],
                    }
                }

                return {
                    ...prev,
                    interests: currentInterests.filter(
                        (interest) => interest !== value
                    ),
                }
            })

            return
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    // Handling submit function 
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            !formData.namess ||
            !formData.phonee ||
            !formData.ageGroup ||
            !formData.fashionExperience ||
            !formData.sewingMachine


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
                "template_0a0htrf",
                formData,
                "SXJcxZeUL5TBtPUpg"
            )
            setStatus({
                type: '',
                message: ''
            })


            setStatus({
                type: "success",
                message: `Thank you ${formData.namess}. Your COURSE BOOKING request has been received.`
            })



            console.log("FORM DATA:", formData)

        } catch (error) {

            console.error("EMAIL ERROR:", error)

            setStatus({
                type: "error",
                message: "Something went wrong while sending your request. Please try again."
            })

        }
        return
    }
    // cards imported from Bookingcards
    const cards = [
        {
            id: "01",
            title: "About You",
            component: About_youcourse
        },
        {
            id: "02",
            title: "Your Intrests",
            component: Intrest
        },
        {
            id: "03",
            title: "Learning",
            component: Learning
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

        <section id='course' className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300'  style={{ backgroundImage: `url(${HERO_BOOKING.image3})` }} >
            <form  className='max-w-7xl p-8 mx-auto  w-full bg-cover bg-center bg-no-repeat overflow-hidden backdrop-blur-lg rounded-4xl'
                onSubmit={handleSubmit}
            >
                <div className='text-center space-y-4'>
                    <p className='text-sm uppercase text-amber-500 font-normal'>CHOOSE A COURSE</p>
                    <p className='fashion-font text-4xl text-cyan-500'>Learn The Craft.</p>
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
                            type="button"
                            onClick={handleSubmit}
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
        </section>

    )
}

export default Booking_course