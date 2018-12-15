import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import './index.css';
import App from './App';

const configureStore = (preloadedState) => {
  const middlewares = [ thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares)
  
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  
  return store
};

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

