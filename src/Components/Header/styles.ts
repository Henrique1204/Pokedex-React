import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
	padding: 30px 0px 15px;

	text-align: center;
	letter-spacing: 1.5px;

	${({ theme: { colors } }) => css`
		background-image: ${`linear-gradient(to top, ${colors.gray.darkest}, ${colors.gray.dark})`};

		box-shadow: 4px 4px 8px ${colors.shadow.box};
	`}

	li + li {
		margin-left: 15px;
	}
`;

export const Title = styled.h1`
	margin: 0;

	color: ${({ theme }) => theme.colors.gray.lightest};

	&:after {
		content: '';
		width: 100px;
		height: 1px;
		margin: 15px auto 0px;

		color: inherit;
		background-color: currentColor;

		display: block;
	}
`;

export const NavigationList = styled.ul`
	${({ theme }) => theme.mixins.centerWithFlex()}
`;

export const NavigationLink = styled(Link)`
	padding: 15px 8px;

	font-weight: bold;
	text-decoration: none;

	color: ${({ theme }) => theme.colors.gray.lightest};

	display: block;
`;
