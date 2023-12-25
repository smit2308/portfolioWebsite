import React from 'react'
import { Home, Projects, Connect } from './pages'
import { Outlet, Navigate } from 'react-router-dom'

const RootLayout = () => {
  return (
    <section >

        
        <Outlet />
    </section> 
  )
}
export  default RootLayout