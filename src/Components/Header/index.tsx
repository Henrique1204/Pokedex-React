import React from 'react';

import { Link } from 'react-router-dom';

import { ROUTES } from './constants';

import * as Styles from './styles';

export const Header: IComponent = () => {
	return (
		<Styles.Container>
			<Styles.Title>Pokédex React</Styles.Title>

			<nav>
				<Styles.NavigationList>
					{ROUTES.map(({ label, route }) => (
						<li>
							<Styles.NavigationLink as={Link} to={route}>
								{label}
							</Styles.NavigationLink>
						</li>
					))}
				</Styles.NavigationList>
			</nav>
		</Styles.Container>
	);
};
