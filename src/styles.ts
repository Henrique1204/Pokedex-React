import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');

	*,
	*::after,
	*::before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	body {
		min-height: 100vh;
		margin: 0;
	
		font-family: 'Lato';
	
		color: ${({ theme }) => theme.colors.gray.darkest};
		background-color: ${({ theme }) => theme.colors.gray.light};
	}

	a span {
		position: relative;
	}

	a span:after {
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

	a:hover span:after {
		opacity: 0.8;
		transform: translate3d(0, 0, 0);
	}

	main {
		padding: 60px 0;
		min-height: 600px;
	}
`;
