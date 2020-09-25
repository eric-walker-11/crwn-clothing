import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionByTitle = title => createSelector(
  [selectShopCollections],
  collections => collections[title]
);
