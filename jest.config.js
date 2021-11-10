module.exports = {
	testEnvironment: 'node',
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
};
