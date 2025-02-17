import Footer from "./Footer";
import Head from "./Head";
import "./Receita1.css";


export default function Receita1(){
    return(
        <div>
           <Head/>
           <article className="Receita1">
    <header>
      <h1>Frango ao Curry Simples</h1>
      <img className="imgR1" src="imgR1.jpeg"></img>
      <p><strong>Tempo de preparo:</strong> 30 minutos</p>
      <p><strong>Serve:</strong> 4 porções</p>
    </header>

    <h2 style={{marginTop: "20px"}}>Ingredientes:</h2>
    <section>
      
      <ul>
        <li>500g de peito de frango cortado em cubos</li>
        <li>1 cebola picada</li>
        <li>2 dentes de alho picados</li>
        <li>1 colher de sopa de curry em pó</li>
        <li>1 colher de chá de sal (ou a gosto)</li>
        <li>1 colher de sopa de azeite</li>
        <li>200ml de leite de coco</li>
        <li>1 pimentão vermelho cortado em tiras (opcional)</li>
        <li>Cheiro-verde a gosto</li>
        <li>Arroz branco para acompanhar</li>
      </ul>
    </section>
    <h2 style={{marginTop: "20px"}}>Modo de Preparo:</h2>
    <section>
      
      <ol>
        <li>Em uma panela grande, aqueça o azeite em fogo médio.</li>
        <li>Adicione a cebola e o alho e refogue até que fiquem dourados.</li>
        <li>Acrescente os cubos de frango e cozinhe até que fiquem dourados por todos os lados.</li>
        <li>Adicione o curry em pó e o sal, mexendo bem para que o frango fique bem temperado.</li>
        <li>Despeje o leite de coco e misture. Cozinhe por mais 10 minutos, até o molho engrossar.</li>
        <li>Se desejar, adicione o pimentão e deixe cozinhar por mais 5 minutos.</li>
        <li>Finalize com cheiro-verde picado e sirva com arroz branco.</li>
      </ol>
    </section>
    <h2 style={{marginTop: "20px"}}>Dicas:</h2>
    <section>
    
      <ul>
        <li>Se preferir um molho mais picante, adicione pimenta a gosto.</li>
        <li>Você pode substituir o frango por carne de porco ou carne de vaca, se preferir.</li>
      </ul>
    </section>
  </article>
           <Footer/>
        </div>
    )
}