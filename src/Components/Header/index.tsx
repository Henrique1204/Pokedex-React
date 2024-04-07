import React from 'react';

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
							<Styles.NavigationLink to={route}>
								<span>{label}</span>
							</Styles.NavigationLink>
						</li>
					))}
				</Styles.NavigationList>
			</nav>
		</Styles.Container>
	);
};
