import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita8.css";

export default function Receita8() {
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
      <article className="Receita8">
        <header>
          <h1>Pudim de Leite Condensado</h1>
          <img className="imgR8" src="imgR8.jpg" alt="Pudim de leite condensado" />
          <p><strong>Tempo de preparo:</strong> 20 minutos</p>
          <p><strong>Tempo de forno:</strong> 1 hora</p>
          <p><strong>Serve:</strong> 8 porções</p>
        </header>

        <h2>Ingredientes:</h2>
        <section>
          <ul>
            <li>1 lata de leite condensado</li>
            <li>2 latas de leite (use a lata do leite condensado para medir)</li>
            <li>3 ovos</li>
            <li>1 xícara de açúcar (para o caramelo)</li>
            <li>1/2 xícara de água (para o caramelo)</li>
          </ul>
        </section>

        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Primeiro, prepare o caramelo: em uma panela, derreta o açúcar em fogo baixo até que fique dourado. Adicione a água aos poucos (cuidado com o vapor) e mexa até formar uma calda. Reserve.</li>
            <li>Em um liquidificador, bata o leite condensado, o leite e os ovos até obter uma mistura homogênea.</li>
            <li>Despeje o caramelo em uma forma de pudim (24 cm de diâmetro) e depois coloque a mistura do liquidificador por cima.</li>
            <li>Cubra a forma com papel alumínio e leve ao forno preaquecido a 180°C em banho-maria (coloque a forma de pudim dentro de uma forma maior com água) por cerca de 1 hora ou até que o pudim esteja firme.</li>
            <li>Deixe esfriar e, depois de frio, desenforme o pudim. Sirva gelado.</li>
          </ol>
        </section>

        <h2>Dicas:</h2>
        <section>
          <ul>
            <li>Você pode adicionar 1 colher de chá de essência de baunilha para dar um toque especial ao pudim.</li>
            <li>Se preferir um pudim mais cremoso, diminua o tempo de forno, mas certifique-se de que ele ainda esteja firme.</li>
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
