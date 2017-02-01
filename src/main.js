import startApp from './app';

import { fetchNotes } from './api';

fetchNotes().then(notes => startApp(notes));
