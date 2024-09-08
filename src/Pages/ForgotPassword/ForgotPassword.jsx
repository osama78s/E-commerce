import axios from 'axios'
import React, { useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import animation from '../../../public/animation/Animation - 1725478898809.json';
import Lottie from 'lottie-react';
import Cookies from 'universal-cookie'

function ForgotPassword() {
  const [formData, setFormData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const cookie = new Cookies();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(e.target.value)
    setError('');
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.trim()) {
      setError('The email is required');
      return;
    }
    setLoading(true);
    try {
      console.log(formData)
      const res = await axios.post('https://e-commerce-production-2d41.up.railway.app/password/forgot-password', { email: formData});
      console.log(res.data);
      cookie.set('userId', res.data.userId);
      cookie.set('token', res.data.token);
      setLoading(false);
      navigate('/setpassword');
    } catch (error) {
      setLoading(false)
      if (error.status === 404){
        setError(error.response.data.message);
      }
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
      <div className='container font-primary'>

        <Link className='flex items-center gap-1 mt-8 ml-7 text-gray hover:text-dark transition-all duration-300 w-fit' to={-1}>
          <span className='text-2xl'><IoIosArrowRoundBack /></span>
          <span className='text-[20px]'> Back</span>
        </Link>

        <div className="content w-1/3 mt-20 mx-auto">
          <div className=' w-full flex justify-center p-3'><img className='p-3 border w-16 border-gray rounded-lg' src={''} alt="" /></div>
          <div>
            <p className='font-semibold mt-3 mb-2 text-2xl tracking-wider'>Forgot Password?</p>
            <p className='text-gray text-sm mb-3'>No worries, we&apos;ll send you reset instructions</p>

            <form onSubmit={handleSubmit} className='mt-8'>
              <div className='relative'>
                <label className='mb-2 block'>Eamil address</label>
                <input value={formData} name='formData' onChange={handleChange} className={` focus:outline-none w-full rounded-lg border  border-gray py-2 px-3 ps-9`} type='text' placeholder='Enter your email'></input>
                <span className={`ic text-gray text-2xl mt-[2px]`}><MdOutlineMail /></span>
              </div>
              {error && <span className='text-red font-secondry font-semibold block mt-1'>{error}</span>}
              <button className='w-full bg-blue hover:bg-blue2 transition-all duration-200 text-white py-2 font-semibold px-3 rounded-lg mt-8'>Reset  password</button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default ForgotPassword;