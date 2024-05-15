import styled, { css } from 'styled-components';

export const Container = styled.main`
	${({ theme }) => css`
		${theme.mixins.centerWithFlex()}
		${theme.mixins.getResponsiveContainerStyle()}
	`}

	min-height: 600px;
	padding: 60px 0;
`;
