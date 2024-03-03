import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../mainComponent/Header/Header'
import Footer from '../mainComponent/Footer/Footer'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    
  )
}

export default Layout