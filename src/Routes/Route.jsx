import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

const route = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/register',
                element : <Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }
])

export default route;