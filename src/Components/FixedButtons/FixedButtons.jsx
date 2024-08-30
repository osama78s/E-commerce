import React, { useEffect, useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";

const FixedButtons = () => {
    
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  
    useEffect(() => {
      const handleScroll = () => {
        window.scrollY > 350 ? setScroll(true) : setScroll(false);
      }
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll)
    },[])

  return (
    <IoMdArrowDropup onClick={handleClick} className={`${ scroll ? 'bottom-[40px]' : 'bottom-[-100%]' } fixed right-[50px] bg-blue text-white w-[32px] h-[32px] rounded-md hover:bg-activeDark cursor-pointer transition-all duration-300`}></IoMdArrowDropup>
  )
}

export default FixedButtons