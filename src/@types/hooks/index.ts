import { PokemonMapped } from '../core/mappers/pokemon';

export type useSearchPokemonReturn = {
	isSearchingPokemon: boolean;
	hasErrorInSearchPokemon: boolean;
	pokemonSearchText: string;
	pokemonSearched?: PokemonMapped;
	handleChangePokemonSearchText: (searchText: string) => void;
	handleSearchPokemonSubmit: () => Promise<void>;
};
