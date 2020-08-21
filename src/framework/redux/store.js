import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './root.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  logger
];

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);
