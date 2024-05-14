import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from '../routes/Product.jsx'
import ErrorPage from '../routes/ErrorPage.jsx'
import Home from '../routes/Home.jsx'
import EditForm from '../routes/EditForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/product/:id/info',
        element: <EditForm />
      }
    ]
  },
  // {
  //   path: '/product',
  //   element: <Product />
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
