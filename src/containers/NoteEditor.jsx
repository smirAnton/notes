import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNoteRequested } from '../actions';

import NoteEditor from '../components/NoteEditor.jsx';

@connect(undefined, { createNoteRequested })
export default class NoteEditorContainer extends Component {
    render() {
        return (
            <NoteEditor {...this.props} />
        );
    }
}
