import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
