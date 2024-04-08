import React from 'react';

import { Card } from 'Components/Card';
import { PokemonType } from 'Components/PokemonType';

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

			const tipos = json.types.map(
				(type: any) => type.type.name
			) as PokemonTypesColorEnum[];

			setPokemons((prevPokemons) => {
				const pokemonsCopy = [...prevPokemons];

				pokemonsCopy[i] = (
					<Styles.PokemonListItem key={json.id}>
						<Card
							title={json.name}
							imageSrc={`img/${json.name}.png`}
							imageAlt={json.name}
							pokemonNumber={`#${json.id.toString().padStart(3, '0')}`}
							label={<PokemonType key={json.id} types={tipos} />}
						/>
					</Styles.PokemonListItem>
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
