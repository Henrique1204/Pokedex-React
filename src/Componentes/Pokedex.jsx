import React from "react";
import Card from "./Card";
import "../css/Pokedex.css";

export default () => {
    return (
        <main className="Pokedex">
            <h1>Pokedex 1º Geração</h1>
            <ul className="centralizar lista">
                <li>
                    <Card isHome={false} titulo="teste" caminho="img/pikachu.png" altImg="teste" legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false} titulo="teste" caminho="img/pikachu.png" altImg="teste" legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false} titulo="teste" caminho="img/pikachu.png" altImg="teste" legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false} titulo="teste" caminho="img/pikachu.png" altImg="teste" legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false} titulo="teste" caminho="img/pikachu.png" altImg="teste" legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false} titulo="teste" caminho="img/pikachu.png" altImg="teste" legenda="Teste"/>
                </li>
                <li>
                    <Card isHome={false} titulo="teste" caminho="img/pikachu.png" altImg="teste" legenda="Teste"/>
                </li>
            </ul>
        </main>
    )
}