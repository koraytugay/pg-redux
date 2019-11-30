import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; // The global state
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore( allReducer );

ReactDOM.render(
    // Provider wraps the React components with the shared store
    <Provider store={store}> 
        <App />
    </Provider>, 
    document.getElementById('root')
);
serviceWorker.unregister();