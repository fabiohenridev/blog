import Footer from "./Footer";
import Head from "./Head";
import "./Sobre.css";

export default function Sobre() {
    return (
        <div>
            <Head />
            <section className="Sobre">
                <h1>Sobre o Delícia Viral</h1>

                <p><strong>Delícia Viral</strong> é o seu destino ideal para descobrir receitas deliciosas, criativas e, claro, virais! Nosso objetivo é compartilhar com você as melhores e mais inovadoras receitas para tornar sua cozinha ainda mais saborosa e divertida.</p>

                <h2>Quem Somos</h2>
                <p>Somos uma equipe apaixonada por culinária e buscamos constantemente as tendências mais quentes no mundo gastronômico. No <strong>Delícia Viral</strong>, você encontra desde receitas tradicionais com aquele toque especial até preparações inusitadas que vão conquistar o seu paladar e o de seus amigos e familiares.</p>

                <h2>O Que Oferecemos</h2>
                <p>No <strong>Delícia Viral</strong>, nos dedicamos a oferecer uma variedade de receitas, dicas e truques para facilitar o seu dia a dia na cozinha. Nossos posts são criados para inspirar você, seja no café da manhã, no almoço, no jantar ou até para aquela sobremesa de dar água na boca.</p>
                <ul>
                    <li><span class="highlight">Receitas Fáceis:</span> Passo a passo simples e acessíveis para todas as habilidades culinárias.</li>
                    <li><span class="highlight">Receitas Criativas:</span> Pratos inovadores que vão deixar sua refeição mais divertida.</li>
                    <li><span class="highlight">Dicas de Cozinha:</span> Truques e segredos para aperfeiçoar sua técnica e surpreender na cozinha.</li>
                </ul>

                <h2>Nosso Compromisso</h2>
                <p>Nosso compromisso é trazer a você receitas práticas, acessíveis e com ingredientes que fazem sucesso nas redes sociais. Queremos que você se sinta inspirado a experimentar novos sabores e compartilhar suas criações com amigos e familiares.</p>

                <h2>Por Que "Viral"?</h2>
                <p>Aqui no <strong>Delícia Viral</strong>, acreditamos que a culinária pode ser divertida e viralizar, assim como os maiores hits da internet. Cada receita é pensada para ser não apenas saborosa, mas também irresistível o suficiente para se espalhar por aí — em grupos de WhatsApp, redes sociais ou entre amigos. Afinal, quem não ama uma boa receita que todo mundo quer replicar?</p>


                <p>Nos siga nas redes sociais e compartilhe suas receitas com a hashtag <strong>#DeliciaViral</strong>! Estamos ansiosos para ver suas criações!</p>

            </section>
            <Footer />
        </div>
    )
}