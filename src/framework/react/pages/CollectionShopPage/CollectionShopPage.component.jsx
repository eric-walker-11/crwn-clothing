import React from 'react';
import { connect } from 'react-redux';

import { CollectionItem } from 'framework/react/components';
import { selectors } from 'framework/redux';

import './CollectionShopPage.styles.scss';

const { selectShopCollectionByTitle } = selectors;

const CollectionShopPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { collectionTitle }
    }
  }
) => ({
  collection: selectShopCollectionByTitle(collectionTitle)(state)
});

export default connect(mapStateToProps)(CollectionShopPage);
