import styled, { css, keyframes } from 'styled-components';

import { ErrorProps, LoadingProps } from './types';

const rotate = keyframes`
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div<{ $isHome?: boolean }>`
	padding: 30px;
	border-radius: 8px;

	letter-spacing: 1.5px;

	background-color: ${({ theme }) => theme.colors.gray.lightest};
	box-shadow: 4px 4px 8px ${({ theme }) => theme.colors.shadow.box};

	${({ theme, $isHome }) =>
		theme.mixins.applyConditionalStyle({
			condition: $isHome,
			style: theme.mixins.getResponsiveColumnStyle(6),
		})}
`;

export const Title = styled.h1`
	margin: 0;

	font-size: 24px;
	text-align: center;
	text-transform: capitalize;
`;

export const ImageContainer = styled.div<LoadingProps>`
	${({ theme }) => theme.mixins.centerWithFlex()}
	${({ theme }) => theme.mixins.circle(160)}

	padding: 20px;
	margin: 30px auto;

	box-shadow: 2px 2px 4px 2px ${({ theme }) => theme.colors.shadow.box};
	overflow: hidden;

	${({ theme, isLoading }) =>
		theme.mixins.applyConditionalStyle({
			condition: isLoading,
			style: css`
				animation: ${rotate} 1s infinite;
			`,
		})}
`;

export const Image = styled.img<LoadingProps>`
	margin: 0;
	max-width: 100%;
	display: block;

	${({ theme, isLoading }) =>
		theme.mixins.applyConditionalStyle({
			condition: isLoading,
			style: css`
				animation: ${rotate} 1s infinite;
			`,
		})}
`;

const paragraphStyle = css`
	margin: 0;
	font-size: 18px;
	text-align: center;
`;

export const PokemonNumber = styled.p`
	${paragraphStyle}

	max-width: 60px;
	padding: 5px 10px;
	border-radius: 10px;
	margin: 0 auto 15px;

	font-size: 16px;

	color: ${({ theme }) => theme.colors.gray.medium};
	background-color: rgba(0, 0, 0, 0.1);
`;

export const CardLabel = styled.p<ErrorProps>`
	${paragraphStyle}

	${({ theme, hasError }) =>
		theme.mixins.applyConditionalStyle({
			condition: hasError,
			style: css`
				color: ${({ theme }) => theme.colors.status.error};
			`,
		})}
`;
