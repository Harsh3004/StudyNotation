import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
        {
          path: 'dashboard',
          element: <Dashboard/>
        },
      ]
    },
])

const Routes = () => {
  return <RouterProvider router={router}/>
}

export default Routes