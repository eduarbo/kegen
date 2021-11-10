const { toJSON } = require('kegen');

const arrows = require('./mods/arrows');
const emacs = require('./mods/emacs');
const fn = require('./mods/fn');
const launcher = require('./mods/launcher');
const qwerty = require('./mods/qwerty');
const symbols = require('./mods/symbols');
const accents = require('./mods/accents');

const output = {
	arrows,
	emacs,
	fn,
	symbols,
	qwerty,
	launcher,
	accents,
};

toJSON(output);
