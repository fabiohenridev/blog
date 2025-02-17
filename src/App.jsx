import { useState } from 'react'
import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaInicial from './Componentes/PaginaInicial';
import Curiosidade from './Componentes/Curiosidades';
import Politica from './Componentes/Politica';
import Sobre from './Componentes/Sobre';
import Receita1 from './Componentes/Receita1';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/> 
        <Route path="/Curiosidade" element={<Curiosidade/>}/> 
        <Route path="/Politica" element={<Politica/>}/> 
        <Route path="/Sobre" element={<Sobre/>}/> 
        <Route path="/Receita1" element={<Receita1/>}/> 
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
