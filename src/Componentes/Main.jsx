import "./Main.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  // Estado para controlar a visibilidade do anúncio
  const [showAd, setShowAd] = useState(false);

  // Função para lidar com o clique no botão de fechar
  const handleCloseAd = () => {
    setShowAd(false); // Fechar o anúncio
  };

  // UseEffect para mostrar o anúncio após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true); // Exibe o anúncio após 5 segundos
    }, 1000);

    // Limpeza do timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // O empty array [] faz com que o useEffect execute apenas uma vez na montagem inicial

  return (
    <main className="Main">
      <div className="HeaderInicio">
        <p>Confira as receitas mais deliciosas e virais da internet!</p>

        {/* Exibe o anúncio somente se o estado 'showAd' for verdadeiro */}
        {showAd && (
          <div className="Anuncio">
            {/* Botão "X" para fechar o anúncio */}
            <button onClick={handleCloseAd}>X</button>

            {/* Link de redirecionamento */}
            <Link to="https://theeghumoaps.com/4/8945434">
              <img src="EbookGratis.png" alt="Ebook Grátis" />
            </Link>
          </div>
        )}
      </div>

      <div className="Inicio">
        <Link className="LinkPost" to="/Curiosidade">
          <section>
            <div className="Post">
              <img src="/fotocomida.jpg" alt="Comida" />
              <div className="TituloImg">
                <p style={{ color: "gray" }}>As principais receitas de 2025</p>
              </div>
            </div>
          </section>
        </Link>
      </div>

      <h3 className="txth3">
        Pratos simples e rápidos para fazer em uma tarde descontraída
      </h3>
    </main>
  );
}
