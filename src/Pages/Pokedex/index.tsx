import React from 'react';

import * as PokemonCard from 'Components/PokemonCard';

import * as Styles from './styles';
import { usePokedexPagination } from 'Hooks/usePokedexPagination';

const PokemonLoadingItem: IComponent = () => {
	return (
		<Styles.PokemonListItem>
			<PokemonCard.Card>
				<PokemonCard.Title title='???' />

				<PokemonCard.CardLoading />

				<PokemonCard.PokedexNumber number='???' />

				<PokemonCard.Label label={'???'} />
			</PokemonCard.Card>
		</Styles.PokemonListItem>
	);
};

export const Pokedex: IComponent = () => {
	const { pokedexList } = usePokedexPagination();

	return (
		<Styles.Container>
			<Styles.Title>Pokedex 1º Geração</Styles.Title>
			<Styles.PokemonsList>
				{pokedexList.map((pokemon) => (
					<Styles.PokemonListItem>
						<PokemonCard.Card>
							<PokemonCard.Title title={pokemon.name} />

							<PokemonCard.Image src={pokemon.spriteSrc} />

							<PokemonCard.PokedexNumber number={pokemon.pokedexNumber} />

							<PokemonCard.PokemonTypes
								customKey={pokemon.id}
								types={pokemon.types}
							/>
						</PokemonCard.Card>
					</Styles.PokemonListItem>
				))}

				<PokemonLoadingItem />
			</Styles.PokemonsList>
		</Styles.Container>
	);
};
