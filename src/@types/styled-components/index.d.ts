import 'styled-components';

import {
	ColorsValues,
	MixinsValues,
	BreakpointsValues,
	ResponsivesValues,
} from './themeEnum';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorsValues;
		mixins: MixinsValues;
		breakpoints: BreakpointsValues;
		responsive: ResponsivesValues;
	}
}
