import Head from "./Head";
import "./Curiosidades.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";



export default function Curiosidade() {
    return (
        <>
            <Head />
            <main className="MainPosts">
                <h1>OS MAIS VISTOS DA SEMANA</h1>
                <div className="DivPrincipal">
                 
                    <Link className="LinkPost" to="/">
                    <section>

                        <div className="Post">
                            <img src="/photoaqui.png"></img>
                            <div className="TituloImg">
                                <p style={{ color: "gray" }}>OS TRÊS NOMES DE BEBÊS MAIS COMUNS EM 2025</p>
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