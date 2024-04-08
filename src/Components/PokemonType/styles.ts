import styled from 'styled-components';

import { TypeProps } from './types';

export const Container = styled.span`
	font-weight: bold;
	text-align: center;
	text-transform: capitalize;

	color: #777;
`;

export const Type = styled.span<TypeProps>`
	color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
`;
