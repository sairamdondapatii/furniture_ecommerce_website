import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { customFetch } from '../Utils'
import { loginUser } from '../features/User/UserSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'



export const action = (store)=> async({request}) =>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try{
      const response = await customFetch.post('/auth/local',data);
      store.dispatch(loginUser(response.data));
      toast.success('Logged in sucessfully',{
        position: "bottom-left"
      })
      return redirect('/')
    } catch(error){
      toast.error(error?.response?.data?.error?.message || 'Please double check your credintinals',{
        position: "bottom-left"
      })
      return redirect('/login')
    }
  }


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginasGuestUser = async ()=>{
    try {
      const data = {
        user :{username:'Guest',
        email:'test@test.com'
        },
        jwt: 'qwertyuiop-asdfghjkl-zxcvbnm'
      }
      dispatch(loginUser(data))
      toast.success('Welcome Guest user',{
        position: "bottom-left"
      })
      navigate('/')
    } catch (error) {
      toast.error('Something went wrong',{
        position: "bottom-left"
      })
    }
  }
  return (
    <div className='h-screen grid place-items-center'>
        <Form method='POST' className='card w-96 bg-base-100 shadow-lg  gap-y-3 p-8'> 
            <h1 className='text-center text-4xl font-bold'>Login</h1>
            <FormInput label='Email' name='identifier'  type='text' />
            <FormInput label='Password' name='password' type='password' />
            <div className='flex justify-evenly mt-3'>
            <SubmitBtn text='Login'/>
            <button type='button' className='btn btn-primary text-lg' onClick={loginasGuestUser}>Guest User </button>
            </div>
            <p className='text-center'>Not a member yet? <Link to='/register' className='link link-primary link-hover capitalize'>Create account</Link></p>
        </Form>
    </div>
  )
}

export default Login