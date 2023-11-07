import React from 'react'
import NavBar from '../components/Home/NavBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Root