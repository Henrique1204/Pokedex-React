import styled, { css } from 'styled-components';

export const Container = styled.footer`
	padding: 30px 0;

	letter-spacing: 1.4px;
	text-align: center;

	${({ theme: { colors } }) => css`
		background-image: ${`linear-gradient(to top, ${colors.gray.darkest}, ${colors.gray.dark})`};

		box-shadow: 0px -4px 8px ${colors.shadow.box};
	`}
`;

export const Title = styled.h1`
	margin: 0 0 15px;

	font-size: 24px;
	letter-spacing: 1.5px;

	color: ${({ theme }) => theme.colors.gray.lightest};

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.mobile.maxWidth,
			css`
				font-size: 18px;

				&::after {
					margin: 30px auto 15px;
				}
			`
		)}
`;

export const MembersListContainer = styled.ul`
	${({ theme }) => theme.mixins.getResponsiveContainerStyle()}
`;

export const MemberItem = styled.li`
	${({ theme }) => theme.mixins.getResponsiveColumnStyle(4)}

	margin-top: 15px;
	font-size: 18px;

	color: ${({ theme }) => theme.colors.gray.lightest};

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.tablet.maxWidth,
			css`
				margin-top: 30px;
			`
		)}

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.mobile.maxWidth,
			css`
				width: 50%;
				margin-top: 15px;
				margin-bottom: 15px;
			`
		)}
`;

export const MemberName = styled.span`
	display: inline;

	&::after {
		content: '|';
		margin-left: 10px;
		display: inline;

		${({ theme }) =>
			theme.responsive.maxWidth(
				theme.breakpoints.tablet.maxWidth,
				css`
					content: '';
					width: 80px;
					height: 2px;
					background-color: currentColor;
					margin: 15px auto 0;
					display: block;
				`
			)}
	}
`;

export const MemberGithubLink = styled.a`
	padding: 8px;

	font-size: 16px;
	text-decoration: none;

	color: ${({ theme }) => theme.colors.gray.lightest};

	display: inline-block;

	${({ theme }) =>
		theme.responsive.maxWidth(
			theme.breakpoints.tablet.maxWidth,
			css`
				padding: 15px 8px;
			`
		)}
`;
