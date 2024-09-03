import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
// import img from "../../../public/vuesax/outline/password-check.png"
import { CiLock } from 'react-icons/ci'

function SetPassword() {
  return (
    <div>
    <header className=' text-gray px-7 mt-10'>
      <Link className='flex  items-center gap-x-1' to={-1}><span className='text-2xl'><IoIosArrowRoundBack /></span><span> Back</span></Link>
    </header>

    <div className="content w-1/3 mt-7 mx-auto ">
        <div className=' w-full flex justify-center p-3'><img className='p-3 border-2 w-16 border-gray rounded-lg' src={''} alt="" /></div>
        <div className=' font-primary '>
          <p className='font-semibold mt-3 mb-2 text-2xl  tracking-wider  '>Set my new password</p>
          <p className='text-gray text-sm mb-3'>Must be at least 8 characters.</p>

          <form className='mt-8'>
              <div className='relative '>
                <label className='mb-2 block'>Password</label>
                <input className={` focus:outline-none w-full rounded-lg border border-gray py-2 px-3 ps-9`} type='text' placeholder='********'></input>
                <span className={`ic text-gray text-2xl `}><CiLock /></span>
              </div>
              <div className='relative mt-5 '>
                <label className='mb-2 block'>Confirm password</label>
                <input className={` focus:outline-none w-full rounded-lg border  border-gray py-2 px-3 ps-9`} type='text' placeholder='********'></input>
                <span className={`ic text-gray text-2xl `}><CiLock /></span>
              </div>
              <button className='w-full bg-[#115573] hover:bg-[#0a3f56] transition-all duration-200 text-white py-2 font-semibold px-3 rounded-lg mt-8'>Reset  password</button>
          </form>
        </div>
    </div>

  </div>
  )
}
export default SetPassword;
