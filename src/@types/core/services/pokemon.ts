export type ServiceReturn<T> = {
	success: boolean;
	message?: string;
	data?: T;
};

export type ServiceWithPaginationReturn<T> = {
	success: boolean;
	message?: string;
	data?: T;
	nextPage?: number | null;
	previousPage?: number | null;
	total?: number;
};

export type PaginationResponse<T> = {
	totalPages: number;
	next: number | null;
	prev: number | null;
	result: T[];
};

export type PokemonTypesResponse = {
	type: {
		name: PokemonTypesColorEnum;
	};
};

export type PokemonResponse = {
	id: string | number;
	name: string;
	sprite: string;
	types: PokemonTypesColorEnum[];
	pokedexNumber: number;
};

export type PokemonWithPaginationResponse = {
	id: number;
	name: string;
	sprites: {
		front_default: string;
	};
	types: PokemonTypesResponse[];
};

export type PokemonWithPaginationParams = {
	limit?: number;
	page?: number;
};
