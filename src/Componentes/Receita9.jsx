import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita9.css";

export default function Receita9() {
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
    <div>
      <Head />
      <article className="Receita9">
        <header className="imgRe9">
          <h1>Sanduíche de Presunto e Queijo</h1>
          <img className="imgR9" src="imgR9.png" alt="Sanduíche de Presunto e Queijo" />
          <p><strong>Tempo de preparo:</strong> 15 minutos</p>
          <p><strong>Serve:</strong> 2 porções</p>
        </header>

        <h2>Ingredientes:</h2>
        <section>
          <ul>
            <li>Presunto (quantidade a gosto)</li>
            <li>Queijo (pode ser muçarela ou outro de sua preferência)</li>
            <li>Tomate fatiado</li>
            <li>Orégano a gosto</li>
            <li>200g de requeijão cremoso</li>
            <li>6 pães (pode ser pão de forma ou outro tipo)</li>
            <li>Manteiga (para untar)</li>
          </ul>
        </section>

        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Preaqueça o forno a 180°C.</li>
            <li>Unte os pães com um pouco de manteiga em um lado de cada fatia.</li>
            <li>Em cada fatia de pão, passe uma camada de requeijão cremoso.</li>
            <li>Coloque uma fatia de presunto, seguida de uma fatia de queijo.</li>
            <li>Adicione uma ou duas fatias de tomate.</li>
            <li>Polvilhe orégano a gosto.</li>
            <li>Feche os sanduíches com outra fatia de pão.</li>
            <li>Coloque os sanduíches montados em uma assadeira e leve ao forno por cerca de 15 minutos ou até o queijo derreter e o pão ficar dourado.</li>
            <li>Retire do forno, corte e sirva.</li>
          </ol>
        </section>

        <h2>Dicas:</h2>
        <section>
          <ul>
            <li>Você pode adicionar maionese ou azeite no pão para dar um toque extra de sabor.</li>
            <li>Se preferir, pode usar pão integral para uma versão mais saudável.</li>
          </ul>
        </section>

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
      </article>
      <Footer />
    </div>
  );
}
