import React, { useState } from 'react';
import { CiLock, CiUser } from 'react-icons/ci';
import { MdOutlineMail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FaUserPen } from 'react-icons/fa6';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import animation from '../../../public/animation/Animation - 1725478898809.json';
import Lottie from 'lottie-react';

const Register = () => {
    const navigate = useNavigate();
    const cookie = new Cookies();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
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
    
        if (formData.firstName.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                firstName: 'The first name is required'
            }));
            formHasError = true;
        }
        if (formData.lastName.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                lastName: 'The last name is required'
            }));
            formHasError = true;
        }
        if (formData.email.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                email: 'The email is required'
            }));
            formHasError = true;
        }
        if (formData.gender === '') {
            setErrors((prev) => ({
                ...prev,
                gender: 'The gender is required'
            }));
            formHasError = true;
        }
        if (formData.password.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                password: 'The password is required'
            }));
            formHasError = true;
        } else if (formData.password.trim().length <= 7) {
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
        if (formData.confirmPassword.trim() !== formData.password.trim()) {
            setErrors((prev) => ({
                ...prev,
                confirmPassword: 'Passwords must match'
            }));
            formHasError = true;
        }
    
        if (formHasError) return;
    
        setLoading(true);
    
        try {
            console.log(formData)
            const res = await axios.post('https://e-commerce-production-2d41.up.railway.app/api/auth/register', formData);
            cookie.set('email', res.data.email);
            setLoading(false);
            navigate('/resetcode', { replace: true });
        } catch (error) {
            setErrors((prev) => ({
                ...prev,
                email: error.response.data.message
            }));
            setLoading(false);
            console.log(error)
        }
    };
    

    return (
        <>
            {loading && (
                <div className='fixed left-0 top-0 z-[100] w-full h-full bg-white flex items-center justify-center'>
                    <Lottie className='w-[500px]' animationData={animation} loop={true} />
                </div>
            )}
            <div className='w-2/3 mx-auto mt-10'>
                <h2 className="text-2xl font-primary font-semibold">Hi, Welcome to Luxira!</h2>
                <p className="mb-4 font-secondry text-sm text-gray">Register your account</p>
                <form onSubmit={handleSubmit} className="mb-4 flex flex-wrap justify-between">
                    <div className="flex flex-col w-[48%] mb-4">
                        <div className="mb-1 relative me-1">
                            <label className="mb-1 block font-primary" htmlFor='firstName'>First Name</label>
                            <span className='ic'><FaUserPen /></span>
                            <input onChange={handleChange} name='firstName' value={formData.firstName} placeholder="First Name" className="ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full" />
                        </div>
                        {errors.firstName && <span className='text-red font-semibold font-secondry'>{errors.firstName}</span>}
                    </div>

                    <div className="flex flex-col w-[48%] mb-4">
                        <div className="mb-1 relative me-1">
                            <label className="mb-1 block font-primary" htmlFor='lastName'>Last Name</label>
                            <span className='ic'><FaUserPen /></span>
                            <input onChange={handleChange} name='lastName' value={formData.lastName} placeholder="Last Name" className="ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full" />
                        </div>
                        {errors.lastName && <span className='text-red font-semibold font-secondry'>{errors.lastName}</span>}

                    </div>

                    <div className="flex flex-col w-[48%] mb-4">
                        <div className="mb-1 relative me-1">
                            <label className="mb-1 block font-primary" htmlFor='email'>Mobile Number or Email address</label>
                            <span className='ic'><MdOutlineMail /></span>
                            <input onChange={handleChange} name='email' value={formData.email} placeholder="email@example.com" className="ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full" />
                        </div>
                        {errors.email && <span className='text-red font-semibold font-secondry'>{errors.email}</span>}

                    </div>

                    <div className="flex flex-col w-[48%] mb-4">
                        <div className="mb-1 relative me-1">
                            <label className="mb-1 block font-primary" htmlFor='gender'>Gender</label>
                            <span className='ic'><CiUser /></span>
                            <select onChange={handleChange} name='gender' value={formData.gender} className='ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full'>
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        {errors.gender && <span className='text-red font-semibold font-secondry'>{errors.gender}</span>}

                    </div>

                    <div className="flex flex-col w-[48%] mb-4">
                        <div className="mb-1 relative me-1">
                            <span className='ic'><CiLock /></span>
                            <label className="mb-1 block font-primary" htmlFor='password'>Password</label>
                            <input onChange={handleChange} name='password' value={formData.password} type="password" placeholder="Password" className="ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full" />
                        </div>
                        {errors.password && <span className='text-red font-semibold font-secondry'>{errors.password}</span>}

                    </div>

                    <div className="flex flex-col w-[48%] mb-4">
                        <div className="mb-1 relative me-1">
                            <span className='ic'><CiLock /></span>
                            <label className="mb-1 block font-primary" htmlFor='confirmPassword'>Confirm Password</label>
                            <input onChange={handleChange} name='confirmPassword' value={formData.confirmPassword} type="password" placeholder="Confirm Password" className="ps-9 focus:outline-none rounded-lg py-2 px-3 border border-gray w-full" />
                        </div>
                        {errors.confirmPassword && <span className='text-red font-semibold font-secondry'>{errors.confirmPassword}</span>}

                    </div>

                    <button type="submit" className={`text-white hover:bg-blue2 transition-all duration-200 bg-blue py-2 px-4 rounded-lg text-center w-full mb-3 mt-7 font-semibold`}>Register</button>
                </form>

                <div className="text-center">
                    <p className={`or text-gray text-sm font-secondry`}>Or Login With</p>
                </div>

                <div className="flex items-center py-2 mb-4 px-4 mt-10 rounded-lg w-full border cursor-pointer border-gray justify-center">
                    <span className="pt-1 me-1 text-2xl"><FcGoogle /></span>
                    <span className="font-secondry text-sm">Sign up with Google</span>
                </div>
            </div>
        </>
    );
};

export default Register;
