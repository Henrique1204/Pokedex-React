import React from 'react';

import { ShowProps } from './types';

export const Show: IComponent<ShowProps> = ({ isShowing, children }) => {
	if (isShowing) return <>{children}</>;

	return null;
};
