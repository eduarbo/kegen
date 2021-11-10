const { toJSON } = require('./main');

describe('toJSON()', () => {
	it('transforms the object into JSON and prints it to stdout', () => {
		// eslint-disable-next-line no-console
		console.log = jest.fn();
		toJSON({});
		// The first argument of the first call to the function was 'hello'
		// eslint-disable-next-line no-console
		expect(console.log.mock.calls[0][0]).toBe('{}');
	});
});
