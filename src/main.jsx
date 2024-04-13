import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Route.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
