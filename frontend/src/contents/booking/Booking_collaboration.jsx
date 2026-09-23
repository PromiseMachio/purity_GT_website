import React, { useState } from 'react'
import { About_youcollaboration, Project_type, Design_details, Timeline_budget } from '../../ui/Collabocards'
import { HERO_BOOKING } from '../../data/bookingConstants'
import emailjs from '@emailjs/browser'

const Booking_collaboration = () => {
    // hooks and states 
    const [currentStep, setCurrentStep] = useState(0)
    const initialFormData = {
        namesss: '',
        emailll: '',
        phoneee: '',
        organisation: '',

        projectType: [],
        collaborationRole: [],


        projectName: '',
        projectDescription: '',
        targetAudience: '',
        numberOfPieces: '',
        garmentTypess: [],
        preferredFabric: '',
        additionalNotess: '',

        projectStartDate: '',
        deadline: '',
        budgetRange: '',

        preferredContactMethod: '',
        preferredDate: '',
        preferredTimee: '',
        referenceLinks: '',
        referenceImages: '',







    }
    const [formData, setFormData] = useState(initialFormData)
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    // Handling change function
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === "checkbox" && name === "projectType") {
            setFormData((prev) => {
                const currentProject = prev.projectType || []

                if (checked) {
                    // Maximum of 2 interests
                    if (currentProject.length >= 3) {
                        return prev
                    }

                    return {
                        ...prev,
                        projectType: [...currentProject, value],
                    }
                }

                return {
                    ...prev,
                    projectType: currentProject.filter(
                        (project) => project !== value
                    ),
                }
            })

            return
        }
        if (type === "checkbox" && name === "garmentTypess") {
            setFormData((prev) => {
                const currentGarment = prev.garmentTypess || []

                if (checked) {
                    // Maximum of 2 interests
                    if (currentGarment.length >= 3) {
                        return prev
                    }

                    return {
                        ...prev,
                        garmentTypess: [...currentGarment, value],
                    }
                }

                return {
                    ...prev,
                    garmentTypess: currentGarment.filter(
                        (garment) => garment !== value
                    ),
                }
            })

            return
        }
        if (type === "checkbox" && name === "collaborationRole") {
            setFormData((prev) => {
                const currentRole = prev.collaborationRole || []

                if (checked) {
                    // Maximum of 2 interests
                    if (currentRole.length >= 3) {
                        return prev
                    }

                    return {
                        ...prev,
                        collaborationRole: [...currentRole, value],
                    }
                }

                return {
                    ...prev,
                    collaborationRole: currentRole.filter(
                        (role) => role !== value
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
            !formData.namesss ||
            !formData.phoneee ||
            !formData.projectType ||
            !formData.projectName ||
            !formData.collaborationRole ||
            !formData.projectDescription ||
            !formData.preferredContactMethod ||
            !formData.garmentTypess


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
            component: About_youcollaboration
        },
        {
            id: "02",
            title: "Your Project",
            component: Project_type
        },
        {
            id: "03",
            title: "Design",
            component: Design_details
        },
        {
            id: "04",
            title: "T & B",
            component: Timeline_budget
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
        <section id='collaborations' className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${HERO_BOOKING.image4})` }} >
            <form
                onSubmit={handleSubmit}
                className='max-w-7xl p-8 mx-auto  w-full bg-cover bg-center bg-no-repeat overflow-hidden backdrop-blur-lg rounded-4xl'
            >
                <div className='text-center space-y-4'>
                    <p className='text-sm uppercase text-amber-500 font-normal'>collaboration</p>
                    <p className='fashion-font text-4xl text-cyan-500'>Let's collaborate</p>
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

export default Booking_collaboration