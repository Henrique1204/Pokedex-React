export type CardProps = {
	title?: string;
	isHome?: boolean;
	imageSrc?: string;
	imageAlt?: string;
	pokemonNumber?: string;
	label?: string;
};

export type LoadingProps = {
	isLoading?: boolean;
};

export type ErrorProps = {
	hasError?: boolean;
};
