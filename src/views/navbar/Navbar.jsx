import React from "react";
import './nav.css';
import {NavLink} from 'react-router-dom'
function Navbar(){
  return(
    <nav>
      {/* logo */}
      <div className="logo">
        <h2>Logo</h2>
        </div>
      {/* navlinks */}
      <ul className="navlinks">
        <li><NavLink to ={'/'}>Home</NavLink></li>
        <li><NavLink to ={'/about'}>About</NavLink></li>
        </ul>
      
    </nav>
  )
}
export default Navbar