import React, { useState } from 'react'
import { CiLock, CiUser } from 'react-icons/ci'
import { MdOutlineMail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaUserPen } from 'react-icons/fa6'

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    return (
        <div className=' w-2/3 mx-auto mt-10'>
                <h2 className="text-2xl font-primary font-semibold ">Hi, Welcome to Luxira!</h2>
                <p className="mb-4 font-secondry  text-sm text-gray" > Register your account</p>

                <form className="mb-4 flex flex-wrap justify-between ">
                    <div className="mb-4 relative w-[48%]  me-1">
                        <label className="mb-1 block  font-primary " htmlFor='FN' >First Name</label>
                        {!formData.email && <span className='ic'><FaUserPen />  </span>}
                        <input placeholder="asasd" className=" ps-9 focus:outline-none rounded-lg py-2 px-3  border border-gray w-full" id='FN' type="text" />
                    </div>
                    <div className="mb-4 relative w-[48%]  me-1">
                        <label className="mb-1 block  font-primary " htmlFor='LN' >Last Name</label>
                        {!formData.email && <span className='ic'><FaUserPen />  </span>}
                        <input placeholder="asdasd" className=" ps-9 focus:outline-none rounded-lg py-2 px-3  border border-gray w-full" id='LN' type="text" />
                    </div>
                    <div className="mb-4 relative w-[48%]  me-1">
                        <label className="mb-1 block  font-primary " htmlFor='Email' >Mobile Number or Email address</label>
                        {!formData.email && <span className='ic'><MdOutlineMail />  </span>}
                        <input placeholder="azxca@gmail.com" className=" ps-9 focus:outline-none rounded-lg py-2 px-3  border border-gray w-full" id='Email' type="text" />
                    </div>
                    <div className="mb-4 relative w-[48%]  me-1">
                        <label className="mb-1 block  font-primary " htmlFor='Email' >Gender</label>
                        {!formData.email && <span className='ic'><CiUser /> </span>}
                        <select className=' ps-9 focus:outline-none rounded-lg py-2 px-3  border border-gray w-full'>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    
                    <div className="mb-4 relative w-[48%]  me-1">
                        {!formData.password && <span className='ic'><CiLock /></span>}
                        <label className="mb-1 block  font-primary " htmlFor='Password'>Password</label>
                        <input  placeholder="Password" className=" ps-9 focus:outline-none rounded-lg py-2 px-3  border border-gray w-full" id='Password' type="password" />
                    </div>
                    <div className="mb-4 relative w-[48%]  me-1">
                        {!formData.email && <span className='ic'><CiLock /></span>}
                        <label className="mb-1 block  font-primary " htmlFor='Password'>Confirm Password</label>
                        <input  placeholder="Password" className=" ps-9 focus:outline-none rounded-lg py-2 px-3  border border-gray w-full" id='Password' type="password" />
                    </div>
                    

                    <button className={` text-white hover:bg-blue2 transition-all duration-200 bg-blue py-2 px-4 rounded-lg text-center w-full mb-3 mt-7 font-semibold`}>Register</button>
                </form>
                <div className="text-center">
                    <p className={`or text-gray text-sm font-secondry`}>Or Login With</p>
                </div>

                <div className="flex items-center py-2 px-4 mt-10 rounded-lg w-full border cursor-pointer border-gray  justify-center">
                    <span className="pt-1 me-1 text-2xl"><FcGoogle /> </span>
                    <span className="font-secondry text-sm ">sign up with Google </span>
                </div>
        </div>
    )
}

export default Register;