import React from 'react'

const FormSelection = ({label,style,name,defaultValue,list}) => {
  return (
    <div className='form-control w-full'>
        <label className='label'><span className='label-text capitalize'>{label}</span></label>
        <select name={name} className={`select select-bordered select-sm ${style}`} defaultValue={defaultValue} id={name}>
            {list.map((item,index)=>{
                return <option key={index} value={item} className=''>{item}</option>
            })}
        </select>
    </div>

  )
}

export default FormSelection