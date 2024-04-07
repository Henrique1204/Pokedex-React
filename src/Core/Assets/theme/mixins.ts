import { css } from 'styled-components';

import { breakpoints } from './breakpoints';

export const mixins = {
	centerWithFlex: () => css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	getResponsiveColumnStyle: (columnNumber: number) => {
		const isMobile = window.innerWidth <= breakpoints.mobile.maxWidth;

		if (isMobile) {
			return css`
				width: 100%;

				margin-bottom: 30px;
				margin-left: 0;
				margin-right: 0;
			`;
		}

		const columnWidths = {
			tablet: 40,
			desktop: 60,
		};

		const columnGap = 20;

		const isTablet = window.innerWidth <= breakpoints.tablet.maxWidth;

		const columnWidth =
			columnWidths[isTablet ? 'tablet' : 'desktop'] * columnNumber;

		return css`
			width: ${columnWidth + columnGap}px;
			margin-left: 10px;
			margin-right: 10px;
		`;
	},
	getResponsiveContainerStyle: () => {
		const defaultStyle = css`
			margin: 0 auto;

			display: flex;
			flex-wrap: wrap;
			align-items: center;
		`;

		const isMobile = window.innerWidth <= breakpoints.mobile.maxWidth;

		if (isMobile) {
			return css`
				width: auto;
				max-width: 360px;

				${defaultStyle}
			`;
		}

		const containetWidths = {
			tablet: 720,
			desktop: 960,
		};

		const isTablet = window.innerWidth <= breakpoints.tablet.maxWidth;

		return css`
			width: ${containetWidths[isTablet ? 'tablet' : 'desktop']}px;

			${defaultStyle}
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
