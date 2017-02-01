import React, { Component } from 'react';

import { NoteEditor, NotesGrid } from '../containers';

import './NotesApp.css';

export default class NotesApp extends Component {

    render() {
        return (
            <div className="app">
                <h2 className="app__header">NotesApp</h2>
                <NoteEditor />
                <NotesGrid />
            </div>
        );
    }
}
