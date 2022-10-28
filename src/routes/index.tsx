import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Caifora from '../pages/Caifora'
import Home from '../pages/Home'

const MyRoutes = () => {
  const isLogged = true

  return (
    <BrowserRouter>
      <Routes>
        {isLogged ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Caifora />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
