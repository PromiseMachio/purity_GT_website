import React, { useState } from 'react'
import { FITTING } from '../data/bookingConstants'
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


export const Aboutcard = ({ formData, handleChange }) => {
  return (
    <div className='bg-white/5 border border-white/20 p-8 rounded-2xl'>
      <div className='flex gap-3 items-center'>
        <p className='text-2xl fashion-font text-amber-500 font-normal'>{FITTING.aboutYou.id}</p>
        <div className='w-25 border border-amber-500' />
      </div>
      <div className='text-left space-y-2 lg:space-y-3'>
        <p className='text-sm lg:text-2xl tracking-normal text-amber-800 '>{FITTING.aboutYou.name}</p>
        <p className='text-xm lg:text-lg tracking-normal text-cyan-500 fashion-font'>{FITTING.aboutYou.title}</p>
        <p className='text-xm lg:text-sm tracking-normal text-gray-50 paragraph-font'>{FITTING.aboutYou.description}</p>
      </div>
      <div className='space-y-6'>
        <div>
          <label htmlFor="names" className='block text-sm font-medium text-amber-500 paragraph-font mb-2'>
            Names
          </label>
          <input
            type="text"
            id='names'
            name='names'
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            placeholder='Type your name.'
            value={formData.names}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className='block text-sm text-amber-500 paragraph-font mb-2'>
            phone number
          </label>
          <input
            type="text"
            id='phone'
            name='phone'
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            placeholder='Type your phone number.'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className='block text-sm text-amber-500 paragraph-font mb-2'>
            Email <span className='text-sm text-white/35 fashion-font' >optional</span>
          </label>
          <input
            type="email"
            id='email'
            name='email'
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            placeholder='Type your email.'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-4 '>
          <span className='block text-sm font-medium text-amber-500 paragraph-font mb-2'>
            Gender
          </span>
          <div className='flex items-center gap-6'>
            <label htmlFor="male" className='flex items-center gap-2 text-white cursor-pointer'>
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className='w-4 h-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300'
              />
              Male
            </label>

            <label htmlFor="female" className='flex items-center gap-2 text-white cursor-pointer'>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className='w-4 h-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300'
              />
              Female
            </label>
          </div>
          <div>
            <label htmlFor="age" className='block text-sm font-medium text-amber-500 paragraph-font mb-2' >Age *yrs</label>
              <input
                type="number"
                id="age"
                name="age"
                min="5"
                max="90"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-20 border rounded px-2 py-1 text-white"
              />
            
          </div>
        </div>


      </div>

    </div>
  )
}


export const Measumentcard = ({ formData, handleChange }) => {

  return (
    <div className='bg-white/5 border border-white/20 p-8 rounded-2xl'>
      <div className='flex gap-3 items-center'>
        <p className='text-2xl fashion-font text-amber-500 font-normal'>{FITTING.measurements.id}</p>
        <div className='w-25 border border-amber-500' />
      </div>
      <div className='text-left space-y-2 lg:space-y-3'>
        <p className='text-sm lg:text-2xl tracking-normal text-amber-800 '>{FITTING.measurements.name}</p>
        <p className='text-xm lg:text-lg tracking-normal text-cyan-500 fashion-font'>{FITTING.measurements.title}</p>
        <p className='text-xm lg:text-sm tracking-normal text-gray-50 paragraph-font'>{FITTING.measurements.description}</p>
      </div>
      <div className='space-y-6'>
        <div className='flex items-center gap-6'>
          {/* left side  */}
          <div>
            <div>
              <label htmlFor="bust" className='block text-sm font-medium text-amber-500 paragraph-font mb-1 mt-2'>
                Bust
              </label>
              <input
                type="number"
                id='bust'
                name='bust'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.bust}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="waist" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1'>
                Waist
              </label>
              <input
                type="number"
                id='waist'
                name='waist'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.waist}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="hips" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1'>
                Hips
              </label>
              <input
                type="number"
                id='hips'
                name='hips'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.hips}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="shoulder" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1'>
                Shoulder
              </label>
              <input
                type="number"
                id='shoulder'
                name='shoulder'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.shoulder}
                onChange={handleChange}
              />
            </div>


          </div>
          <div className='w-fit text-left'>
            <div>
              <label htmlFor="armhole" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1 mt-2'>
                Armhole
              </label>
              <input
                type="number"
                id='armhole'
                name='armhole'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.armhole}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="dressLength" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1'>
                Dress Length
              </label>
              <input
                type="number"
                id='dressLength'
                name='dressLength'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.dressLength}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="sleeveLength" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1'>
                Sleeve Length
              </label>
              <input
                type="number"
                id='sleeveLength'
                name='sleeveLength'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.sleeveLength}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="trouserLength" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1'>
                Trouser Length
              </label>
              <input
                type="number"
                id='trouserLength'
                name='trouserLength'
                className='w-18 px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                placeholder='cm'
                min='0'
                value={formData.trouserLength}
                onChange={handleChange}
              />
            </div>
          </div>

        </div>
        <p className='text-white/70 font-normal paragraph-font'>Not Sure How To Measure? <button className='border-b border-white text-amber-400 transition-all duration-300 hover:border-blue-400 hover:text-blue-500'>help</button></p>

      </div>
    </div>
  )
}



export const Garmentcard = ({ formData, handleChange }) => {

  return (
    <div className='bg-white/5 border border-white/20 p-8 rounded-2xl'>
      <div className='flex gap-3 items-center'>
        <p className='text-2xl fashion-font text-amber-500 font-normal'>{FITTING.garment.id}</p>
        <div className='w-25 border border-amber-500' />
      </div>
      <div className='text-left space-y-2 lg:space-y-3'>
        <p className='text-sm lg:text-2xl tracking-normal text-amber-800 '>{FITTING.garment.name}</p>
        <p className='text-xm lg:text-lg tracking-normal text-cyan-500 fashion-font'>{FITTING.garment.title}</p>
        <p className='text-xm lg:text-sm tracking-normal text-gray-50 paragraph-font'>{FITTING.garment.description}</p>
      </div>
      <div className='space-y-6'>
        <div>
          <label htmlFor="garmentType" className='block text-sm font-medium  text-amber-500 paragraph-font mb-1 mt-2'>
            Garment type
          </label>
          <select
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            name="garmentType"
            value={formData.garmentType}
            onChange={handleChange} >
            <option className='text-black p-1 border-b border-amber-700 ' value='' default  >Select garment</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='dress'   >Dress</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='eveningGown'   >Evening Gown</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='ankaraWear'   >Ankara Wear</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='twoPieces'   >Two-Piece Set</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='bespokeWear'   >Bespoke Wear</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='formalWear'   >Formal Wear</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='suit'   >Suit</option>
            <option className='text-black p-1 border-b border-amber-700 ' value='others'   >Others</option>

          </select>
        </div>
        <div>
          <label htmlFor="occasion" className='block text-sm font-medium text-amber-500 paragraph-font mb-1'>
            Occassion
          </label>
          <select
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            name="occasion"
            value={formData.occasion}
            onChange={handleChange} >
            <option value='' className='text-black p-1 border-b border-amber-700 ' default >Select occassion</option>
            <option value='wedding' className='text-black p-1 border-b border-amber-700  '>Wedding</option>
            <option value='dinner' className='text-black p-1 border-b border-amber-700 '  >Dinner</option>
            <option value='formalEvent' className='text-black p-1 border-b border-amber-700 ' >Formal Event</option>
            <option value='party' className='text-black p-1 border-b border-amber-700 '  >Party</option>
            <option value='casual' className='text-black p-1 border-b border-amber-700 '  >Casual</option>
            <option value='photoshoot' className='text-black p-1 border-b border-amber-700 '  >Photoshoot</option>
            <option value='others' className='text-black p-1 border-b border-amber-700 '  >Others</option>

          </select>
        </div>
        <div>
          <label htmlFor="fabric" className='block text-sm font-medium text-amber-500 paragraph-font mb-1'>
            Fabric Type <span className='text-sm text-white/35 fashion-font' >optional</span>
          </label>
          <input
            type="text"
            id='fabric'
            name='fabric'
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            placeholder='Desired fabric...'
            value={formData.fabric}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="colour" className='block text-sm font-medium text-amber-500 paragraph-font mb-1'>
            Colour <span className='text-sm text-white/35 fashion-font' >optional</span>
          </label>
          <input
            type="text"
            id='colour'
            name='colour'
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            placeholder='Desired colour...'
            value={formData.colour}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description" className='text-sm font-medium text-amber-500 paragraph-font mb-1'>
            Description <span className='text-sm text-white/35 fashion-font' >optional</span>
          </label>
          <textarea
            type="text"
            id='description'
            name='description'
            className='w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
            placeholder='Desired colour...'
            value={formData.description}
            rows={4}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-amber-500 paragraph-font mb-1"
          >
            Reference Image <span className='text-sm text-white/35 fashion-font' >optional</span>
          </label>

          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-xl
               text-white
               file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:bg-amber-500 file:text-black
               hover:file:bg-amber-400
               transition-all duration-300"
               value={formData.image}
               onChange={handleChange}
          />
        </div>


      </div>

    </div>
  )
}

