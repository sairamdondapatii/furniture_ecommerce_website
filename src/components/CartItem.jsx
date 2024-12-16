import React from 'react'
import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../features/cart/cartSlice';
import { formatedPrice } from '../Utils';
const CartItem = ({item}) => {
    const{company , image, price, quantity,title,productColor,cartID} = item;
    const dispatch = useDispatch()
    const removeItemInCart = ()=>{
        dispatch(removeItem({cartID}))
    }
    const handleQuantity = (e)=>{
        dispatch(editItem({cartID,quantity:parseInt(e.target.value)}))
    }
  return (
    <article key={cartID}>
        <div className='mb-8 flex gap-4  lg:gap-8 lg:flex-row ' >
            <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover' />
            <div>
                <h3 className=' font-bold capitalize'>{title}</h3>
                <h4 className='mt-2 capitalize text-sm  font-semibold'>{company}</h4>
                <p className='mt-2 flex items-center gap-2 capitalize'>Color: <span className='badge badge-sm' style={{backgroundColor:productColor}}></span></p>
            </div>
            <div>
                <div className='form-control'>
                    <label htmlFor="quantity" className='label'><span className='label-text'>Quantity</span></label>
                    <select name='quantity' id='quantity'className=' select select-bordered select-sm  w-16' value={quantity} onChange={handleQuantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value='4'>4</option>
                    </select>
                </div>
                <button className='mt-2 link link-hover capitalize ' onClick={removeItemInCart} >
                    remove item
                </button>
            </div>

            <p className='ml-auto font-semibold'>{formatedPrice(price)}</p>
        </div>
    </article>
  )
}

export default CartItem