import { useState } from 'react'
import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaInicial from './Componentes/PaginaInicial';
import Curiosidade from './Componentes/Curiosidades';
import Politica from './Componentes/Politica';
import Sobre from './Componentes/Sobre';
import Receita1 from './Componentes/Receita1';
import Receita2 from './Componentes/Receita2';


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
        <Route path="/Receita2" element={<Receita2/>}/> 
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
