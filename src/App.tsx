import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import theme from 'Core/Assets/theme';

import { Header } from 'Components/Header';
import Home from 'Components/Home';
import { Footer } from 'Components/Footer';
import Pokedex from 'Components/Pokedex';

import { GlobalStyle } from './styles';

export const App: IComponent = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<BrowserRouter>
				<Header />

				<Routes>
					<Route path='/' index Component={Home}></Route>
					<Route path='/pokedex' Component={Pokedex}></Route>
				</Routes>

				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
};
