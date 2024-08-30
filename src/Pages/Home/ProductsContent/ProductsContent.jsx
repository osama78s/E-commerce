import React, { useEffect, useState } from 'react'
import { Rating } from "flowbite-react";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../Redux/Reducers/Products';
import animation from '../../../../public/animation/Animation - 1723806227222.json';
import Lottie from 'lottie-react';

const ProductsContent = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <>
            {loading && (
                <div className='fixed left-0 top-0 z-[100] w-full h-full bg-overlay flex items-center justify-center'>
                    <Lottie className='w-[500px]' animationData={animation} loop={true} />
                </div>
            )}
            <h1 className='text-[30px] font-bold font-primary uppercase text-dark'>Casual</h1>
            <div className="grid grid-cols-3 gap-6 mt-3 font-primary font-semibold  border-b border-offWhite pb-6">
                {products.map((product, index) => (
                    <div className="flex flex-col gap-3" key={index}>
                        <div className="bg-offWhite relative rounded-3xl">
                            <FaHeart className='absolute left-[15px] top-[15px] bg-blue text-white w-[30px] h-[30px]  p-[6px] rounded-lg' />
                            <img src={product.images[0].url} alt="" className='rounded-3xl w-[320px] p-4' />
                            <Rating className='absolute right-[15px] bottom-[15px]'>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                            </Rating>
                        </div>
                        <div className='pl-3'>
                            <h1 className='text-dark text-[20px]'>{product.name}</h1>
                            <div className="flex justify-between items-center ">
                                <span className='font-bold text-[24px] text-blue'>${product.price}</span>
                                <button className='border border-blue text-blue rounded-[50%] w-[25px] h-[25px] hover:bg-blue hover:text-white transition-all duration-300'>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductsContent