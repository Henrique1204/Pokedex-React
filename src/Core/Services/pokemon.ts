import { mapperPokemon } from 'Core/Helpers/mappers/pokemon';

import {
	PokemonResponse,
	ServiceReturn,
} from '../../@types/core/services/pokemon';

import { PokemonMapped } from '../../@types/core/mappers/pokemon';

export async function getPokemonById(
	id: number
): Promise<ServiceReturn<PokemonMapped>> {
	try {
		const pokemonResponse = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${id}`
		);

		const pokemon = (await pokemonResponse.json()) as PokemonResponse;

		if (!pokemon) throw new Error('Pokémon não encontrado');

		return {
			success: true,
			data: mapperPokemon(pokemon),
		};
	} catch (e) {
		const { message } = e as { message: string };

		return { success: false, message };
	}
}
