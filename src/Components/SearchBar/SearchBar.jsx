import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import locationImage from '../../assets/location.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='flex items-center justify-between gap-[50px] mt-[30px] font-secondry'>
        <div className="location flex items-center justify-between bg-offWhite rounded-md h-[55px] px-[18px] w-[270px] relative">
            <div className="flex items-center gap-2">
                <img src={locationImage}/>
                <span className='text-[17px] uppercase'>Egypt</span>
            </div>
            <IoIosArrowDown className='text-[23px]'/>
        </div>
        <div className="search bg-offWhite flex-1 relative h-[55px] rounded-md">
            <input className='searchInput outline-none border-none h-full bg- w-full bg-offWhite px-[18px] rounded-md' placeholder='Search What You Need' type="text" />
            <IoSearchOutline className='absolute right-[18px] top-1/2 transform -translate-y-1/2 text-[20px] text-gray'/> 
        </div>
        <button className='bg-blue text-white h-[55px] px-[18px] w-[180px] rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar