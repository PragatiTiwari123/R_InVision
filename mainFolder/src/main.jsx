import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout/Layout.jsx'
import BuyerLayout from './Layout/BuyerLayout.jsx'

import Home from './mainComponent/Home/Home.jsx'
import Buyer from './mainComponent/Buyer/Buyer.jsx'
import Seller from './mainComponent/Seller/Seller.jsx'
import About from './mainComponent/About/About.jsx'
import Buyer01 from './mainComponent/Buyer/Buyer01/Buyer01.jsx'
import Buyer02 from './mainComponent/Buyer/Buyer02/Buyer02.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'buyer',
//         element: <Buyer/>
//       },
//       {
//         path:'seller',
//         element: <Seller/>
//       },
//       {
//         path:'about',
//         element: <About/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='buyer' element={<BuyerLayout/>}>
        <Route path='' element={<Buyer01/>}/>
        <Route path='cards' element={<Buyer02/>}/>
        <Route path='insidebuyer' element={<Buyer/>}/>
      </Route>
      <Route path='seller' element={<Seller/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
