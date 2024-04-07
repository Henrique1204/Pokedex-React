import React from 'react';

import { LinkProps } from './types';

import * as Styles from './styles';

export const Link: IComponent<LinkProps> = ({
	testId = 'link',
	children,
	...props
}) => {
	return (
		<Styles.Container {...props}>
			<Styles.Content>{children}</Styles.Content>
		</Styles.Container>
	);
};
