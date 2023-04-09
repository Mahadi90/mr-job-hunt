import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import ErrorPage from './components/ErrorPage'
import ApliedJob from './components/ApliedJob'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader : () => fetch('jobFeatures.json')
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/appliedjob',
        element: <ApliedJob/>
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider
router={router}
/>
)
