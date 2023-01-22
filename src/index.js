import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

    const feedbackList = (state = initialState, action) => {
        console.log('feeling');
        if(action.type === 'FEELING') {
            return {...state, feeling: action.payload};
        } else if(action.type === 'UNDERSTANDING') {
            return {...state, understanding: action.payload};
        } else if(action.type === 'SUPPORT') {
            return {...state, supported: action.payload};
        } else if(action.type === 'COMMENTS') {
            return {...state, comments: action.payload};
        } else if(action.type === 'REVIEW') {
            return initialState;
        } 
        return state
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
