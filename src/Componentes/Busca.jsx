import React from "react";
import "../css/Busca.css";

// A gente sempre exporta uma função, e função pode ter parâmetros, porém precisa passar nos ( ), sq no React as funções de componentes são tags, então não tem os (), a solução pra isso é usar propriedades que vem na tag, olha o input, recebe o "type", "className", "min", "max", são todas propriedades, mas nesse caso são de html comum, porém lá no arquivo Card, no componente de busca a gente passou os dois métodos, em propriedades criada pela gente.
export default (props) => (
    <div className="centralizar buscaContainer">
        {/* aqui temos dois eventos nas propriedades do input "onChange", que tá recebendo o método pra atualizar e "onKeyPress" que tá com o método de buscar o pokemon */}
        <input type="number" className="col-4" min="1" max="151" onChange={props.eventoChange} onKeyPress={props.eventoPrincipal} placeholder="#001"/>
        {/* Aqui só tem o evento de click com o evento de buscar */}
        <button type="button" className="col-2" onClick={props.eventoPrincipal}>Buscar</button>
    </div>
);
