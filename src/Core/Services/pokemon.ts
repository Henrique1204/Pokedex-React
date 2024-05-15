import { mapperPokemon } from 'Core/Helpers/mappers/pokemon';

import {
	PaginationResponse,
	PokemonResponse,
	PokemonWithPaginationParams,
	ServiceReturn,
	ServiceWithPaginationReturn,
} from '../../@types/core/services/pokemon';

import { PokemonMapped } from '../../@types/core/mappers/pokemon';

const DEFAULT_POKEMON_API_URL = 'http://localhost:3001/api';

export async function getPokemonByPokedexNumberOrName(
	pokedexNumberOrName: number | string
): Promise<ServiceReturn<PokemonMapped>> {
	try {
		const pokemonResponse = await fetch(
			`${DEFAULT_POKEMON_API_URL}/pokemon/${pokedexNumberOrName}`
		);

		const pokemon = (await pokemonResponse.json()) as PokemonResponse;

		if (!pokemon) throw new Error('Nenhum Pokémon encontrado');

		return {
			success: true,
			data: mapperPokemon(pokemon),
		};
	} catch (e) {
		const { message } = e as { message: string };

		return { success: false, message };
	}
}

export async function getPokemonWithPagination({
	limit,
	page,
}: PokemonWithPaginationParams): Promise<
	ServiceWithPaginationReturn<PokemonMapped[]>
> {
	try {
		const EMPTY_LENGTH = 0;

		const apiUrl = `${DEFAULT_POKEMON_API_URL}/pokedex?limit=${limit}&page=${page}`;

		const pokemonResponse = await fetch(apiUrl);

		const {
			totalPages: total,
			next: nextPage,
			prev: previousPage,
			result: pokemonsList,
		} = (await pokemonResponse.json()) as PaginationResponse<PokemonResponse>;

		if (Boolean(!pokemonsList) || pokemonsList.length === EMPTY_LENGTH) {
			throw new Error('Nenhum Pokémon encontrado');
		}

		return {
			success: true,
			data: pokemonsList.map(mapperPokemon),
			nextPage,
			previousPage,
			total,
		};
	} catch (e) {
		const { message } = e as { message: string };

		return { success: false, message };
	}
}
