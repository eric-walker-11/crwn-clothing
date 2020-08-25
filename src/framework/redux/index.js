import { cartActions, cartSelectors } from './cart';
import { userActions } from './user';

export const actions = {
  ...cartActions,
  ...userActions
};

export const selectors = {
  ...cartSelectors
};

export { default as store } from './store';
