import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './root.reducer';

const middleware = [logger];

export default createStore(reducer, applyMiddleware(...middleware));
