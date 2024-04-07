import React from 'react';

import { SearchForm } from '../SearchForm';
import { Show } from '../Show';

import { CardProps } from './types';
import * as Styles from './styles';

const DEFAULT_STATE = {
	title: 'Carregando dados...',
	imageSrc: 'img/pokebola.png',
	imageAlt: 'Carregando',
	pokemonNumber: '???',
	label: 'Busque pelos primeiros #151 Pokémons!',
};

export const Card: IComponent<CardProps> = ({
	isHome,
	title: propsTitle = DEFAULT_STATE.title,
	imageSrc: propsImageSrc = DEFAULT_STATE.imageSrc,
	imageAlt: propsImageAlt = DEFAULT_STATE.imageAlt,
	pokemonNumber: propsPokemonNumber = DEFAULT_STATE.pokemonNumber,
	label: propsLabel = DEFAULT_STATE.label,
}) => {
	const [title, setTitle] = React.useState<string>(propsTitle);
	const [imageSrc, setImageSrc] = React.useState<string>(propsImageSrc);
	const [imageAlt, setImageAlt] = React.useState<string>(propsImageAlt);

	const [pokemonNumber, setPokemonNumber] =
		React.useState<string>(propsPokemonNumber);

	const [label, setLabel] = React.useState<string>(propsLabel);

	const [searchValue, setSearchValue] = React.useState<string>('');
	const [pokemonsList, setPokemonsList] = React.useState<any[]>([]);

	async function fetchPokemon() {
		try {
			let pokemons: any[] = [];

			for (let i = 1; i <= 151; i++) {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
				const json = await res.json();

				const tipos = json.types.map((type: any) => type.type.name);
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

				pokemons.push(pokemon);
			}

			setPokemonsList(pokemons);
		} catch (erro) {
			alert(erro);
		}
	}

	function renderizarPokemon(pokemon: any) {
		// Joga os valores no card
		setTitle(pokemon.nome.replace('-', ' '));

		setImageSrc(`img/${pokemon.nome}.png`);
		setImageAlt(pokemon.nome);
		setPokemonNumber(pokemon.numero);
		setLabel(pokemon.tipo);
	}

	function atualizarValor(valor: string) {
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
				setSearchValue(valor);
			}
		} else {
			setSearchValue(valor);
		}
	}

	function buscarPokemon(valor: string) {
		// Remove a classe de erro e escreve a mensagem padrão
		// const classes = state.classes.replace('erro', '');
		setLabel('Busque pelos primeiros #151 Pokémons!');

		/*
		 * Busca (find) na lista dos pokémons um pokémon que tenha
		 * Ou o id igual ao valor convertido para número
		 * Ou o nome sem "-" e em minúsculo igual ao valor em minúsculo
		 * Caso um dos casos acima seja verdadeiro ele retorna o pokemon
		 * Caso todos sejam falso ele retorn undefined
		 */

		const pokemon = pokemonsList.find(
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
			renderizarPokemon(pokemon);

			// Salva no localStorage
			localStorage['ultimaBusca'] = pokemon.nome;
		} else {
			// Adiciona a classe de erro e troca os valores dos elementos
			// const classes = `${state.classes} erro`;

			setTitle('Buscar Pokémons');

			setImageSrc('img/nao-encontrado.png');
			setImageAlt('Pokémon não encontrado');
			setPokemonNumber('???');
			setLabel('Valor digitado não é válido!');
		}
	}

	async function eventoBusca(evento: any) {
		// Limpo o valor digitado pra ficar sem "#" no número e sem espaço no começo
		const valor = searchValue.replace('#', '').trim();

		// Testo se alguém apertou "Enter" ou se clicou no botão
		if (evento.key === 'Enter' || evento.type === 'click') {
			buscarPokemon(valor);
		}
	}

	async function initialEffect() {
		// Testa se tá na home por causa da animação
		if (isHome) {
			// Faz a requisição de todos os pokemons e espera ela ser completada
			await fetchPokemon();

			// Confere se tem dados no localStorage
			if (localStorage['ultimaBusca']) {
				// Se tiver ele pega e joga na variável pokemon
				const pokemon = localStorage['ultimaBusca'];
				// Depois busca o pokemon que foi tirado do localStorage
				buscarPokemon(pokemon);
			} else {
				// Mostra valores padrões

				setTitle('Buscar Pokémons');
				setImageSrc('img/nao-encontrado.png');
				setImageAlt('Pokémon não encontrado');
			}

			// Remove a animação de carregamento
		}
	}

	React.useEffect(() => {
		initialEffect();
	}, []);

	return (
		<Styles.Container isHome={isHome}>
			<Styles.Title as={isHome ? 'h1' : 'h2'}>{title}</Styles.Title>

			<Styles.ImageContainer>
				<Styles.Image src={imageSrc} alt={imageAlt} />
			</Styles.ImageContainer>

			<Styles.PokemonNumber>
				<span>{pokemonNumber}</span>
			</Styles.PokemonNumber>

			<Styles.CardLabel>{label}</Styles.CardLabel>

			<Show isShowing={isHome}>
				<SearchForm
					value={searchValue}
					onChange={atualizarValor}
					onSubmit={eventoBusca}
				/>
			</Show>
		</Styles.Container>
	);
};
