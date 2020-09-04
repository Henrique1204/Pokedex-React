import React, {Component} from "react";
import Card from "./Card";
import "../css/Pokedex.css";

export default class Pokedex extends Component  {
    estrutura = (
        <li>
            <Card isHome={false} classes="carregando" titulo="???" caminho="img/pokebola.png" altImg="Pokebola" numero="#???" legenda="???" />
        </li>
    );

    state = {
        pokemons: Array(151).fill(this.estrutura)
    }

    componentDidMount = async () => {
        for(let i = 0; i < this.state.pokemons.length; i++) {
            const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
            const json = await req.json();
        
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

            const pokemons = [...this.state.pokemons];
            pokemons[i] = (
                <li key={json.id}>
                    <Card
                        isHome={false}
                        titulo={json.name}
                        caminho={`img/${json.name}.png`}
                        altImg={json.name}
                        numero={`#${json.id.toString().padStart(3, '0')}`}
                        legenda={tiposSpan}
                    />
                </li>
            );

            this.setState({ pokemons });
        }
    };

    render() {
        return (
            <main className="Pokedex">
                <h1>Pokedex 1º Geração</h1>
                <ul className="centralizar lista">
                    {this.state.pokemons.map((item) => (item))}
                </ul>
            </main>
        );
    }
}
