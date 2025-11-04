import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const Layout = () => {
  return (
    <>
    <Navbar/>
     <SearchBar/>
    <Outlet/>
    <Footer/>
   
    </>
  )
}

export default Layout
