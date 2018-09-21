import * as React from 'react';

import * as enzyme from 'enzyme';

import Header from './index';

import i18n from '../../i18n-mock';

import { I18nextProvider } from 'react-i18next';

it('should listen to I18n', () => {

    const header = enzyme.mount(
        <I18nextProvider i18n={i18n}>
            <Header/>
        </I18nextProvider>
    )

    expect(header.find('.LanguageSelect-prompt').text()).toEqual('selectLanguagePrompt');

});
