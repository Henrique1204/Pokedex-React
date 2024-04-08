import styled, { css } from 'styled-components';

export const Container = styled.div`
	padding: 60px;
	letter-spacing: 1.5px;

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.tablet.maxWidth,
			css`
				padding: 30px;
			`
		)}

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.mobile.maxWidth,
			css`
				padding: 15px;
			`
		)}
`;

export const Title = styled.h1`
	margin: 0 auto 15px;

	text-align: center;

	color: black;

	text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.shadow.text};
`;

export const PokemonsList = styled.ul`
	${({ theme }) => theme.mixins.centerWithFlex()}

	flex-wrap: wrap;
`;

export const PokemonListItem = styled.li`
	margin: 15px 15px 0;
`;
