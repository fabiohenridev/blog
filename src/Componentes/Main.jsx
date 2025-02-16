import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="Main">

      <div className="HeaderInicio">
        <p>Confira as receitas mais deliciosas e virais da internet !</p>
      </div>
      <div className="Inicio">
        <Link className="LinkPost" to="/">
          <section>

            <div className="Post">
              <img src="/fotocomida.jpg"></img>
              <div className="TituloImg">
                <p style={{ color: "gray" }}>As principais receitas de 2025</p>
              </div>
            </div>

          </section>
        </Link>
      </div>
      <h3 className="txth3">Pratos simples e rápidos para fazer em uma tarde descontraída</h3>
    </main>
  )
}