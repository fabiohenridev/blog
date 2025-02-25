import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita9.css";
import { Helmet} from 'react-helmet';

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

      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Panqueca de Banana" />
        <meta property="og:description" content="Aprenda a fazer uma deliciosa panqueca de banana em apenas 10 minutos!" />
        <meta property="og:image" content="https://https://blog-lemon-eight-12.vercel.app//imgR9.jpg" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <article className="Receita9">
        <header className="imgRe9">
          <h1>Panqueca de Banana</h1>
          <img className="imgR9" src="imgR9.jpg" alt="Panqueca de Banana" />
          <p><strong>Tempo de preparo:</strong> 10 minutos</p>
          <p><strong>Serve:</strong> 2 porções</p>
        </header>

        <h2>Ingredientes:</h2>
        <section>
          <ul>
            <li>2 bananas maduras amassadas</li>
            <li>2 ovos</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>1/2 xícara de aveia em flocos finos</li>
            <li>1 colher de chá de canela (opcional)</li>
            <li>1 colher de sopa de óleo de coco (ou manteiga)</li>
          </ul>
        </section>

        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Em uma tigela, amasse as bananas e adicione os ovos, a essência de baunilha e a canela. Misture bem.</li>
            <li>Adicione a aveia e misture até que a massa fique homogênea.</li>
            <li>Aqueça uma frigideira antiaderente com o óleo de coco em fogo médio.</li>
            <li>Coloque pequenas porções da massa na frigideira, formando panquecas pequenas.</li>
            <li>Cozinhe por cerca de 2-3 minutos de cada lado, até que fiquem douradas e firmes.</li>
            <li>Sirva as panquecas com mel, frutas ou iogurte, conforme desejar.</li>
          </ol>
        </section>

        <h2>Dicas:</h2>
        <section>
          <ul>
            <li>Se preferir, substitua a aveia por farinha de amêndoas para uma versão sem glúten.</li>
            <li>Adicione pedaços de chocolate meio amargo na massa para um toque extra de sabor!</li>
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
