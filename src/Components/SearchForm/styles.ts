import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.mixins.centerWithFlex()}

	margin: 0 auto;
	flex-direction: column;
`;

export const SearchField = styled.input`
	${({ theme }) => theme.mixins.getColumnStyle(4)}

	padding: 8px 15px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 4px;
	margin-top: 15px;

	font-size: 16px;

	box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow.box};
	outline-color: ${({ theme }) => theme.colors.border};

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.tablet.maxWidth,
			css`
				padding: 15px;
			`
		)}

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.mobile.maxWidth,
			css`
				margin-bottom: 0;
			`
		)}
`;

export const SubmitButton = styled.button`
	${({ theme }) => theme.mixins.getColumnStyle(2)}

	padding: 8px;
	border: none;
	border-radius: 4px;
	margin-top: 15px;

	font-size: 18px;
	font-weight: bold;

	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary.main};
	box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow.box};

	cursor: pointer;
	transition: all ease 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.dark};
	}

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.tablet.maxWidth,
			css`
				padding: 16px 0;
			`
		)}

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.mobile.maxWidth,
			css`
				margin-bottom: 0;
			`
		)}
`;
