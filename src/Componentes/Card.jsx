import React from "react";
import "../css/Card.css";

export default () => {
    return (
        <div className="col-6 Card">
        <h1>Buscar Pokemon</h1>
        
        <div className="container-img centralizar">
        <img src="img/nao-encontrado.png" alt="Pokémon não encontrado"/>
        </div>
        
        <div className="centralizar camposBusca">
        <label htmlFor="busca">"Busque pelos primeiros #151 Pokémons!"</label>
        <input type="number" id="busca" className="col-4" name="busca" min="1" max="151" placeholder="#001"/>
        </div>
        </div>
    );
}
    