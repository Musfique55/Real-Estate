import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Route.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
    <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
    </HelmetProvider>
)
