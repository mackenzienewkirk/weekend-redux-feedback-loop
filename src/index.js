import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feedbackList = (state = [], action) => {
    if(action.type === 'SET_FEEDBACK'){
        console.log('In feedbackList', action.payload);
        return action.payload;
    } else if (action.type === 'SUBMIT') {
        return [];
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackList
    }),
    applyMiddleware(logger)
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>, document.getElementById('root'));
    registerServiceWorker();
