const kegen = require('kegen');

const remap = (fromKey, toKey) => kegen.remap(fromKey, toKey);
const modTap = (fromKey, toKey, toKeyOnTap) => kegen.modTap(fromKey, toKey, toKeyOnTap);

module.exports = {
	title: 'Alternative Qwerty layer',
	rules: [
		{
			description: 'Thumb cluster',
			manipulators: [
				// SPACE -> CMD on hold, SPACE on tap
				modTap(['spacebar'], [['right_command']], [['return_or_enter']]),
				// Righ CMD -> Right SHIFT
				modTap(['right_command'], [['right_shift']], [['escape']]),
				// Left CMD -> Left SHIFT
				modTap(['left_command'], [['left_shift']], [['spacebar']]),

				// Right OPTION -> Right OPTION on hold, BACKTICK on tap
				modTap(['right_option'], [['right_option']], [['grave_accent_and_tilde']]),
				// Left OPTION -> Right CTRL on hold, QUOTE on tap
				modTap(['left_option'], [['right_control']], [['quote']]),
			],
		},
		{
			description: 'Custom Qwerty Tweaks',
			manipulators: [
				// Swap CMD+LSHIFT <-> CMD+` to swich between apps/windows with one hand
				remap(['left_shift', ['command']], [['grave_accent_and_tilde', ['left_command']]]),
				remap(['open_bracket', ['command']], [['delete_or_backspace', ['left_command']]]),
			],
		},
		{
			description: 'Custom Qwerty',
			manipulators: [
				// [ -> accent
				remap(['open_bracket'], [['e', ['left_option']]]),
				// modTap(['open_bracket'], [['e', ['left_option']]], [['e', ['left_option']]]),
				// ' -> ]
				remap(['quote'], [['close_bracket']]),
				// CAPS -> [
				remap(['caps_lock'], [['open_bracket']]),
				// LSHFIT -> DEL
				remap(['left_shift'], [['delete_or_backspace']]),
				// RSHIFT -> F13
				remap(['right_shift'], [['f13']]),
			],
		},
	],
};
