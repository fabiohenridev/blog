import Head from "./Head";
import "./Curiosidades.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";



export default function Curiosidade() {
    return (
        <>
            <Head />
            <main className="MainPosts">
                <h1>As mais vistas da semana</h1>
                <div className="DivPrincipal">
                 
                    <Link className="LinkPost" to="/Receita1">
                    <section>

                        <div className="Post">
                            <img src="/imgR1.jpeg"></img>
                            <div className="TituloImg">
                                <p style={{ color: "gray" }}>Frango ao Curry Simples</p>
                            </div>
                        </div>

                    </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita2">
                    <section>

                        <div className="Post">
                            <img src="/imgR2.jpg"></img>
                            <div className="TituloImg">
                                <p style={{ color: "gray" }}>Sopa de Abóbora com Gengibre</p>
                            </div>
                        </div>

                    </section>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}