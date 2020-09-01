import React, { useState } from "react";
import Busca from "./Busca";
import "../css/Card.css";

export default () => {
    const [titulo, setTitulo] = useState("Buscar Pokemon");
    const [caminho, setCaminho] = useState("img/nao-encontrado.png");
    const [altImg, setAltImg] = useState("Pokémon não encontrado");
    const [legenda, setLegenda] = useState("Busque pelos primeiros #151 Pokémons!");

    async function buscarPokemon(evento) {
        try {
            const valor = evento.target.value;
            const tecla = evento.key;

            if (valor > 0 && valor < 152 && tecla === "Enter") {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
                const pokemon = await res.json();

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
        } catch (erro) {
            alert(erro);
        }
    }

    return (
        <div className="col-6 Card">
            <h1>{titulo}</h1>
            
            <div className="container-img centralizar">
                <img src={caminho} alt={altImg}/>
            </div>
            
            <p>{legenda}</p>
            <Busca evento={buscarPokemon} />
        </div>
    );
}
