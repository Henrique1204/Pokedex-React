import styled, { css, keyframes } from 'styled-components';

import { TypesProps } from './types';

const rotate = keyframes`
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const CardContainer = styled.div`
	padding: 30px;
	border-radius: 8px;

	letter-spacing: 1.5px;

	background-color: ${({ theme }) => theme.colors.gray.lightest};
	box-shadow: 4px 4px 8px ${({ theme }) => theme.colors.shadow.box};
`;

export const Title = styled.h1`
	margin: 0;

	font-size: 24px;
	text-align: center;
	text-transform: capitalize;
`;

export const ImageContainer = styled.div`
	${({ theme }) => theme.mixins.centerWithFlex()}
	${({ theme }) => theme.mixins.circle(160)}

	padding: 10px;
	margin: 30px auto;

	box-shadow: 2px 2px 4px 2px ${({ theme }) => theme.colors.shadow.box};
	overflow: hidden;
`;

export const Image = styled.img`
	margin: 0;
	width: 100%;
	max-width: 100%;
	display: block;
`;

const paragraphStyle = css`
	margin: 0;
	font-size: 18px;
	text-align: center;
`;

export const PokedexNumber = styled.p`
	${paragraphStyle}

	max-width: 60px;
	padding: 5px 10px;
	border-radius: 10px;
	margin: 0 auto 15px;

	font-size: 16px;

	color: ${({ theme }) => theme.colors.gray.medium};
	background-color: rgba(0, 0, 0, 0.1);
`;

export const Label = styled.p`
	${paragraphStyle}
`;

export const Error = styled.p`
	${paragraphStyle}

	color: ${({ theme }) => theme.colors.status.error};
`;

export const PokemonTypes = styled.span`
	margin: 0 auto;

	font-size: 18px;
	font-weight: bold;
	text-align: center;
	text-transform: capitalize;

	color: #777;

	display: block;
`;

export const Type = styled.span<TypesProps>`
	margin: 0 5px;

	color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
`;

export const CardLoading = styled(ImageContainer)`
	animation: ${rotate} 1s infinite;
`;
