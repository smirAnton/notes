import Backendless from 'backendless';

import Note from '../models';

const BACKENDLESS_APP_VERSION = 'v1';
const BACKENDLESS_SECRET_KEY = '453B0CC8-12AC-F957-FF18-ADB6152BFA00';
const BACKENDLESS_APP_ID = 'A1E47DEA-1DD7-38C4-FF84-5D5759AC5700';

// init backendless app
Backendless.initApp(
    BACKENDLESS_APP_ID,
    BACKENDLESS_SECRET_KEY,
    BACKENDLESS_APP_VERSION
);

// enable promises
Backendless.enablePromises();

// define backendless models
const noteAPI = Backendless.Persistence.of(Note);

export const fetchNotes = () => {
    return new Promise((resolve, reject) => {
        noteAPI
            .find()
            .then(({ data }) => resolve(data))
            .catch(err => reject(err));
    });
};

export const createNote = note => {
    return new Promise((resolve, reject) => {
        noteAPI
            .save(note)
            .then(createdNote => resolve(createdNote))
            .catch(err => reject(err));
    });
};

export const deleteNote = note => {
    return new Promise((resolve, reject) => {
        noteAPI
            .remove(note)
            .then(deletedNote => resolve(deletedNote))
            .catch(err => reject(err));
    });
};
