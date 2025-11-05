import { createBrowserRouter, Router } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Orders from "./pages/Orders";
import Contact from "./pages/contact";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                index:true,
                element:<Home/>
            },

            {
                path:"collection",
                element:<Collection/>
            },

            {
                path:"about",
                element:<About/>
            },

            {
                path:"contact",
                element:<Contact/>
            },

            { 
                path:"product",
                element:<Product/>
            },

            {
                path:"cart",
                element:<Cart/>
            },

            {
                path:"login",
                element:<Login/>
            },

            {
                path:"placeorder",
                element:<PlaceOrder/>
            },{
                path:"product/:productId",
                element:<Product/>
            },

            {
                path:"orders",
                element:<Orders/>
            }
        ]
    }
]);

export default router;