import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItemsList = () => {
    const cartItems = useSelector((state)=> state.cartState.cartItem)
  return (
    <section >
        <div className='lg:p-16 p-8'>
            {cartItems.map((item)=>{
                return <CartItem key={item.cartID}  item={item}/>
            })}
        </div>
    </section>
  )
}

export default CartItemsList