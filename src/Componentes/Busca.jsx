import React from "react";
import "../css/Busca.css";

export default (props) => (
    <div className="centralizar buscaContainer">
        <input type="text" className="col-4" value={props.valor} onChange={props.eventoChange} onKeyPress={props.eventoPrincipal} placeholder="#025"/>
        <button type="button" className="col-2" onClick={props.eventoPrincipal}>Buscar</button>
    </div>
);
