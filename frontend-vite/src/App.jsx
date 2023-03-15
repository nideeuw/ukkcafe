import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Table from './pages/Table';
import Menu from './pages/Menu';

const App = () => {
  const router = createBrowserRouter([
    // { path: "/", element: <div className="">hawo</div> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/", element: <Dashboard /> },
    { path: "/table", element: <Table /> },
    { path: "/menu", element: <Menu /> },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App