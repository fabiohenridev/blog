import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita4.css";

export default function Receita4() {
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
      <article className="Receita4">
        <header className="imgRe4">
          <h1 className="imgR3">Mousse de Chocolate</h1>
          <img className="imgR4" src="imgR4.jpg" alt="Mousse de Chocolate" />
          <p><strong>Tempo de preparo:</strong> 15 minutos</p>
          <p><strong>Tempo de geladeira:</strong> 3 horas</p>
          <p><strong>Serve:</strong> 6 porções</p>
        </header>

        <h2>Ingredientes:</h2>
        <section>
         
          <ul>
            <li>200g de chocolate meio amargo</li>
            <li>1 caixa de creme de leite (200g)</li>
            <li>3 claras de ovo</li>
            <li>3 colheres de sopa de açúcar</li>
            <li>1 colher de chá de essência de baunilha (opcional)</li>
            <li>Chocolate granulado ou raspas de chocolate para decorar (opcional)</li>
          </ul>
        </section>

        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Derreta o chocolate meio amargo em banho-maria ou no micro-ondas, mexendo a cada 30 segundos até que esteja completamente derretido.</li>
            <li>Adicione o creme de leite ao chocolate derretido e misture bem até formar um creme liso e homogêneo. Se desejar, acrescente a essência de baunilha para dar um toque especial.</li>
            <li>Em uma tigela separada, bata as claras em neve com o açúcar até que fiquem firmes.</li>
            <li>Com cuidado, misture as claras em neve ao creme de chocolate, utilizando uma espátula e fazendo movimentos suaves de baixo para cima para não perder a leveza.</li>
            <li>Divida a mousse em taças ou tigelinhas individuais e leve à geladeira por pelo menos 3 horas, ou até que esteja bem firme.</li>
            <li>Antes de servir, decore com chocolate granulado ou raspas de chocolate, se desejar.</li>
          </ol>
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

        <h2>Dicas:</h2>
        <section>
          <ul>
            <li>Para um sabor ainda mais intenso de chocolate, você pode substituir o creme de leite por chantilly.</li>
            <li>Se quiser uma mousse mais suave, use chocolate ao leite no lugar do chocolate meio amargo.</li>
          </ul>
        </section>
      </article>
      <Footer />
    </div>
  );
}
