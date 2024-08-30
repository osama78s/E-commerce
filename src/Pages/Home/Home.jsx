import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Aside from './Aside/Aside';
import ProductsContent from './ProductsContent/ProductsContent';
import Pagination from './Pagination/Pagination';

const Home = () => {
  return (
    <>
      <div className='flex items-center gap-2 mt-[30px] font-secondry'>
        <Link className='text-gray' to={'/'}>Home</Link>
        <IoIosArrowForward className='text-arrow'/>
        <Link className='text-arrow' to={''}>Casual</Link>
      </div>
      <div className="flex mt-[30px] gap-[50px]">
        <Aside/>
        <div className="flex flex-col gap-5">
          <ProductsContent/>
          <Pagination/>
        </div>
      </div>
    </>
  )
}

export default Home