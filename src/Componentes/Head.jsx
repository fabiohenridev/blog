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
            <img src="/deliciaviral.png"></img>
            <h3>Delícia Viral</h3>
            </div>
          <div className="Links">
          <Link className="Link" to="/"><i class="bi bi-house Icon"></i>Página Inicial</Link>
          <Link className="Link" to="/Curiosidade"><i class="bi bi-journal-text Icon"></i>Receitas</Link>
          <Link className="Link" to="/Politica"><i class="bi bi-shield-check Icon"></i>Políticas de privacidade</Link>
          <Link className="Link" to="/Sobre"><i class="bi bi-people Icon"></i>Sobre nós</Link>
          <Link className="Link" to="https://www.instagram.com/deliciaviral/"><i class="bi bi-instagram Icon"></i>Instagram</Link>
         
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