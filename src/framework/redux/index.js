import { cartActions, cartSelectors } from './cart';
import { userActions, userSelectors } from './user';

export const actions = {
  ...cartActions,
  ...userActions
};

export const selectors = {
  ...cartSelectors,
  ...userSelectors
};

export * from './store';
