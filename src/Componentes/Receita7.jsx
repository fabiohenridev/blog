import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita7.css";

export default function Receita7() {
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

      <article className="Receita7">
        <header>
          <h1>Mousse de Limão</h1>
          <img className="imgR7" src="imgR7.jpg" alt="Mousse de limão" />
          <p><strong>Tempo de preparo:</strong> 20 minutos</p>
          <p><strong>Tempo de geladeira:</strong> 4 horas</p>
          <p><strong>Serve:</strong> 6 porções</p>
        </header>

        <h2>Ingredientes:</h2>
        <section>
          <ul>
            <li>1 lata de leite condensado</li>
            <li>1 lata de creme de leite</li>
            <li>1 pacote de suco de limão em pó (sabor limão)</li>
            <li>1/2 xícara de suco de limão natural</li>
            <li>Raspas de limão para decorar (opcional)</li>
          </ul>
        </section>

        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Em um liquidificador, bata o leite condensado, o creme de leite, o suco de limão em pó e o suco de limão natural até obter uma mistura homogênea.</li>
            <li>Despeje a mistura em taças individuais ou em uma travessa grande.</li>
            <li>Leve à geladeira por pelo menos 4 horas para que fique bem firme.</li>
            <li>Antes de servir, decore com raspas de limão (opcional).</li>
          </ol>
        </section>

        <h2>Dicas:</h2>
        <section>
          <ul>
            <li>Se preferir, você pode substituir o suco de limão em pó por suco de limão fresco e açúcar, ajustando a quantidade a gosto.</li>
            <li>Para um toque ainda mais refrescante, adicione chantilly por cima da mousse antes de servir.</li>
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
