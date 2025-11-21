import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

const Layout = () => {
  return (
    <>
    <ToastContainer />
    <Navbar/>
     <SearchBar/>
    <Outlet/>
    <Footer/>
   
    </>
  )
}

export default Layout
