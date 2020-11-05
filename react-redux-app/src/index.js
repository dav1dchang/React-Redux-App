// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


// redux (helpers)
import { dogsReducer } from './store/reducers'

// components
import App from './App';

// stylesheets
// import './index.css';

const store = createStore(dogsReducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);