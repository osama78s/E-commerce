import React, { useState } from 'react';
import { Rating } from "flowbite-react";
import avatar1 from '../../../../../assets/CommenterAvatar (1).png';
import avatar2 from '../../../../../assets/CommenterAvatar (2).png';
import avatar3 from '../../../../../assets/CommenterAvatar.png';
import { IoIosArrowForward } from "react-icons/io";
import SimilarProducts from './SimilarProducts/SimilarProducts';

const Reviews = () => {
    const [rating, setRating] = useState(0);

    const handleRatingClick = (value) => {
        setRating(value);
    };

    return (
        <div className='py-[80px]'>
            <h1 className='text-blue text-[30px] font-secondary font-bold'>Reviews</h1>

            {/* Review 1 */}
            <div className="flex flex-col gap-5 mt-10">
                <div className="shadow-main rounded-md p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src={avatar3} alt="Reviewer" />
                            <div>
                                <h1>Omar Khaled</h1>
                                <p className='text-gray text-[13px] mt-2'>Perfect Fit and Great Quality! The fabric feels amazing, and the color hasn't faded after multiple washes. Highly recommend!</p>
                            </div>
                        </div>
                        <Rating>
                            <Rating.Star filled={true} />
                            <Rating.Star filled={true} />
                            <Rating.Star filled={true} />
                            <Rating.Star filled={true} />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                    <div className="flex gap-5 ml-16 mt-6">
                        <span className='text-dark text-[13px]'>Like</span>
                        <span className='text-dark text-[13px]'>Reply</span>
                        <span className='text-dark text-[13px]'>5m</span>
                    </div>
                </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col gap-5 mt-10">
                <div className="shadow-main rounded-md p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src={avatar1} alt="Reviewer" />
                            <div>
                                <h1>Sarah Ahmed</h1>
                                <p className='text-gray text-[13px] mt-2'>Perfect Fit and Great Quality! The fabric feels amazing, and the color hasn't faded after multiple washes. Highly recommend!</p>
                            </div>
                        </div>
                        <Rating>
                            <Rating.Star filled={true} />
                            <Rating.Star filled={true} />
                            <Rating.Star filled={true} />
                            <Rating.Star filled={false} />
                            <Rating.Star filled={false} />
                        </Rating>
                    </div>
                    <div className="flex gap-5 ml-16 mt-6">
                        <span className='text-dark text-[13px]'>Like</span>
                        <span className='text-dark text-[13px]'>Reply</span>
                        <span className='text-dark text-[13px]'>3m</span>
                    </div>
                </div>
            </div>

            {/* Post Review Form */}
            <div className="flex flex-col gap-5 mt-10">
                <div className="shadow-main rounded-md p-6 overflow-hidden">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-4 basis-[45%]">
                            <img src={avatar2} alt="User" />
                            <div className='flex-1'>
                                <h1>Your Name:</h1>
                                <input className='mt-2 outline-none border border-offWhite rounded-md p-3 w-full' placeholder='Lina Hassan' />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h1>Your email:</h1>
                            <input className='mt-2 outline-none border border-offWhite rounded-md p-3 w-full' placeholder='LinaHassan@gmail.com' />
                        </div>
                    </div>
                    <textarea className='mt-8 outline-none rounded-2xl ml-16 w-[95%] p-4 h-[120px] resize-none border border-offWhite' placeholder='Write your review...'></textarea>
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex gap-2 ml-16">
                            <span className='font-secondary'>Your Ratings:</span>
                            <Rating>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Rating.Star
                                        key={star}
                                        filled={star <= rating}
                                        onClick={() => handleRatingClick(star)}
                                        className='cursor-pointer'
                                    />
                                ))}
                            </Rating>
                        </div>
                        <button className='bg-blue rounded-md py-2 px-4 flex items-center gap-2 hover:bg-blue2 transition-all duration-300 text-white font-secondary'>Post Review<IoIosArrowForward className='mt-[1px]' /></button>
                    </div>
                </div>

                <SimilarProducts />
            </div>
        </div>
    );
}

export default Reviews;
