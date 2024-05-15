import 'styled-components';

import {
	ColorsValues,
	MixinsValues,
	BreakpointsValues,
	ResponsivesValues,
} from '../core/theme';

declare global {
	export type CSSText = string | ReturnType<typeof css>;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorsValues;
		mixins: MixinsValues;
		breakpoints: BreakpointsValues;
		responsive: ResponsivesValues;
	}
}
