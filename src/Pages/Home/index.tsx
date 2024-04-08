import React from 'react';

import { Card } from 'Components/Card';

import * as Styles from './styles';

export const Home: IComponent = () => {
	return (
		<Styles.Container>
			<Card isHome={true} />
		</Styles.Container>
	);
};
