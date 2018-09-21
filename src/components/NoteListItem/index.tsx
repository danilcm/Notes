import * as React from 'react'

import INote from '../../interfaces/INote';

import './NoteListItem.css';

class NoteListItem extends React.Component<{note: INote}, {}> {
    public render() {
        return <div className={'NoteListItem-block'}>
            <span className={'NoteListItem-title'}>{this.props.note.title}</span>
        </div>
    }
}

export default NoteListItem;