import './App.scss';

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import IntlWrapper from './lang/IntlWrapper';
import logo from './logo.svg';

const App: React.FC = () => {
    return (
        <IntlWrapper>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <FormattedMessage
                            id="text"
                            values={{
                                what: 'react-intl',
                            }}
                        />
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        <FormattedMessage id="other-text" />
                    </a>
                </header>
            </div>
        </IntlWrapper>
    );
};

export default App;
