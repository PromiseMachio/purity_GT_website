import { COLLABORATION } from "../data/bookingConstants"

export const About_youcollaboration = ({ formData, handleChange }) => {
    return (
        <div className='bg-black/20 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-black/30 relative overflow-hidden'>

            <div className='absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none'></div>

            <div className='flex gap-3 items-center mb-6 relative z-10'>
                <p className='text-2xl sm:text-3xl fashion-font text-amber-500 font-normal tracking-wide'>{COLLABORATION.aboutYou.id}</p>
                <div className='w-16 sm:w-24 h-px bg-gradient-to-r from-amber-500 to-transparent'></div>
            </div>

            <div className='text-left space-y-2 lg:space-y-3 mb-8 relative z-10'>
                <p className='text-sm lg:text-2xl tracking-[0.18em] uppercase text-amber-500/80 font-medium'>{COLLABORATION.aboutYou.name}</p>
                <p className='text-xl lg:text-2xl tracking-wide text-cyan-400 fashion-font'>{COLLABORATION.aboutYou.title}</p>
                <p className='text-sm lg:text-base leading-7 tracking-wide text-gray-300 paragraph-font max-w-2xl'>{COLLABORATION.aboutYou.description}</p>
            </div>

            <div className='space-y-6 relative z-10'>

                <div>
                    <label htmlFor="namesss" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                        Names
                    </label>
                    <input type="text" id='namesss' name='namesss' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Alan Doe' value={formData.namesss} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="phoneee" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                        Phone Number
                    </label>
                    <input type="text" id='phoneee' name='phoneee' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='+254 7XX XXX XXX' min='10' max='13' value={formData.phoneee} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="emailll" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                        Email <span className='text-xs text-white/30 fashion-font ml-1'>optional</span>
                    </label>
                    <input type="email" id='emailll' name='emailll' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='you@example.com' value={formData.emailll} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="organisation" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                        Brand / Organisation <span className='text-xs text-white/30 fashion-font ml-1'>optional</span>
                    </label>
                    <input type="text" id='organisation' name='organisation' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Enter your brand name...' value={formData.organisation} onChange={handleChange} />
                </div>



            </div>
        </div>
    )
}

export const Project_type = ({ formData, handleChange }) => {

    return (
        <div className='bg-black/20 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-black/30 relative overflow-hidden'>

            <div className='absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none' />

            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none' />

            <div className='flex gap-3 items-center mb-6 relative z-10'>
                <p className='text-2xl sm:text-3xl fashion-font text-amber-500 font-normal tracking-wide'>
                    {COLLABORATION.projectType.id}
                </p>

                <div className='w-16 sm:w-24 h-px bg-gradient-to-r from-amber-500 to-transparent' />
            </div>

            <div className='text-left space-y-2 lg:space-y-3 mb-8 relative z-10'>

                <p className='text-sm lg:text-2xl tracking-[0.18em] uppercase text-amber-500/80 font-medium'>
                    {COLLABORATION.projectType.name}
                </p>

                <p className='text-xl lg:text-2xl tracking-wide text-cyan-400 fashion-font'>
                    {COLLABORATION.projectType.title}
                </p>

                <p className='text-sm lg:text-base leading-7 tracking-wide text-gray-300 paragraph-font max-w-2xl'>
                    {COLLABORATION.projectType.description}
                </p>

            </div>

            <div className='space-y-8 relative z-10'>


                <div>

                    <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-amber-400 paragraph-font mb-4 tracking-wide"
                    >
                        Choose a project type
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Fashion Design"
                                checked={formData.projectType?.includes("Fashion Design")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Fashion Design
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Sewing"
                                checked={formData.projectType?.includes("Sewing")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Sewing
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Pattern Making"
                                checked={formData.projectType?.includes("Pattern Making")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Pattern Making
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Garment Construction"
                                checked={formData.projectType?.includes("Garment Construction")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Garment Construction
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Measurements & Fitting"
                                checked={formData.projectType?.includes("Measurements & Fitting")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Measurements & Fitting
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Fabric Selection"
                                checked={formData.projectType?.includes("Fabric Selection")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Fabric Selection
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Garment Finishing"
                                checked={formData.projectType?.includes("Garment Finishing")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Garment Finishing
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Basic Alterations"
                                checked={formData.projectType?.includes("Basic Alterations")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Basic Alterations
                            </span>
                        </label>

                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="projectType"
                                value="Ankara Design"
                                checked={formData.projectType?.includes("Ankara Design")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Ankara Design
                            </span>
                        </label>

                    </div>

                </div>

                <div>

                    <label
                        htmlFor="collaborationRole"
                        className="block text-sm font-medium text-amber-400 paragraph-font mb-4 tracking-wide"
                    >
                        How Would You Like Purity To Be Involved?
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        {/* Design */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Design"
                                checked={formData.collaborationRole?.includes("Design")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Design
                            </span>
                        </label>

                        {/* Pattern Making */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Pattern Making"
                                checked={formData.collaborationRole?.includes("Pattern Making")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Pattern Making
                            </span>
                        </label>

                        {/* Tailoring */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Tailoring"
                                checked={formData.collaborationRole?.includes("Tailoring")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Tailoring
                            </span>
                        </label>

                        {/* Garment Construction */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Garment Construction"
                                checked={formData.collaborationRole?.includes("Garment Construction")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Garment Construction
                            </span>
                        </label>

                        {/* Creative Direction */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Creative Direction"
                                checked={formData.collaborationRole?.includes("Creative Direction")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Creative Direction
                            </span>
                        </label>

                        {/* Design & Production */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Design & Production"
                                checked={formData.collaborationRole?.includes("Design & Production")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Design & Production
                            </span>
                        </label>

                        {/* Full Project Collaboration */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Full Project Collaboration"
                                checked={formData.collaborationRole?.includes("Full Project Collaboration")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Full Project Collaboration
                            </span>
                        </label>

                        {/* Other */}
                        <label className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5">
                            <input
                                type="checkbox"
                                name="collaborationRole"
                                value="Other"
                                checked={formData.collaborationRole?.includes("Other")}
                                onChange={handleChange}
                                className="w-4 h-4 accent-amber-500 cursor-pointer shrink-0"
                            />
                            <span className="text-sm tracking-wide paragraph-font group-hover:text-amber-100">
                                Other
                            </span>
                        </label>

                    </div>

                </div>



                <div className='pt-4 border-t border-white/10'>

                    <p className='text-amber-500 text-xl tracking-[0.18em] fashion-font'>
                        YOUR VISION
                    </p>

                    <p className='text-gray-200 text-lg mt-1 paragraph-font'>
                        Tell Us About Your Idea
                    </p>

                </div>

                <div className='flex flex-col  gap-6 lg:gap-10'>

                    <div>
                        <label htmlFor="projectName" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Project / Collection Name
                        </label>
                        <input type="text" id='projectName' name='projectName' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='What would you like to call the project?' value={formData.projectName} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="projectDescription" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Describe Your Vision
                        </label>
                        <textarea type="text" id='projectDescription' name='projectDescription' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Tell us about your concept, inspiration, story, aesthetic or creative direction...' rows='4' value={formData.projectDescription} onChange={handleChange} ></textarea>
                    </div>

                    <div>
                        <label htmlFor="targetAudience" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Target Audience <span className='text-xs text-white/30 fashion-font ml-1'>optional</span>
                        </label>
                        <input type="text" id='targetAudience' name='targetAudience' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Who is the collection or project intended for?' value={formData.targetAudience} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="numberOfPieces" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Estimated Number of Pieces <span className='text-xs text-white/30 fashion-font ml-1'>optional</span>
                        </label>
                        <input type="text" id='numberOfPieces' name='numberOfPieces' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='e.g. 10' value={formData.numberOfPieces} onChange={handleChange} />
                    </div>



                </div>

            </div>

        </div>
    )
}
export const Design_details = ({ formData, handleChange }) => {

    return (
        <div className='bg-black/20 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-black/30 relative overflow-hidden'>

            <div className='absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none' />

            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none' />

            <div className='flex gap-3 items-center mb-6 relative z-10'>
                <p className='text-2xl sm:text-3xl fashion-font text-amber-500 font-normal tracking-wide'>
                    {COLLABORATION.designDetails.id}
                </p>

                <div className='w-16 sm:w-24 h-px bg-gradient-to-r from-amber-500 to-transparent' />
            </div>

            <div className='text-left space-y-2 lg:space-y-3 mb-8 relative z-10'>

                <p className='text-sm lg:text-2xl tracking-[0.18em] uppercase text-amber-500/80 font-medium'>
                    {COLLABORATION.designDetails.name}
                </p>

                <p className='text-xl lg:text-2xl tracking-wide text-cyan-400 fashion-font'>
                    {COLLABORATION.designDetails.title}
                </p>

                <p className='text-sm lg:text-base leading-7 tracking-wide text-gray-300 paragraph-font max-w-2xl'>
                    {COLLABORATION.designDetails.description}
                </p>

            </div>

            <div className='space-y-8 relative z-10'>

                <div>

                    <label htmlFor='garmentTypes' className='block text-sm font-medium text-amber-400 paragraph-font mb-4 tracking-wide'>
                        Garment Types
                    </label>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Dresses'
                                checked={formData.garmentTypes?.includes('Dresses')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Dresses
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Evening Gowns'
                                checked={formData.garmentTypes?.includes('Evening Gowns')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Evening Gowns
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Ankara Wear'
                                checked={formData.garmentTypes?.includes('Ankara Wear')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Ankara Wear
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Two-Piece Sets'
                                checked={formData.garmentTypes?.includes('Two-Piece Sets')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Two-Piece Sets
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Suits'
                                checked={formData.garmentTypes?.includes('Suits')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Suits
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Formal Wear'
                                checked={formData.garmentTypes?.includes('Formal Wear')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Formal Wear
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Casual Wear'
                                checked={formData.garmentTypes?.includes('Casual Wear')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Casual Wear
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Bespoke Wear'
                                checked={formData.garmentTypes?.includes('Bespoke Wear')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Bespoke Wear
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Accessories'
                                checked={formData.garmentTypes?.includes('Accessories')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Accessories
                            </span>
                        </label>

                        <label className='group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.07] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/5'>
                            <input
                                type='checkbox'
                                name='garmentTypes'
                                value='Other'
                                checked={formData.garmentTypes?.includes('Other')}
                                onChange={handleChange}
                                className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0'
                            />
                            <span className='text-sm tracking-wide paragraph-font group-hover:text-amber-100'>
                                Other
                            </span>
                        </label>

                    </div>

                </div>
                <div className='flex flex-col   gap-6 lg:gap-10'>

                    <div>
                        <label htmlFor="preferredFabric" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Preferred Fabric / Materials
                        </label>
                        <input type="text" id='preferredFabric' name='preferredFabric' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='e.g. Ankara, cotton, satin, silk, chiffon...' value={formData.preferredFabric} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="colourPalette" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Preferred Colour Palette
                        </label>
                        <input type="text" id='colourPalette' name='projectDescription' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Tell us about the colours you have in mind?' value={formData.colourPalette} onChange={handleChange} />                    </div>

                    <div>
                        <label htmlFor="designStyle" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Design Style / Aesthetic<span className='text-xs text-white/30 fashion-font ml-1'>optional</span>
                        </label>
                        <textarea type="text" id='designStyle' name='designStyle' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Describe the style, mood or aesthetic you would like to achieve...' rows='4' value={formData.designStyle} onChange={handleChange} ></textarea>
                    </div>
                    <div>
                        <label htmlFor="numberOfPieces" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Estimated Number of Pieces <span className='text-xs text-white/30 fashion-font ml-1'>optional</span>
                        </label>
                        <input type="text" id='numberOfPieces' name='numberOfPieces' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='e.g. 10' value={formData.numberOfPieces} onChange={handleChange} />
                    </div>



                </div>

                <div className='pt-4 border-t border-white/10'>

                    <p className='text-amber-500 text-xl tracking-[0.18em] fashion-font'>
                        INSPIRATION
                    </p>

                    <p className='text-gray-200 text-lg mt-1 paragraph-font'>
                        Share Your Inspiration
                    </p>

                </div>

                <div className='flex flex-col  gap-6 lg:gap-10'>

                    <div>
                        <label htmlFor="referenceLinks" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Project / Collection Name
                        </label>
                        <input type="text" id='referenceLinks' name='referenceLinks' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Paste a website, Pinterest, Instagram or other reference link' value={formData.referenceLinks} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="additionalNotess" className='block text-sm font-medium text-amber-400 paragraph-font mb-2 tracking-wide'>
                            Additional Notes
                        </label>
                        <textarea type="text" id='additionalNotess' name='additionalNotess' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='Anything else you would like us to know about the project?' rows='4' value={formData.additionalNotess} onChange={handleChange} ></textarea>
                    </div>

                </div>

            </div>

        </div>
    )
}

export const Timeline_budget = ({ formData, handleChange }) => {

    return (
        <div className='bg-black/20 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl shadow-black/30 relative overflow-hidden'>

            <div className='absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none' />

            <div className='flex gap-3 items-center mb-6 relative z-10'>
                <p className='text-2xl sm:text-3xl fashion-font text-amber-500 font-normal tracking-wide'>
                    {COLLABORATION.timelineBudget.id}
                </p>

                <div className='w-16 sm:w-24 h-px bg-gradient-to-r from-amber-500 to-transparent' />
            </div>

            <div className='text-left space-y-2 lg:space-y-3 mb-8 relative z-10'>

                <p className='text-sm lg:text-2xl tracking-[0.18em] uppercase text-amber-500/80 font-medium'>
                    {COLLABORATION.timelineBudget.name}
                </p>

                <p className='text-xl lg:text-2xl tracking-wide text-cyan-400 fashion-font'>
                    {COLLABORATION.timelineBudget.title}
                </p>

                <p className='text-sm lg:text-base leading-7 tracking-wide text-gray-300 paragraph-font max-w-2xl'>
                    {COLLABORATION.timelineBudget.description}
                </p>

            </div>

            <div className='space-y-8 relative z-10'>

                <div >

                    <label htmlFor='projectStartDate' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Preferred Start Date
                    </label>
                    <input type="date" id='projectStartDate' name='projectStartDate' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='DD/MM/YY' value={formData.projectStartDate} onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor='deadline' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Desired Completion Date
                    </label>
                    <input type="date" id='deadline' name='deadline' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300' placeholder='DD/MM/YY' value={formData.deadline} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor='budgetRange' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Estimated Budget
                    </label>
                    <select
                        className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300'
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange} >
                        <option className='text-black p-1 border-b border-amber-700 ' value='' default  >Select budget</option>
                        <option className='text-black p-1 border-b border-amber-700 ' value='under50k'   >Under KES 50,000</option>
                        <option className='text-black p-1 border-b border-amber-700 ' value='btwn50kand100k'   >KES 50,000 – 100,000</option>
                        <option className='text-black p-1 border-b border-amber-700 ' value='above100k'   >KES 100,000 – 250,000</option>
                        <option className='text-black p-1 border-b border-amber-700 ' value='above250K'   >KES 250,000 – 500,000</option>
                        <option className='text-black p-1 border-b border-amber-700 ' value='above500k'   >KES 500,000+</option>
                        <option className='text-black p-1 border-b border-amber-700 ' value='notDecided'   >Not Yet Decided</option>


                    </select>

                </div>
                <div className='pt-4 border-t border-white/10'>

                    <p className='text-amber-500 text-xl tracking-[0.18em] fashion-font'>
                        CONSULTATION
                    </p>

                    <p className='text-gray-200 text-lg mt-1 paragraph-font'>
                        Let’s Talk
                    </p>

                </div>

                <div>
                    <label htmlFor='preferredContactMethod' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Preferred Contact Method
                    </label>
                    <div className='flex flex-nowrap items-center gap-3 overflow-x-auto pb-1'>

                        <label htmlFor='WhatsApp' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='WhatsApp' name='preferredContactMethod' value='WhatsApp' checked={formData.preferredContactMethod === 'WhatsApp'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>WhatsApp</span>
                        </label>

                        <label htmlFor='phoneCall' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='phoneCall' name='preferredContactMethod' value='Phone Call' checked={formData.preferredContactMethod === 'Phone Call'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Phone Call</span>
                        </label>

                        <label htmlFor='Email' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='Email' name='preferredContactMethod' value='Email' checked={formData.preferredContactMethod === 'Email'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Email</span>
                        </label>

                    </div>
                </div>




                <div >

                    <label htmlFor='preferredDate' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Preferred Consultation Date
                    </label>
                    <input type="date" id='preferredDate' name='preferredDate' className='w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 hover:border-white/20 transition-all duration-300'  value={formData.preferredDate} onChange={handleChange} />
                </div>

                <div className='w-full'>

                    <label htmlFor='preferredTimee' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Preferred Time
                    </label>

                    <div className='flex flex-nowrap items-center gap-3 overflow-x-auto pb-1'>

                        <label htmlFor='morning' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='morning' name='preferredTimee' value='morning' checked={formData.preferredTimee === 'morning'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Morning</span>
                        </label>

                        <label htmlFor='afternoon' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='afternoon' name='preferredTimee' value='afternoon' checked={formData.preferredTimee === 'afternoon'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Afternoon</span>
                        </label>

                        <label htmlFor='evening' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='evening' name='preferredTimee' value='evening' checked={formData.preferredTimee === 'evening'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
                            <span className='paragraph-font tracking-wide'>Evening</span>
                        </label>

                        <label htmlFor='flexible' className='group flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 cursor-pointer whitespace-nowrap transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white hover:shadow-lg hover:shadow-amber-500/5'>
                            <input type='radio' id='flexible' name='preferredTimee' value='flexible' checked={formData.preferredTimee === 'flexible'} onChange={handleChange} className='w-4 h-4 accent-amber-500 cursor-pointer shrink-0' />
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

                    <label htmlFor='additionalNotess' className='block text-sm font-medium text-amber-400 paragraph-font mb-3 tracking-wide'>
                        Additional Notes
                    </label>

                    <textarea
                        type='text'
                        id='additionalNotess'
                        name='additionalNotess'
                        className='w-full min-h-[150px] px-5 py-4 bg-white/[0.04] border border-white/10 rounded-2xl text-gray-200 placeholder:text-gray-500 placeholder:italic placeholder:tracking-wide outline-none resize-y transition-all duration-300 focus:border-amber-500/50 focus:bg-amber-500/[0.04] focus:ring-2 focus:ring-amber-500/10 hover:border-white/20'
                        placeholder='Tell us anything else about your learning goals, expectations, or what you would love to create...'
                        value={formData.additionalNotess}
                        rows={4}
                        onChange={handleChange}
                    ></textarea>

                </div>

            </div>

        </div>
    )
}