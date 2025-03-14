import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import store from './utils/store/store'
import Feed from './pages/Feed'
import Connections from './pages/Connections'
import Requests from './pages/Requests'
const router=createBrowserRouter([
  {path:'/',element:<AppLayout/>,children:[
    {
      path:'/', element:<Feed/>
    },
    {
      path:'login', element:<Login/>
    },
    {
      path:'profile', element:<Profile/>
    },
    {
      path:'connections', element:<Connections/>
    },
    {
      path:'requests', element:<Requests/>
    }
  ]}
])

function App() {

  return (
      <div>
        <Provider store={store}>
        <RouterProvider router={router}/>
        </Provider>
      </div>
  )
}

export default App
