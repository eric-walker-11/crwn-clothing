import { cartActions } from './cart';
import { userActions } from './user';

export const actions = {
  ...cartActions,
  ...userActions
};
export { default as store } from './store';
