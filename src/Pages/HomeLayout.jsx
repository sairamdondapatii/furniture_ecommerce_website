import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Loading, Navbar } from '../components'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <>
        <Header/>
        <Navbar/>
        <section className=' pt-8'>
          {isLoading ? <Loading/> : <Outlet/>}
        </section>
    </>
  )
}

export default HomeLayout