import { toJSON } from '../src/main';

import arrows from './mods/arrows';
import emacs from './mods/emacs';
import fn from './mods/fn';
import launcher from './mods/launcher';
import qwerty from './mods/qwerty';
import symbols from './mods/symbols';
import accents from './mods/accents';

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
