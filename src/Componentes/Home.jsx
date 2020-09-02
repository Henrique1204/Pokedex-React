import React from "react";
import Card from "./Card";

export default () => {
    return (
        <main className="container centralizar">
            <Card isHome={true} titulo={"Buscar Pokémon"} caminho={"img/nao-encontrado.png"} altImg={"Pokémon não encontrado"} legenda={"Busque pelos primeiros #151 Pokémons!"} classes={"col-6"}/>
        </main>
    );
}
