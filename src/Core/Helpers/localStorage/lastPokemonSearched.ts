import { PokemonMapped } from '../../../@types/core/mappers/pokemon';

const LAST_POKEMON_SEARCHED_STORAGE_KEY = 'lastPokemonSearched';

function saveLastPokemonSearched(lastPokemonSearched: PokemonMapped) {
	localStorage.setItem(
		LAST_POKEMON_SEARCHED_STORAGE_KEY,
		JSON.stringify(lastPokemonSearched)
	);
}

function getLastPokemonSearched(): PokemonMapped | null {
	const lastPokemonSearchedString = localStorage.getItem(
		LAST_POKEMON_SEARCHED_STORAGE_KEY
	);

	if (lastPokemonSearchedString) return JSON.parse(lastPokemonSearchedString);

	return null;
}

export const lastPokemonSearchedStorage = {
	save: saveLastPokemonSearched,
	get: getLastPokemonSearched,
};
