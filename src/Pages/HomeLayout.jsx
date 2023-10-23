import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'

const HomeLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout