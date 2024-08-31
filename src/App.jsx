import React from 'react'
import Home from './pages/home'
import Login from './pages/login'
import Sobre from './pages/sobre'
import Participantes from './pages/participantes'
import Equipamentos from './pages/equipamentos'
import Funcoes from "./pages/funcoes"
import {createBrowserRouter,RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/sobre",
    element:<Sobre />
  },
  {
    path:"/participantes",
    element:<Participantes/>
  },
  {
    path:"/equipamentos",
    element:<Equipamentos/>
  },
  {
    path:"/funcoes",
    element:<Funcoes/>
  },
  
])

 function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
