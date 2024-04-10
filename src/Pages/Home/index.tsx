import React from 'react';

import { useSearchPokemon } from 'Hooks/useSearchPokemon';

import { SearchPokemon } from 'Components/SearchPokemon';

import * as Styles from './styles';

export const Home: IComponent = () => {
	const {
		hasErrorInSearchPokemon,
		isSearchingPokemon,
		pokemonSearchText,
		pokemonSearched,
		handleChangePokemonSearchText,
		handleSearchPokemonSubmit,
	} = useSearchPokemon();

	return (
		<Styles.Container>
			<SearchPokemon
				pokemonSearched={pokemonSearched}
				hasSearchError={hasErrorInSearchPokemon}
				isSearching={isSearchingPokemon}
				value={pokemonSearchText}
				onChange={handleChangePokemonSearchText}
				onSubmit={handleSearchPokemonSubmit}
			/>
		</Styles.Container>
	);
};
