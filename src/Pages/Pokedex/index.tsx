import React from 'react';

import { Card } from 'Components/Card';

import * as Styles from './styles';

const PokemonListItem: IComponent = () => (
	<Styles.PokemonListItem>
		<Card
			title='???'
			imageSrc='img/pokebola.png'
			imageAlt='Pokebola'
			pokemonNumber='#???'
			label='???'
		/>
	</Styles.PokemonListItem>
);

export const Pokedex: IComponent = () => {
	const [pokemons, setPokemons] = React.useState<any[]>(
		Array(151).fill(<PokemonListItem />)
	);

	async function initialEffect() {
		for (let i = 0; i < pokemons.length; i++) {
			const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
			const json = await req.json();

			const tipos = json.types.map((type: any) => type.type.name);
			let tiposSpan: any;

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

			setPokemons((prevPokemons) => {
				const pokemonsCopy = [...prevPokemons];

				pokemonsCopy[i] = (
					<li key={json.id}>
						<Card
							title={json.name}
							imageSrc={`img/${json.name}.png`}
							imageAlt={json.name}
							pokemonNumber={`#${json.id.toString().padStart(3, '0')}`}
							label={tiposSpan}
						/>
					</li>
				);

				return pokemonsCopy;
			});
		}
	}

	React.useEffect(() => {
		initialEffect();
	}, []);

	return (
		<Styles.Container>
			<Styles.Title>Pokedex 1º Geração</Styles.Title>
			<Styles.PokemonsList>{pokemons.map((item) => item)}</Styles.PokemonsList>
		</Styles.Container>
	);
};
