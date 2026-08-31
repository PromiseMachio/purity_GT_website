// Images import
import img1 from '../assets/processImages/processImage1.png'
import img2 from '../assets/processImages/processImage2.png'
import img3 from '../assets/processImages/processImage3.png'
import img4 from '../assets/processImages/processImage4.png'
import img5 from '../assets/processImages/processImage5.png'
import { MessageCircle,Palette,Ruler, Scissors, CheckCircle  } from 'lucide-react'



export const PROCESS_MAIN_INFO = {
    name: ['FROM IDEA',
        'TO GARMENT'],
    intro: 'Our approach',
    tagline:'From inspiration to creation, every detail matters.'
}
export const process = [
    {
        id: '01',
        heading: 'Consultation',
        subheading: 'Let’s bring your vision to life.',
        text: 'Tell us what you have in mind.',
        description:
            'Every beautiful garment begins with an idea. During the consultation, we take time to understand your vision, personal style, occasion, preferred silhouette, and the look you want to achieve.',
        details: [
            'Discuss your preferred design and style',
            'Understand the occasion and purpose of the garment',
            'Review inspiration, references, or existing designs',
            'Discuss fabric preferences and available options',
            'Recommend styles that complement your vision'
        ],
        duration: '30–60 minutes',
        icon: MessageCircle,
        image:img1
    },

    {
        id: '02',
        heading: 'Measurements',
        subheading: 'Precision for the perfect fit.',
        text: 'Accurate measurements for a beautiful fit.',
        description:
            'Once we understand your desired design, we take detailed measurements to create a garment that complements your body shape. Precision at this stage ensures comfort, balance, and a flattering fit.',
        details: [
            'Take accurate body measurements',
            'Consider your preferred garment length and fit',
            'Record measurements for future custom orders',
            'Discuss fit preferences such as fitted, relaxed, or structured',
            'Identify areas that may require special tailoring attention'
        ],
        duration: '20–40 minutes',
        icon: Ruler,
        image: img2
    },

    {
        id: '03',
        heading: 'Design & Fabric',
        subheading: 'Where creativity meets craftsmanship.',
        text: 'Refine the design and select the perfect fabric.',
        description:
            'The concept begins to take shape as we refine the design and select fabrics that complement the garment. We consider colour, texture, pattern, weight, movement, and the overall character of the finished piece.',
        details: [
            'Refine the garment design and silhouette',
            'Select suitable fabrics and materials',
            'Choose colours, patterns, and textures',
            'Determine placement of Ankara or Kitenge patterns',
            'Discuss finishing details, trims, buttons, and embellishments',
            'Confirm the final design before production'
        ],
        duration: '30–90 minutes',
        icon: Palette,
        image: img3
    },

    {
        id: '04',
        heading: 'Tailoring',
        subheading: 'Crafted carefully, stitch by stitch.',
        text: 'Your garment is carefully cut and stitched.',
        description:
            'This is where your design becomes a real garment. Using the agreed measurements and design, the fabric is carefully prepared, cut, shaped, and stitched with attention to structure, proportions, and finishing.',
        details: [
            'Prepare and inspect the selected fabric',
            'Create and position the necessary patterns',
            'Carefully cut the fabric according to measurements',
            'Assemble and stitch the garment',
            'Shape the garment to achieve the intended silhouette',
            'Add selected details, embellishments, and finishing touches',
            'Inspect the garment for quality and consistency'
        ],
        duration: '3–14 days',
        icon: Scissors,
        image:img4
    },

    {
        id: '05',
        heading: 'Final Fitting',
        subheading: 'The finishing touch.',
        text: 'Final adjustments for the perfect finish.',
        description:
            'Before your garment is complete, we conduct a final fitting to make sure everything feels and looks right. Any necessary adjustments are carefully made so the finished piece provides the comfort, confidence, and fit you deserve.',
        details: [
            'Try on the completed garment',
            'Evaluate the overall fit and silhouette',
            'Check garment length and proportions',
            'Make any necessary alterations',
            'Refine sleeves, waist, neckline, or other details',
            'Complete final pressing and finishing',
            'Prepare the garment for collection or delivery'
        ],
        duration: '30–60 minutes',
        icon: CheckCircle,
        image:img5
    }
];