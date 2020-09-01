import React from "react";
import Card from "./Card";

export default () => {
    return (
        <main>
            <h1>Pokedex 1° geração</h1>
            <ul>
                <li>
                    <Card isHome={false}
                        titulo="teste"
                        caminho="img/pikachu.png"
                        altImg="teste"
                        legenda="Teste"/>
                </li>
            </ul>
        </main>
    )
}