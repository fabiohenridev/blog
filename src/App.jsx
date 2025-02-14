import { useState } from 'react'
import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaInicial from './Componentes/PaginaInicial';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/> 
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
