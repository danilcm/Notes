import * as React from 'react'

import INote from '../../interfaces/INote';

import NoteListItem from '../NoteListItem';

import './NotesList.css';

class NotesList extends React.Component<{notes: INote[]}, {}> {
    public render() {
        return <div className={'NotesList-block'}>
            {this.props.notes.map(note => <NoteListItem note={note} key={note.id}/>)}
        </div>;
    }
}

export default NotesList;