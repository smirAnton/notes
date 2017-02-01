import React, { Component, PropTypes } from 'react';
import uuid from 'node-uuid';

import './NoteEditor.css';

const DEFAULT_COLOR = 'yellow';
const INITIAL_STATE = '';

export default class NoteEditor extends Component {
    static propTypes = {
        createNoteRequested: PropTypes.func.isRequired
    };

    state = {
        text: INITIAL_STATE
    };

    handleTextChange = event => {
        this.setState({ text: event.target.value });
    };

    resetState = () => {
        this.setState({ text: INITIAL_STATE });
    };

    handleNoteAdd = () => {
        const newNote = {
            color: DEFAULT_COLOR,
            text: this.state.text
        };

        this.props.createNoteRequested(newNote);

        this.resetState();
    };

    render() {
        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your note here..."
                    className="editor__textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />

                <button
                    className="editor__button"
                    onClick={this.handleNoteAdd}
                >
                    Add
                </button>
            </div>
        );
    }
}
