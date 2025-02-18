import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita6.css";

export default function Receita6() {
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
      <article className="Receita6">
        <header className="imgRe6">
          <h1>Bolo de Cenoura com Cobertura de Chocolate</h1>
          <img className="imgR6" src="imgR6.jpg" alt="Bolo de Cenoura" />
          <p><strong>Tempo de preparo:</strong> 20 minutos</p>
          <p><strong>Tempo de forno:</strong> 40 minutos</p>
          <p><strong>Serve:</strong> 8 porções</p>
        </header>

        <h2>Ingredientes para o Bolo:</h2>
        <section>

          <ul>
            <li>3 cenouras médias raladas</li>
            <li>1 xícara de óleo</li>
            <li>3 ovos</li>
            <li>2 xícaras de açúcar</li>
            <li>2 xícaras de farinha de trigo</li>
            <li>1 colher de sopa de fermento em pó</li>
          </ul>
        </section>

        <h2>Ingredientes para a Cobertura de Chocolate:</h2>
        <section>
          <ul>
            <li>1 lata de leite condensado</li>
            <li>3 colheres de sopa de achocolatado em pó</li>
            <li>2 colheres de sopa de manteiga</li>
            <li>1/2 xícara de leite</li>
          </ul>
        </section>

        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Preaqueça o forno a 180°C e unte uma forma média com manteiga e farinha.</li>
            <li>Em um liquidificador, bata as cenouras, o óleo, os ovos e o açúcar até obter uma mistura homogênea.</li>
            <li>Em uma tigela, peneire a farinha de trigo e o fermento em pó. Adicione a mistura do liquidificador e mexa até incorporar bem os ingredientes.</li>
            <li>Despeje a massa na forma e leve ao forno preaquecido por cerca de 40 minutos, ou até que, ao espetar um palito no centro do bolo, ele saia limpo.</li>
            <li>Enquanto o bolo assa, prepare a cobertura: em uma panela, misture o leite condensado, o achocolatado em pó, a manteiga e o leite.</li>
            <li>Cozinhe em fogo médio, mexendo sempre, até a cobertura ficar espessa (cerca de 10 minutos).</li>
            <li>Retire o bolo do forno, deixe esfriar um pouco e cubra com a calda de chocolate. Sirva em seguida!</li>
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
            <li>Se preferir, adicione no bolo um pouco de essência de baunilha para dar um toque a mais de sabor.</li>
            <li>Para a cobertura, você pode usar chocolate meio amargo para um sabor mais intenso.</li>
            <li>Esse bolo também pode ser feito em forminhas individuais para uma apresentação mais charmosa.</li>
          </ul>
        </section>
      </article>
      <Footer />
    </div>
  );
}
