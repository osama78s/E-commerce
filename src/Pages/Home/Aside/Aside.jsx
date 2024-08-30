import React from 'react';
import { HiAdjustmentsVertical } from "react-icons/hi2";
import CategoryNames from './CategoryNames/CategoryNames';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import Size from './Size/Size';
import DressStyle from './DressStyle/DressStyle';
import './Aside.css';

const Aside = () => {

    return (
        <div className='border border-offWhite rounded-3xl w-[270px] h-fit sticky left-0 top-[20px]'>
            <div className="flex items-center justify-between border-b-2 border-main pb-4 p-[20px]">
                <h1 className='font-primary font-semibold text-dark text-[25px] tracking-wide'>Filters</h1>
                <HiAdjustmentsVertical className='text-[27px] text-blue' />
            </div>
            <CategoryNames/>
            <Price/>
            <Colors/>
            <Size/>
            <DressStyle/>
            <button className='text-white bg-blue rounded-md px-6 py-2 my-4 font-secondry block mx-auto'>Apply Filter</button>
        </div>
    );
}

export default Aside;
