import { css } from 'styled-components';

export const minWidth = (
	min: number,
	data: string | ReturnType<typeof css>
) => {
	return css`
		@media only screen and (min-width: ${min}px) {
			${data}
		}
	`;
};

export const maxWidth = (
	max: number,
	data: string | ReturnType<typeof css>
) => {
	return css`
		@media only screen and (max-width: ${max}px) {
			${data}
		}
	`;
};

export const customWidth = (
	min: number,
	max: number,
	data: string | ReturnType<typeof css>
) => {
	return css`
		@media only screen and (min-width: ${min}px and max-width: ${max}px) {
			${data}
		}
	`;
};

export const responsive = {
	minWidth,
	maxWidth,
	customWidth,
};
