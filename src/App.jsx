import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './Componentes/PaginaInicial';
import Curiosidade from './Componentes/Curiosidades';
import Politica from './Componentes/Politica';
import Sobre from './Componentes/Sobre';
import Receita1 from './Componentes/Receita1';
import Receita2 from './Componentes/Receita2';
import Receita3 from './Componentes/Receita3';
import Receita4 from './Componentes/Receita4';
import Receita5 from './Componentes/Receita5';
import Receita6 from './Componentes/Receita6';
import Receita7 from './Componentes/Receita7';
import Receita8 from './Componentes/Receita8';
import Receita9 from './Componentes/Receita9';

import { useLocation } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation(); // Aqui usamos o hook corretamente

  useEffect(() => {
    // Verifica se o Adquake está disponível e chama a reinicialização
    if (window.adquake) {
      window.adquake.restart();
    }
  }, [location]); // Recarrega o anúncio quando a localização mudar

  return (
    <div>
      {/* O BrowserRouter envolve todo o conteúdo */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/Curiosidade" element={<Curiosidade />} />
          <Route path="/Politica" element={<Politica />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Receita1" element={<Receita1 />} />
          <Route path="/Receita2" element={<Receita2 />} />
          <Route path="/Receita3" element={<Receita3 />} />
          <Route path="/Receita4" element={<Receita4 />} />
          <Route path="/Receita5" element={<Receita5 />} />
          <Route path="/Receita6" element={<Receita6 />} />
          <Route path="/Receita7" element={<Receita7 />} />
          <Route path="/Receita8" element={<Receita8 />} />
          <Route path="/Receita9" element={<Receita9 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
