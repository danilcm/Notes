import * as React from 'react';

import Dashboard from '../components/Dashboard';

import { RouteComponentProps } from 'react-router-dom';

import * as queryString from 'query-string';

interface INotesQueryString {
    q: string | undefined;
}

interface INotesRouterProps {
    id: string | undefined;
}

import EmptyState from '../components/EmptyState';
import Header from '../components/Header';
import NoteEditor from '../components/NoteEditor';
import NotesList from '../components/NotesList';

interface INotesProps extends RouteComponentProps<INotesRouterProps> {
    
}


class Notes extends React.Component<INotesProps, {query?: string}> {
    
    public componentDidMount() {
        const { search } = this.props.location;

        this.checkSearch(search);
    }

    public checkSearch(search: string) {
        const queryObject : INotesQueryString = queryString.parse(search);

        if (!!queryObject.q) {
            this.setState({query: queryObject.q});
        }
    }
    
    public render() {
        return <Dashboard 
            topPanel={<Header />}
            leftPanel={<NotesList notes={[{
                body: 'A little note for soule',
                created: new Date(),
                id: '1',
                title: 'Bitter',
            }]}/>}
            rightPanel={this.props.match.params.id ? <NoteEditor /> : <EmptyState />}
        />;
    }
}

export default Notes;