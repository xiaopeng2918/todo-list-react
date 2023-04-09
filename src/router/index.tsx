// src/routes.tsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../container/Index'
import About from '../container/About'
import SignUp from '../container/SignUp'
import Login from '../container/Login'
const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AllRoutes
