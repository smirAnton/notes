import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteNoteRequested } from '../actions';

import NotesGrid from '../components/NotesGrid.jsx';

function mapStateToProps(state) {
    return {
        notes: state.get('notes').toJS()
    };
}

@connect(mapStateToProps, { deleteNoteRequested })
export default class NotesGridContainer extends Component {
    render() {
        return (
            <NotesGrid {...this.props} />
        );
    }
}
