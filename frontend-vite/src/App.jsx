import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <div className="">hawo</div> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App