import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import reducer from './root.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  logger
];

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
