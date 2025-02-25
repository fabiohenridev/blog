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
    imagem: "https://www.google.com/imgres?q=imagens&imgurl=https%3A%2F%2Fembratur.com.br%2Fwp-content%2Fuploads%2F2022%2F07%2FEmbratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020-1.png&imgrefurl=https%3A%2F%2Fembratur.com.br%2F2022%2F10%2F18%2Fprojeto-de-captacao-de-imagens-das-maravilhas-do-brasil-chega-ao-rio-e-a-sao-paulo%2F&docid=yNmekU6WAdEYDM&tbnid=-_6KyWNPFfAGiM&vet=12ahUKEwi7z-L4_d6LAxUNLLkGHUqIGWwQM3oECGYQAA..i&w=860&h=500&hcb=2&ved=2ahUKEwi7z-L4_d6LAxUNLLkGHUqIGWwQM3oECGYQAA", // Caminho relativo direto
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
