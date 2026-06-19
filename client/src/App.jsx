import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import Preview from './pages/Preview'
import ResumeBuilder from './pages/ResumeBuilder'
import Login from './pages/Login'
import Loader from './components/Loader'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import {Toaster} from 'react-hot-toast'
const App = () => {

const dispatch=useDispatch()
  const getUserData=async()=>
  {
    const token=localStorage.getItem('token')
    try{
       if(token)
       {
        const {data}=await api.get('/api/users/data',{headers:{Authorization:token}})
        if(data.user){
          dispatch(login({token,user: data.user}))
        }
        dispatch(setLoading(false))
       }else{
        dispatch(setLoading(false))
       }
    }catch(error)
    {
         dispatch(setLoading(false));
         console.log(error.message)
    }
  }

  useEffect(()=>{getUserData()},[])
  const { user, loading } = useSelector((state) => state.auth)

  // Loader
  if (loading) {
    return <Loader />
  }

  return (
    <>
    <Toaster/>
    <Routes>

      {/* Public Routes */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<Login />} />
      {/* Protected App */}
      <Route
        path='app'
        element={
          user ? <Layout /> : <Navigate to="/" replace />
        }
      >
        <Route
          index
          element={
            user ? <Dashboard /> : <Navigate to="/" replace />
          }
        />

        <Route
          path='builder/:resumeId'
          element={
            user ? (
              <ResumeBuilder />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Route>

      {/* Public Preview */}
      <Route
        path='view/:resumeId'
        element={<Preview />}
      />

    </Routes>
    </>
  )
}

export default App