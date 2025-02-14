import { useState } from "react";
import "./Head.css";
import { Link } from "react-router-dom";


export default function Head(){

const [menu, setMenu] = useState(false);

const OpenMenu = () =>{
 setMenu(true);
}

const CloseMenu = () =>{
    setMenu(false)
}

    return(
        <div>
         <header className="header">
            <div className="title">
              <h1>O CURIOSO</h1>
            </div>
            {menu && (

           <div className="Categorias">
            <div className="buttonClose">
            <button onClick={CloseMenu}>x</button> 
            </div>
          <div className="Links">
          <Link className="Link" to="/">Página Inicial</Link>
          <Link className="Link" to="/Curiosidade">Curiosidades</Link>
          <Link className="Link" to="/">Políticas de privacidade</Link>
          <Link className="Link" to="/">Sobre nós</Link>
         
          </div>
           </div>

            )}
            <div className="buttonHead">
                <button onClick={OpenMenu}><i class="bi bi-list"></i></button>
            </div>
         </header>
        </div>
    )
}