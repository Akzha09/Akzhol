import React from 'react'
import Heder from '../Heder/Heder'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Heder/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout
