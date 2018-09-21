import * as React from 'react'

import './Header.css'

import SearchBar from '../SearchBar';

import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import Select from 'react-select';

import autobind from 'autobind-decorator';


const languages = [{
    label: 'English	🇬🇧', value: 'en', 
}, {
    label: 'Russian 🇷🇺', value: 'ru'
}]

class Header extends React.Component<InjectedI18nProps & InjectedTranslateProps, {lang: string}> {

    @autobind
    onSelectChange(selected: {value: string, label: string}) {
        this.props.i18n.changeLanguage(selected.value);
    }

    public render() {

        const {t, i18n} = this.props;

        return <div className="Header-block">
            <SearchBar />

            <div className="LanguageSelect-block">
                <span 
                    className="LanguageSelect-prompt">
                    {t('selectLanguagePrompt')}
                </span>
                <Select 
                    options={languages}
                    className="LanguageSelect-select"
                    onChange={this.onSelectChange}
                    value={languages.find(({value}) => value == i18n.language)}
                />
            </div>
        </div>;
    }
}

export const HeaderTest = Header;

export default translate('translations')(Header);