import React from "react";
import Card from "./Card";
import "../css/Pokedex.css";

export default () => {
    return (
        <main className="Pokedex">
            <ul className="centralizar lista">
                <li>
                    <Card isHome={false}
                        titulo="teste"
                        caminho="img/pikachu.png"
                        altImg="teste"
                        legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false}
                        titulo="teste"
                        caminho="img/pikachu.png"
                        altImg="teste"
                        legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false}
                        titulo="teste"
                        caminho="img/pikachu.png"
                        altImg="teste"
                        legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false}
                        titulo="teste"
                        caminho="img/pikachu.png"
                        altImg="teste"
                        legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false}
                        titulo="teste"
                        caminho="img/pikachu.png"
                        altImg="teste"
                        legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false}
                        titulo="teste"
                        caminho="img/pikachu.png"
                        altImg="teste"
                        legenda="Teste"/>
                </li>
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