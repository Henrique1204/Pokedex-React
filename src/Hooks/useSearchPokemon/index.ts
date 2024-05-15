import React from 'react';

import { getPokemonByPokedexNumberOrName } from 'Core/Services/pokemon';

import { lastPokemonSearchedStorage } from 'Core/Helpers/localStorage/lastPokemonSearched';

import { PokemonMapped } from '../../@types/core/mappers/pokemon';
import { useSearchPokemonReturn } from '../../@types/hooks/index';

export const useSearchPokemon = (): useSearchPokemonReturn => {
	const [isSearchingPokemon, setIsSearchingPokemon] =
		React.useState<boolean>(true);

	const [hasErrorInSearchPokemon, setHasErrorInSearchPokemon] =
		React.useState<boolean>(false);

	const [pokemonSearchText, setPokemonSearchText] = React.useState<string>('');

	const [pokemonSearched, setPokemonSearched] = React.useState<
		PokemonMapped | undefined
	>();

	function sanitizeSearchText(searchText: string) {
		return searchText.replace('#', '').toLowerCase();
	}

	async function handleSearchPokemonSubmit() {
		try {
			setIsSearchingPokemon(true);
			setHasErrorInSearchPokemon(false);

			const pokemonSearchTextSantized = sanitizeSearchText(pokemonSearchText);

			const {
				success,
				data: PokemonSearched,
				message,
			} = await getPokemonByPokedexNumberOrName(pokemonSearchTextSantized);

			if (!success || !PokemonSearched) throw new Error(message);

			lastPokemonSearchedStorage.save(PokemonSearched);

			setPokemonSearched(PokemonSearched);
		} catch (_) {
			setPokemonSearched(undefined);
			setHasErrorInSearchPokemon(true);
		} finally {
			setIsSearchingPokemon(false);
		}
	}

	React.useEffect(() => {
		const lastPokemonSearched = lastPokemonSearchedStorage.get();

		if (lastPokemonSearched) setPokemonSearched(lastPokemonSearched);

		setIsSearchingPokemon(false);
	}, []);

	return {
		isSearchingPokemon,
		hasErrorInSearchPokemon,
		pokemonSearchText,
		pokemonSearched,
		handleChangePokemonSearchText: setPokemonSearchText,
		handleSearchPokemonSubmit,
	};
};
