import React from 'react'
import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../Utils'


export const loader = async (queryclient)=>{
  const response = await customFetch(url);
  const productsData = response.data.data
  return {productsData}
}

const url = '/products/?featured=true'
const Landing = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}

export default Landing