import { AnchorHTMLAttributes } from 'react';

export type LinkProps = {
	// O type `any` já é a mesma tipagem utilizada pelo styled-components para definição de uma tag para receber a estilização.
	as: any;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
