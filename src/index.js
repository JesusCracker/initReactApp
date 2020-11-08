import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from "react-redux";
import rootReducers from "./reducers";
import logger from 'redux-logger';
import  {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'


const store=createStore(rootReducers,{},composeWithDevTools(applyMiddleware(logger,thunk,promise)));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
  ,document.getElementById('root')
);

