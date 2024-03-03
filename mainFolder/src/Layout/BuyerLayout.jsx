import React from 'react'
import { Link , Outlet } from 'react-router-dom'
// import '../mainComponent/CSS'
import '../mainComponent/Buyer/Buyer01/component/Buyer01.css'

function BuyerLayout() {
  return (
    <>
        <div className='h-36 w-42 bg-slate-600 flex justify-center items-center'>
            <Link to='insidebuyer' className='text-5xl'>card</Link>
        </div>
        <div className='search'>
            <input type="text" placeholder='Search here' className='search-box'/>
            <div className='icons'>
              <i>Icon</i>
              <i>Icon</i>
            </div>
          </div>
        <Outlet/>
    </>
    
  )
}

export default BuyerLayout