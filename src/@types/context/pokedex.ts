import { PokemonMapped } from '../core/mappers/pokemon';

export type PokedexContextState = {
	pokedexIsCompleted: boolean;
	isSearchingPokemon: boolean;

	pokedexList: PokemonMapped[];
	getPokedexList: () => Promise<void>;
};
