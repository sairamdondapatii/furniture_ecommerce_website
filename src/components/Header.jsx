import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/User/UserSlice';
import { clearCart } from '../features/cart/cartSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.userState.user)
  const handleLogout = ()=>{
    dispatch(logoutUser())
    navigate('/')
    dispatch(clearCart())
  }
  return (
    <header className='bg-neutral text-neutral-content py-2'>
        <div className='content-style py-2 flex justify-center sm:justify-end'>
          {user ? (
            <div className='flex gap-x-6 justify-center text-xs sm:text-sm items-center'>
              <p>Hello, {user.username}</p>
              <button className='capitalize link link-hover link-primary' onClick={handleLogout}>logout</button>
            </div>
          ) : (
            <div className='flex gap-x-6 justify-center items-center'>
              <Link to='/login' className='link link-hover text-xs sm:text-sm'>Sign in</Link>
              <Link to='/register' className='link link-hover text-xs sm:text-sm'>Create Account</Link>
           </div>
          )}
        </div>
    </header>
  )
}

export default Header