import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import animation from '../../../public/animation/Animation - 1725478898809.json';
import Lottie from 'lottie-react';
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../Redux/Reducers/Token";
import Cookies from "universal-cookie";

function Login() {
    const navigate = useNavigate();
    const { accessToken } = useSelector((state) => state.token);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const cookie = new Cookies();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // remember: false, 
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        backEnd: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors((prev) => ({
            ...prev,
            [e.target.name]: '',
            backEnd: ''
        }));

    };

    // const handleCheckboxChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         remember: e.target.checked
    //     });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formHasError = false;

        if (formData.email.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                email: 'The email is required'
            }));
            formHasError = true;
        }

        if (formData.password.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                password: 'The password is required'
            }));
            formHasError = true;
        }

        if (formHasError) return;
        setLoading(true);

        try {
            const res = await axios.post('https://e-commerce-production-2d41.up.railway.app/api/auth/login', formData)
            setLoading(false);
            cookie.set('refresh', res.data.refreshToken)
            dispatch(getToken({ accessToken: res.data.accessToken, userDetails: res.data.user }));
            navigate('/', { replace: true });
        } catch (error) {
            setLoading(false);
            setErrors((prev) => ({
                ...prev,
                backEnd: error.response.data.message,
            }))
            console.log(error);
        }
    };

    return (
        <>
            {loading && (
                <div className='fixed left-0 top-0 z-[100] w-full h-full bg-white flex items-center justify-center'>
                    <Lottie className='w-[500px]' animationData={animation} loop={true} />
                </div>
            )}
            <div className='w-[500px] mx-auto mt-20'>
                <h2 className="text-2xl font-primary font-semibold">Hi, Welcome to Luxira!</h2>
                <p className="mb-4 mt-2 font-secondry text-sm">
                    <span className="text-gray">New here? </span>
                    <Link to={"/register"} className="text-blue underline font-bold">Create an account.</Link>
                </p>
                {errors.backEnd && (
                    <Alert color="failure" icon={HiInformationCircle} className="bg-[#FDE8E8] text-red mb-2">
                        <span className="font-semibold font-secondry">{errors.backEnd}</span>
                    </Alert>
                )}
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-2 relative">
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
                    {errors.email && <span className='text-red font-semibold font-secondry mb-2 block'>{errors.email}</span>}

                    <div className="mb-2 relative">
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
                    {errors.password && <span className='text-red font-semibold font-secondry mb-2 block'>{errors.password}</span>}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1"
                                id="remember"
                            // checked={formData.remember}
                            // onChange={handleCheckboxChange}
                            />
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
                <a href="https://e-commerce-production-2d41.up.railway.app/api/auth/google/login" className="flex items-center py-2 px-4 mt-10 cursor-pointer rounded-lg w-full border border-gray justify-center">
                    <span className="pt-1 me-1 text-2xl"><FcGoogle /></span>
                    <span className="font-secondry text-sm">Sign up with Google</span>
                </a>
            </div>
        </>

    );
}

export default Login;
