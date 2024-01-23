import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App