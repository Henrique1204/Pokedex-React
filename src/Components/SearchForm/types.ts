import { InputHTMLAttributes } from 'react';

export type SearchFormProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'onSubmit'
> & {
	onChange: (value: string) => void;
	onSubmit: (e: any) => Promise<void>;
};
