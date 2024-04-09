import React from 'react';

import * as PokemonCard from 'Components/PokemonCard';

import * as Styles from './styles';

const PokemonListItem: IComponent = () => (
	<Styles.PokemonListItem>
		<PokemonCard.Card>
			<PokemonCard.Title title='???' />

			<PokemonCard.CardLoading />

			<PokemonCard.PokedexNumber number='???' />

			<PokemonCard.Label label={'???'} />
		</PokemonCard.Card>
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
						<PokemonCard.Card>
							<PokemonCard.Title title={json.name} />
							<PokemonCard.Image src={`img/${json.name}.png`} alt={json.name} />

							<PokemonCard.PokedexNumber
								number={`#${json.id.toString().padStart(3, '0')}`}
							/>

							<PokemonCard.PokemonTypes customKey={json.id} types={tipos} />
						</PokemonCard.Card>
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
