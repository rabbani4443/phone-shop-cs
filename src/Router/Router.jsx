import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";

const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/favorites',
                element: <Favorites></Favorites>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
        ]
    }
])

export default Router;