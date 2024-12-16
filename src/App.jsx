import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { About, Cart, Checkout, Error, ErrorElement, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './Pages'
import { loader as LandingLoader } from './Pages/Landing'
import { loader as singleProductLoader } from './Pages/SingleProduct'
import {loader as productsLoader} from './Pages/Products'
import {loader as checkoutLoader} from './Pages/Checkout'
import {loader as orderLoader} from './Pages/Orders'
import {action as registerAction} from './Pages/Register'
import {action as loginAction} from './Pages/Login'
import {action as checkoutAction} from './components/CheckoutForm'
import {store} from './store'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Landing/>,
          loader:LandingLoader,
          errorElement:<ErrorElement/>,
          
        },
        {
          path:'/about',
          element:<About/>,
        },
        {
          path:'/cart',
          element:<Cart/>,
        },
        {
          path:'/checkout',
          element:<Checkout/>,
          loader:checkoutLoader(store),
          action:checkoutAction(store),
        },
        {
          path:'/orders',
          element:<Orders/>,
          loader:orderLoader(store),
        },
        {
          path:'/products',
          element:<Products/>,
          loader:productsLoader,
        },
        {
          path:'/products/:id',
          element:<SingleProduct/>,
          loader:singleProductLoader,
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Error/>,
      action:loginAction(store),
    },
    {
      path:'/register',
      element:<Register/>,
      errorElement:<Error/>,
      action:registerAction,
    },
  ],
  {future: {
    v7_relativeSplatPath: true,
  },}
  
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App