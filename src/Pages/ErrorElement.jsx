import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className='font-bold text-3xl'>There Was an Error</div>
  )
}

export default ErrorElement