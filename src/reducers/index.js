import { combineReducers } from 'redux-immutable';

import configureNotesReducer from './notes';

export default notes => combineReducers({
    notes: configureNotesReducer(notes)
});
