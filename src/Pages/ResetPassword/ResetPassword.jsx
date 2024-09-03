import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

function ResetPassword() {

return (
    <div className='container font-primary'>

        <Link className='flex items-center gap-1 mt-8 ml-7 text-gray hover:text-dark transition-all duration-300 w-fit' to={-1}>
            <span className='text-2xl'><IoIosArrowRoundBack /></span>
            <span className='text-[20px]'> Back</span>
        </Link>
        <div className="content w-1/3 mt-20 mx-auto ">
            <div className=' w-full flex justify-center p-3'><img className='p-3 border w-16 border-gray rounded-lg' src={''} alt="" /></div>
            <div>
                <p className='font-semibold mt-3 mb-2 text-2xl  tracking-wider  '>Password reset</p>
                <p className='text-gray text-sm mb-3'>we send a code to <span className='text-black font-semibold'>sdasdad@gmail.com</span> </p>

                <form action="" className='flex gap-x-2'>
                    <input type="text" className='w-2/12 border border-gray rounded-lg py-3 px-2 text-center  focus:outline-[#0a3f56]' />
                    <input type="text" className='w-2/12 border border-gray rounded-lg py-3 px-2 text-center  focus:outline-[#0a3f56]' />
                    <input type="text" className='w-2/12 border border-gray rounded-lg py-3 px-2 text-center  focus:outline-[#0a3f56]' />
                    <input type="text" className='w-2/12 border border-gray rounded-lg py-3 px-2 text-center  focus:outline-[#0a3f56]' />
                    <input type="text" className='w-2/12 border border-gray rounded-lg py-3 px-2 text-center  focus:outline-[#0a3f56]' />
                    <input type="text" className='w-2/12 border border-gray rounded-lg py-3 px-2 text-center  focus:outline-[#0a3f56]' />
                </form>
                <button className='text-white hover:bg-blue2 transition-all duration-200 bg-blue py-2 px-4 rounded-lg text-center w-full mb-3 mt-7 font-semibold'>Continue</button>
                <p className='text-xs text-gray'>Didn’t receive the email?<span className='text-blue'> Click to resend </span></p>
            </div>
        </div>
    </div>
)
}

export default ResetPassword;