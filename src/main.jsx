import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import Mental from './pages/Mental.jsx'
import Sports from './pages/Sports.jsx'
import Nutrition from './pages/Nutrition.jsx'
import FoodStore from './pages/FoodStore.jsx'
import SportsStore  from './pages/SportsStore.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import FoodRecpies from './pages/FoodRecipes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/nutrition',
    element: <Nutrition />
  },
  {
    path: '/sports',
    element: <Sports />
  },
  {
    path: '/mental',
    element: <Mental />
  },
  {
    path: '/foodstore',
    element: <FoodStore />
  },
  {
    path: '/foodrecipes',
    element: <FoodRecpies/>
  },
  {
    path: '/sportstore',
    element: <SportsStore />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
