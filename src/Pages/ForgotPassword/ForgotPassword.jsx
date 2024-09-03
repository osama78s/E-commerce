import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import img from "../../../public/vuesax/outline/finger-cricle.png"

function ForgotPassword() {
  return (
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

            <form className='mt-8'>
                <div className='relative'>
                  <label className='mb-2 block'>Eamil address</label>
                  <input className={` focus:outline-none w-full rounded-lg border  border-gray py-2 px-3 ps-9`} type='text' placeholder='Enter your email'></input>
                  <span className={`ic text-gray text-2xl mt-[2px]`}><MdOutlineMail /></span>
                </div>
                <button className='w-full bg-blue hover:bg-blue2 transition-all duration-200 text-white py-2 font-semibold px-3 rounded-lg mt-8'>Reset  password</button>
            </form>
          </div>
      </div>

    </div>
  )
}

export default ForgotPassword;