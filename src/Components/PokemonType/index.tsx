import React from 'react';

import { Show } from '../Show';

import { PokemonTypeProps } from './types';

import * as Styles from './styles';

export const PokemonType: IComponent<PokemonTypeProps> = ({ types, key }) => {
	return (
		<Styles.Container>
			{types.map((type, indexType) => (
				<React.Fragment key={`${key}-${type}-${indexType}`}>
					<Show isShowing={indexType > 0}>|</Show>
					<Styles.Type type={type}>{type}</Styles.Type>
				</React.Fragment>
			))}
		</Styles.Container>
	);
};
