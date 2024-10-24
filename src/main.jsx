import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './views/home/Home.jsx'
import About from  './views/about/About.jsx'
import Layout from './views/layout/Layout.jsx';
// import Navbar from './views/navbar/Navbar.jsx';
import AboutCompany from './views/aboutcompany/AboutCompany.jsx'
import Error from './views/error/Error.jsx'
import Movie from './views/movie/Movie.jsx';
import MovieDetails from './views/movie/MovieDetails.jsx';


const route = createBrowserRouter(
  [
    {
      path:'/',
      element : <Layout/>,
      children:[
    {
      path:'/',
      element : <Home/>
    },
    {
      path:'/movies',
      element:<Movie/>
    },
    {
      path:'/movies/:id',
      element:<MovieDetails/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'about',
   children:[
    {
      path:'company',
      element:<AboutCompany/>
    }
   ]
    },
  ]
},
{
  path:"*",
  element:<Error/>
}
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router = {route}></RouterProvider>
  </StrictMode>,
)
