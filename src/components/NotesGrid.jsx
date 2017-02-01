import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';

import Note from './Note.jsx';

import './NotesGrid.css';

const MASONRY_OPTIONS = {
    columnWidth: 250,
    gutter: 10,
    isFitWidth: true
};

export default class NotesGrid extends Component {
    static propTypes = {
        notes: PropTypes.array.isRequired,
        deleteNoteRequested: PropTypes.func.isRequired
    };

    render() {
        const { notes, deleteNoteRequested } = this.props;

        return (
            <Masonry
                className="grid"
                options={MASONRY_OPTIONS}
            >
                {
                    notes.map(note =>
                        <Note
                            objectId={note.objectId}
                            color={note.color}
                            key={note.objectId}
                            onDelete={deleteNoteRequested}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
}
