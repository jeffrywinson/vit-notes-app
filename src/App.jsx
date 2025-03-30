import React,{ useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css'
import Home from './components/Home'

function App() {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm:text-base'>
      <BrowserRouter>  
        <Routes> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
