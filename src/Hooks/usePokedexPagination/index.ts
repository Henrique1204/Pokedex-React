import React from 'react';

import { PokemonWithPaginationParams } from '../../@types/core/services/pokemon';
import { PokemonMapped } from '../../@types/core/mappers/pokemon';

import debounce from 'Core/Helpers/debounce';
import { getPokemonWithPagination } from 'Core/Services/pokemon';

export function usePokedexPagination() {
	const [pokedexIsCompleted, setPokedexIsCompleted] =
		React.useState<boolean>(false);

	const [isSearchingPokemon, setIsSearchingPokemon] =
		React.useState<boolean>(false);

	const [nextPage, setNextPage] = React.useState<number>(1);
	const [pokedexList, setPokedexList] = React.useState<PokemonMapped[]>([]);

	async function getPokedexList() {
		try {
			if (pokedexIsCompleted || isSearchingPokemon) return;

			setIsSearchingPokemon(true);

			const pokemonPaginationPayload: PokemonWithPaginationParams = {
				page: nextPage,
				limit: 20,
			};

			const {
				success,
				data: pokedexListFromApi,
				nextPage: nextPageFromApi,
			} = await getPokemonWithPagination(pokemonPaginationPayload);

			if (!success || !pokedexListFromApi) return;

			setPokedexIsCompleted(nextPageFromApi === null);

			setPokedexList((prevPokedexList) => [
				...prevPokedexList,
				...pokedexListFromApi,
			]);
		} catch (e) {
			console.log(e);
		} finally {
			setIsSearchingPokemon(false);
		}
	}

	const handleScroll = () => {
		const SCROLL_THRESHOLD = 3 / 4;

		const { scrollTop, offsetHeight } = document.documentElement;
		const innerHeight = window.innerHeight;
		const scrollPosition = innerHeight + scrollTop;
		const scrollThreshold = SCROLL_THRESHOLD * offsetHeight;

		if (
			scrollPosition >= scrollThreshold &&
			!pokedexIsCompleted &&
			!isSearchingPokemon
		) {
			setNextPage((prevNextPage) => prevNextPage + 1);
		}
	};

	const [handleScrollWithDebounce, clearDebounce] = debounce(handleScroll, 300);

	React.useEffect(() => {
		const handleScrollEvent = () => {
			clearDebounce();
			handleScrollWithDebounce();
		};

		window.addEventListener('scroll', handleScrollEvent);

		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
		};
	}, []);

	React.useEffect(() => {
		getPokedexList();
	}, [nextPage]);

	return {
		isSearchingPokemon,
		pokedexIsCompleted,
		pokedexList,
	};
}
