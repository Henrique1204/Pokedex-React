import React from 'react';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Header from 'Components/Header';
import Home from 'Components/Home';
import Footer from 'Components/Footer';
import Pokedex from 'Components/Pokedex';

export const App: IComponent = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
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

				<Routes>
					<Route path='/' index Component={Home}></Route>
					<Route path='/pokedex' Component={Pokedex}></Route>
				</Routes>

				<Footer />
			</React.Fragment>
		</BrowserRouter>
	);
};
