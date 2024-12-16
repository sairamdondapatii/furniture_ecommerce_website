import React, { useState } from 'react'
import { formatedPrice } from '../Utils';

const FormRange = ({label,style,name,defaultValue}) => {
    const maxPrice = 100000;
    const step = 1000;
    const [selectedPrice,setSelectedPrice] = useState(defaultValue || maxPrice);
  return (
    <div className='form-control w-full'>
        <label htmlFor={name} className='label cursor-pointer' >
            <span className='label-text capitalize'>{label}</span>
            <span>{formatedPrice(selectedPrice)}</span>
        </label>
        <input id={name} type="range" name={name} min={0} max={maxPrice}  value={selectedPrice} onChange={ e => setSelectedPrice(e.target.value)} className={`range range-primary ${style}`} step={step} />
        <div className=' flex justify-between'>
            <span className='font-bold text-md'>0</span>
            <span className='font-bold text-md'>Max: {formatedPrice(maxPrice)}</span>
        </div>
    </div>
  )
}

export default FormRange
