import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import img1 from '../../assets/Frame 893 (15).png'
import img2 from '../../assets/Frame 893 (21).png';
import img3 from '../../assets/Frame 893 (31).png';
import img4 from '../../assets/Frame 8931.png';
import { CiHeart } from "react-icons/ci";
import { Rating } from "flowbite-react";

const WhishList = () => {
    return (
        <div className='container pb-5'>
            <div className='flex items-center gap-2 mt-[30px] font-secondry'>
                <Link className='text-gray' to={'/'}>Home</Link>
                <IoIosArrowForward className='text-arrow' />
                <Link className='text-arrow'>WhishList</Link>
            </div>
            <div className="grid grid-cols-4 gap-16 mt-[30px] font-primary">
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                     <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img1} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                    <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img2} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                    <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img3} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                    <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img4} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                    <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img2} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                    <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img4} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                    <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img1} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
            <div className="p-4 shadow-main rounded-xl">
                <div className="flex items-center justify-center relative">
                    <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1'/>
                    <img src={img3} className='w-[250px]' alt="" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <span className='font-semibold text-[17px]'>Curology Product Set</span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-red'>$500</span>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                </div>
                <button className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
            </div>
        </div>
        </div>
    )
}

export default WhishList