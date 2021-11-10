import * as kegen from '../../src/main';

const { emacsKeyBindingsException } = kegen.appIdentifiers;

const mandatoryMods = ['control'];
const optionalMods = ['caps_lock'];

const remap = (fromKey, toKey, opts) =>
	kegen.remap([fromKey, mandatoryMods, optionalMods], toKey, {
		conditions: [
			{
				type: 'frontmost_application_unless',
				bundle_identifiers: emacsKeyBindingsException,
			},
		],
		...opts,
	});

export default {
	title: 'Emacs and shell style key bindings',
	rules: [
		{
			description: 'Delete bindings',
			manipulators: [
				remap('u', [['left_arrow', ['control', 'left_shift']], ['delete_or_backspace'], ['vk_none']], {
					description: 'Ctrl + U to delete backward from point to the beginning of line.',
				}),
				remap('w', [['delete_or_backspace', ['option']]], {
					description: 'Ctrl + W to delete word behind point',
				}),
				remap('d', [['delete_forward']], {
					description: 'Ctrl + D to forward delete',
				}),
			],
		},
		{
			description: 'Ctrl + B/F to move between words',
			manipulators: [
				remap('b', [['left_arrow', ['option']]], {
					description: 'Ctrl + W to delete word behind point',
				}),
				remap('f', [['right_arrow', ['option']]], {
					description: 'Ctrl + W to delete word behind point',
				}),
			],
		},
	],
};
