import React from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
const curoselImages = [hero1,hero2,hero3,hero4]

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-16 gap-11'>
        <div>
            <h1 className='max-w-2xl text-4xl font-bold sm:text-6xl tracking-tight'>This is store where you can shop anything you want</h1>
            <p className='mt-8 max-w-2xl text-xl leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe maiores nesciunt at numquam deleniti error! Dolor, quas tempore qui voluptas esse nobis, quibusdam quidem consequuntur aut ex culpa doloribus.</p>
            <div className='pt-10'> 
                <Link to='/products' className='btn btn-primary'>Our Products</Link>
            </div>
        </div>
        <div className=" hidden lg:carousel carousel-center h-32 lg:h-[25rem] space-x-4  rounded-box">
            {curoselImages.map((image,index)=>{
                return(
                    <div key={image} className="carousel-item">
                        <img src={image} className='rounded-box h-full object-cover w-96'/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Hero