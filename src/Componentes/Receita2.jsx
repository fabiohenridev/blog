import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita2.css";

export default function Receita2() {
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
      <article className="Receita2">
        <header className="imgRe2">
          <h1>Fricassê de Frango</h1>
          <img className="imgR2" src="imgR2.jpg" alt="Fricassê de Frango" />
          <p><strong>Tempo de preparo:</strong> 40 minutos</p>
          <p><strong>Serve:</strong> 4 porções</p>
        </header>

        <h2 style={{ marginTop: "20px" }}>Ingredientes:</h2>
        <section>
          <ul>
            <li>1kg de frango</li>
            <li>Sal a gosto</li>
            <li>Lemon pepper a gosto</li>
            <li>Páprica doce a gosto</li>
            <li>Orégano a gosto</li>
            <li>Pimenta do reino a gosto</li>
            <li>Alho a gosto</li>
            <li>2 latinhas de milho</li>
            <li>180g de requeijão</li>
            <li>180g de leite</li>
            <li>1 caixinha de leite</li>
            <li>150g de molho de tomate</li>
            <li>Queijo mussarela a gosto</li>
          </ul>
        </section>

       

        <h2 style={{ marginTop: "20px" }}>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Tempere o frango com sal, lemon pepper, páprica doce, orégano, pimenta do reino e alho.</li>
            <li>Em uma panela grande, refogue o frango temperado até dourar bem dos dois lados.</li>
            <li>Adicione as latinhas de milho, o requeijão, o leite e o molho de tomate. Mexa bem para combinar.</li>
            <li>Cozinhe em fogo baixo até que o frango esteja completamente cozido e o molho tenha engrossado.</li>
            <li>Finalize com o queijo mussarela por cima e deixe derreter.</li>
            <li>Sirva quente, acompanhado de arroz ou salada, se preferir.</li>
          </ol>
        </section>

        <h2 style={{ marginTop: "20px" }}>Dicas:</h2>
        <section>
          <ul>
            <li>Você pode substituir o frango por peito de frango desfiado para uma versão mais prática.</li>
            <li>Se quiser, adicione um pouco de cream cheese para um molho mais cremoso.</li>
          </ul>
        </section>
      </article>
      <Footer />
    </div>
  );
}
