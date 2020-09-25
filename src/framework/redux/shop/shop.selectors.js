import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsList = createSelector(
  [selectShop],
  shop => shop.collectionsList
)

export const selectShopCollectionByTitle = title => createSelector(
  [selectShopCollections],
  collections => collections[title]
);
