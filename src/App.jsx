import React from 'react'
import './App.css'
import {Dashboard} from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CoinDetail } from './pages/CoinDetail'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/coin/:coinId' element={<CoinDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
