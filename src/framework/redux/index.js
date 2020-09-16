import { cartActions, cartSelectors } from './cart';
import { directoryActions, directorySelectors } from './directory';
import { shopActions, shopSelectors } from './shop';
import { userActions, userSelectors } from './user';

export const actions = {
  ...cartActions,
  ...directoryActions,
  ...shopActions,
  ...userActions
};

export const selectors = {
  ...cartSelectors,
  ...directorySelectors,
  ...shopSelectors,
  ...userSelectors
};

export * from './store';
