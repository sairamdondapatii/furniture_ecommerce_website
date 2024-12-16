import React from 'react'
import { useSelector } from 'react-redux'
import { formatedPrice } from '../Utils'

const CartTotal = () => {
    const {cartTotal,shipping,tax,orderTotal} = useSelector((state)=>state.cartState)
  return (
    <div className='card bg-base-200 mb-8'>
        <div className='card-body'>
            <p className='flex justify-between text-base font-semibold border-b border-base-300 pb-2'>
                <span>Subtotal</span>
                <span>{formatedPrice(cartTotal)}</span>
            </p>
            <p className='flex justify-between text-base font-semibold border-b border-base-300 pb-2'>
                <span>Shipping</span>
                <span>{formatedPrice(shipping)}</span>
            </p>
            <p className='flex justify-between text-base font-semibold border-b border-base-300 pb-2'>
                <span>Tax (0.1%)</span>
                <span>{formatedPrice(tax)}</span>
            </p>
            <p className='flex justify-between text-lg font-bold mt-4 border-base-300 '>
                <span>Order Total</span>
                <span>{formatedPrice(orderTotal)}</span>
            </p>
        </div>
    </div>
  )
}

export default CartTotal