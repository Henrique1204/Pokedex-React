import React from 'react';

import { Show } from '../Show';

import * as Types from './types';
import * as Styles from './styles';

export const Title: IComponent<Types.TitleProps> = ({
	testId = 'card-title',
	as,
	title,
}) => {
	return (
		<Styles.Title data-testid={testId} as={as}>
			{title}
		</Styles.Title>
	);
};

export const Image: IComponent<Types.ImageProps> = ({
	testId = 'card-image',
	...props
}) => {
	return (
		<Styles.ImageContainer>
			<Styles.Image data-testid={testId} {...props} />
		</Styles.ImageContainer>
	);
};

export const PokedexNumber: IComponent<Types.PokedexNumberProps> = ({
	testId = 'card-pokedex-number',
	number,
}) => {
	return (
		<Styles.PokedexNumber data-testid={testId}>
			<span>{number}</span>
		</Styles.PokedexNumber>
	);
};

export const Label: IComponent<Types.LabelProps> = ({
	testId = 'card-label',
	label,
}) => {
	return <Styles.Label data-testid={testId}>{label}</Styles.Label>;
};

export const Error: IComponent<Types.ErrorProps> = ({
	testId = 'card-error',

	error,
}) => {
	return <Styles.Error data-testid={testId}>{error}</Styles.Error>;
};

export const PokemonTypes: IComponent<Types.PokemonTypesProps> = ({
	types,
	customKey,
}) => {
	return (
		<Styles.PokemonTypes>
			{types.map((type, indexType) => (
				<React.Fragment key={`${customKey}-${type}-${indexType}`}>
					<Show isShowing={indexType > 0}>|</Show>
					<Styles.Type type={type}>{type}</Styles.Type>
				</React.Fragment>
			))}
		</Styles.PokemonTypes>
	);
};

export const CardLoading: IComponent = () => {
	return (
		<Styles.CardLoading>
			<Styles.Image src='img/pokebola.png' alt='Pokebola girando' />
		</Styles.CardLoading>
	);
};

export const Card: IComponent<Types.CardProps> = Styles.CardContainer;
