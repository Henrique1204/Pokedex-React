import { PokemonResponse } from '../../../@types/core/services/pokemon';
import { PokemonMapped } from '../../../@types/core/mappers/pokemon';

export function mapperPokemon({
	id,
	name,
	sprites,
	types,
}: PokemonResponse): PokemonMapped {
	const CHAR_LENGTH = 3;

	return {
		id,
		name,
		pokedexNumber: `#${id.toString().padStart(CHAR_LENGTH, '0')}`,
		spriteSrc: sprites.front_default,
		types: types.map(({ type }) => type.name),
	};
}
