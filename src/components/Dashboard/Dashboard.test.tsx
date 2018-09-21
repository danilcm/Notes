import * as React from 'react';

import * as enzyme from 'enzyme';

import Dashboard from './index';

it('should render all three elements passed', () => {
    const topPanel = <div className={'topPanel'}/>
    const rightPanel = <div className={'rightPanel'}/>
    const leftPanel = <div className={'leftPanel'}/>
    
    const dashboard = enzyme.shallow(<Dashboard topPanel={topPanel} leftPanel={leftPanel} rightPanel={rightPanel}/>)

    // contains top panel at the top
    expect(dashboard.find('.Dashboard-block').children().at(0).hasClass('topPanel')).toBe(true);

    // panels are nested inside the block
    expect(dashboard.find('.Dashboard-block').children().filter('.Dashboard-panels').length).toBe(1);

    // panels div contains left and right panels, left goes before
    expect(dashboard.find('.Dashboard-panels').children().at(0).hasClass('leftPanel')).toBe(true);
    expect(dashboard.find('.Dashboard-panels').children().at(1).hasClass('rightPanel')).toBe(true);
});
