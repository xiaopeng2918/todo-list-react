// src/routes.tsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../container/Index'
import About from '../container/About'

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Index /> } />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AllRoutes
