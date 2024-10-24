
import React from 'react'
import {Outlet} from 'react-router';
import Navbar from '../navbar/Navbar'
export default function Layout(){
  return(
   <>
   <section className='wrapper container'>
    <header>
      <Navbar/>
    </header>
    {/* {/ <main></main> */} 
    <main className='mainContent'>
      <Outlet/>
    </main>
    <footer>
      <h4>@copyright</h4>
    </footer>
   </section>
   </>
  )
}