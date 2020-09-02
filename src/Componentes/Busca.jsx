import React from "react";
import "../css/Busca.css";

export default (props) => (
    <div className="centralizar buscaContainer">
        <input type="number" className="col-4" min="1" max="151" onChange={props.eventoChange} onKeyPress={props.eventoPrincipal} placeholder="#001"/>
        <button type="button" className="col-2" onClick={props.eventoPrincipal}>Buscar</button>
    </div>
);
