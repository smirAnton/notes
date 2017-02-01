export const CREATE_NOTE_REQUESTED = 'CREATE_NOTE_REQUESTED';
export const CREATE_NOTE_SUCCEEDED = 'CREATE_NOTE_SUCCEEDED';
export const CREATE_NOTE_FAILED = 'CREATE_NOTE_FAILED';

export const DELETE_NOTE_REQUESTED = 'DELETE_NOTE_REQUESTED';
export const DELETE_NOTE_SUCCEEDED = 'DELETE_NOTE_SUCCEEDED';
export const DELETE_NOTE_FAILED = 'DELETE_NOTE_FAILED';

/* eslint-disable */
export const createNoteRequested = note => ({
    type: CREATE_NOTE_REQUESTED,
    payload: { note }
});

export const createNoteSucceeded = note => ({
    type: CREATE_NOTE_SUCCEEDED,
    payload: { note }
});

export const createNoteFailed = err => ({
    type: CREATE_NOTE_FAILED,
    payload: { err }
});

export const deleteNoteRequested = objectId => ({
    type: DELETE_NOTE_REQUESTED,
    payload: { objectId }
});

export const deleteNoteSucceeded = objectId => ({
    type: DELETE_NOTE_SUCCEEDED,
    payload: { objectId }
});

export const deleteNoteFailed = err => ({
    type: DELETE_NOTE_FAILED,
    payload: { err }
});
/* eslint-disable */
