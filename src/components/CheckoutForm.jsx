import React from 'react'
import { customFetch, formatedPrice } from '../Utils';
import { clearCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SbmitBtn from './SbmitBtn';

export const action = (store)=> async({request})=>{
    const formData = await request.formData();
    const {name,address} = Object.fromEntries(formData)
    const user = store.getState().userState.user
    const {cartItem, orderTotal, numberOfItemsInCart} = store.getState().cartState;

    const info={
        name,
        address,
        chargeTotal:orderTotal,
        orderTotal:formatedPrice(orderTotal),
        cartItems:cartItem,
        numItemsInCart:numberOfItemsInCart
    }
    try {
        const response = await customFetch.post('/orders',{data : info},{
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        });
        
        store.dispatch(clearCart())
        toast.success('Order placed sucefully')
        return redirect('/orders')
        
    } catch (error) {
        
        toast.error(error?.response?.data?.error?.message || 'something went wrong',{
            position: "bottom-left"
          })
          return null
    }
}

const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4 md:px-16'>
        <h4 className='font-medium text-xl'>Shipping Information</h4>
        <FormInput type='text' label='Full name' name='name' />
        <FormInput type='text' label='shipping address' name='address'/>
        <div className='mt-4'>
            <SbmitBtn text='Place Order' block='btn-block'/>
        </div>
    </Form>
  )
}

export default CheckoutForm