import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita3.css";

export default function Receita3() {
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
    }, 3000);

    // Limpeza do timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // O empty array [] faz com que o useEffect execute apenas uma vez na montagem inicial

  return (
    <div>
      <Head />
      <article className="Receita3">
        <header className="imgRe3">
          <h1>Macarrão à Carbonara</h1>
          <img className="imgR3" src="imgR3.webp" alt="Macarrão à Carbonara" />
          <p><strong>Tempo de preparo:</strong> 20 minutos</p>
          <p><strong>Serve:</strong> 4 porções</p>
        </header>

        <h2>Ingredientes:</h2>
        <section>
          <ul>
            <li>400g de macarrão (pode ser espaguete, penne, ou o que preferir)</li>
            <li>150g de bacon cortado em cubos</li>
            <li>3 ovos</li>
            <li>100g de queijo parmesão ralado</li>
            <li>Sal e pimenta-do-reino a gosto</li>
            <li>2 colheres de sopa de azeite de oliva</li>
            <li>1 dente de alho picado</li>
            <li>Salsinha picada para decorar (opcional)</li>
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
        <h2>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Coza o macarrão em água salgada, de acordo com as instruções da embalagem. Reserve 1 xícara da água do cozimento do macarrão.</li>
            <li>Em uma frigideira grande, aqueça o azeite de oliva e frite o bacon até que fique bem crocante.</li>
            <li>Adicione o alho picado à frigideira e refogue por 1 minuto, tomando cuidado para não queimar o alho.</li>
            <li>Em uma tigela, bata os ovos e misture com o queijo parmesão. Tempere com sal e pimenta a gosto.</li>
            <li>Quando o macarrão estiver pronto, escorra e adicione à frigideira com o bacon. Misture bem.</li>
            <li>Desligue o fogo e adicione a mistura de ovos e queijo ao macarrão. Mexa rapidamente para que o calor do macarrão cozinhe os ovos e crie um molho cremoso. Se necessário, adicione um pouco da água do cozimento do macarrão para dar cremosidade ao molho.</li>
            <li>Sirva imediatamente, decorando com salsinha picada e mais queijo parmesão, se desejar.</li>
          </ol>
        </section>

        <h2>Dicas:</h2>
        <section>
          <ul>
            <li>Se quiser um toque mais especial, você pode adicionar um pouco de pancetta no lugar do bacon.</li>
            <li>Essa receita é super rápida, então, é bom ter todos os ingredientes prontos antes de começar o preparo.</li>
          </ul>
        </section>
      </article>   
      <Footer />
    </div>
  );
}
