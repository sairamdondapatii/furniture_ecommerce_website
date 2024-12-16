import React, { useState } from 'react'
import { BsFillMoonFill,BsFillSunFill, BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/User/UserSlice';


const Navbar = () => {
    
    const dispatch = useDispatch();
    const handleTheme = ()=>{
        dispatch(toggleTheme())
    }

    const cartDetails = useSelector((state)=>state.cartState)
  return (
    <nav className='bg-base-300 sticky top-0 z-10 '>
        <div className='navbar content-style'>
            <div className="navbar-start">
                <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl'>Store</NavLink>
                <div className='dropdown'>
                    <label className='btn btn-ghost lg:hidden'>
                        <FaBarsStaggered tabIndex={0} className='h-6 w-6'/>
                    </label>
                    <ul className='menu w-screen lg:hidden dropdown-content bg-base-100 z-[1] shadow-sm' tabIndex={0}>
                        <Navlinks/>
                    </ul>
                </div>
                {/* <details className="dropdown">
                    <summary className="btn  lg:hidden"><FaBarsStaggered className='h-6 w-6'/></summary>
                    <ul className='menu w-screen lg:hidden dropdown-content bg-base-100 z-[1] shadow-sm'>
                        <Navlinks/>
                    </ul>
                </details> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal' >
                    <Navlinks/>
                </ul>
            </div>
            <div className="navbar-end px-4">
                <label className="swap swap-rotate px-4">
                    <input type="checkbox" onChange={handleTheme} />
                    <BsFillSunFill className='swap-on h-6 w-6'/>
                    <BsFillMoonFill className='swap-off h-6 w-6'/>
                </label>
                <div className="indicator pl-2">
                    <span className="indicator-item badge badge-xs badge-primary text-xs">{cartDetails.numberOfItemsInCart}</span>
                    <NavLink to='/cart' ><BsCart3 className='h-6 w-6'/></NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar