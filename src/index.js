import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
// import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import App from './containers/App';
// import * as serviceWorker from './serviceWorker';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('sample')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
