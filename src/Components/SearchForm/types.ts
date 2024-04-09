import { InputHTMLAttributes } from 'react';

export type SearchFormProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'onSubmit'
> & {
	onChange: (value: string) => void;
	onSubmit: () => Promise<void>;
};

export type FormProps = Pick<
	SearchFormProps,
	'onSubmit' | 'onChange' | 'value'
>;
