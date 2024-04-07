import { css } from 'styled-components';

import { breakpoints } from './breakpoints';
import { responsive } from './responsive';

export const mixins = {
	centerWithFlex: () => css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	getResponsiveColumnStyle: (columnNumber: number) => {
		const columnWidths = {
			tablet: 40,
			desktop: 60,
		};

		const COLUMN_OFFSET = 1;
		const GAP_BETWEEN_COLUMNS = 20;
		const totalGapWidth = GAP_BETWEEN_COLUMNS * (columnNumber - COLUMN_OFFSET);

		return css`
			width: ${columnWidths.desktop * columnNumber + totalGapWidth}px;

			margin-left: 10px;
			margin-right: 10px;

			${responsive.maxWidth(
				breakpoints.tablet.maxWidth,
				css`
					width: ${columnWidths.tablet * columnNumber + totalGapWidth}px;
				`
			)}

			${responsive.maxWidth(
				breakpoints.mobile.maxWidth,
				css`
					width: 100%;

					margin-bottom: 30px;
					margin-left: 0;
					margin-right: 0;
				`
			)}
		`;
	},
	getResponsiveContainerStyle: () => {
		const defaultStyle = css`
			margin: 0 auto;

			display: flex;
			flex-wrap: wrap;
			align-items: center;
		`;

		const containetWidths = {
			tablet: 720,
			desktop: 960,
		};

		return css`
			width: ${containetWidths.desktop}px;

			${defaultStyle}

			${responsive.maxWidth(
				breakpoints.tablet.maxWidth,
				css`
					width: ${containetWidths.tablet}px;
				`
			)}

			${responsive.maxWidth(
				breakpoints.mobile.maxWidth,
				css`
					width: auto;
					max-width: 360px;
				`
			)}
		`;
	},
	circle: (size: number) => css`
		width: ${size}px;
		height: ${size}px;
		border-radius: 50%;
	`,
	applyConditionalStyle: ({
		condition,
		style,
	}: {
		condition?: boolean;
		style: CSSText;
	}): CSSText => {
		return condition ? style : '';
	},
};
