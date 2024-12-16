import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const Pagination = () => {
    const {metaData} = useLoaderData();
    const {page,pageSize,pageCount} = metaData.pagination
    const {search,pathname} = useLocation()
    const navigate = useNavigate()
    const pages = Array.from({length:pageCount},(_,index)=>{
        return index + 1 ;
    })
    const handlePageChange = (pageNumber)=>{
        const searchParams = new URLSearchParams(search)
        searchParams.set('page',pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }
  return (
    <div className='text-center py-8 lg:pb-16'>
        <div className='join'>
            <button className='join-item btn capitalize' onClick={()=>{
                let prvpage = page - 1 ;
                if(prvpage < 1){
                    prvpage = 1;
                }
                handlePageChange(prvpage)
            }}>previous</button>
            {pages.map((pageNo,index)=>{
                return <button className={`join-item btn border-none ${pageNo === page && 'btn-primary' }`} key={index} onClick={()=>{
                    handlePageChange(pageNo)
                }} >{pageNo}</button>
            })}
            <button className={`join-item btn capitalize`} onClick={()=>{
                let nextpage = page + 1 ;
                if(nextpage > pageCount){
                    nextpage = 1;
                }
                handlePageChange(nextpage)
            }}>next</button>
        </div>
    </div>
  )
}

export default Pagination