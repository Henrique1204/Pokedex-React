import React, { useState } from "react";
import Busca from "./Busca";
import Condicional from "./Condicional"
import "../css/Card.css";

export default (props) => {
    const [valor, setValor] = useState("");
    const [titulo, setTitulo] = useState(props.titulo);
    const [caminho, setCaminho] = useState(props.caminho);
    const [altImg, setAltImg] = useState(props.altImg);
    const [legenda, setLegenda] = useState(props.legenda);

    function renderizarPokemon(pokemon) {
        setTitulo(pokemon.name.replace("-", " "));
        setCaminho(`img/${pokemon.name}.png`);
        setAltImg(pokemon.name);

        const tipos = pokemon.types.map((type) => type.type.name);

        if (tipos.length === 1) {
            setLegenda(
                <span className="tipos">
                    <span className={tipos[0]}>{tipos[0]}</span>
                </span>
            );
        } else {
            setLegenda(
                <span className="tipos">
                    <span className={tipos[0]}>{`${tipos[0]} `}</span>|
                    <span className={tipos[1]}>{` ${tipos[1]}`}</span>
                </span>
            );
        }
    }

    async function fetchPokemon(id) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        renderizarPokemon(pokemon);
    }

    function atualizarValor(evento) {
        setValor(evento.target.value);
    }

    function buscarPokemon(evento) {
        try {
            if ((valor > 0 && valor < 152 && evento.key === "Enter") || evento.type === "click") {
                fetchPokemon(valor);
            }
        } catch (erro) {
            alert(erro);
        }
    }

    return (
        <div className={`${props.classe} Card`}>
            <Condicional condicao={props.isHome}>
                <h1>{titulo}</h1>
            </Condicional>
            
            <Condicional condicao={!props.isHome}>
                <h2>{titulo}</h2>
            </Condicional>
            
            <div className="container-img centralizar">
                <img src={caminho} alt={altImg}/>
            </div>

            <Condicional condicao={!props.isHome}>
                <p className="numero"><span>{props.numero}</span></p>
            </Condicional>

            <p>{legenda}</p>
            <Condicional condicao={props.isHome}>
                <Busca eventoChange={atualizarValor} eventoPrincipal={buscarPokemon} />
            </Condicional>
        </div>
    );
}