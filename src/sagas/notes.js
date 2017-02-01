    import { takeLatest } from 'redux-saga';
    import { call, put } from 'redux-saga/effects';

import {
    CREATE_NOTE_REQUESTED,
    DELETE_NOTE_REQUESTED,
    createNoteSucceeded,
    deleteNoteSucceeded
} from '../actions';

import { createNote, deleteNote } from '../api';

export default [
    takeLatest(CREATE_NOTE_REQUESTED, function* (action) {
        const { payload } = action;

        try {
            const createdNote = yield call(createNote, payload.note);
            // yield put(createNoteSucceeded(createdNote));
            yield put(createNoteSucceeded(createdNote));
        } catch (ex) {
            console.log(ex);
        }
    }),

    takeLatest(DELETE_NOTE_REQUESTED, function* (action) {
        const { payload } = action;

        try {
            yield call(deleteNote, payload.objectId)

            yield put(deleteNoteSucceeded(payload.objectId));
        } catch (ex) {
            console.log(ex);
        }
    })
];
