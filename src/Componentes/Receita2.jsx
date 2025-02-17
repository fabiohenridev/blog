import Footer from "./Footer";
import Head from "./Head";
import "./Receita2.css";

export default function Receita2(){
    return(
        <div>
            <Head/>
            <article className="Receita2">
    <header className="imgRe2">
      <h1>Sopa de Abóbora com Gengibre</h1>
      <img className="imgR2" src="imgR2.jpg"></img>
      <p><strong>Tempo de preparo:</strong> 40 minutos</p>
      <p><strong>Serve:</strong> 4 porções</p>
    </header>

    <h2 style={{marginTop: "20px"}}>Ingredientes:</h2>
    <section>
    
      <ul>
        <li>500g de abóbora descascada e cortada em cubos</li>
        <li>1 cebola média picada</li>
        <li>2 dentes de alho picados</li>
        <li>1 colher de sopa de gengibre fresco ralado</li>
        <li>1 colher de sopa de azeite de oliva</li>
        <li>500ml de caldo de legumes ou de galinha</li>
        <li>Sal e pimenta-do-reino a gosto</li>
        <li>1 colher de sopa de creme de leite (opcional, para finalizar)</li>
        <li>Folhas de hortelã para decorar (opcional)</li>
      </ul>
    </section>

    <h2  style={{marginTop: "20px"}}>Modo de Preparo:</h2>
    <section>
      
      <ol>
        <li>Em uma panela grande, aqueça o azeite de oliva em fogo médio.</li>
        <li>Adicione a cebola e o alho e refogue até ficarem dourados e macios.</li>
        <li>Acrescente a abóbora e o gengibre ralado, mexa bem e cozinhe por alguns minutos.</li>
        <li>Despeje o caldo de legumes ou de galinha e leve a sopa para ferver. Reduza o fogo e cozinhe por cerca de 20 minutos, ou até que a abóbora esteja bem macia.</li>
        <li>Com um mixer ou no liquidificador, bata a sopa até obter um creme liso e homogêneo.</li>
        <li>Tempere com sal e pimenta-do-reino a gosto. Se quiser, adicione o creme de leite para um toque mais cremoso.</li>
        <li>Sirva quente, decorando com folhas de hortelã, se desejar.</li>
      </ol>
    </section>
    <h2  style={{marginTop: "20px"}}>Dicas:</h2>
    <section>
     
      <ul>
        <li>Se preferir, você pode adicionar um pouco de leite de coco para uma versão mais cremosa e com sabor suave.</li>
        <li>Essa sopa combina muito bem com pães crocantes ou torradas para acompanhar.</li>
      </ul>
    </section>
  </article>
            <Footer/>
        </div>
    )
}