import React, { useState } from 'react'
import { COURSE, FITTING } from '../data/bookingConstants'
// const initialFormData = {
//   firstname: '',
//   lastname: '',
//   email: '',
//   phone: '',
//   gender: '',

//   garmentType: '',
//   occasion: '',
//   fabric: '',
//   colour: '',
//   description: '',

//   bust: '',
//   waist: '',
//   hips: '',
//   shoulder: '',
//   sleeveLength: '',
//   armhole: '',
//   dressLength: '',
//   trouserLength: '',
// }

// const [formData, setFormData] = useState(initialFormData)

// const [status, setStatus] = useState({
//   type: '',
//   message: ''
// })
// const handleChange = (e) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value
//   });
// }

// const handleSubmit = (e) => {
//   e.preventDefault()

//   // Required fields
//   if (
//     !formData.firstname ||
//     !formData.phone ||
//     !formData.gender ||
//     !formData.garmentType ||
//     !formData.occasion ||
//     !formData.description
//   ) {
//     setStatus({
//       type: 'error',
//       message: 'Please fill in all the required fields.'
//     })

//     return
//   }

//   // Email validation - only if provided
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//   if (formData.email && !emailRegex.test(formData.email)) {
//     setStatus({
//       type: 'error',
//       message: 'Please enter a valid email address.'
//     })

//     return
//   }

//   // Success
//   setStatus({
//     type: 'success',
//     message: `Dear ${formData.firstname} 😇, thank you for contacting me. I will reach back to you as soon as possible.`
//   })

//   // Reset form
//   setFormData(initialFormData)

//   // Remove message after 5 seconds
//   setTimeout(() => {
//     setStatus({
//       type: '',
//       message: ''
//     })
//   }, 5000)
// }




export const About_youcourse = ({ formData, handleChange }) => {
    return (
        <div className='bg-black/20 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-black/30 relative overflow-hidden'>

            <div className='absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none'></div>

            <div className='flex gap-3 items-center mb-6 relative z-10'>
                <p className='text-2xl sm:text-3xl fashion-font text-amber-500 font-normal tracking-wide'>{COURSE.aboutYou.id}</p>
                <div className='w-16 sm:w-24 h-px bg-gradient-to-r from-amber-500 to-transparent'></div>
            </div>

            <div className='text-left space-y-2 lg:space-y-3 mb-8 relative z-10'>
                <p className='text-sm lg:text-2xl tracking-[0.18em] uppercase text-amber-500/80 font-medium'>{COURSE.aboutYou.name}</p>
                <p className='text-xl lg:text-2xl tracking-wide text-cyan-400 fashion-font'>{COURSE.aboutYou.title}</p>
                <p className='text-sm lg:text-base leading-7 tracking-wide text-gray-300 paragraph-font max-w-2xl'>{COURSE.aboutYou.description}</p>
            </div>

            <div className='space-y-6 relative z-10'>

                <div>
                    <label htmlFor="names" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                        Names
                    </label>
                    <input type="text" id='names' name='names' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Alan Doe' value={formData.names} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="phone" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                        Phone Number
                    </label>
                    <input type="text" id='phone' name='phone' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='+254 7XX XXX XXX' min='10' max='13' value={formData.phone} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                        Email <span className='text-xs text-white/30 fashion-font ml-1'>optional</span>
                    </label>
                    <input type="email" id='email' name='email' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Type your email...' value={formData.email} onChange={handleChange} />
                </div>

                <div className='flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10 pt-2'>

                    <div className='w-full lg:w-auto'>
                        <label htmlFor='genderr' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>Gender</label>

                        <div className='flex items-center gap-3'>
                            <label className='flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white transition-all duration-300'>
                                <input type='radio' id='male' name='genderr' value='male' checked={formData.genderr === 'male'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer' />
                                <span className='text-sm paragraph-font'>Male</span>
                            </label>

                            <label className='flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white transition-all duration-300'>
                                <input type='radio' id='female' name='genderr' value='female' checked={formData.genderr === 'female'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer' />
                                <span className='text-sm paragraph-font'>Female</span>
                            </label>
                        </div>
                    </div>

                    <div className='w-full lg:w-auto'>
                        <label htmlFor="ageGroup" className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>Age Group</label>

                        <select className='w-full lg:w-48 px-4 py-2.5 bg-white/[0.04] text-gray-200 border border-white/10 rounded-xl outline-none cursor-pointer focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
                            <option className='text-black' value='' default>Your age group</option>
                            <option className='text-black' value='young'>Under 18</option>
                            <option className='text-black' value='mid18'>18 – 24</option>
                            <option className='text-black' value='mid20'>25 – 34</option>
                            <option className='text-black' value='early30'>35 – 44</option>
                            <option className='text-black' value='aged'>45 +</option>
                        </select>
                    </div>

                </div>

            </div>
        </div>
    )
}








export const Intrest = ({ formData, setFormData, handleChange }) => {

    return (
        <div className='bg-black/20 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-black/30 relative overflow-hidden'>

            <div className='absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none' />

            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none' />

            <div className='flex gap-3 items-center mb-6 relative z-10'>
                <p className='text-2xl sm:text-3xl fashion-font text-amber-500 font-normal tracking-wide'>
                    {COURSE.interests.id}
                </p>

                <div className='w-16 sm:w-24 h-px bg-gradient-to-r from-amber-500 to-transparent' />
            </div>

            <div className='text-left space-y-2 lg:space-y-3 mb-8 relative z-10'>

                <p className='text-sm lg:text-2xl tracking-[0.18em] uppercase text-amber-500/80 font-medium'>
                    {COURSE.interests.name}
                </p>

                <p className='text-xl lg:text-2xl tracking-wide text-cyan-400 fashion-font'>
                    {COURSE.interests.title}
                </p>

                <p className='text-sm lg:text-base leading-7 tracking-wide text-gray-300 paragraph-font max-w-2xl'>
                    {COURSE.interests.description}
                </p>

            </div>

            <div className='space-y-8 relative z-10'>

                <div>

                    <label htmlFor='interests' className='block text-sm font-medium text-amber-400 paragraph-font mb-4 tracking-wide'>
                        Areas of Interest
                    </label>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Fashion Design' checked={formData.interests?.includes('Fashion Design')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Fashion Design</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Sewing' checked={formData.interests?.includes('Sewing')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Sewing</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Pattern Making' checked={formData.interests?.includes('Pattern Making')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Pattern Making</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Garment Construction' checked={formData.interests?.includes('Garment Construction')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Garment Construction</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Measurements & Fitting' checked={formData.interests?.includes('Measurements & Fitting')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Measurements & Fitting</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Fabric Selection' checked={formData.interests?.includes('Fabric Selection')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Fabric Selection</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Garment Finishing' checked={formData.interests?.includes('Garment Finishing')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Garment Finishing</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Basic Alterations' checked={formData.interests?.includes('Basic Alterations')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Basic Alterations</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Ankara Design' checked={formData.interests?.includes('Ankara Design')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Ankara Design</span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='checkbox' name='interests' value='Bespoke Tailoring' checked={formData.interests?.includes('Bespoke Tailoring')} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>Bespoke Tailoring</span>
                        </label>

                    </div>

                </div>

                <div className='pt-4 border-t border-white/10'>

                    <p className='text-amber-500 text-xl tracking-[0.18em] fashion-font'>
                        YOUR EXPERIENCE
                    </p>

                    <p className='text-gray-200 text-lg mt-1 paragraph-font'>
                        Tell Us About Your Experience
                    </p>

                </div>

                <div className='flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10'>

                    <div className='w-full lg:w-auto'>

                        <label htmlFor='courseLevel' className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Your Current Level
                        </label>

                        <select name='courseLevel' id='courseLevel' value={formData.courseLevel} onChange={handleChange} className='bg-white/[0.05] text-white border border-white/15 rounded-xl px-4 py-2.5 outline-none cursor-pointer focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 transition-all duration-300'>

                            <option value='' className='text-black'>
                                Select Level
                            </option>

                            <option value='beginner' className='text-black'>
                                Beginner
                            </option>

                            <option value='someExperience' className='text-black'>
                                Some Experience
                            </option>

                            <option value='intermediate' className='text-black'>
                                Intermediate
                            </option>

                            <option value='advanced' className='text-black'>
                                Advanced
                            </option>

                        </select>

                    </div>

                    <div className='w-full lg:flex-1'>

                        <label htmlFor='sewingMachine' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                            Have You Used a Sewing Machine Before?
                        </label>

                        <div className='flex flex-wrap items-center gap-3'>

                            <label htmlFor='yes' className='group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-white'>
                                <input type='radio' id='yes' name='sewingMachine' value='yes' checked={formData.sewingMachine === 'yes'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer' />
                                Yes
                            </label>

                            <label htmlFor='no' className='group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-white'>
                                <input type='radio' id='no' name='sewingMachine' value='no' checked={formData.sewingMachine === 'no'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer' />
                                No
                            </label>

                            <label htmlFor='aLittle' className='group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-white'>
                                <input type='radio' id='aLittle' name='sewingMachine' value='aLittle' checked={formData.sewingMachine === 'aLittle'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer' />
                                A little
                            </label>

                        </div>

                    </div>
                    <div>
                        <div className='w-full lg:flex-1'>

                            <label htmlFor='fashionExperience' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                                Have You Studied Fashion or Tailoring Before?
                            </label>

                            <div className='flex flex-wrap items-center gap-3'>

                                <label htmlFor='yess' className='group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-white'>
                                    <input type='radio' id='yess' name='fashionExperience' value='yess' checked={formData.fashionExperience === 'yess'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer' />
                                    Yes
                                </label>

                                <label htmlFor='noo' className='group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-white'>
                                    <input type='radio' id='noo' name='fashionExperience' value='noo' checked={formData.fashionExperience === 'noo'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer' />
                                    No
                                </label>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export const Learning = ({ formData, handleChange }) => {

    return (
        <div className='bg-black/20 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-black/30 relative overflow-hidden'>

            <div className='absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none' />

            <div className='flex gap-3 items-center mb-6 relative z-10'>
                <p className='text-2xl sm:text-3xl fashion-font text-amber-500 font-normal tracking-wide'>
                    {COURSE.preferences.id}
                </p>

                <div className='w-16 sm:w-24 h-px bg-gradient-to-r from-amber-500 to-transparent' />
            </div>

            <div className='text-left space-y-2 lg:space-y-3 mb-8 relative z-10'>

                <p className='text-sm lg:text-2xl tracking-[0.18em] uppercase text-amber-500/80 font-medium'>
                    {COURSE.preferences.name}
                </p>

                <p className='text-xl lg:text-2xl tracking-wide text-cyan-400 fashion-font'>
                    {COURSE.preferences.title}
                </p>

                <p className='text-sm lg:text-base leading-7 tracking-wide text-gray-300 paragraph-font max-w-2xl'>
                    {COURSE.preferences.description}
                </p>

            </div>

            <div className='space-y-8 relative z-10'>

                <div className='w-full'>

                    <label htmlFor='learningFormat' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Preferred Learning Format
                    </label>

                    <div className='flex flex-nowrap items-center gap-3 overflow-x-auto pb-1'>

                        <label htmlFor='physical' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='physical' name='learningFormat' value='physical' checked={formData.learningFormat === 'physical'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Physical</span>
                        </label>

                        <label htmlFor='online' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='online' name='learningFormat' value='online' checked={formData.learningFormat === 'online'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Online</span>
                        </label>

                        <label htmlFor='hybrid' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='hybrid' name='learningFormat' value='hybrid' checked={formData.learningFormat === 'hybrid'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Hybrid</span>
                        </label>

                    </div>

                </div>

                <div className='w-full'>

                    <label htmlFor='schedule' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Preferred Schedule
                    </label>

                    <div className='flex flex-nowrap items-center gap-3 overflow-x-auto pb-1'>

                        <label htmlFor='weekdays' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='weekdays' name='schedule' value='weekdays' checked={formData.schedule === 'weekdays'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Weekdays</span>
                        </label>

                        <label htmlFor='weekends' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='weekends' name='schedule' value='weekends' checked={formData.schedule === 'weekends'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Weekends</span>
                        </label>

                        <label htmlFor='flexible' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='flexible' name='schedule' value='flexible' checked={formData.schedule === 'flexible'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Flexible</span>
                        </label>

                    </div>

                </div>

                <div className='w-full'>

                    <label htmlFor='preferredTime' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Preferred Time
                    </label>

                    <div className='flex flex-nowrap items-center gap-3 overflow-x-auto pb-1'>

                        <label htmlFor='morning' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='morning' name='preferredTime' value='morning' checked={formData.preferredTime === 'morning'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Morning</span>
                        </label>

                        <label htmlFor='afternoon' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='afternoon' name='preferredTime' value='afternoon' checked={formData.preferredTime === 'afternoon'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Afternoon</span>
                        </label>

                        <label htmlFor='evening' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='evening' name='preferredTime' value='evening' checked={formData.preferredTime === 'evening'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Evening</span>
                        </label>

                        <label htmlFor='flexible' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='flexible' name='preferredTime' value='flexible' checked={formData.preferredTime === 'flexible'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Flexible</span>
                        </label>

                    </div>

                </div>

                <div className='pt-5 border-t border-white/10'>

                    <p className='text-amber-500 text-xl tracking-[0.18em] fashion-font'>
                        ADDITIONAL INFORMATION
                    </p>

                    <p className='text-gray-200 text-lg mt-1 paragraph-font'>
                        Anything Else You Would Like Us To Know?
                    </p>

                </div>

                <div>

                    <label htmlFor='additionalNotes' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Additional Notes
                    </label>

                    <textarea
                        type='text'
                        id='additionalNotes'
                        name='additionalNotes'
                        className='w-full min-h-[150px] px-5 py-4 bg-white/[0.04] border border-white/10 rounded-2xl text-gray-200 placeholder:text-gray-500 placeholder:italic placeholder:tracking-wide outline-none resize-y transition-all duration-300 focus:border-amber-500/50 focus:bg-amber-500/[0.04] focus:ring-2 focus:ring-amber-500/10 hover:border-white/20'
                        placeholder='Tell us anything else about your learning goals, expectations, or what you would love to create...'
                        value={formData.additionalNotes}
                        rows={4}
                        onChange={handleChange}
                    ></textarea>

                </div>

            </div>

        </div>
    )
}



