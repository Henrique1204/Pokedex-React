import { DefaultTheme } from 'styled-components';

import { mixins } from './mixins';
import { colors } from './colors';
import { breakpoints } from './breakpoints';
import { responsive } from './responsive';

const theme: DefaultTheme = {
	colors,
	mixins,
	breakpoints,
	responsive,
};

export default theme;
