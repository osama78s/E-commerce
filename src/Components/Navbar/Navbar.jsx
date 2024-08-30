import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between font-primary'>
      <Link to={'/'}>
        <img src={logo}/>
      </Link>
      <ul className='flex items-center gap-5'>
        <NavLink
          
          to={'/'}
          className={({ isActive }) => `hover:text-blue transition-all duration-300 ${isActive ? 'active-link' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to={'/categories'}
          className={({ isActive }) => `flex hover:text-blue items-center gap-2 transition-all duration-300 ${isActive ? 'active-link' : ''}`}
        >
          Categories
          <IoIosArrowDown className='icon text-arrow'/>     
        </NavLink>
        <NavLink
          to={'/about'}
          className={({ isActive }) => `hover:text-blue flex items-center gap-2 transition-all duration-300 ${isActive ? 'active-link' : ''}`}
        >
          About
        </NavLink>
        <NavLink
          to={'/contact'}
          className={({ isActive }) => `hover:text-blue transition-all duration-300 ${isActive ? 'active-link' : ''}`}
        >
          Contact Us
        </NavLink>
      </ul>
      <div className='flex items-center gap-5'>
        <span className='language relative font-semibold'>English</span>
        <CiHeart className='text-[25px]'/>
        <div className="flex items-center">
          <CiUser className='text-[25px]'/>
          <IoIosArrowDown className='text-arrow'/>
        </div>
        <div className="relative">
          <IoCartOutline className='text-[25px]'/>
          <span className='bg-blue absolute top-[-15px] right-[-10px] text-white rounded-full w-[18px] h-[18px] font-primary flex items-center justify-center text-[14px]'>3</span>
        </div>
        <GoBell className='text-[20px]'/>
      </div>
    </nav>
  );
}

export default Navbar;
