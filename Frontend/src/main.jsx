import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import router from './Router.jsx'
import Home from './pages/Home.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(

    <ShopContextProvider>
      <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
    </ShopContextProvider>
 
)
