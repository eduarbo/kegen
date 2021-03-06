module.exports = {
	env: {
		commonjs: true,
		node: true,
		es2021: true,
		jest: true,
	},
	extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
	plugins: ['jest', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'no-use-before-define': ['error', { functions: false }],
		'no-param-reassign': ['error', { props: false }],
		'max-len': ['error', { code: 120 }],
		// Cannot reassign function parameters but allowing modification
		indent: ['error', 'tab', { offsetTernaryExpressions: true }],
		// allows mixed tabs and spaces when the spaces are used for alignment
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		// require trailing commas in multiline object literals
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
	},
};
