import * as React from 'react';

import './Dashboard.css';

class Dashboard extends React.Component<{
    topPanel?: JSX.Element,
    leftPanel?: JSX.Element,
    rightPanel?: JSX.Element 
}, {}> {
    public render() {
        return <div className={'Dashboard-block'}>
            {this.props.topPanel}

            <div className={'Dashboard-panels'}>
                {this.props.leftPanel}
                {this.props.rightPanel}
            </div> 

        </div>
    }
}

export default Dashboard