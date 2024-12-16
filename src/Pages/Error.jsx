import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Error = () => {
    const error = useRouteError()
    // console.log(error)
    if(error.status === 404){
        return (
            <div className='grid min-h-[100vh] place-items-center px-8'>
                <div className='text-center'>
                <h1 className='font-semibold text-9xl '>404</h1>
                <p className='mt-4 text-3xl font-semibold tracking-tighter sm:text-5xl '>Page Not Found</p>
                <p className='mt-4 text-lg leading-7'>Sorry we couldn't find the page you are looking for ...</p>
                <div className='btn btn-primary mt-4'>
                    <Link to='/'>Back to Home</Link>
                </div>
                </div>
            </div>
          )
    }
  return (
    <div className='grid min-h-[100vh] place-items-center px-8'>
        <h1 className='font-bold text-4xl'>There was an Error</h1>
    </div>
  )
}

export default Error