import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { BsGridFill } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
const ChangeLayout = () => {
    const {metaData} = useLoaderData();
    const totalPrroducts = metaData.pagination.total
    const [layout, setLayout] =useState('grid')
    const iconsActiveStyle = (pattren)=>{
        return `btn btn-circle btn-sm lg:btn-md ${pattren === layout ? 'btn-secondary btn-secondary-content' : 'btn-gost text-base-content'}`
    }
  return (
    <>
        <div className='flex flex-wrap justify-between  items-center px-8'>
            <h4 className='text-xl font-semibold'>
                {totalPrroducts} product{totalPrroducts>1 && 's'}
            </h4>
            <div className='flex gap-4'>
                <button title='grid' className={iconsActiveStyle('grid')} onClick={()=> setLayout('grid')} ><BsGridFill className='lg:w-6 lg:h-6 w-4 h-4'/></button>
                <button title='Tiels' className={iconsActiveStyle('list')} onClick={()=> setLayout('list')}><BsListTask className='lg:w-6 lg:h-6 w-4 h-4'/></button>
            </div>
        </div>
        <div>
            {totalPrroducts === 0 ? <h5>Sorry no products to show</h5> : layout === 'grid' ? <ProductsGrid/> : <ProductsList/>}
        </div>
    </>
  )
}

export default ChangeLayout