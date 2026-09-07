import React from 'react'
import { HERO_BOOKING } from '../../data/bookingConstants'

const Booking_hero = () => {
    return (
        <section className='relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden bg-linear-to-tl from-gray-900 via-gray-700 to-gray-300' style={{ backgroundImage: `url(${HERO_BOOKING.image1})` }}>
            <div className='relative max-w-7xl w-full items-center sm:px-6 lg:py-10'>
                <div className='flex flex-col lg:flex-row items-center justify-center '>
                    <div className='text-center space-y-4 items-center justify-center mx-2'>
                        <div className='items-center justify-center'>
                            <p className='text-sm text-amber-600 uppercase tracking-normal paragraph-font'>Bookings</p>
                        </div>

                        <div className='text-center tracking-normal'>
                            <p className='text-2xl lg:text-6xl tracking-normal uppercase text-cyan-600'>{HERO_BOOKING.name}</p>
                        </div>
                        <div className='flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 max-w-7xl mx-auto p-4'>
                            {HERO_BOOKING.options.map((link) => (
                                <div
                                    key={link.id}
                                    className='relative flex-1 group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-6 lg:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                                >
                                    {/* Ambient Neon Background Glow (Hidden by default, fades in on hover) */}
                                    <div className='absolute -inset-px bg-gradient-to-br from-cyan-500/20 via-blue-600/0 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10' />

                                    {/* Header / ID Section */}
                                    <div className='flex items-center gap-3 mb-6'>
                                        <span className='fashion-font text-xl lg:text-3xl font-bold tracking-wider text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]'>
                                            {link.id}
                                        </span>
                                        <div className='h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent w-16' />
                                    </div>

                                    {/* Content Section */}
                                    <div className='text-left space-y-3'>
                                        <p className='text-white text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-cyan-300'>
                                            {link.name}
                                        </p>
                                        <p className='text-xs lg:text-sm font-medium tracking-wide uppercase text-cyan-40 drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]'>
                                            {link.title}
                                        </p>
                                        <p className='text-slate-400 paragraph-font text-sm leading-relaxed tracking-normal transition-colors duration-300 group-hover:text-slate-300'>
                                            {link.description}
                                        </p>
                                    </div>

                                    {/* Bottom Controls / Action Section */}
                                    <div className='text-left mt-8 flex flex-col justify-end h-auto'>
                                        <p className='text-purple-400 font-mono text-xs uppercase tracking-widest mb-3'>
                    // {link.type}
                                        </p>

                                        {/* Electric Styled Button */}
                                        <button className='relative overflow-hidden w-full lg:w-fit border border-cyan-500/40 text-cyan-400 px-5 py-2.5 bg-cyan-950/20 text-xs font-semibold tracking-widest uppercase rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98]'>
                                            {link.buttonText}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Booking_hero