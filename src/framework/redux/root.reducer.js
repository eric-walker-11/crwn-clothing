import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cart';
import { directoryReducer } from './directory';
import { shopReducer } from './shop';
import { userReducer } from './user';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
