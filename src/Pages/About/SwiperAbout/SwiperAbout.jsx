import React from 'react'

const SwiperAbout = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="relative w-[300px] rounded-xl shadow-lg overflow-hidden">
                {/* صورة */}
                <img
                    className="w-full h-[380px] object-cover"
                    src="src/assets/myPhoto.jpg"
                    alt="Osama Saif"
                />

            <div className="absolute bottom-0 left-0 w-full px-6 py-3 text-center bg-[#f5f5f5] shadow-lg">
            <h1 className="text-black text-lg md:text-xl font-semibold">Osama Saif</h1>
            <p className="text-gray-700 text-sm md:text-base font-medium">Full Stack Developer</p>
            </div>  
            </div>
        </div>
    )
}

export default SwiperAbout
