import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="Main">
   
    <div className="Inicio">
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
  )
}