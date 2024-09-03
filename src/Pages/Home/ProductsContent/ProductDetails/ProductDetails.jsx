import axios from 'axios';
import React, { useEffect } from 'react'
import { Rating } from "flowbite-react";
import { useParams } from 'react-router-dom'
import img1 from '../../../../assets/image 1.png'
import img2 from '../../../../assets/image 5.png'
import img3 from '../../../../assets/image 6.png'
import avatar1 from '../../../../assets/image 6.png'
import avatar2 from '../../../../assets/image 6.png'
import avatar3 from '../../../../assets/image 6.png'
import Reviews from './Reviews/Reviews';

const ProductDetails = () => {
  const { id } = useParams();

  // useEffect(() => {
  //     const fetchProduct = async () => {
  //         try{
  //             const res = await axios.get(`https://e-commerce-production-2d41.up.railway.app/api/products/${id}`);
  //             console.log(res)
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     }
  //     fetchProduct();
  // }, [id])

  return (
    <div className='container pt-[60px] font-primary'>
      <div className="flex gap-10">
        <div className="flex gap-5">
          <div className="flex flex-col gap-4 justify-center">
            <img className='w-[200px]' src={img1} alt="" />
            <img className='w-[200px]' src={img2} alt="" />
            <img className='w-[200px]' src={img3} alt="" />
          </div>
          <img className='bg-offWhite rounded-xl w-[500px]' src={img1} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className='text-[40px] font-semibold'>One Life Graphic T-shirt</h1>
          <Rating className='flex gap-1'>
            <Rating.Star className='text-[50px]' />
            <Rating.Star className='text-[50px]' />
            <Rating.Star className='text-[50px]' />
            <Rating.Star className='text-[50px]' />
            <Rating.Star className='text-[50px]' filled={false} />
          </Rating>
          <span className='font-bold text-[25px]'>$260</span>
          <p className='text-gray border-b border-offWhite pb-5 pt-4 leading-7'>"Elevate Your Everyday Style with Our Premium T-Shirt – Soft, Comfortable, and Perfect for Any Occasion!"</p>
          <div className='pt-2'>
            <span className='mb-4 block text-gray'>Colors</span>
            <div className="flex gap-2 border-b border-offWhite pb-6">
              <span className='w-[30px] h-[30px] rounded-full bg-red cursor-pointer z-[100] inline-block' />
              <span className='w-[30px] h-[30px] rounded-full bg-blue cursor-pointer z-[100] inline-block' />
              <span className='w-[30px] h-[30px] rounded-full bg-black cursor-pointer z-[100] inline-block' />
            </div>
          </div>
          <div className="text-gray pt-3 pb-4 border-b border-offWhite">
            <span>Size</span>
            <div className="flex gap-4 mt-4">
              <button className='bg-offWhite rounded-md hover:bg-blue transition-all duration-300 px-4 py-2 hover:text-white'>Small</button>
              <button className='bg-offWhite rounded-md hover:bg-blue transition-all duration-300 px-4 py-2 hover:text-white'>Meduim</button>
              <button className='bg-offWhite rounded-md hover:bg-blue transition-all duration-300 px-4 py-2 hover:text-white'>Large</button>
              <button className='bg-offWhite rounded-md hover:bg-blue transition-all duration-300 px-4 py-2 hover:text-white'>X-Large</button>
            </div>
          </div>
          <div className="flex items-center mt-2 gap-20">
              <div className="flex justify-between  w-[150px] py-2 bg-offWhite rounded-md px-3 items-center">
              <button className="cursor-pointer text-[20px]">-</button>
              <span className='text-[20px]'>1</span>
              <button className='cursor-pointer text-[20px]'>+</button>
              </div>
              <button className='bg-blue text-white rounded-md px-[150px] py-3 hover:bg-blue2 transition-all duration-300'>Add To Cart</button>
          </div>
        </div>
      </div>
      <Reviews/>
    </div>
  )
}

export default ProductDetails