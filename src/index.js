import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feeling = (state = '', action) => {
    if (action.type === 'SET_FEELING'){
        return action.payload
    } else if (action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}

const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING'){
        return action.payload
    } else if (action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}

const support = (state = '', action) => {
    if (action.type === 'SET_SUPPORT'){
        return action.payload
    }  else if (action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS'){
        return action.payload
    }  else if (action.type === 'CLEAR_ALL'){
        return ''
    }
    return state;
}

const storeInstance =  createStore(
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
