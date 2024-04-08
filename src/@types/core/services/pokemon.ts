export type ServiceReturn<T> = {
	success: boolean;
	message?: string;
	data?: T;
};

export type PokemonTypesResponse = {
	type: {
		name: PokemonTypesColorEnum;
	};
};

export type PokemonResponse = {
	id: number;
	name: string;
	sprites: {
		front_default: string;
	};
	types: PokemonTypesResponse[];
};
