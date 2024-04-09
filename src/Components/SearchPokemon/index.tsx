import React from 'react';

import * as PokemonCard from '../PokemonCard';

import { SearchForm } from '../SearchForm';
import { Show } from '../Show';

import { SearchPokemonProps } from './types';

import * as Styles from './styles';

const DEFAULT_CONTENT = {
	title: 'Buscar Pokémons',
	searchingTitle: 'Buscar Pokémons',
	image: {
		src: 'img/nao-encontrado.png',
		alt: 'Pokémon não encontrado',
	},
	pokedexNumber: '???',
	label: 'Busque seu pokémon preferido!',
	error: 'Valor digitado não é válido!',
};

export const SearchPokemon: IComponent<SearchPokemonProps> = ({
	pokemonSearched,
	hasSearchError,
	isSearching,
	...formProps
}) => {
	const content = {
		title: pokemonSearched?.name || DEFAULT_CONTENT.title,
		image: {
			src: pokemonSearched?.spriteSrc || DEFAULT_CONTENT.image.src,
			alt: pokemonSearched?.name || DEFAULT_CONTENT.image.alt,
		},
		pokedexNumber:
			pokemonSearched?.pokedexNumber || DEFAULT_CONTENT.pokedexNumber,
	};

	const hasPokemonSearched = Boolean(pokemonSearched);

	return (
		<Styles.Container>
			<PokemonCard.Title
				title={isSearching ? DEFAULT_CONTENT.searchingTitle : content.title}
			/>

			{isSearching ? (
				<PokemonCard.CardLoading />
			) : (
				<PokemonCard.Image src={content.image.src} alt={content.image.alt} />
			)}

			<PokemonCard.PokedexNumber number={content.pokedexNumber} />

			<Show isShowing={!!hasSearchError}>
				{hasPokemonSearched ? (
					<PokemonCard.PokemonTypes
						customKey={pokemonSearched!.name}
						types={pokemonSearched!.types}
					/>
				) : (
					<PokemonCard.Label label={DEFAULT_CONTENT.label} />
				)}
			</Show>

			<Show isShowing={hasSearchError}>
				<PokemonCard.Error error={DEFAULT_CONTENT.error} />
			</Show>

			<SearchForm {...formProps} />
		</Styles.Container>
	);
};
