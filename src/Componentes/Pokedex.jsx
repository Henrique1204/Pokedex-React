import React, {Component} from "react";
import Card from "./Card";
import "../css/Pokedex.css";

export default class Pokedex extends Component  {
    state = {
        pokemons: []
    }

    componentDidMount() {
        const numeroDex = 151;

        for (let i = 1; i <= numeroDex; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            fetch(url).then((res) => res.json())
            .then((json) => {
                const tipos = json.types.map((type) => type.type.name);
                let tiposSpan;
        
                if (tipos.length === 1) {
                    tiposSpan = (
                        <span className="tipos">
                            <span className={tipos[0]}>{tipos[0]}</span>
                        </span>
                    );
                } else {
                    tiposSpan = (
                        <span className="tipos">
                            <span className={tipos[0]}>{`${tipos[0]} `}</span>|
                            <span className={tipos[1]}>{` ${tipos[1]}`}</span>
                        </span>
                    );
                }

                const pokemon = {
                    nome: json.name,
                    id: json.id,
                    numero: `#${json.id.toString().padStart(3, '0')}`,
                    tipos: tiposSpan
                }

                const pokemons = [...this.state.pokemons];
                pokemons.push(pokemon);

                this.setState({ pokemons });
            });
        }
    };

    render() {
        return (
            <main className="Pokedex">
                <h1>Pokedex 1º Geração</h1>
                <ul className="centralizar lista">
                { this.state.pokemons.sort((a, b) => a - b).map((item) => {
                        return (
                            <li key={item.id}>
                                <Card isHome={false} titulo={item.nome} caminho={`img/${item.nome}.png`} altImg={item.nome} numero={item.numero} legenda={item.tipos} />
                            </li>
                        );
                    }) }
                </ul>
            </main>
        );
    }
}
