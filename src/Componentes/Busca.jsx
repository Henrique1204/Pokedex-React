import React from "react";
import "../css/Busca.css";

export default (props) => (
    <div className="centralizar buscaContainer">
        <input type="number" className="col-4" min="1" max="151" onKeyPress={props.evento} placeholder="#001"/>
    </div>
);
