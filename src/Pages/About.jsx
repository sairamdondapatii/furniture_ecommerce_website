import React from 'react'

const About = () => {
  return (
    <section >
      <div className='flex flex-wrap gap-2 items-center justify-center'>
        <h1 className='text-3xl sm:text-5xl font-bold'>This is</h1>
        <div className='stats bg-primary shadow'>
          <div className="stat">
          <div className="stat-title text-primary-content text-2xl font-bold">
            Store
          </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg sm:text-center'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos doloremque quos facere tempore necessitatibus voluptate illum temporibus ab accusamus quidem quisquam odit iste debitis, aperiam ad amet! Architecto dolores illum, est dolorem voluptatum quisquam facere ullam voluptates beatae ipsam!</p>
    </section>
  )
}

export default About