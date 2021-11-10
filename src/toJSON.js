export default function toJSON(data) {
	const JSON_SPACE_INDENTATION = 2;
    // eslint-disable-next-line no-console
	console.log(JSON.stringify(data, null, JSON_SPACE_INDENTATION));
}
