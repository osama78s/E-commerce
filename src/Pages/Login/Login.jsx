import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='w-[500px] mx-auto mt-20'>
            <h2 className="text-2xl font-primary font-semibold">Hi, Welcome to Luxira!</h2>
            <p className="mb-4 mt-2 font-secondry text-sm">
                <span className="text-gray">New here? </span> 
                <Link to={"/register"} className="text-blue underline font-bold">Create an account.</Link>
            </p>
            <form className="mb-4">
                <div className="mb-4 relative">
                    <label className="mb-2 block font-primary" htmlFor='Email'>Email address</label>
                     <span className="ic mt-[2px]"><MdOutlineMail /></span>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="azxca@gmail.com"
                        className='ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full'
                        id='Email'
                        type="text"
                    />
                </div>
                <div className="mb-4 relative">
                    <label className="mb-2 block font-primary" htmlFor='Password'>Password</label>
                    <span className="ic mt-[2px]"><CiLock /></span>
                    <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className='ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full'
                        id='Password'
                        type="password"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 mt-1" id="remember"/>
                        <label htmlFor="remember" className="cursor-pointer">Remember this device</label>
                    </div>
                    <div>
                        <Link to={"/forgotpassword"} className="text-blue font-secondry font-semibold">Forgot your password?</Link>
                    </div>
                </div>
                <button className="hover:bg-blue2 transition-all duration-200 text-white bg-blue py-2 px-4 rounded-lg text-center w-full mb-3 mt-7">
                    Log In
                </button>
            </form>
            <div className="text-center">
                <p className="or text-[#989898] text-sm font-secondry">Or Login With</p>
            </div>
            <div className="flex items-center py-2 px-4 mt-10 cursor-pointer rounded-lg w-full border border-gray justify-center">
                <span className="pt-1 me-1 text-2xl"><FcGoogle /></span>
                <span className="font-secondry text-sm">Sign up with Google</span>
            </div>
        </div>
    );
}

export default Login;
