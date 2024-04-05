module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		'transform-inline-environment-variables',
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@mocks/*': './src/@mocks/*',
					'@types/*': './src/@types/*',
					'Components/*': './src/Components/*',
					'Core/*': './src/Core/*',
					'Assets/*': './src/Core/Assets/*',
					'Constants/*': './src/Core/Constants/*',
					'Helpers/*': './src/Core/Helpers/*',
					'Services/*': './src/Core/Services/*',
					'Hooks/*': './src/Hooks/*',
					'Contexts/*': './src/Contexts/*',
					'Pages/*': './src/Pages/*',
					'Tests/*': './src/Tests/*',
				},
			},
		],
	],
};
