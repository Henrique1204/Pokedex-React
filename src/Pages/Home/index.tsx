import React from 'react';

import { PokemonMapped } from '../../@types/core/mappers/pokemon';

import { getPokemonByIdOrName } from 'Core/Services/pokemon';

import { SearchPokemon } from 'Components/SearchPokemon';

import * as Styles from './styles';

const LAST_POKEMON_SEARCHED_STORAGE_KEY = 'lastPokemonSearched';

export const Home: IComponent = () => {
	const [isSearchingPokemon, setIsSearchingPokemon] =
		React.useState<boolean>(true);

	const [hasErrorInSearchPokemon, setHasErrorInSearchPokemon] =
		React.useState<boolean>(false);

	const [pokemonSearchText, setPokemonSearchText] = React.useState<string>('');

	const [pokemonSearched, setPokemonSearched] = React.useState<
		PokemonMapped | undefined
	>();

	async function handleSearchPokemonSubmit() {
		try {
			setIsSearchingPokemon(true);
			setHasErrorInSearchPokemon(false);

			const { success, data, message } = await getPokemonByIdOrName(
				pokemonSearchText
			);

			if (!success || !data) throw new Error(message);

			localStorage.setItem(
				LAST_POKEMON_SEARCHED_STORAGE_KEY,
				JSON.stringify(data)
			);

			setPokemonSearched(data);
		} catch (_) {
			setPokemonSearched(undefined);
			setHasErrorInSearchPokemon(true);
		} finally {
			setIsSearchingPokemon(false);
		}
	}

	React.useEffect(() => {
		const lastPokemonSearchedString = localStorage.getItem(
			LAST_POKEMON_SEARCHED_STORAGE_KEY
		);

		if (lastPokemonSearchedString) {
			setPokemonSearched(JSON.parse(lastPokemonSearchedString));
		}

		setIsSearchingPokemon(false);
	}, []);

	return (
		<Styles.Container>
			<SearchPokemon
				pokemonSearched={pokemonSearched}
				hasSearchError={hasErrorInSearchPokemon}
				isSearching={isSearchingPokemon}
				value={pokemonSearchText}
				onChange={setPokemonSearchText}
				onSubmit={handleSearchPokemonSubmit}
			/>
		</Styles.Container>
	);
};
