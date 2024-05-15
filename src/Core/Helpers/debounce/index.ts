const debounce = (callback: any, delay: number) => {
	let timer: number | null = null;

	const clearDebounce = () => {
		if (timer) {
			window.clearTimeout(timer);

			timer = null;
		}
	};

	const setDebounce = (...args: any) => {
		if (timer) timer = null;

		timer = window.setTimeout(() => {
			callback(...args);

			timer = null;
		}, delay) as unknown as number;
	};

	return [setDebounce, clearDebounce];
};

export default debounce;
