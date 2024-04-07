import React from 'react';

import { SearchFormProps } from './types';

import * as Styles from './styles';

export const SearchForm: IComponent<SearchFormProps> = ({
	testId = 'search-form',
	onChange,
	onSubmit,
	...props
}) => {
	const [isSearchingData, setIsSearchingData] = React.useState(false);

	function handleOnChange({ target }: React.ChangeEvent<HTMLInputElement>) {
		onChange(target.value);
	}

	async function handleOnSubmit(e: any) {
		try {
			setIsSearchingData(true);

			await onSubmit(e);
		} catch (e) {
			console.error(e);
		} finally {
			setIsSearchingData(false);
		}
	}

	return (
		<Styles.Container data-testid={testId}>
			<Styles.SearchField
				data-testid={`${testId}-input`}
				type='text'
				placeholder='#025'
				onChange={handleOnChange}
				onKeyPress={handleOnSubmit}
				{...props}
			/>

			<Styles.SubmitButton
				data-testid={`${testId}-button`}
				type='button'
				onClick={handleOnSubmit}
				disabled={isSearchingData}
			>
				Buscar
			</Styles.SubmitButton>
		</Styles.Container>
	);
};
