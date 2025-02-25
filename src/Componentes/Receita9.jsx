import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Receita9.css";

export default function Receita9() {
  // Dados da receita (poderiam vir de uma API ou ser passados como props)
  const receita = {
    titulo: "Panqueca de Banana",
    descricao: "Aprenda a fazer uma deliciosa panqueca de banana em apenas 10 minutos!",
    imagem: "data:image/jpeg;base64,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", // Caminho relativo direto
    url: window.location.href, // URL da página atual
  };

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

      {/* Usando o Helmet para adicionar as meta tags Open Graph */}
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={receita.titulo} />
        <meta property="og:description" content={receita.descricao} />
        <meta property="og:image" content={receita.imagem} />
        <meta property="og:url" content={receita.url} />
      </Helmet>

      <article className="Receita9">
        <header className="imgRe9">
          <h1>{receita.titulo}</h1>
          <img className="imgR9" src={receita.imagem} alt={receita.titulo} />
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
