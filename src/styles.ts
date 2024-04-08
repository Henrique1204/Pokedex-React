import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
