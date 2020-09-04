import React, { Component } from "react";
import Busca from "./Busca";
import Condicional from "./Condicional";
import "../css/Card.css";

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: this.props.classes,
            isHome: this.props.isHome,
            valor: "",
            pokemons: [],
            titulo: this.props.titulo || "Buscar Pokémon",
            caminho: this.props.caminho || "img/nao-encontrado.png",
            altImg: this.props.altImg || "Pokémon não encontrado",
            numero: this.props.numero || "???",
            legenda: this.props.legenda || "Busque pelos primeiros #151 Pokémons!"
        }
    }

    renderizarPokemon = (pokemon) => {
        this.setState({
            titulo: pokemon.nome.replace("-", " "),
            caminho: `img/${pokemon.nome}.png`,
            altImg: pokemon.nome,
            numero: pokemon.numero,
            legenda: pokemon.tipos
        });
    }

    fetchPokemon = async () => {
        for(let i = 1; i <= 151; i++) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const json = await res.json();
    
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
        }
    }

    componentDidMount = async () => {
        if (this.state.isHome) {
            await this.fetchPokemon();
        }
    }

    atualizarValor = (evento) => {
        this.setState({ valor: evento.target.value });
    }

    buscarPokemon = (evento) => {
        try {
            if (!isNaN(Number(this.state.valor.replace("#", "")))) {
                const numero = Number(this.state.valor.replace("#", ""));

                if ((numero > 0 && numero < 152 && evento.key === "Enter") || evento.type === "click") {
                    const pokemon = this.state.pokemons.find((item) => item.id === numero);
                    this.renderizarPokemon(pokemon);
                }
            } else {
                const pokemon = this.state.pokemons.find((item) => item.nome.toLowerCase() === this.state.valor.toLowerCase());
                if (pokemon) {
                    this.renderizarPokemon(pokemon);
                }
            }
        } catch (erro) {
            alert(erro);
        }
    }

    render() {
        return (
            <div className={`${this.state.classes} Card`}>
                <Condicional condicao={this.state.isHome}>
                    <h1>{this.state.titulo}</h1>
                </Condicional>
                
                <Condicional condicao={!this.state.isHome}>
                    <h2>{this.state.titulo}</h2>
                </Condicional>
                
                <div className="container-img centralizar">
                    <img src={this.state.caminho} alt={this.state.altImg}/>
                </div>
    
                <p className="numero"><span>{this.state.numero}</span></p>
    
                <p>{this.state.legenda}</p>
                <Condicional condicao={this.state.isHome}>
                    <Busca eventoChange={this.atualizarValor} eventoPrincipal={this.buscarPokemon} />
                </Condicional>
            </div>
        );
    }
}
