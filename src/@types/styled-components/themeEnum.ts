import { mixins } from 'Assets/theme/mixins';
import { colors } from 'Assets/theme/colors';
import { breakpoints } from 'Assets/theme/breakpoints';
import { responsive } from 'Assets/theme/responsive';

export type MixinsValues = typeof mixins;
export type MixinsValuesEnum = keyof MixinsValues;

export type ColorsValues = typeof colors;
export type ColorsEnum = keyof ColorsValues;

export type PokemonTypesColorValues = typeof colors.pokemonTypes;
export type PokemonTypesColorEnum = keyof PokemonTypesColorValues;

export type ResponsivesValues = typeof responsive;
export type ResponsivesEnum = keyof ResponsivesValues;

export type BreakpointsValues = typeof breakpoints;
export type BreakpointsEnum = keyof BreakpointsValues;
