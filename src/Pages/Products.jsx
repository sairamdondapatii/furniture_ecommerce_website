import React from 'react'
import { customFetch } from '../Utils'
import { ChangeLayout, Filters, Pagination } from '../components';
const url = '/products'

export const loader = async ({request})=>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const response = await customFetch(url,{params:params,});
  const productsData = response.data.data;
  const metaData = response.data.meta
  return {productsData, metaData,params};
}

const Products = () => {
  return (
    <section className='lg:max-w-6xl mx-auto'>
      <Filters/>
      <ChangeLayout/>
      <Pagination/>
    </section>
  )
}

export default Products