import React from 'react';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';
import Pokedex from './Componentes/Pokedex';

export default () => {
	return (
		<BrowserRouter>
			<Header>
				<ul className='centralizar'>
					<li>
						<Link to='/'>
							<span>Home</span>
						</Link>
					</li>
					<li>
						<Link to='/pokedex'>
							<span>Pokedex</span>
						</Link>
					</li>
				</ul>
			</Header>

			<Routes path='/'>
				<Route index Component={Home}></Route>
				<Route path='/pokedex' Component={Pokedex}></Route>
			</Routes>

			<Footer />
		</BrowserRouter>
	);
};
