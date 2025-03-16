
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
export const MainLayout = () => {
  return (
    <div>
        <div className='pt-16'>
        <Navbar/>
        <Outlet/>
        </div>

    </div>
  )
}
