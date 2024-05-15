import { PokemonResponse } from '../../../@types/core/services/pokemon';
import { PokemonMapped } from '../../../@types/core/mappers/pokemon';

export function mapperPokemon({
	id,
	name,
	sprite,
	pokedexNumber,
	types,
}: PokemonResponse): PokemonMapped {
	const CHAR_LENGTH = 3;

	return {
		id,
		name,
		pokedexNumber: `#${pokedexNumber.toString().padStart(CHAR_LENGTH, '0')}`,
		spriteSrc: sprite,
		types,
	};
}
