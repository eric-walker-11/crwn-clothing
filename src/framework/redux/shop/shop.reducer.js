import shopData from './shopData.const';

const INITIAL_STATE = {
  collections: shopData
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
