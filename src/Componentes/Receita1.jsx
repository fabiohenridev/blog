import Footer from "./Footer";
import Head from "./Head";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Receita1.css";

export default function Receita1() {


  
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
      <article className="Receita1">
        <header>
          <h1>Panqueca de Maisena</h1>
          <img className="imgR1" src="imgR1.jpg" alt="Panqueca de Maisena" />
          <p><strong>Tempo de preparo:</strong> 15 minutos</p>
          <p><strong>Serve:</strong> 4 porções</p>
        </header>

        <h2 style={{ marginTop: "20px" }}>Ingredientes:</h2>
        <section>
          <ul>
            <li>1 ovo</li>
            <li>1 pitada de sal</li>
            <li>1 xícara de amido de milho</li>
            <li>1 xícara de leite</li>
            <li>1 colher de sopa de manteiga</li>
            <li>Recheio de carne moída temperada</li>
            <li>Molho de tomate</li>
            <li>Queijo muçarela fatiado</li>
            <li>Orégano a gosto</li>
          </ul>
        </section>

        <h2 style={{ marginTop: "20px" }}>Modo de Preparo:</h2>
        <section>
          <ol>
            <li>Preaqueça o forno a 180°C.</li>
            <li>Em uma tigela, bata o ovo com o sal e a manteiga até formar uma mistura homogênea.</li>
            <li>Adicione o amido de milho e o leite à mistura, mexendo bem até formar uma massa firme.</li>
            <li>Abra a massa em uma superfície enfarinhada, formando uma base para a panqueca.</li>
            <li>Coloque a carne moída temperada sobre a base da massa.</li>
            <li>Adicione molho de tomate por cima da carne e distribua as fatias de queijo muçarela.</li>
            <li>Finalize com orégano a gosto.</li>
            <li>Leve ao forno por 15 minutos ou até a massa estar dourada e o queijo derretido.</li>
          </ol>
        </section>

       {/* Exibe o anúncio somente se o estado 'showAd' for verdadeiro */}
       

        <h2 style={{ marginTop: "20px" }}>Dicas:</h2>
        <section>
          <ul>
            <li>Se preferir, você pode substituir o recheio de carne moída por frango desfiado.</li>
            <li>Sirva com uma salada fresca para acompanhar.</li>
          </ul>
        </section>
      </article>
      <Footer />
    </div>
  );
}
