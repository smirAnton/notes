import React, { Component, PropTypes } from 'react';

import './Note.css';

export default class Note extends Component {
    static propTypes = {
        objectId: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    };

    handleDelete = () => {
        const { objectId, onDelete } = this.props;

        onDelete(objectId);
    }

    render() {
        const { color, children } = this.props;

        return (
            <div className="note" style={{ backgroundColor: color }}>
                <span className="note__delete-icon" onClick={this.handleDelete}> × </span>
                { children }
            </div>
        );
    }
}
