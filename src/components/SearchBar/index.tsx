import * as React from 'react'

import { InjectedI18nProps, InjectedTranslateProps, translate, } from 'react-i18next';

import './SearchBar.css'


class SearchBar extends React.Component<InjectedI18nProps & InjectedTranslateProps, {}> {
    public render() {
        return <div className="SearchBar-block">
            <input type="text" className="SearchBar-input" placeholder={this.props.t('searchPlaceholder')}/>
            {/* <Trans>searchPlaceholder</Trans> */}
        </div>
    }
}

export default translate('translations')(SearchBar);