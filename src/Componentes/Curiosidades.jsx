import Head from "./Head";
import "./Curiosidades.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Curiosidade() {
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
        <>
            <Head />
            <main className="MainPosts">
                <h1>As mais vistas da semana</h1>
                <div className="DivPrincipal">

                    <Link className="LinkPost" to="/Receita1">
                        <section>
                            <div className="Post">
                                <img src="/imgR1.jpg" alt="Frango ao Curry Simples"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Frango ao Curry Simples</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita2">
                        <section>
                            <div className="Post">
                                <img src="/imgR2.jpg" alt="Sopa de Abóbora com Gengibre"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Sopa de Abóbora com Gengibre</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita3">
                        <section>
                            <div className="Post">
                                <img src="/imgR3.webp" alt="Macarrão à Carbonara"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Macarrão à Carbonara</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita4">
                        <section>
                            <div className="Post">
                                <img src="/imgR4.jpg" alt="Mousse de Chocolate"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Mousse de Chocolate</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita5">
                        <section>
                            <div className="Post">
                                <img src="/imgR5.jpg" alt="Pavê de Morango"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Pavê de Morango</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita6">
                        <section>
                            <div className="Post">
                                <img src="/imgR6.jpg" alt="Bolo de Cenoura com Cobertura de Chocolate"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Bolo de Cenoura com Cobertura de Chocolate</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita7">
                        <section>
                            <div className="Post">
                                <img src="/imgR7.jpg" alt="Mousse de Limão"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Mousse de Limão</p>
                                </div>
                            </div>
                        </section>
                    </Link>

                    <Link className="LinkPost" to="/Receita8">
                        <section>
                            <div className="Post">
                                <img src="/imgR8.jpg" alt="Pudim de Leite Condensado"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Pudim de Leite Condensado</p>
                                </div>
                            </div>
                        </section>
                    </Link>
                    <Link className="LinkPost" to="/Receita9">
                        <section>
                            <div className="Post">
                                <img src="/imgR9.jpg" alt="Panqueca de Banana"></img>
                                <div className="TituloImg">
                                    <p style={{ color: "gray" }}>Panqueca de Banana</p>
                                </div>
                            </div>
                        </section>
                    </Link>
                </div>

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

            </main>
            <Footer />
        </>
    );
}
