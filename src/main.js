const appIdentifiers = require('./app-identifiers');

const from = (key, mandatory = [], optional = ['any']) => ({
	key_code: key,
	...((mandatory.length || optional.length) && {
		modifiers: {
			mandatory,
			optional,
		},
	}),
});

const to = (keys, options = {}) =>
	keys.map(([key, modifiers]) => ({
		key_code: key,
		...(modifiers && { modifiers }),
		...options,
	}));

const manipulator = options => ({
	type: 'basic',
	...options,
});

// `modTap` acts like a modifier when held, and a regular keycode when tapped. In
// other words, you can have a key that sends Escape when you tap it, but
// functions as a Control or Shift key when you hold it down.
const keyToString = (...args) =>
	args
		.map(([key, modifiers = []]) => [modifiers.length && `${modifiers.join('+')}+`, key].filter(Boolean).join(''))
		.join(' | ');

const remap = (fromKey, toKey, { conditions, simultaneous, ...toOptions } = {}) => ({
	description: `${keyToString(fromKey)} to ${keyToString(...toKey)}`,
	type: 'basic',
	...(simultaneous
		? {
				simultaneous: fromKey.map(keys => from(...keys)),
		  }
		: {
				from: from(...fromKey),
		  }),
	to: to(toKey, toOptions),
	conditions,
});

const modTap = (fromKey, toKey, toKeyOnTap) => ({
	...remap(fromKey, toKey),
	description: `${keyToString(fromKey)} to ${keyToString(...toKey)}, send ${keyToString(...toKeyOnTap)} on tap`,
	to_if_alone: to(toKeyOnTap),
});

const getRules = mods =>
	mods.reduce((rules, mod) => {
		// when rules are passed in the form: [qwerty, ['thumbCluster', 'customQwerty']]
		if (Array.isArray(mod)) {
			const [modification, modRules] = mod;
			return rules.concat(modification.rules.filter(rule => modRules.includes(rule.id)));
		}

		return rules.concat(mod.rules);
	}, []);

const profile = (name, mods = [], overrides = {}) => ({
	name,
	devices: [],
	virtual_hid_keyboard: {
		caps_lock_delay_milliseconds: 0,
		country_code: 0,
		keyboard_type: '',
	},
	...overrides,
	complex_modifications: {
		parameters: {
			'basic.simultaneous_threshold_milliseconds': 50,
			'basic.to_delayed_action_delay_milliseconds': 500,
			'basic.to_if_alone_timeout_milliseconds': 500,
			'basic.to_if_held_down_threshold_milliseconds': 500,
		},
		rules: getRules(mods),
		...overrides.complex_modifications,
	},
});

function toJSON(data) {
	const JSON_SPACE_INDENTATION = 2;
	// eslint-disable-next-line no-console
	console.log(JSON.stringify(data, null, JSON_SPACE_INDENTATION));
}

module.exports = {
	to,
	manipulator,
	appIdentifiers,
	keyToString,
	remap,
	modTap,
	getRules,
	profile,
	toJSON,
};
