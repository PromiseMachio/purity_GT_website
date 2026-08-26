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

    ]

}
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
    process:[
        {
            id:'01',
            heading:'Consultation',
            text:'Tell us what you have in mind.'

        },
        {
            id:'02',
            heading:'Measurements',
            text:'Accurate measurements for a beautiful fit.'
        },
        {
            id:'03',
            heading:'Design & Fabric',
            text:'Refine the design and select the perfect fabric.'
        },
        {
            id:'04',
            heading:'Tailoring',
            text:'Your garment is carefully cut and stitched.'
        },
        {
            id:'05',
            heading:'Final Fitting',
            text:'Final adjustments for the perfect finish.',
            
        }
    ]
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