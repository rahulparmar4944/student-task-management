import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Login from './pages/LOgin'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const DefaultRoute = () => {
  const authData =JSON.parse(localStorage.getItem('authData'));
  if(authData){
    return <Navigate to="/login" replace/>
  }
  return <Navigate to="/register" replace/>
}

function App() {
  const router =createBrowserRouter([

    {
      path: "/",
      element: <DefaultRoute/>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
