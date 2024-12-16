import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../Utils';
import { OrdersList, Pagination, Title } from '../components';

export const loader = (store)=> async ({request})=>{
  const user = store.getState().userState.user;
  if(!user || user.username==='Guest'){
    toast.warn('you must be login to view orders')
    return redirect('/login')

  }
 try {
  const response = await customFetch('/orders',{
    headers:{
        Authorization:`Bearer ${user.token}`
    }
});
return {orders:response.data.data, metaData:response.data.meta}
  
 } catch (error) {
  toast.error(error?.response?.data?.error?.message || 'Some thing went wrong try again later',{
    position: "bottom-left"
  })
  return redirect('/login')
 }
}

const Orders = () => {
  const {metaData} = useLoaderData()
  if(metaData.pagination.total < 1){
    return <Title text='no orders found'/>
  }
  return (
    <>
    <Title text ='Your Orders'/>
    <OrdersList/>
    <Pagination/>
    </>
  )
}

export default Orders