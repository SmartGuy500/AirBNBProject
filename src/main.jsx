import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const paths = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)
