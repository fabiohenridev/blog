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
              <h1>Delícia Viral</h1>
            </div>
            {menu && (

           <div className="Categorias">
           
            <div className="ImagemPerfil">
            <div className="buttonClose">
            <button onClick={CloseMenu}>x</button> 
            </div>
            <img src="/DeliciaVi.png"></img>
            <h3>Delícia Viral</h3>
            </div>
          <div className="Links">
          <Link className="Link" to="/">Página Inicial</Link>
          <Link className="Link" to="/Curiosidade">Receitas</Link>
          <Link className="Link" to="/Politica">Políticas de privacidade</Link>
          <Link className="Link" to="/Sobre">Sobre nós</Link>
         
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