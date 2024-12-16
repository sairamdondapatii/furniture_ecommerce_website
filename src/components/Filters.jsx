import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelection from './FormSelection'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
    const {metaData,params} = useLoaderData()
    const {search,company,category,order,price,shipping} = params;
  return (
    <div className="collapse collapse-arrow w-full bg-base-200  mb-4">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Apply Filters</div>
        <div className="collapse-content">
            <Form className=' px-8  py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center '>
                <FormInput label='Search by name' type='search' name='search' style='input-sm' defaultValue={search} />
                <FormSelection label='Select category' name='category' style='select-sm' list ={metaData.categories} defaultValue={category}/>
                <FormSelection label='Select Companies' name='company' style='select-sm' list ={metaData.companies} defaultValue={company}/>
                <FormSelection label='sort by' name='order' style='select-sm' list ={['a-z','z-a','high to low','low to high']} defaultValue={order}/>
                <FormRange label='Price' name='price' style='range-sm' defaultValue={price}/>
                <FormCheckbox label='Free Shipping' name ='shipping' style ='checkbox-sm' defaultValue={shipping}/>
                <button className='capitalize btn btn-primary btn-sm w-full'>Submit</button>
                <Link to='/products' className='btn btn-secondary btn-sm capitalize w-full'>reset</Link>
            </Form>
        </div>
    </div>
  )
}

export default Filters