import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
// import img from "../../../public/vuesax/outline/password-check.png"
import { CiLock } from 'react-icons/ci'
import Cookies from 'universal-cookie'
import axios from 'axios';
import animation from '../../../public/animation/Animation - 1725478898809.json';
import Lottie from 'lottie-react';
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

function SetPassword() {
  const cookie = new Cookies();
  const userId = cookie.get('userId');
  const token = cookie.get('token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: ''
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formHasError = false;

    if (formData.password.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        password: 'The password is required'
      }));
      formHasError = true;
    } else if (formData.password.trim().length <= 7){
      setErrors((prev) => ({
        ...prev,
        password: 'Password too short'
      }));
      formHasError = true;
    }

    if (formData.confirmPassword.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: 'The confirm password is required'
      }));
      formHasError = true;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: 'Passwords do not match'
      }));
      formHasError = true;
    }

    if (formHasError) return;

    setLoading(true);

    try {
      const res = await axios.post(`https://e-commerce-production-2d41.up.railway.app/password/rest-password/${userId}/${token}`, formData);
      cookie.remove('userId');
      cookie.remove('token');
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <>
      {loading && (
        <div className='fixed left-0 top-0 z-[100] w-full h-full bg-white flex items-center justify-center'>
          <Lottie className='w-[500px]' animationData={animation} loop={true} />
        </div>
      )}
      <div className="container font-primary">

        <Link className='flex items-center gap-1 mt-8 ml-7 text-gray hover:text-dark transition-all duration-300 w-fit' to={-1}>
          <span className='text-2xl'><IoIosArrowRoundBack /></span>
          <span className='text-[20px]'> Back</span>
        </Link>

        <div className="content w-1/3 mt-7 mx-auto ">
          <div className=' w-full flex justify-center p-3'><img className='p-3 border-2 w-16 border-gray rounded-lg' src={''} alt="" /></div>
          <div className=' font-primary '>
            <p className='font-semibold mt-3 mb-2 text-2xl  tracking-wider  '>Set my new password</p>
            <p className='text-gray text-sm mb-3'>Must be at least 8 characters.</p>

            <form onSubmit={handleSubmit} className='mt-8'>
              <div className='relative '>
                <label className='mb-2 block'>Password</label>
                <input onChange={handleChange} value={formData.password} name='password' className={` focus:outline-none w-full rounded-lg border border-gray py-2 px-3 ps-9`} type='password' placeholder='********'></input>
                <span className={`ic text-gray text-2xl `}><CiLock /></span>
              </div>
              {errors.password && <span className='text-red font-semibold font-secondry mb-2 block'>{errors.password}</span>}

              <div className='relative mt-5 '>
                <label className='mb-2 block'>Confirm password</label>
                <input onChange={handleChange} value={formData.confirmPassword} name='confirmPassword' className={` focus:outline-none w-full rounded-lg border  border-gray py-2 px-3 ps-9`} type='password' placeholder='********'></input>
                <span className={`ic text-gray text-2xl `}><CiLock /></span>
              </div>
              {errors.confirmPassword && <span className='text-red font-semibold font-secondry mb-2 block'>{errors.confirmPassword}</span>}
              
              <button className='w-full bg-[#115573] hover:bg-[#0a3f56] transition-all duration-200 text-white py-2 font-semibold px-3 rounded-lg mt-8'>Reset  password</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
export default SetPassword;
