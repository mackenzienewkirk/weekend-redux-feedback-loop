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
    supported: '',
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

// const feedbackList = (state = [], action) => {
//     if(action.type === 'SET_FEEDBACK'){
//         console.log('In feedbackList', action.payload);
//         return action.payload;
//     } else if (action.type === 'SUBMIT') {
//         return [];
//     }
//     return state;
// }

const currentSurvey = (state = [], action) => {
    console.log('In currentSurvey');
    if(action.type === 'ADD_FEEDBACK'){
        console.log('currentSurvey state:', state)
        return [...state, action.payload];
    }
    if(action.type === 'REMOVE_FEEDBACK'){
        state = state.filter((item) => {return item.id != action.payload})
        return state;
    } else if (action.type === 'SUBMIT') {
        return [];
    }
    return state;
}


const reduxStore = createStore(
    combineReducers({

        feedbackList,
        currentSurvey,

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
