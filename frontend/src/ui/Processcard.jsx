import React from 'react'

const Processcard = ({ process }) => {
    const {
        id,
        heading,
        subheading,
        text,
        description,
        details,
        duration,
        icon,
        image
    } = process
    const IconComponent = icon

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* LEFT - CONTENT */}
            <div className="border border-amber-600/30 rounded-3xl p-8 lg:p-10 bg-white">

                {/* Number + decorative line */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl fashion-font text-amber-600">
                        {id}
                    </span>

                    <div className="w-20 border-t border-amber-600" />
                </div>

                {/* Heading */}
                <div>
                    <h2 className="text-gray-950 font-bold text-3xl lg:text-4xl">
                        {heading}
                    </h2>

                    <p className="paragraph-font text-sm text-amber-500 uppercase mt-2">
                        {text}
                    </p>

                    <p className="text-xl fashion-font text-cyan-500 mt-3">
                        {subheading}
                    </p>

                    <p className="text-base font-normal text-gray-700 paragraph-font leading-relaxed mt-5">
                        {description}
                    </p>
                </div>

                {/* Details */}
                <div className="mt-6">
                    <ul className="space-y-2 text-sm text-gray-700 paragraph-font">
                        {details?.map((detail, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3"
                            >
                                <span className="text-amber-600 mt-1">
                                    ✦
                                </span>

                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-200">

                    <p className="text-gray-600 text-sm font-medium">
                        {duration}
                    </p>

                    <span className="text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                        {IconComponent ? <IconComponent size={24} /> : null}
                    </span>

                </div>
            </div>


            {/* RIGHT - IMAGE */}
            <div className="min-h-[450px] lg:min-h-full overflow-hidden rounded-3xl">

                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={heading}
                />

            </div>

        </div>
    )
}

export default Processcard