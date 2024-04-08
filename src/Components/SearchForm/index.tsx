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

	async function handleOnSubmit() {
		try {
			setIsSearchingData(true);

			await onSubmit();
		} catch (e) {
			console.error(e);
		} finally {
			setIsSearchingData(false);
		}
	}

	function handleSubmitInKeyPress(
		event: React.KeyboardEvent<HTMLInputElement>
	) {
		if (event.key === 'Enter') handleOnSubmit();
	}

	return (
		<Styles.Container data-testid={testId}>
			<Styles.SearchField
				data-testid={`${testId}-input`}
				type='text'
				placeholder='#025'
				onChange={handleOnChange}
				onKeyPress={handleSubmitInKeyPress}
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
