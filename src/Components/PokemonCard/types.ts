import { ImgHTMLAttributes } from 'react';

export type TitleProps = {
	as?: any;
	title: string;
};

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {};

export type PokedexNumberProps = {
	number: string;
};

export type LabelProps = {
	label: string;
};

export type ErrorProps = {
	error: string;
};

export type PokemonTypesProps = {
	customKey: string | number;
	types: PokemonTypesColorEnum[];
};

export type TypesProps = {
	type: PokemonTypesColorEnum;
};

export type CardProps = {};
