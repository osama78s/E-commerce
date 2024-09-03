import React from 'react';
import logo from '../../assets/Rectangle 1726.png';
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';
const Footer = () => {
    return (
        <div className='bg-blue font-primary mt-5'>
            <div className='border-b border-gray flex items-center justify-between pb-10 pt-[50px] container'>
                <div>
                    <img src={logo} alt="Logo" />
                    <div className="flex gap-3 text-white mt-5 justify-center">
                        <MdFacebook className='text-[23px]' />
                        <FaInstagram className='text-[23px]' />
                        <FaXTwitter className='text-[23px]' />
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-[20px]'>Customer Sercvices</h1>
                    <div className="flex flex-col gap-3 mt-6">
                        <span className='text-[14px]'>FAQs</span>
                        <span className='text-[14px]'>Terms & Conditions</span>
                        <span className='text-[14px]'>Privacy Policy</span>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-[20px]'>Profile</h1>
                    <div className="flex flex-col gap-3 mt-6">
                        <span className='text-[14px]'>My account</span>
                        <span className='text-[14px]'>Wishlist</span>
                        <span className='text-[14px]'>Account settings</span>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-[20px]'>Contact us</h1>
                    <div className="flex flex-col gap-3 mt-6">
                        <span className='text-[14px]'>Phone: 305-555-0123</span>
                        <span className='text-[14px]'>Email: contactstore@fakemail.com</span>
                        <span className='text-[14px]'>Address: 789 Elm St. Orlando, FL 32801</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 text-white p-6">
                <span className=''>Terms of Use</span>
                <span className=''>Privacy Policy</span>
                <span className=''>© 2024 Luxira, All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;
