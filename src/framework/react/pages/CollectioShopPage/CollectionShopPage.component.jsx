import React from 'react';
import { connect } from 'react-redux';

import { CollectionItem } from 'framework/react/components';
import { selectors } from 'framework/redux';

import './CollectionShopPage.styles.scss';

const { selectShopCollectionByName } = selectors;

const CollectionShopPage = ({ collection }) => (
  <div className="category">
    <h2>CATEGORY PAGE</h2>
  </div>
);

const mapStateToProps = (state, { match: { params: { collectionName }}}) => ({
  collection: selectShopCollectionByName(collectionName)(state)
});

export default connect(mapStateToProps)(CollectionShopPage);
