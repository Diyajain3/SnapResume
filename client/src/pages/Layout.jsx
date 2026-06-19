import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Layout = () => {

  const { user, loading } = useSelector((state) => state.auth)

  // Loader
  if (loading) {
    return <Loader />
  }

  // If not logged in
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // If logged in
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout