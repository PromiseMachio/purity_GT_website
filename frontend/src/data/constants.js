import icon from '../assets/flower_icon.jpg'
import heroImg from '../assets/heroImage.png'
import Herologo from '../assets/collection/collectionLogo.png'


// images for lookbook 
import img1 from '../assets/look1.jpg'
import img2 from '../assets/look2.jpg'
import img3 from '../assets/look3.jpg'
import img4 from '../assets/look4.jpg'
import img5 from '../assets/look5.jpg'
import image1 from '../assets/lookImg1.jpg'
import image2 from '../assets/lookImg2.jpg'
import image3 from '../assets/lookImg3.jpg'
import image4 from '../assets/lookImg4.jpg'
import image5 from '../assets/lookImg5.jpg'


// Import images for about me
import aboutme from '../assets/aboutImage1.png'
import aboutMe from '../assets/aboutImage2.png'

import serviceImage from '../assets/servicesHeroImg1.png'
import serviceImage2 from '../assets/collection/collectionPic16.png'

import courseImg from '../assets/courseImage.jpg'
import courseImg2 from '../assets/courseImg2.jpg'
import colImg from '../assets/collaborateImage.jpg'


// Importing crafting images
import craftBg from '../assets/sectionBackgroundImg1.png'
import craftingBgImg from '../assets/craftingBGimage.jpg'

export const NAV_LINKS=[
    {id:'collection', label:'Collection' },
    {id:'process', label:'Process'},
    {id:'services', label:'Services'}
]
//  name:'Touch Of Purity';
export const MAIN_INFO={
    logo:icon,
    logo2:Herologo,
    name:['TOUCH', 'OF', 'PURITY'],
    backgroundImg:heroImg,
    description:'Bespoke Fashion',
    design:'Designed around you',
    paragraph:['Thoughtfully designed and expertly tailored garments', 
        'created to celebrate your style.'],
    paragraph2:["Fashion isn't just what you wear.", 
        "It's how you feel wearing it."],
    paragraph3:["At Purity, every garment is thoughtfully designed, carefully tailored and made", "to feel uniquely yours."]
}
// About me 
export const ABOUTME={
    name:['MEET', 'PURITY'],
    intro:'The Designer',
    paragraph:[
        "Purity is a fashion designer and tailor passionate about creating elegant, well-fitted garments that reflect each client's individuality. From the first idea to the final stitch, every piece receives careful attention to detail.",
        "With roots in African textile traditions and a modern eye for silhouette and structure, Purity creates garments that honour both heritage and contemporary elegance."
    ],
    description:"Creating garments that feel as beautiful as they look.",
    image1:aboutme,
    image2:aboutMe
}

export const SERVICES={
    description:'Our craft',
    name:'WHAT WE CREATE',
    clothes:[
        {    id:'01',
             name:'Bespoke Wear',
             paragraph:'Custom garments designed around your measurements, style and personality.'},
        {    id:'02',
             name:'Ankara Collection',
             paragraph:'Contemporary African-inspired pieces crafted from carefully selected fabrics.'},
        {    id:'03',
             name:'Evening & Dinner Gowns',
             paragraph:'Elegant statement pieces designed for special occasions.'},
        {    id:'04',
             name:'Custom Designs',
             paragraph:"Bring your idea, inspiration or fabric and we'll transform it into a finished garment."}

    ],
    heroImage1:serviceImage,
    heroImage2:serviceImage2,
    courseImage: courseImg,
    courseImage2: courseImg2,
    collaborationImg: colImg
}
export const SERVICE_SECTION1 = {
    id: '01',

    label: 'LEARN THE CRAFT',

    name: 'Fashion & Tailoring Short Course',

    tagline: 'Learn the craft. Build your confidence.',

    intro:
        'A practical introduction to fashion design and tailoring for anyone ready to turn their creativity into beautifully crafted garments.',

    description:
        'Purity offers a hands-on short course designed for aspiring designers, beginners and fashion enthusiasts who want to understand the fundamentals of garment creation. The course takes you through the essential stages of bringing a fashion idea to life, from understanding fabrics and taking measurements to cutting, construction and finishing.',

    courseOverview:
        'Rather than focusing only on theory, the course encourages practical learning and creative exploration. Participants get the opportunity to understand the techniques behind well-fitted garments while developing the confidence to work on their own designs.',

    suitableFor: [
        'Beginners interested in learning fashion and tailoring',
        'Aspiring fashion designers looking to develop practical skills',
        'Fashion enthusiasts who want to understand garment construction',
        'Individuals interested in developing tailoring as a creative or business skill',
        'Anyone looking to strengthen their existing sewing and garment-making knowledge'
    ],

    whatYouWillLearn: [
        {
            id: '01',
            title: 'Introduction to Fashion Design',
            description:
                'Understand the fundamentals of fashion design, garment styles, silhouettes, proportions and how creative ideas are developed into wearable designs.'
        },
        {
            id: '02',
            title: 'Measurements & Fitting',
            description:
                'Learn how to take accurate body measurements and understand how measurements influence the fit, balance and structure of a garment.'
        },
        {
            id: '03',
            title: 'Fabric Selection',
            description:
                'Learn how to identify and select fabrics based on texture, weight, stretch, drape, colour, pattern and the intended design.'
        },
        {
            id: '04',
            title: 'Pattern & Garment Preparation',
            description:
                'Understand the basic principles of patterns, fabric preparation and positioning before cutting and construction begins.'
        },
        {
            id: '05',
            title: 'Cutting Techniques',
            description:
                'Develop practical skills in laying, marking and cutting fabric accurately while minimizing waste and maintaining the intended shape of the design.'
        },
        {
            id: '06',
            title: 'Sewing & Garment Construction',
            description:
                'Learn the fundamentals of assembling garment pieces, creating seams and constructing a garment with attention to structure and durability.'
        },
        {
            id: '07',
            title: 'Finishing Techniques',
            description:
                'Explore finishing methods that give garments a clean, professional appearance, including hems, edges, closures and other essential details.'
        },
        {
            id: '08',
            title: 'Basic Alterations',
            description:
                'Learn how to identify common fitting issues and make simple adjustments to improve comfort, shape and overall appearance.'
        },
        {
            id: '09',
            title: 'From Idea to Finished Garment',
            description:
                'Bring the skills together by developing a garment from an initial concept through preparation, construction and final finishing.'
        }
    ],

    learningApproach: {
        title: 'Practical Learning',
        description:
            'The course combines guided instruction with hands-on practice. Participants are encouraged to ask questions, experiment with techniques and develop their own creative approach to garment making.'
    },

    courseHighlights: [
        'Hands-on practical sessions',
        'Guidance from an experienced designer and tailor',
        'Small-scale, focused learning environment',
        'Real garment construction experience',
        'Individual guidance and feedback',
        'Practical techniques that can be developed beyond the course'
    ],

    requirements: [
        'No previous professional tailoring experience is required',
        'An interest in fashion, sewing or garment construction',
        'Willingness to participate in practical sessions',
        'Basic sewing equipment may be recommended depending on the course level'
    ],

    courseFormat: {
        title: 'Course Format',
        description:
            'The course is structured around practical sessions, demonstrations and guided exercises. The exact schedule, duration and learning materials can be discussed during registration based on the selected course intake.',
        options: [
            'Beginner-friendly sessions',
            'Practical demonstrations',
            'Guided hands-on exercises',
            'Individual feedback',
            'Project-based learning'
        ]
    },

    outcome: {
        title: 'What You Leave With',
        description:
            'By the end of the course, participants should have a stronger understanding of garment construction and greater confidence in approaching their own fashion projects. The goal is not simply to complete a course, but to give you practical foundations that you can continue building on.',
        highlights: [
            'A stronger foundation in garment making',
            'Improved understanding of fabrics and construction',
            'Practical experience with tailoring techniques',
            'Greater confidence in developing your own designs',
            'A foundation for further fashion and tailoring development'
        ]
    },

    note:
        'Course dates, availability, pricing and specific materials will be communicated during the enquiry and registration process.',

    cta: {
        text: 'ENQUIRE ABOUT THE COURSE',
        secondaryText: 'Have questions? Get in touch and let’s discuss the next intake.'
    },

    image: serviceImage
};

export const SERVICE_SECTION2 = {
    id: '02',

    label: 'LET’S CREATE TOGETHER',

    name: 'Designer Partnerships',

    tagline: 'Your vision. Our craft. Something beautiful.',

    intro:
        'Purity welcomes opportunities to collaborate with designers, tailors, stylists, creatives and fashion brands who share a passion for thoughtful design and exceptional craftsmanship.',

    description:
        'Great fashion is often the result of different creative minds coming together. Whether you are an emerging designer looking for skilled tailoring support, a creative developing a new collection, or a fashion brand exploring a new collaboration, Purity is open to meaningful partnerships that turn ideas into beautifully crafted garments.',

    partnershipOverview:
        'Collaboration can take many forms. From developing a single statement piece to working together on a complete collection, Purity brings practical tailoring knowledge, garment construction skills and a careful eye for detail to every project.',

    idealPartners: [
        'Fashion designers looking for a tailoring or garment-making partner',
        'Emerging designers developing their first collection',
        'Fashion brands seeking custom garment production',
        'Stylists working on editorial or fashion projects',
        'Photographers and creative directors developing fashion concepts',
        'Event organizers planning fashion showcases or exhibitions',
        'Artists and creatives exploring fashion-related projects',
        'Businesses interested in custom-designed garments or uniforms'
    ],

    collaborationTypes: [
        {
            id: '01',
            title: 'Collection Development',
            description:
                'Work together to transform creative concepts into cohesive garments and collections, from initial ideas and fabric selection to construction and finishing.'
        },
        {
            id: '02',
            title: 'Custom Garment Projects',
            description:
                'Collaborate on individual statement pieces, special garments or unique designs that require careful tailoring and attention to detail.'
        },
        {
            id: '03',
            title: 'Design & Tailoring Support',
            description:
                'If you have the creative direction but need an experienced hand to bring the garment together, Purity can contribute practical tailoring and construction expertise.'
        },
        {
            id: '04',
            title: 'Fashion Events & Showcases',
            description:
                'Partner on fashion shows, exhibitions, showcases, creative events and other opportunities that celebrate design, craftsmanship and African fashion.'
        },
        {
            id: '05',
            title: 'Creative Projects',
            description:
                'Explore collaborations with photographers, stylists, artists, content creators and other creatives looking to bring a distinctive fashion concept to life.'
        },
        {
            id: '06',
            title: 'Brand Collaborations',
            description:
                'Develop unique garments, limited collections or special projects with brands that align with Purity’s approach to thoughtful design and craftsmanship.'
        }
    ],

    whatPurityBrings: [
        'Professional garment construction and tailoring',
        'Attention to fit, structure and finishing',
        'Creative input during the design process',
        'Experience working with African-inspired fabrics',
        'Careful fabric handling and garment preparation',
        'A collaborative and flexible approach',
        'Commitment to quality and craftsmanship'
    ],

    collaborationApproach: {
        title: 'Built Around Collaboration',
        description:
            'Every partnership begins with a conversation. We take time to understand your idea, creative direction, expectations and desired outcome before determining how we can work together.',
        steps: [
            'Share your idea or project',
            'Discuss your creative direction and requirements',
            'Explore the best approach for the collaboration',
            'Agree on scope, timelines and deliverables',
            'Bring the concept to life together'
        ]
    },

    whyCollaborate: {
        title: 'Why Partner With Purity?',
        description:
            'Purity combines creativity with practical tailoring expertise. The goal of every collaboration is to create garments that not only look beautiful but are thoughtfully constructed, well-fitted and finished with care.',
        highlights: [
            'Creative and practical collaboration',
            'Attention to individual project requirements',
            'Focus on quality craftsmanship',
            'African-inspired design perspective',
            'Open communication throughout the project'
        ]
    },

    requirements: [
        'A clear description of your project or creative idea',
        'Your preferred timeline or project deadline',
        'Reference images, sketches or inspiration where available',
        'Information about the garments or collection you would like to create',
        'Any specific fabric, design or production requirements'
    ],

    note:
        'Every collaboration is different. Project scope, timelines, pricing and responsibilities will be discussed and agreed upon before work begins.',

    cta: {
        text: 'LET’S COLLABORATE',
        secondaryText:
            'Have an idea, collection or creative project in mind? Reach out and let’s start a conversation.'
    },

    image: serviceImage2
};

export const ABOUT={
    name:'MEET PURITY',
    intro:'The Designer',
    paragraph:[
        "Purity is a fashion designer and tailor passionate about creating elegant, well-fitted garments that reflect each client's individuality. From the first idea to the final stitch, every piece receives careful attention to detail.",
        "With roots in African textile traditions and a modern eye for silhouette and structure, Purity creates garments that honour both heritage and contemporary elegance."
    ]

}

export const PROCESS={
    intro:'Our approach',
    name:'FROM IDEA TO GARMENT',
   
}

export const LOOKBOOK_CONTENT=[
    {id:1,image:img1}, 
    {id:6,image:image1},
    {id:7,image:image2},
    {id:8,image:image3},
    {id:9,image:image4},
    {id:10,image:image5},

]

export const FOOTER_CONTENT=[
    {label:'Instagram', url:'https://...'},
    {label:'Facebook', url:'https://...'},
    {label:'Tiktok', url:'https://...'}
]

export const CRAFTING_CONTENT = {
    backgroundImg:craftBg,
    image:craftingBgImg,
    name:[
        'CRAFTED',
        'WITH',
        'PRECISION.'
    ],
    paragraph:['Every stitch, seam and detail is finished with care. We',
         'believe that true luxury lives in the details most people',
          'never see.'],
    stamp:''
    


}