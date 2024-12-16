import React from 'react'
import { useSelector } from 'react-redux'
import { CartItemsList, Title } from '../components'
import { Link } from 'react-router-dom'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const noOfItems =  useSelector((state)=>state.cartState.numberOfItemsInCart)
  const user = useSelector((state)=>state.userState.user);
  if(noOfItems === 0){
    return <Title text='Your cart is empty'/>
  }
  return (
    <div className='lg:max-w-6xl lg:mx-auto'>
      <Title text='Cart'/>
      <div className='grid lg:gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList/>
        </div>
        <div className='pt-8 lg:col-span-4 lg:pt-16 lg:pl-8 m-8 lg:m-0'>
          <CartTotal/>
          {user ? <Link to='/checkout' className='btn btn-primary btn-block'>Proceed to checkout</Link> : <Link to='/login' className='btn btn-primary btn-block'>Login to Order</Link>}
        </div>
      </div>
    </div>
  )
}

export default Cart