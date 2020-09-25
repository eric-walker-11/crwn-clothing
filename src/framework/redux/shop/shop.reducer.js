import shopData from './shopData.const';

const INITIAL_STATE = {
  collections: shopData.reduce(
    (collections, collection) => ({
      ...collections,
      [collection.title.toLowerCase()]: collection
    }),
    {}
  )
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
