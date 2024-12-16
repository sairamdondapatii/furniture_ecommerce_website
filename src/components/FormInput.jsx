import React from 'react'

const FormInput = ({label,type,name,defaultValue,style}) => {
  return (
    <label className="form-control w-full">
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        <input type={type} name={name} defaultValue={defaultValue} required  className={`input input-bordered ${style}`} />
    </label>
  )
}

export default FormInput