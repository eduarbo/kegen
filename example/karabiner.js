import { profile, toJSON } from '../src/main';

import arrows from './mods/arrows';
import emacs from './mods/emacs';
import fn from './mods/fn';
import launcher from './mods/launcher';
import oldQwerty from './mods/old-qwerty';
import qwerty from './mods/qwerty';
import oldSymbols from './mods/old-symbols';
import symbols from './mods/symbols';
import accents from './mods/accents';

const corneKeyboard = {
	is_keyboard: true,
	is_pointing_device: false,
	product_id: 12384,
	vendor_id: 65261,
};

const rev3 = [arrows, emacs, fn, oldSymbols, oldQwerty, launcher];

const rev4 = [arrows, emacs, fn, symbols, qwerty, launcher, accents];

const data = {
	profiles: [
		profile('Clean'),
		profile('eduarbo v3', rev3, {
			// selected: true,
		}),
		profile('eduarbo v3 (Mac kbd OFF if Corne ON)', rev3, {
			devices: [
				{
					identifiers: corneKeyboard,
					disable_built_in_keyboard_if_exists: true,
					ignore: false,
					manipulate_caps_lock_led: true,
				},
			],
		}),
		profile('eduarbo v4', rev4, {
			selected: true,
		}),
	],
	global: {
		check_for_updates_on_startup: true,
		show_in_menu_bar: true,
		show_profile_name_in_menu_bar: false,
	},
};

toJSON(data);
