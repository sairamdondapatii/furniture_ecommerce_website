import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { formatedPrice } from '../Utils';

const ProductsList = () => {
    const {productsData,metaData} = useLoaderData()
  return (
    <div className='px-8 flex flex-col gap-4'>
        {productsData.map((product)=>{
          const {price,image,title,company} = product.attributes;
          return( 
          <Link to={`/products/${product.id}`} key={product.id} className='flex p-2 lg:p-8 rounded-lg   sm:flex-row  items-center bg-base-100 shadow-md hover:shadow-lg duration-300'>
            <figure className='px-3 pt-3'>
                <img src={image} className='h-24 rounded-xl w-24 object-cover sm:h-32 sm:w-32 hover:scale-105 duration-300 transition-transform' />
            </figure>
            <div className=''>
                <h2 className=' font-bold tracking-wider text-primary capitalize'>{title}</h2>
                <h4 className='capitalize font-semibold'>{company}</h4>
            </div>
            <p className='font-semibold ml-auto'>{formatedPrice(price)}</p>
          </Link>)
        })}
    </div>
  )
}

export default ProductsList