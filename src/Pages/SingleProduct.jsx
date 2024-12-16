import React, { useState } from 'react'
import { customFetch, formatedPrice } from '../Utils'
import { Link, useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'


export const loader = async ({params})=>{
  const response = await customFetch(`/products/${params.id}`)
  const products = response.data.data
  return{products}
}
const SingleProduct = () => {
    const {products} = useLoaderData()
    const {price,image,title,description,colors,company} = products.attributes;
    const [productColor,setProductColor] = useState(colors[0])
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleQuantity = (e)=>{
      setQuantity(parseInt(e.target.value))
    }

    const cartProduct =  {
      cartID:products.id + productColor,
      productID: products.id,
      image,
      title,
      price,
      productColor,
      company,
      quantity,
    }

    const handleCart = ()=>{
      dispatch(addItem({product:cartProduct}))
    }
  return (
    <section className=' p-8 lg:p-16 lg:pt-0'>
      <div className='text-md breadcrumbs'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>
      <div className='mt-6 grid lg:grid-cols-2 lg:max-w-6xl mx-auto gap-y-6 lg:gap-x-16'>
        <div>
          <img src={image} className='h-72 lg:h-96 rounded-xl w-96 lg:w-full object-cover' />
        </div>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-3xl capitalize font-bold'>{title}</h1>
          <p className='text-xl text-neutral-content font-bold'>{company}</p>
          <p className='mt-6 text-xl'>{formatedPrice(price)}</p>
          <p className='mt-6 leading-6'>{description}</p>
        </div>
        <div className='flex flex-wrap justify-between items-center'>
          <div>
            <h4 className='text-xl tracking-wide'>Colors/Variants</h4>
            <div className='mt-2'>
              {colors.map((color)=>{
                return (
                <button 
                  type='button' 
                  key={color} 
                  className={`badge w-10 h-6 mr-2 ${color === productColor && "border-2 border-secondary"}`} 
                  style={{backgroundColor:color}} 
                  onClick={()=> setProductColor(color)}>
                </button>)
              })}
            </div>
          </div>
          <div>
            <label className='label'><h4 className='tracking-wide text-md text-xl '>Select Quantity</h4></label>
            <select value={quantity} className='select select-bordered w-full max-w-16 select-sm' onChange={handleQuantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 lg:gap-10'>
          <button type='button' disabled className='btn btn-secondary cursor-not-allowed' >Buy Now</button>
          <button type='button' className='btn btn-secondary' onClick={handleCart}>Add to cart</button>
        </div>
      </div>
      
    </section>
  )
}

export default SingleProduct;