import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Container from './Main/Container'
import { store, history } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Container />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById("root")
);