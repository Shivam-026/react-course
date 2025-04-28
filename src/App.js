import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const FoodAppContainer = () =>
    {
        return(
    <div className="main-container">
        <AppHeader/>
       <Outlet/>
    </div>
)}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <FoodAppContainer/>,
        children: [ 
            {
                path:"/",
                element: <AppBody/>,
                
            },
            {
            path:"/about",
            element: <About/>,
            
        },
        {
            path:"/contact",
            element: <Contact/>,
            
        },
        {
            path:"/reataurant/:resid",
            element: <RestaurantMenu/>,
            
        }

        ],
        errorElement: <Error/>
    },
   
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);