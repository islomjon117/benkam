import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from "../components/navbar/Navbar"
import Footer from '../components/footer/Footer'
import ScrollToTop from "../components/ScrollToTop" // pathni tekshirib ol, kerak bo‘lsa to‘g‘rilaysan

const MainLayouts = () => {
  return (
    <>
      <ScrollToTop />
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default MainLayouts
