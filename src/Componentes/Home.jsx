import React from "react";
import Card from "./Card";

export default () => {
    return (
        // Aqui eu só criando um elemento html main, main significa o conteúdo principal do site, o mais relevante, dentro dele tô colocando o card com o pokemon e o campo de busca
        <main className="container centralizar">
            {/* Aqui tô colocando o card dentro do main*/}
            <Card />
        </main>
    );
}
