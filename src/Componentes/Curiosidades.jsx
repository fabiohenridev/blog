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
                 
                    <Link className="LinkPost" to="/">
                    <section>

                        <div className="Post">
                            <img src="/fotocomida.jpg"></img>
                            <div className="TituloImg">
                                <p style={{ color: "gray" }}>Confira já</p>
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