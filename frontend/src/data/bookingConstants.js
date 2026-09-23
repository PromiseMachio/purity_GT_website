import womanImage from '../assets/bookings/bookingImage3.png'
import manImge1 from '../assets/bookings/bookingImage1.png'
import studentImage from '../assets/bookings/studentImage1.png'
import collaboImage from '../assets/bookings/collaboratorsImage1.png'
import courseQuoteImg from '../assets/sectionBackgroundImg2.png'
import collaborationQuoteImg from '../assets/collaborationQouteBgImg.png'
export const HERO_BOOKING = {
    name: 'BEGIN YOUR JOURNEY',

    tagline: 'What would you like to create?',

    description:
        'Whether you are looking for a perfectly tailored piece, ready to learn the craft, or have a creative idea you would like to bring to life, choose where your Purity journey begins.',

    image1: manImge1,
    image2: womanImage,
    image3: studentImage,
    image4: collaboImage,
    image5: courseQuoteImg,
    image6: collaborationQuoteImg,

    imageAlt: 'Purity fashion design and tailoring',

    options: [
        {

            id:'fitting',
            ids: '01',
            name: 'FITTING',
            title: 'Create Your Perfect Fit',
            description:
                'Tell us about yourself, your measurements and the garment you have in mind. We will help bring your vision to life with a fit made just for you.',
            buttonText: 'BOOK A FITTING',
            type: 'fitting',
        },

        {
            id:'course',
            ids: '02',
            name: 'COURSE',
            title: 'Learn The Craft',
            description:
                'Discover the fundamentals of fashion design and tailoring through a practical short course designed to build your skills and confidence.',
            buttonText: 'EXPLORE THE COURSE',
            type: 'course',
        },

        {
            id:'collaborations',
            ids: '03',
            name: 'COLLABORATION',
            title: 'Create Together',
            description:
                'Have a collection, creative project or fashion idea in mind? Let’s combine your vision with Purity’s craftsmanship.',
            buttonText: 'LET’S COLLABORATE',
            type: 'collaboration',
        },
    ],

    bottomText: ['YOUR VISION', 'OUR CRAFT', 'SOMETHING BEAUTIFUL'],

    scrollText: 'CHOOSE AN EXPERIENCE',
}

export const FITTING = {
    id: '01',
    name: 'BOOK A FITTING',
    tagline: 'Made for you. Measured with intention.',

    intro:
        'Tell us a little about yourself, the garment you have in mind, and your measurements. We will use these details to understand your vision and prepare for your fitting.',

    aboutYou: {
        id: '01',
        name: 'ABOUT YOU',
        title: 'Tell Us About You',

        description:
            'Start with a few personal details so we know how to get in touch and prepare for your fitting.',

        fields: [
            {
                name: 'firstName',
                label: 'First Name',
                type: 'text',
                placeholder: 'Enter your first name',
                required: true,
            },
            {
                name: 'lastName',
                label: 'Last Name',
                type: 'text',
                placeholder: 'Enter your last name',
                required: true,
            },
            {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                placeholder: 'you@example.com',
                required: false,
            },
            {
                name: 'phone',
                label: 'Phone Number',
                type: 'tel',
                placeholder: '+254 7XX XXX XXX',
                required: true,
            },
            {
                name: 'gender',
                label: 'Gender',
                type: 'select',
                placeholder: 'Select gender',
                options: [
                    'Female',
                    'Male',
                    'Prefer not to say',
                ],
                required: true,
            },
        ],
    },

    garment: {
        id: '02',
        name: 'YOUR GARMENT',
        title: 'What Are We Creating?',

        description:
            'Tell us about the garment you would like to have made and the occasion you are preparing for.',

        fields: [
            {
                name: 'garmentType',
                label: 'Garment Type',
                type: 'select',
                placeholder: 'Choose a garment',
                options: [
                    'Dress',
                    'Evening Gown',
                    'Ankara Wear',
                    'Two-Piece Set',
                    'Bespoke Wear',
                    'Formal Wear',
                    'Suit',
                    'Other',
                ],
                required: true,
            },
            {
                name: 'occasion',
                label: 'Occasion',
                type: 'select',
                placeholder: 'What is it for?',
                options: [
                    'Wedding',
                    'Dinner',
                    'Formal Event',
                    'Party',
                    'Casual',
                    'Photoshoot',
                    'Other',
                ],
                required: true,
            },
            {
                name: 'fabric',
                label: 'Preferred Fabric',
                type: 'text',
                placeholder: 'e.g. Ankara, satin, chiffon...',
                required: false,
            },
            {
                name: 'colour',
                label: 'Preferred Colour',
                type: 'text',
                placeholder: 'What colour are you envisioning?',
                required: false,
            },
            {
                name: 'description',
                label: 'Describe Your Vision',
                type: 'textarea',
                placeholder:
                    'Tell us about the style, design, colour, fabric or anything else you have in mind...',
                required: true,
            },
        ],
    },

    measurements: {
        id: '03',
        name: 'MEASUREMENTS',
        title: 'Your Measurements',

        description:
            'Accurate measurements help us create a garment that feels as good as it looks. Enter your measurements in centimetres.',

        fields: [
            {
                name: 'bust',
                label: 'Bust',
                type: 'number',
                placeholder: 'cm',
                required: true,
            },
            {
                name: 'waist',
                label: 'Waist',
                type: 'number',
                placeholder: 'cm',
                required: true,
            },
            {
                name: 'hips',
                label: 'Hips',
                type: 'number',
                placeholder: 'cm',
                required: true,
            },
            {
                name: 'shoulder',
                label: 'Shoulder',
                type: 'number',
                placeholder: 'cm',
                required: true,
            },
            {
                name: 'sleeveLength',
                label: 'Sleeve Length',
                type: 'number',
                placeholder: 'cm',
                required: false,
            },
            {
                name: 'armhole',
                label: 'Armhole',
                type: 'number',
                placeholder: 'cm',
                required: false,
            },
            {
                name: 'dressLength',
                label: 'Dress / Garment Length',
                type: 'number',
                placeholder: 'cm',
                required: false,
            },
            {
                name: 'trouserLength',
                label: 'Trouser Length',
                type: 'number',
                placeholder: 'cm',
                required: false,
            },
        ],

        measurementHelp: {
            title: 'Not Sure How To Measure?',

            description:
                'No worries. Follow our measurement guide or let us take your measurements during your fitting appointment.',

            buttonText: 'VIEW MEASUREMENT GUIDE',
        },
    },

    inspiration: {
        id: '04',
        name: 'INSPIRATION',
        title: 'Show Us Your Inspiration',

        description:
            'Have a reference image, sketch or moodboard? Share it with us so we can better understand your vision.',

        fields: [
            {
                name: 'referenceImage',
                label: 'Upload Inspiration',
                type: 'file',
                accept: 'image/*',
                required: false,
            },
            {
                name: 'additionalNotes',
                label: 'Additional Notes',
                type: 'textarea',
                placeholder:
                    'Anything else you would like us to know about your garment?',
                required: false,
            },
        ],
    },

    appointment: {
        id: '05',
        name: 'APPOINTMENT',
        title: 'Choose Your Preferred Appointment',

        description:
            'Let us know when you would prefer to have your fitting or consultation.',

        fields: [
            {
                name: 'preferredDate',
                label: 'Preferred Date',
                type: 'date',
                required: true,
            },
            {
                name: 'preferredTime',
                label: 'Preferred Time',
                type: 'select',
                placeholder: 'Select a time',
                options: [
                    'Morning',
                    'Afternoon',
                    'Evening',
                ],
                required: true,
            },
            {
                name: 'contactMethod',
                label: 'Preferred Contact Method',
                type: 'select',
                placeholder: 'How should we contact you?',
                options: [
                    'WhatsApp',
                    'Phone Call',
                    'Email',
                ],
                required: true,
            },
        ],
    },

    review: {
        title: 'REVIEW YOUR REQUEST',

        description:
            'Take a moment to review your details before sending your fitting request. Our team will get in touch to confirm your appointment and discuss the next steps.',

        buttonText: 'SUBMIT FITTING REQUEST',

        editText: 'EDIT DETAILS',
    },

    success: {
        title: 'YOUR JOURNEY BEGINS HERE.',

        message:
            'Thank you for choosing Purity. We have received your fitting request and will be in touch shortly to confirm the details.',

        buttonText: 'BACK TO BOOKING',
    },
}

export const COURSE = {
    id: '02',
    name: 'FASHION & TAILORING COURSE',
    tagline: 'Learn the craft. Build your confidence.',

    intro:
        'A practical introduction to fashion design and tailoring for beginners, aspiring designers and anyone ready to turn their creativity into beautifully crafted garments.',

    aboutYou: {
        id: '01',
        name: 'ABOUT YOU',
        title: 'Tell Us About You',

        description:
            'Start by telling us a little about yourself so we can understand your interests and learning goals.',

        fields: [
            {
                name: 'firstName',
                label: 'First Name',
                type: 'text',
                placeholder: 'Enter your first name',
                required: true,
            },
            {
                name: 'lastName',
                label: 'Last Name',
                type: 'text',
                placeholder: 'Enter your last name',
                required: true,
            },
            {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                placeholder: 'you@example.com',
                required: true,
            },
            {
                name: 'phone',
                label: 'Phone Number',
                type: 'tel',
                placeholder: '+254 7XX XXX XXX',
                required: true,
            },
            {
                name: 'ageGroup',
                label: 'Age Group',
                type: 'select',
                placeholder: 'Select your age group',
                options: [
                    'Under 18',
                    '18 – 24',
                    '25 – 34',
                    '35 – 44',
                    '45+',
                ],
                required: true,
            },
        ],
    },

    interests: {
        id: '02',
        name: 'YOUR INTEREST',
        title: 'What Would You Like To Learn?',

        description:
            'Choose the areas of fashion and tailoring that interest you most. You can select more than one.',

        fields: [
            {
                name: 'interests',
                label: 'Areas of Interest',
                type: 'multiselect',
                options: [
                    'Fashion Design',
                    'Sewing',
                    'Pattern Making',
                    'Garment Construction',
                    'Measurements & Fitting',
                    'Fabric Selection',
                    'Garment Finishing',
                    'Basic Alterations',
                    'Ankara Design',
                    'Bespoke Tailoring',
                ],
                required: true,
            },
            {
                name: 'courseLevel',
                label: 'Your Current Level',
                type: 'select',
                placeholder: 'Select your experience',
                options: [
                    'Complete Beginner',
                    'Beginner',
                    'Some Experience',
                    'Intermediate',
                    'Advanced',
                ],
                required: true,
            },
        ],
    },

    experience: {
        id: '03',
        name: 'YOUR EXPERIENCE',
        title: 'Tell Us About Your Experience',

        description:
            'There is no right or wrong answer. This simply helps us understand where you are starting from.',

        fields: [
            {
                name: 'sewingMachine',
                label: 'Have You Used a Sewing Machine Before?',
                type: 'radio',
                options: [
                    'Yes',
                    'No',
                    'A little',
                ],
                required: true,
            },
            {
                name: 'fashionExperience',
                label: 'Have You Studied Fashion or Tailoring Before?',
                type: 'radio',
                options: [
                    'Yes',
                    'No',
                ],
                required: true,
            },
            {
                name: 'experienceDescription',
                label: 'Tell Us About Your Experience',
                type: 'textarea',
                placeholder:
                    'Tell us about anything you have created, learned or worked on before...',
                required: false,
            },
        ],
    },

    goals: {
        id: '04',
        name: 'YOUR GOALS',
        title: 'What Do You Hope To Achieve?',

        description:
            'Understanding your goals helps us create a learning experience that feels relevant to you.',

        fields: [
            {
                name: 'learningGoal',
                label: 'What Is Your Main Goal?',
                type: 'select',
                placeholder: 'Choose your main goal',
                options: [
                    'Learn Fashion as a Hobby',
                    'Learn to Make My Own Clothes',
                    'Start a Fashion Business',
                    'Become a Fashion Designer',
                    'Improve My Existing Skills',
                    'Learn Professional Tailoring',
                    'Other',
                ],
                required: true,
            },
            {
                name: 'futureGoal',
                label: 'Where Do You See This Taking You?',
                type: 'textarea',
                placeholder:
                    'Tell us what you would like to be able to create or achieve after the course...',
                required: false,
            },
        ],
    },

    preferences: {
        id: '05',
        name: 'COURSE PREFERENCES',
        title: 'How Would You Like To Learn?',

        description:
            'Tell us about your preferred learning format and schedule.',

        fields: [
            {
                name: 'learningFormat',
                label: 'Preferred Learning Format',
                type: 'radio',
                options: [
                    'Physical',
                    'Online',
                    'Hybrid',
                ],
                required: true,
            },
            {
                name: 'schedule',
                label: 'Preferred Schedule',
                type: 'radio',
                options: [
                    'Weekdays',
                    'Weekends',
                    'Flexible',
                ],
                required: true,
            },
            {
                name: 'preferredTime',
                label: 'Preferred Time',
                type: 'select',
                placeholder: 'Select preferred time',
                options: [
                    'Morning',
                    'Afternoon',
                    'Evening',
                    'Flexible',
                ],
                required: true,
            },
        ],
    },

    additionalInformation: {
        id: '06',
        name: 'ADDITIONAL INFORMATION',
        title: 'Anything Else You Would Like Us To Know?',

        description:
            'Share anything that could help us understand your expectations or learning needs.',

        fields: [
            {
                name: 'additionalNotes',
                label: 'Additional Notes',
                type: 'textarea',
                placeholder:
                    'Tell us anything else about your interests, expectations or questions...',
                required: false,
            },
        ],
    },

    review: {
        title: 'REVIEW YOUR ENQUIRY',

        description:
            'Take a moment to review your information before sending your course enquiry.',

        buttonText: 'SUBMIT COURSE ENQUIRY',

        editText: 'EDIT DETAILS',
    },

    success: {
        title: 'YOUR LEARNING JOURNEY STARTS HERE.',

        message:
            'Thank you for your interest in learning with Purity. We have received your enquiry and will be in touch with more information about the course, availability and next steps.',

        buttonText: 'BACK TO BOOKING',
    },
}

export const COLLABORATION = {
    id: '03',
    name: 'FASHION COLLABORATION',
    tagline: 'Your vision. Our craft. Let’s create together.',

    intro:
        'Have a fashion collection, creative project, brand collaboration or unique idea in mind? Tell us about your vision and let’s explore how Purity can bring it to life through thoughtful design and craftsmanship.',

    aboutYou: {
        id: '01',
        name: 'ABOUT YOU',
        title: 'Tell Us About You',

        description:
            'Start with a few details about yourself or your organisation so we can understand who we will be collaborating with.',

        fields: [
            {
                name: 'firstName',
                label: 'First Name',
                type: 'text',
                placeholder: 'Enter your first name',
                required: true,
            },
            {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                placeholder: 'you@example.com',
                required: true,
            },
            {
                name: 'phone',
                label: 'Phone Number',
                type: 'tel',
                placeholder: '+254 7XX XXX XXX',
                required: true,
            },
            {
                name: 'organisation',
                label: 'Brand / Organisation',
                type: 'text',
                placeholder: 'Enter your brand or organisation name',
                required: false,
            },
        ],
    },

    projectType: {
        id: '02',
        name: 'PROJECT TYPE',
        title: 'What Are We Creating Together?',

        description:
            'Tell us what kind of collaboration you have in mind so we can better understand your project.',

        fields: [
            {
                name: 'projectType',
                label: 'Project Type',
                type: 'select',
                placeholder: 'Choose a project type',
                options: [
                    'Fashion Collection',
                    'Brand Collaboration',
                    'Creative Project',
                    'Bespoke Collection',
                    'Editorial / Photoshoot',
                    'Fashion Show',
                    'Event / Special Project',
                    'Costume Design',
                    'Other',
                ],
                required: true,
            },
            {
                name: 'collaborationRole',
                label: 'How Would You Like Purity To Be Involved?',
                type: 'select',
                placeholder: 'Choose how we can collaborate',
                options: [
                    'Design',
                    'Pattern Making',
                    'Tailoring',
                    'Garment Production',
                    'Creative Direction',
                    'Design & Production',
                    'Full Project Collaboration',
                    'Other',
                ],
                required: true,
            },
        ],
    },

    vision: {
        id: '03',
        name: 'YOUR VISION',
        title: 'Tell Us About Your Idea',

        description:
            'Share your concept, inspiration and what you would like to create together.',

        fields: [
            {
                name: 'projectName',
                label: 'Project / Collection Name',
                type: 'text',
                placeholder: 'What would you like to call the project?',
                required: false,
            },
            {
                name: 'projectDescription',
                label: 'Describe Your Vision',
                type: 'textarea',
                placeholder:
                    'Tell us about your concept, inspiration, story, aesthetic or creative direction...',
                required: true,
            },
            {
                name: 'targetAudience',
                label: 'Target Audience',
                type: 'text',
                placeholder:
                    'Who is the collection or project intended for?',
                required: false,
            },
            {
                name: 'numberOfPieces',
                label: 'Estimated Number of Pieces',
                type: 'number',
                placeholder: 'e.g. 10',
                required: false,
            },
        ],
    },

    designDetails: {
        id: '03',
        name: 'DESIGN DETAILS',
        title: 'Let’s Talk About The Details',

        description:
            'Give us an idea of the design direction, materials and aesthetic you have in mind.',

        fields: [
            {
                name: 'garmentTypes',
                label: 'Garment Types',
                type: 'multiselect',
                options: [
                    'Dresses',
                    'Evening Gowns',
                    'Ankara Wear',
                    'Two-Piece Sets',
                    'Suits',
                    'Formal Wear',
                    'Casual Wear',
                    'Bespoke Wear',
                    'Accessories',
                    'Other',
                ],
                required: true,
            },
            {
                name: 'preferredFabric',
                label: 'Preferred Fabric / Materials',
                type: 'text',
                placeholder:
                    'e.g. Ankara, cotton, satin, silk, chiffon...',
                required: false,
            },
            {
                name: 'colourPalette',
                label: 'Preferred Colour Palette',
                type: 'text',
                placeholder:
                    'Tell us about the colours you have in mind',
                required: false,
            },
            {
                name: 'designStyle',
                label: 'Design Style / Aesthetic',
                type: 'textarea',
                placeholder:
                    'Describe the style, mood or aesthetic you would like to achieve...',
                required: false,
            },
        ],
    },

    inspiration: {
        id: '05',
        name: 'INSPIRATION',
        title: 'Share Your Inspiration',

        description:
            'Upload reference images, sketches, moodboards or other materials that can help us understand your creative direction.',

        fields: [
            {
                name: 'referenceImages',
                label: 'Upload Inspiration',
                type: 'file',
                accept: 'image/*,.pdf',
                multiple: true,
                required: false,
            },
            {
                name: 'referenceLinks',
                label: 'Reference Links',
                type: 'text',
                placeholder:
                    'Paste a website, Pinterest, Instagram or other reference link',
                required: false,
            },
            {
                name: 'additionalNotes',
                label: 'Additional Notes',
                type: 'textarea',
                placeholder:
                    'Anything else you would like us to know about the project?',
                required: false,
            },
        ],
    },

    timelineBudget: {
        id: '04',
        name: 'TIMELINE & BUDGET',
        title: 'Project Timeline',

        description:
            'Understanding your timeline and budget helps us determine how we can best support your project.',

        fields: [
            {
                name: 'projectStartDate',
                label: 'Preferred Start Date',
                type: 'date',
                required: false,
            },
            {
                name: 'deadline',
                label: 'Desired Completion Date',
                type: 'date',
                required: false,
            },
            {
                name: 'budgetRange',
                label: 'Estimated Budget',
                type: 'select',
                placeholder: 'Choose a budget range',
                options: [
                    'Under KES 50,000',
                    'KES 50,000 – 100,000',
                    'KES 100,000 – 250,000',
                    'KES 250,000 – 500,000',
                    'KES 500,000+',
                    'Not Yet Decided',
                ],
                required: false,
            },
        ],
    },

    consultation: {
        id: '07',
        name: 'CONSULTATION',
        title: 'Let’s Talk',

        description:
            'Choose how you would prefer to discuss your collaboration with the Purity team.',

        fields: [
            {
                name: 'preferredContactMethod',
                label: 'Preferred Contact Method',
                type: 'select',
                placeholder: 'How should we contact you?',
                options: [
                    'WhatsApp',
                    'Phone Call',
                    'Email',
                ],
                required: true,
            },
            {
                name: 'preferredDate',
                label: 'Preferred Consultation Date',
                type: 'date',
                required: false,
            },
            {
                name: 'preferredTime',
                label: 'Preferred Time',
                type: 'select',
                placeholder: 'Select a preferred time',
                options: [
                    'Morning',
                    'Afternoon',
                    'Evening',
                    'Flexible',
                ],
                required: false,
            },
        ],
    },

    review: {
        title: 'REVIEW YOUR COLLABORATION REQUEST',

        description:
            'Take a moment to review your project details before sending your collaboration request. Our team will review your vision and get in touch to discuss the possibilities, timeline and next steps.',

        buttonText: 'SUBMIT COLLABORATION REQUEST',

        editText: 'EDIT DETAILS',
    },

    success: {
        title: 'LET’S CREATE SOMETHING BEAUTIFUL.',

        message:
            'Thank you for reaching out to Purity. We have received your collaboration request and will be in touch shortly to discuss your vision and explore how we can bring it to life together.',

        buttonText: 'BACK TO BOOKING',
    },
}