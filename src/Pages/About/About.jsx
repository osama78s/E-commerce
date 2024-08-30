import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import img1 from '../../assets/technology 2.png';
import services from '../../assets/Services (1).png'
import services2 from '../../assets/Services (2).png'
import services3 from '../../assets/Services (3).png'
import services4 from '../../assets/Services.png';

const About = () => {
  return (
    <>
        <div className='flex items-center gap-2 mt-[30px] font-secondry'>
            <Link className='text-gray' to={'/'}>Home</Link>
            <IoIosArrowForward className='text-arrow'/>
            <Link className='text-arrow' to={''}>About</Link>
        </div>
        <div className="flex justify-between items-center font-primary font-bold">
            <div className="flex flex-col gap-4">
                <h1 className='text-dark text-[70px] uppercase'>About Us</h1>
                <p className='capitalize leading-[2.5] text-dark font-secondry font-semibold'>At E-Commerce, we believe online shopping is more than just buying products; it's an experience that reflects your needs and aspirations. Our app was created to blueefine online shopping by offering innovative solutions that provide both convenience and satisfaction. We are committed to offering a wide range of products that cater to your daily needs, whether it's electronics, clothing, or household items.</p>
            </div>
            <img src={img1} alt="Img" />
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap mt-[30px]">
            <div className="shadow-main hover:bg-blue hover:text-white text-dark transition-all duration-300 rounded-md p-[30px] flex flex-col items-center text-center gap-4 font-primary w-[24%]">
                <img src={services} className='w-[60px]' alt="" />
                <h1 className=' font-bold text-[30px]'>10.5k</h1>
                <span className=' capitalize'>Sallers active our site</span>
            </div>
            <div className="shadow-main text-white bg-blue rounded-md p-[30px] flex flex-col items-center text-center gap-4 font-primary w-[24%]">
                <img src={services4} className='w-[60px]' alt="" />
                <h1 className=' font-bold text-[30px]'>33k</h1>
                <span className=' capitalize'>Mopnthly Produduct Sale</span>
            </div>
            <div className="shadow-main hover:bg-blue hover:text-white text-dark transition-all duration-300 rounded-md p-[30px] flex flex-col items-center text-center gap-4 font-primary w-[24%]">
                <img src={services2} className='w-[60px]' alt="" />
                <h1 className=' font-bold text-[30px]'>25k</h1>
                <span className=' capitalize'>Anual gross sale in our site</span>
            </div>
            <div className="shadow-main hover:bg-blue hover:text-white text-dark transition-all duration-300 rounded-md p-[30px] flex flex-col items-center text-center gap-4 font-primary w-[24%]">
                <img src={services3} className='w-[60px]' alt="" />
                <h1 className=' font-bold text-[30px]'>45.5k</h1>
                <span className=' capitalize'>Customer active in our site</span>
            </div>
        </div>
    </>
  )
}

export default About