import React from 'react'
import { useLoaderData } from 'react-router-dom'
import dayjs from 'dayjs';

const OrdersList = () => {
    const {orders,metaData} = useLoaderData();
  return (
    <div className='p-8 lg:p-16'>
        <h4 className='mb-4 capitalize font-semibold'>Total orders : {metaData.pagination.total}</h4>
        <div className=''> 
            <table className='table table-zebra table-xs md:table-lg'>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Address</th>
                        <th>Products</th>
                        <th>Cost</th>
                        <th className='hidden lg:block'>Date</th>
                    </tr>
                </thead>
                
                <tbody>{orders.map((order)=>{
                    const id = order.id;
                    const {name,address,numItemsInCart,orderTotal,createdAt} = order.attributes;
                    const orderDate = dayjs(createdAt).format('DD/MM/YYYY - hh:mm a');
                    return <tr key={id}>
                        <td>{name}</td>
                        <td>{address}</td>
                        <td>{numItemsInCart}</td>
                        <td>{orderTotal}</td>
                        <td className='hidden lg:block'>{orderDate}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrdersList