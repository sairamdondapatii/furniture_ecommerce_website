import React from 'react'
import { useSelector } from 'react-redux'
import { CheckoutForm, Title } from '../components'
import CartTotal from '../components/CartTotal'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

export const loader =(store)=> ()=>{
  const user = store.getState().userState.user
  console.log(user)
  if(!user || user.username ==='Guest' ){
    toast.warn('you must be logged in to checkout');
    return redirect('/login')
  }
  return null;
}

const Checkout = () => {
  const cartTotal = useSelector((state)=>state.cartState.cartTotal)
  if(cartTotal === 0){
    return <Title text='Your cart is empty'/>
  }
  return (
    <>
      <Title text='Place your order'/>
      <div className=' p-8 md:p-16 mt-8 grid gap-8 md:grid-cols-2 md:items-center'>
        <CartTotal/>
        <CheckoutForm/>
    </div>
    </>
  )
}

export default Checkout