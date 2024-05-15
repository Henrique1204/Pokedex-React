import styled from 'styled-components';

import { Card } from 'Components/PokemonCard';

export const Container = styled(Card)`
	${({ theme }) => theme.mixins.getResponsiveColumnStyle(6)}
`;
