import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionByName = collectionName => createSelector(
  [selectShopCollections],
  collections =>
    collections.find(
      collection => collection.title.toLowerCase() === collectionName
    )
);
