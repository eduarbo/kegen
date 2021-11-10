module.exports = {
	env: {
        node: true,
		es2021: true,
		jest: true,
		'jest/globals': true,
	},
	extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
	plugins: ['jest', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'no-use-before-define': ['error', { functions: false }],
		'max-len': ['error', { code: 120 }],
		// Cannot reassign function parameters but allowing modification
		'no-param-reassign': ['error', { props: false }],
        // FIXME
		// 'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js'] }],
		'import/no-extraneous-dependencies': 0,
	},
};
