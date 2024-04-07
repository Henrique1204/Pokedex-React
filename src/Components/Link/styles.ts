import styled from 'styled-components';

export const Container = styled.a`
	&:hover span:after {
		opacity: 0.8;
		transform: translate3d(0, 0, 0);
	}
`;

export const Content = styled.span`
	position: relative;

	&::after {
		content: '';
		width: 100%;
		height: 2px;
		margin-top: 2px;

		background-color: currentColor;

		display: block;
		position: absolute;

		opacity: 0;

		transform: translate3d(0, -15px, 0);
		transition: 0.4s all ease;
	}
`;
