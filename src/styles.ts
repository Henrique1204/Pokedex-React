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

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}
`;
