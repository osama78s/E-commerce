import React, { useEffect, useState } from 'react'
import { Rating } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../Redux/Reducers/Products';
import animation from '../../../../public/animation/Animation - 1723806227222.json';
import Lottie from 'lottie-react';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

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
                    <Link to={`/home/${product._id}`} key={index}>
                        <div className="p-4 shadow-main rounded-xl">
                            <div className="flex items-center justify-center relative">
                                <CiHeart className='absolute right-[20px] top-[10px] bg-white rounded-full text-[30px] text-blue p-1' />
                                <img src={product.images[0].url} className='w-[320px]' alt="" />
                            </div>
                            <div className="p-2 flex flex-col gap-1">
                                <span className='font-semibold text-[17px]'>{product.name}</span>
                                <div className='flex items-center gap-2'>
                                    <span className='font-bold text-red'>${product.price}</span>
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
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ProductsContent