import Footer from "./Footer";
import Head from "./Head";
import "./Receita3.css";

export default function Receita3(){
    return(
        <div>
            <Head/>
               <article className="Receita3">
    <header className="imgRe3">
      <h1>Macarrão à Carbonara</h1>
      <img className="imgR3" src="imgR3.webp"></img>
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
  <Footer/> 
        </div>
    )
}