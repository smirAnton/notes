import { List } from 'immutable';

import {
    CREATE_NOTE_SUCCEEDED,
    DELETE_NOTE_SUCCEEDED
} from '../actions';

const INITIAL_STATE = notes => new List(notes);

export default function (notes) {
    return function route(state = INITIAL_STATE(notes), action) {
        const { type, payload } = action;

        switch (type) {
            case CREATE_NOTE_SUCCEEDED:
                return state.push(payload.note);

            case DELETE_NOTE_SUCCEEDED:
                return state.filter(note => note.objectId !== payload.objectId);

            default:
                return state;
        }
    };
}
