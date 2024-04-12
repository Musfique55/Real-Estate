import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Estatedetails from "../components/Estatedetails/Estatedetails";
import PrivateRoute from './../components/PrivateRoute/PrivateRoute';
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const route = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path: '/',
                element : <Home></Home>,
                loader: () => fetch('/stuff.json'),
            },
            {
                path: '/estate-details/:id',
                element: <PrivateRoute><Estatedetails></Estatedetails></PrivateRoute>,
                loader: () => fetch('estate.json')
            },
            {
                path: '/updateprofile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/register',
                element : <Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                
            }
        ]
    }
])

export default route;