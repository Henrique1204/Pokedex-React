import { PokemonMapped } from '../../@types/core/mappers/pokemon';

import { FormProps } from '../SearchForm/types';

export type SearchPokemonProps = FormProps & {
	hasSearchError?: boolean;
	isSearching?: boolean;
	pokemonSearched?: PokemonMapped;
};

export type ErrorProps = {
	hasError?: boolean;
};
