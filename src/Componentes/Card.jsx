import React, { Component } from 'react';
import Busca from './Busca';
import Condicional from './Condicional';
import '../css/Card.css';

export default class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			classes: this.props.classes,
			isHome: this.props.isHome,
			valor: '',
			pokemons: [],
			titulo: this.props.titulo || 'Carregando dados...',
			caminho: this.props.caminho || 'img/pokebola.png',
			altImg: this.props.altImg || 'Carregando',
			numero: this.props.numero || '???',
			legenda: this.props.legenda || 'Busque pelos primeiros #151 Pokémons!',
		};
	}

	fetchPokemon = async () => {
		try {
			for (let i = 1; i <= 151; i++) {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
				const json = await res.json();

				const tipos = json.types.map((type) => type.type.name);
				let tiposSpan;

				if (tipos.length === 1) {
					tiposSpan = (
						<span className='tipos'>
							<span className={tipos[0]}>{tipos[0]}</span>
						</span>
					);
				} else {
					tiposSpan = (
						<span className='tipos'>
							<span className={tipos[0]}>{`${tipos[0]} `}</span>|
							<span className={tipos[1]}>{` ${tipos[1]}`}</span>
						</span>
					);
				}

				const pokemon = {
					nome: json.name,
					id: json.id,
					numero: `#${json.id.toString().padStart(3, '0')}`,
					tipos: tiposSpan,
				};

				const pokemons = [...this.state.pokemons];
				pokemons.push(pokemon);
				this.setState({ pokemons });
			}
		} catch (erro) {
			alert(erro);
		}
	};

	renderizarPokemon = (pokemon) => {
		// Joga os valores no card
		this.setState({
			titulo: pokemon.nome.replace('-', ' '),
			caminho: `img/${pokemon.nome}.png`,
			altImg: pokemon.nome,
			numero: pokemon.numero,
			legenda: pokemon.tipos,
		});
	};

	componentDidMount = async () => {
		// Testa se tá na home por causa da animação
		if (this.state.isHome) {
			// Faz a requisição de todos os pokemons e espera ela ser completada
			await this.fetchPokemon();

			// Confere se tem dados no localStorage
			if (localStorage['ultimaBusca']) {
				// Se tiver ele pega e joga na variável pokemon
				const pokemon = localStorage['ultimaBusca'];
				// Depois busca o pokemon que foi tirado do localStorage
				this.buscarPokemon(pokemon);
			} else {
				// Mostra valores padrões
				this.setState({
					titulo: 'Buscar Pokémons',
					caminho: 'img/nao-encontrado.png',
					altImg: 'Pokémon não encontrado',
				});
			}

			// Remove a animação de carregamento
			const classes = this.state.classes.replace('carregando-home', '');
			this.setState({ classes });
		}
	};

	atualizarValor = (evento) => {
		const valor = evento.target.value;

		/*
		 * Isso aqui é uma validação pra ver se alguém tá digitando número maior que 151
		 *
		 * valor.replace("#", "") -- Primeiro limpo o "#" do número, pra caso alguém digite #025
		 *
		 * Number(valor.replace("#", "")) -- Segundo converto o valor limpo pra Number
		 * isso vai limpar os 0 na esquerda
		 */
		const numero = Number(valor.replace('#', ''));

		/*
		 * isNaN(numero) -- Terceiro eu vejo se o const numero vai ser igual a "Not a Number"
		 * No caso letra não é número, então da true, numero dá falso
		 *
		 * !isNaN(numero) -- Depois eu inverto o valor com "!"
		 * No caso o false vira true e o true vira falso
		 *
		 * Caso dê falso é por que alguém tá digitando uma palavra, então cai no else
		 */
		if (!isNaN(numero)) {
			if (numero >= 0 && numero < 152) {
				this.setState({ valor });
			}
		} else {
			this.setState({ valor });
		}
	};

	buscarPokemon = (valor) => {
		// Remove a classe de erro e escreve a mensagem padrão
		const classes = this.state.classes.replace('erro', '');
		this.setState({
			classes,
			legenda: 'Busque pelos primeiros #151 Pokémons!',
		});

		/*
		 * Busca (find) na lista dos pokémons um pokémon que tenha
		 * Ou o id igual ao valor convertido para número
		 * Ou o nome sem "-" e em minúsculo igual ao valor em minúsculo
		 * Caso um dos casos acima seja verdadeiro ele retorna o pokemon
		 * Caso todos sejam falso ele retorn undefined
		 */
		const pokemon = this.state.pokemons.find(
			(item) =>
				item.id === Number(valor) ||
				item.nome.replace('-', ' ').toLowerCase() === valor.toLowerCase()
		);

		/*
		 * Valor undefined é igual a false
		 * então se o find retornar undefined ele cai no else
		 */
		if (pokemon) {
			// Renderiza o pokemon no card
			this.renderizarPokemon(pokemon);

			// Salva no localStorage
			localStorage['ultimaBusca'] = pokemon.nome;
		} else {
			// Adiciona a classe de erro e troca os valores dos elementos
			const classes = `${this.state.classes} erro`;
			this.setState({
				titulo: 'Buscar Pokémons',
				caminho: 'img/nao-encontrado.png',
				altImg: 'Pokémon não encontrado',
				legenda: 'Valor digitado não é válido!',
				numero: '???',
				classes,
			});
		}
	};

	eventoBusca = (evento) => {
		// Limpo o valor digitado pra ficar sem "#" no número e sem espaço no começo
		const valor = this.state.valor.replace('#', '').trim();

		// Testo se alguém apertou "Enter" ou se clicou no botão
		if (evento.key === 'Enter' || evento.type === 'click') {
			this.buscarPokemon(valor);
		}
	};

	render() {
		return (
			<div className={`${this.state.classes} Card`}>
				<Condicional condicao={this.state.isHome}>
					<h1>{this.state.titulo}</h1>
				</Condicional>

				<Condicional condicao={!this.state.isHome}>
					<h2>{this.state.titulo}</h2>
				</Condicional>

				<div className='container-img centralizar'>
					<img src={this.state.caminho} alt={this.state.altImg} />
				</div>

				<p className='numero'>
					<span>{this.state.numero}</span>
				</p>

				<p className='legenda'>{this.state.legenda}</p>
				<Condicional condicao={this.state.isHome}>
					<Busca
						valor={this.state.valor}
						eventoChange={this.atualizarValor}
						eventoPrincipal={this.eventoBusca}
					/>
				</Condicional>
			</div>
		);
	}
}
