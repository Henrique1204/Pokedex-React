import React from 'react';

declare global {
	export type DefaultProps = {
		testId?: string;
		className?: string;
		children?: React.ReactNode;
	};

	export interface IComponent<T = {}> extends React.FC<DefaultProps & T> {}
}
