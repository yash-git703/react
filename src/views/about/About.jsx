import React from "react"
import { Outlet } from "react-router"
export default function About(){
  return(
    <div>
    <h1>About parent</h1>
    <Outlet/>
    </div>
  )
}