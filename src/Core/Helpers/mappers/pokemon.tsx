import { PokemonResponse } from '../../../@types/core/services/pokemon';
import { PokemonMapped } from '../../../@types/core/mappers/pokemon';

export function mapperPokemon({
	id,
	name,
	sprites,
	types,
}: PokemonResponse): PokemonMapped {
	return {
		id,
		name,
		spriteSrc: sprites.front_default,
		types: types.map(({ type }) => type.name),
	};
}
