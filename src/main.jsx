import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Route.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
    <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
    </HelmetProvider>
)
