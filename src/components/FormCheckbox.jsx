import React from 'react'
import FormInput from './FormInput'

const FormCheckbox = ({label,name,style,defaultValue}) => {
  return (
    <div className="form-control items-start w-full lg:items-center">
        <label className="label cursor-pointer">
            <span className="label-text">{label}</span>
        </label>
        <input type="checkbox" name={name} checked={defaultValue} defaultValue={defaultValue || true} className={`checkbox checkbox-primary ${style}`} />
    </div>
  )
}

export default FormCheckbox