import * as React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { I18nextProvider } from 'react-i18next';

import Loading from './pages/Loading'
import Notes from './pages/Notes'

import i18n from './i18n';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <I18nextProvider i18n={i18n} initialLanguage={'en'}>
        <Router>
          <div className="app">
            
              <Route path="/loading" component={Loading}/>
              
              <Route path="/notes/:id" component={Notes} />
            
          </div>
        </Router>
      </I18nextProvider>
    );
  }
}

export default App;
