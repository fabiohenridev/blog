import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita5.css";

export default function Receita5() {
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
    }, 5000);

    // Limpeza do timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // O empty array [] faz com que o useEffect execute apenas uma vez na montagem inicial

  return (
    <div>
      <Head />
      <article className="Receita5">
        <header className="imgRe5">
          <h1 className="imgR5">Pavê de Morango</h1>
          <img className="imgR5" src="imgR5.jpg" alt="Pavê de Morango" />
          <p><strong>Tempo de preparo:</strong> 25 minutos</p>
          <p><strong>Tempo de geladeira:</strong> 4 horas</p>
          <p><strong>Serve:</strong> 6 porções</p>
        </header>

        <h2>Ingredientes:</h2>
        <section>
         
          <ul>
            <li>1 pacote de biscoito champanhe</li>
            <li>300g de morangos frescos cortados em pedaços</li>
            <li>1 lata de leite condensado</li>
            <li>1 caixa de creme de leite (200g)</li>
            <li>1 xícara de leite</li>
            <li>1 colher de sopa de essência de baunilha</li>
            <li>1 colher de sopa de açúcar (opcional, para o morango)</li>
            <li>Chocolate branco ou ao leite para ralar e decorar (opcional)</li>
          </ul>
        </section>

        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Em uma panela, coloque o leite condensado, o creme de leite, a essência de baunilha e a xícara de leite. Cozinhe em fogo baixo, mexendo sempre, até obter um creme espesso (aproximadamente 10 minutos). Deixe esfriar.</li>
            <li>Enquanto o creme esfria, lave bem os morangos e corte-os em pedaços pequenos. Se preferir, misture o morango com uma colher de açúcar para deixar mais doce e liberar mais suco.</li>
            <li>Em uma tigela ou refratário, faça uma camada de biscoitos champanhe, molhando-os rapidamente no leite (não deixe de molho, apenas molhe levemente). Cubra com uma camada do creme que você preparou.</li>
            <li>Depois, adicione uma camada de morangos picados e repita o processo de camadas: biscoitos, creme e morangos, até terminar os ingredientes. A última camada deve ser de creme.</li>
            <li>Leve o pavê à geladeira por pelo menos 4 horas, para que fique bem gelado e firme.</li>
            <li>Antes de servir, rale o chocolate branco ou ao leite por cima do pavê e decore com alguns morangos inteiros.</li>
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
            <li>Se preferir, pode adicionar outras frutas, como kiwi ou pêssego, para variar o sabor do pavê.</li>
            <li>Esse pavê também pode ser feito com outros tipos de biscoitos, como biscoito Maria ou biscoito de chocolate.</li>
            <li>Para um sabor mais intenso, você pode substituir a essência de baunilha por licor de laranja ou rum.</li>
          </ul>
        </section>
      </article>
      <Footer />
    </div>
  );
}
