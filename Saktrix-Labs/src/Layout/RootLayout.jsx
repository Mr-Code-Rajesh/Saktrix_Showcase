import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Pages/Footer'

export const RootLayout = () => {
  return (
    <div>
         <Navbar />
      <main className="pt-18">
        <Outlet /> {/* Renders child routes */}
      </main>
      <Footer />

    </div>
  )
}










